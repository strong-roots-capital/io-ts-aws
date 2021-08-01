/**
 * @since 0.0.1
 */

import { unmarshall } from '@aws-sdk/util-dynamodb'
import * as E from 'fp-ts/Either'
import { flow, pipe } from 'fp-ts/function'
import * as t from 'io-ts'
import { nonEmptyArray, withValidate } from 'io-ts-types'
import { Lens } from 'monocle-ts'

import { AwsRegion } from './AwsRegion'
import { DynamoStreamEventID } from './DynamoStreamEventID'
import { EventSourceArn } from './EventSourceArn'

/**
 * https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html
 *
 * Note: currently only supports streams configured with `NewImage`.
 * PRs welcome!
 *
 * @internal
 *
 * @since 0.0.1
 */
const DynamoBaseEvent = <E extends t.Mixed>(eventName: E) => <
  K extends t.Mixed
>({
  keys,
}: {
  keys: K
}) => {
  const RawEventCodec = t.type({
    dynamodb: t.type({
      Keys: t.UnknownRecord,
    }),
  })

  // Note to maintainers: see desired format here, we are not quite
  // there yet https://stackoverflow.com/a/63840612
  const UnmarshalledEventCodec = t.type({
    eventID: DynamoStreamEventID,
    eventName: eventName,
    eventSource: t.literal('aws:dynamodb'),
    // FIXME: sometimes this property is a string (INSERT)
    // sometimes number (REMOVE)?  This documentation indicates it
    // should be a string
    // https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_Record.html
    // eventVersion: NumberFromString,
    awsRegion: AwsRegion,
    dynamodb: t.type({
      // Now I see DateFromISOString ? Why do these properties keep changing?
      // ApproximateCreationDateTime: DateFromUnixTime,
      Keys: keys,
      // FIXME: sometimes this property is a string (INSERT)
      // sometimes number (REMOVE)?  This documentation
      // indicates it should be a string:
      // https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_StreamRecord.html
      // SequenceNumber: t.string,
      SizeBytes: t.number,
      StreamViewType: t.keyof({
        KEYS_ONLY: null,
        NEW_IMAGE: null,
        OLD_IMAGE: null,
        NEW_AND_OLD_IMAGES: null,
      }),
    }),
    // TODO: narrow to a DynamoArn
    eventSourceARN: EventSourceArn,
  })

  const keysLens = Lens.fromPath<t.TypeOf<typeof RawEventCodec>>()([
    'dynamodb',
    'Keys',
  ])

  return withValidate(UnmarshalledEventCodec, (u, c) =>
    pipe(
      RawEventCodec.validate(u, c),
      E.chain((rawEvent) =>
        UnmarshalledEventCodec.validate(
          keysLens.modify(() =>
            // FIXME: avoid type assertion
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            unmarshall(rawEvent.dynamodb.Keys as any),
          )(rawEvent),
          c,
        ),
      ),
    ),
  )
}

/**
 * https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html
 *
 * Note: currently only supports streams configured with `NewImage`.
 * PRs welcome!
 *
 * @since 0.0.3
 */
export const AnyDynamoEvent = DynamoBaseEvent(
  t.keyof({
    INSERT: null,
    MODIFY: null,
    REMOVE: null,
  }),
)

/**
 * https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html
 *
 * Note: currently only supports streams configured with `NewImage`.
 * PRs welcome!
 *
 * @since 0.0.3
 */
