/**
 * @since 0.0.1
 */

import * as t from 'io-ts'
import {
    nonEmptyArray,
    NumberFromString,
    DateFromNumber,
    IntFromString,
} from 'io-ts-types'
import { SqsQueueArn } from './SqsQueueArn'
import { AwsRegion } from './AwsRegion'

const DateFromNumberFromString = NumberFromString.pipe(DateFromNumber)

/**
 * https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html
 * @since 0.0.1
 */
export const LambdaSqsEvent = <C extends t.Mixed>(codec: C) =>
    t.type({
        Records: nonEmptyArray(
            t.type({
                messageId: t.string,
                receiptHandle: t.string,
                body: codec,
                attributes: t.type({
                    ApproximateReceiveCount: IntFromString,
                    SentTimestamp: DateFromNumberFromString,
                    SenderId: t.string,
                    ApproximateFirstReceiveTimestamp: DateFromNumberFromString,
                }),
                messageAttributes: t.UnknownRecord,
                md5OfBody: t.string,
                eventSource: t.literal('aws:sqs'),
                eventSourceARN: SqsQueueArn,
                awsRegion: AwsRegion,
            })
        ),
    })
