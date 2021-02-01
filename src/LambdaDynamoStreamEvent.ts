/**
 * @since 0.0.1
 */

import * as t from 'io-ts'
import { nonEmptyArray, IntFromString, NumberFromString } from 'io-ts-types'
import { AwsRegion } from './AwsRegion'

// TODO: update to work with aws-sdk-js-v3

/**
 * https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html
 *
 * Note: currently only supports streams configured with `NewImage`
 * PRs welcome
 *
 * @since 0.0.1
 */
const DynamoBaseEvent = <E extends t.Mixed>(eventName: E) => <
    K extends t.Mixed,
    I extends t.Mixed
>({
    keys,
    newImage,
}: {
    keys: K
    newImage: I
}) =>
    t.type({
        eventID: IntFromString,
        eventName: eventName,
        eventSource: t.literal('aws:dynamodb'),
        eventVersion: NumberFromString,
        awsRegion: AwsRegion,
        dynamodb: t.type({
            Keys: keys,
            NewImage: newImage,
            SequenceNumber: IntFromString,
            SizeBytes: t.number,
            StreamViewType: t.keyof({
                KEYS_ONLY: null,
                NEW_IMAGE: null,
                OLD_IMAGE: null,
                NEW_AND_OLD_IMAGES: null,
            }),
        }),
        eventSourceARN: t.string,
    })

const AnyDynamoEvent = DynamoBaseEvent(
    t.keyof({
        INSERT: null,
        MODIFY: null,
        REMOVE: null,
    })
)
const InsertEvent = DynamoBaseEvent(t.literal('INSERT'))
const ModifyEvent = DynamoBaseEvent(t.literal('MODIFY'))
const RemoveEvent = DynamoBaseEvent(t.literal('REMOVE'))

/**
 * https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html
 *
 * Note: currently only supports streams configured with `NewImage`
 * PRs welcome
 *
 * @since 0.0.1
 */
export const DynamoEvent = <K extends t.Mixed, I extends t.Mixed>({
    keys,
    newImage,
}: {
    keys: K
    newImage: I
}) =>
    t.type({
        Records: nonEmptyArray(AnyDynamoEvent({ keys, newImage })),
    })

/**
 * https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html
 *
 * Note: currently only supports streams configured with `NewImage`
 * PRs welcome
 *
 * @since 0.0.1
 */
export const DynamoInsertEvent = <K extends t.Mixed, I extends t.Mixed>({
    keys,
    newImage,
}: {
    keys: K
    newImage: I
}) =>
    t.type({
        Records: nonEmptyArray(InsertEvent({ keys, newImage })),
    })

/**
 * https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html
 *
 * Note: currently only supports streams configured with `NewImage`
 * PRs welcome
 *
 * @since 0.0.1
 */
export const DynamoModifyEvent = <K extends t.Mixed, I extends t.Mixed>({
    keys,
    newImage,
}: {
    keys: K
    newImage: I
}) =>
    t.type({
        Records: nonEmptyArray(ModifyEvent({ keys, newImage })),
    })

/**
 * https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html
 *
 * Note: currently only supports streams configured with `NewImage`
 * PRs welcome
 *
 * @since 0.0.1
 */
export const DynamoRemoveEvent = <K extends t.Mixed, I extends t.Mixed>({
    keys,
    newImage,
}: {
    keys: K
    newImage: I
}) =>
    t.type({
        Records: nonEmptyArray(RemoveEvent({ keys, newImage })),
    })
