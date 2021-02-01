/**
 * @since 0.0.1
 */

import * as t from 'io-ts'
import { snsTopicNameRegex } from './SnsTopicName'

/**
 * @since 0.0.1
 */
const snsTopicArnRegex = (): string =>
    `arn:aws:sns:[a-z]+-[a-z]+-[0-9]:[0-9]{12}:${snsTopicNameRegex()}`

/**
 * @since 0.0.1
 */
export interface SnsTopicArnBrand {
    readonly SnsTopicArn: unique symbol
}

/**
 * @since 0.0.1
 */
export const SnsTopicArn = t.brand(
    t.string,
    (s): s is t.Branded<string, SnsTopicArnBrand> =>
        RegExp('^' + snsTopicArnRegex() + '$').test(s),
    'SnsTopicArn'
)

/**
 * @since 0.0.1
 */
export type SnsTopicArn = t.TypeOf<typeof SnsTopicArn>