export const DynamoInsertEvent = <I extends t.Mixed>({
  newImage,
}: {
  newImage: I
}) => {
  const RawEventCodec = t.type({
    dynamodb: t.type({
      NewImage: t.UnknownRecord,
    }),
  })
  // Note to the maintainers: see desired format here, we are not
  // quite there yet https://stackoverflow.com/a/63840612
  const UnmarshalledEventCodec = t.type({
    eventID: DynamoStreamEventID,
    eventName: t.literal('INSERT'),
    eventSource: t.literal('aws:dynamodb'),
    // FIXME: sometimes this property is a string (INSERT)
    // sometimes number (REMOVE)?  This documentation indicates it
    // should be a string
    // https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_Record.html
    // eventVersion: NumberFromString,
    awsRegion: AwsRegion,
    dynamodb: t.type({
      // Now I see DateFromISOString ? Why do these properties keep changing?
      // ApproximateCreationDateTime: DateFromUnixTime,
      // NOTE: NewImage includes Keys
      Keys: t.UnknownRecord,
      NewImage: newImage,
      // FIXME: sometimes this property is a string (INSERT)
      // sometimes number (REMOVE)?  This documentation
      // indicates it should be a string:
      // https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_StreamRecord.html
      // SequenceNumber: t.string,
      SizeBytes: t.number,
      StreamViewType: t.keyof({
        KEYS_ONLY: null,
        NEW_IMAGE: null,
        OLD_IMAGE: null,
        NEW_AND_OLD_IMAGES: null,
      }),
    }),
    // TODO: narrow to a DynamoArn
    eventSourceARN: EventSourceArn,
  })

  const newImageLens = Lens.fromPath<t.TypeOf<typeof RawEventCodec>>()([
    'dynamodb',
    'NewImage',
  ])

  return withValidate(UnmarshalledEventCodec, (u, c) =>
    pipe(
      RawEventCodec.validate(u, c),
      E.chain((rawEvent) =>
        UnmarshalledEventCodec.validate(
          newImageLens.modify(() =>
            // FIXME: avoid type assertion
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            unmarshall(rawEvent.dynamodb.NewImage as any),
          )(rawEvent),
          c,
        ),
      ),
    ),
  )
}

type DynamoInsertEvent = ReturnType<typeof DynamoInsertEvent>

/**
 * https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html
 *
 * Note: currently only supports streams configured with `NewImage`.
 * PRs welcome!
 *
 * @since X.X.X
 */
// export const DynamoModifyEvent = DynamoBaseEvent(t.literal('MODIFY'))

/**
 * https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html
 *
 * Note: currently only supports streams configured with `NewImage`.
 * PRs welcome!
 *
 * @since 0.0.3
 */
export const DynamoRemoveEvent = DynamoBaseEvent(t.literal('REMOVE'))

type DynamoRemoveEvent = ReturnType<typeof DynamoRemoveEvent>

/**
 * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/time-to-live-ttl-streams.html
 *
 * Note: currently only supports streams configured with `NewImage`.
 * PRs welcome!
 *
 * @since 0.0.3
 */
export const DynamoTimeToLiveRemoveEvent = flow(
  DynamoBaseEvent(t.literal('REMOVE')),
  (removeEventCodec) =>
    t.intersection([
      removeEventCodec,
      t.type({
        userIdentity: t.type({
          type: t.literal('Service'),
          principalId: t.literal('dynamodb.amazonaws.com'),
        }),
      }),
    ]),
)

type DynamoTimeToLiveRemoveEvent = ReturnType<
  typeof DynamoTimeToLiveRemoveEvent
>

/**
 * Successfully decodes any dynamo event.
 *
 * Note: currently only supports streams configured with `NewImage`.
 * PRs welcome!
 *
 * @since 0.0.3
 */
export const DynamoUnknownEvent = AnyDynamoEvent({
  keys: t.unknown,
})

/**
 * @since 0.0.3
 */
export type DynamoUnknownEvent = t.TypeOf<typeof DynamoUnknownEvent>

type StreamEvent =
  | DynamoInsertEvent
  | DynamoRemoveEvent
  | DynamoTimeToLiveRemoveEvent
  | typeof DynamoUnknownEvent

/**
 * @since 0.0.3
 */
export const DynamoStreamEvents = <
  // FIXME: looking for a cleaner, more flexible way to type this
  A extends StreamEvent,
  B extends StreamEvent,
  C extends StreamEvent[]
>(
  events: readonly [A, B, ...C],
  // FIXME: need to preserve static typing on return type
) =>
  t.type({
    Records: nonEmptyArray(t.union(events as [A, B, ...C])),
  })
