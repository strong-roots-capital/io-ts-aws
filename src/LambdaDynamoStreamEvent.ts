/**
 * @since 0.0.1
 */

import * as t from 'io-ts'
import { flow } from 'fp-ts/function'
import { nonEmptyArray, IntFromString, NumberFromString } from 'io-ts-types'
import { AwsRegion } from './AwsRegion'
import { EventSourceArn } from './EventSourceArn'
import { DynamoStreamEventID } from './DynamoStreamEventID'

/**
 * https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html
 *
 * Note: currently only supports streams configured with `NewImage`.
 * PRs welcome!
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
    // Note to the maintainers: see desired format here, we are not
    // quite there yet https://stackoverflow.com/a/63840612
    t.type({
        eventID: DynamoStreamEventID,
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
        // TODO: this should be a DynamoArn
        eventSourceARN: EventSourceArn,
    })

type DynamoBaseEvent = ReturnType<ReturnType<typeof DynamoBaseEvent>>

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
    })
)

/**
 * https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html
 *
 * Note: currently only supports streams configured with `NewImage`.
 * PRs welcome!
 *
 * @since 0.0.3
 */
export const DynamoInsertEvent = DynamoBaseEvent(t.literal('INSERT'))

/**
 * https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html
 *
 * Note: currently only supports streams configured with `NewImage`.
 * PRs welcome!
 *
 * @since 0.0.3
 */
export const DynamoModifyEvent = DynamoBaseEvent(t.literal('MODIFY'))

/**
 * https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html
 *
 * Note: currently only supports streams configured with `NewImage`.
 * PRs welcome!
 *
 * @since 0.0.3
 */
export const DynamoRemoveEvent = DynamoBaseEvent(t.literal('REMOVE'))

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
    removeEvent =>
        t.intersection([
            removeEvent,
            t.type({
                userIdentity: t.type({
                    type: t.literal('Service'),
                    principalId: t.literal('dynamodb.amazonaws.com'),
                }),
            }),
        ])
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
    newImage: t.unknown,
})

/**
 * @since 0.0.3
 */
export const DynamoStreamEvents = <
    // FIXME: looking for a cleaner, more flexible way to type this
    A extends DynamoBaseEvent | DynamoTimeToLiveRemoveEvent,
    B extends DynamoBaseEvent | DynamoTimeToLiveRemoveEvent,
    C extends DynamoBaseEvent | DynamoTimeToLiveRemoveEvent
>(
    events: readonly [A, B, ...C[]]
    // FIXME: need to preserve static typing on return type
) =>
    t.type({
        Records: nonEmptyArray(t.union(events as [A, B, ...C[]])),
    })
