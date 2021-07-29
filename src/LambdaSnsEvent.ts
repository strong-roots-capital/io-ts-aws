/**
 * @since 0.0.1
 */

import * as t from 'io-ts'
import { nonEmptyArray, DateFromISOString, IntFromString } from 'io-ts-types'

import { SnsTopicArn } from './SnsTopicArn'

// const SnsMessageAttributes = t.record(
//     t.string,
//     t.type({ Type: t.string, Value: t.string })
// )

/**
 * https://docs.aws.amazon.com/lambda/latest/dg/with-sns.html
 * @since 0.0.1
 */
export const LambdaSnsEvent = <C extends t.Mixed>(codec: C) =>
    t.type({
        Records: nonEmptyArray(
            t.type({
                EventVersion: t.string,
                EventSubscriptionArn: t.string,
                EventSource: t.literal('aws:sns'),
                Sns: t.type({
                    SignatureVersion: IntFromString,
                    Signature: t.string,
                    SigningCertUrl: t.string,
                    Type: t.string,
                    TopicArn: SnsTopicArn,
                    Subject: t.union([t.string, t.null]),
                    Timestamp: DateFromISOString,
                    MessageId: t.string,
                    Message: codec,
                    // TODO: determine if this is always sent or is nullable/absent
                    // MessageAttributes: SnsMessageAttributes,
                    UnsubscribeUrl: t.string,
                }),
            })
        ),
    })
