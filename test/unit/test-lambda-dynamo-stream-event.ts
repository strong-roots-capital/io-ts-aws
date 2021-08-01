import { unmarshall } from '@aws-sdk/util-dynamodb'
import test from 'ava'
import * as E from 'fp-ts/Either'
import { pipe, flow } from 'fp-ts/function'
import * as iots from 'io-ts'
import * as PathReporter from 'io-ts/lib/PathReporter'

import { DynamoInsertEvent } from '../../src/LambdaDynamoStreamEvent'

/**
 * A sanitized example from cloudwatch logs
 */
const event = {
  eventID: '3ec4c29236b2972516c8bcdd3d3326bc',
  eventName: 'INSERT',
  eventVersion: '1.1',
  eventSource: 'aws:dynamodb',
  awsRegion: 'eu-west-1',
  dynamodb: {
    ApproximateCreationDateTime: 1627484953,
    Keys: {
      PartitionKey: {
        S: 'user@email-service.com',
      },
      ID: {
        S: 'fe4434ae-4410-4b13-88db-d0a01fd6dc4b',
      },
    },
    NewImage: {
      number: {
        N: '1',
      },
      object: {
        M: {
          a: {
            S: 'week',
          },
          b: {
            N: '1',
          },
        },
      },
      string: {
        S: 'horse',
      },
      PartitionKey: {
        S: 'user@email-service.com',
      },
      ID: {
        S: 'fe4434ae-4410-4b13-88db-d0a01fd6dc4b',
      },
      boolean: {
        BOOL: true,
      },
    },
    SequenceNumber: '384913900000000008777703941',
    SizeBytes: 435,
    StreamViewType: 'NEW_IMAGE',
  },
  eventSourceARN:
    'arn:aws:dynamodb:eu-west-1:377043764769:table/stratos-metadata/stream/2021-05-08T19:18:24.296',
}

const codec = iots.type({
  number: iots.literal(1),
  object: iots.type({
    a: iots.string,
    b: iots.number,
  }),
  string: iots.literal('horse'),
  PartitionKey: iots.string,
  ID: iots.string,
  boolean: iots.boolean,
})

test('should decode a real-world event', (t) => {
  pipe(
    DynamoInsertEvent({ newImage: codec }).decode(event),
    E.bimap(
      flow(
        (errors) => PathReporter.failure(errors).join('\n'),
        (errors) => t.fail(errors),
      ),
      (decoded) => {
        /* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment */
        t.deepEqual(decoded, {
          ...event,
          dynamodb: {
            ...event.dynamodb,
            NewImage: unmarshall(event.dynamodb.NewImage) as any,
          } as any,
        } as any)
        /* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment */
      },
    ),
  )
})
