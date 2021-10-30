/**
 * @since 0.0.36
 */

import * as t from 'io-ts'

import { snsTopicArnRegex } from './SnsTopicArn'

/**
 * @since 0.0.36
 */
const snsSubscriptionArnRegex = (): string => `${snsTopicArnRegex()}:[-0-9a-fA-F]+`

/**
 * @since 0.0.36
 */
export interface SnsSubscriptionArnBrand {
  readonly SnsSubscriptionArn: unique symbol
}

/**
 * @since 0.0.36
 */
export const SnsSubscriptionArn = t.brand(
  t.string,
  (s): s is t.Branded<string, SnsSubscriptionArnBrand> =>
    RegExp('^' + snsSubscriptionArnRegex() + '$').test(s),
  'SnsSubscriptionArn',
)

/**
 * @since 0.0.36
 */
export type SnsSubscriptionArn = t.TypeOf<typeof SnsSubscriptionArn>
