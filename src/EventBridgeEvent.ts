/**
 * @since 0.0.8
 */

import * as t from 'io-ts'
import { DateFromISOString, IntFromString, UUID } from 'io-ts-types'

import { AwsAccountID } from './AwsAccountID'
import { AwsRegion } from './AwsRegion'

// FIXME: surely there are use-cases where more or fewer properties
// need to be defined. Find a pattern that allows us to arbitrarily
// narrow the type of our defined EventBridgeEvent
type EventBridgeEventType = t.TypeC<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    detail: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    'detail-type': any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    source: any
}>

/**
 * @since 0.0.8
 */
export const EventBridgeEvent = <C extends EventBridgeEventType>(codec: C) =>
    t.intersection([
        t.type({
            version: IntFromString,
            id: UUID,
            time: DateFromISOString,
            account: AwsAccountID,
            region: AwsRegion,
            // 'detail-type': t.string,
            // detail: t.UnknownRecord,
            // source: t.string,
            resources: t.array(t.string),
        }),
        codec,
    ])
