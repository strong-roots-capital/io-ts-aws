/**
 * @since 0.0.3
 */

import * as t from 'io-ts'

/**
 * @since 0.0.3
 */
const eventSourceArnRegex = (): string =>
    'arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\\-]+):([a-z]{2}(-gov)?-[a-z]+-\\d{1})?:(\\d{12})?:(.*)'

/**
 * @since 0.0.3
 */
export interface EventSourceArnBrand {
    readonly EventSourceArn: unique symbol
}

/**
 * @since 0.0.3
 */
export const EventSourceArn = t.brand(
    t.string,
    (s): s is t.Branded<string, EventSourceArnBrand> =>
        RegExp('^' + eventSourceArnRegex() + '$').test(s),
    'EventSourceArn'
)

/**
 * @since 0.0.3
 */
export type EventSourceArn = t.TypeOf<typeof EventSourceArn>
