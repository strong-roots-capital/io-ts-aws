/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

/**
 * @since 0.0.1
 */
export const snsTopicNameRegex = (): string => '[-_A-Za-z0-9]{1,256}'

/**
 * @since 0.0.1
 */
export interface SnsTopicNameBrand {
  readonly SnsTopicName: unique symbol
}

/**
 * @since 0.0.1
 */
export const SnsTopicName = t.brand(
  t.string,
  (s): s is t.Branded<string, SnsTopicNameBrand> =>
    RegExp('^' + snsTopicNameRegex() + '$').test(s),
  'SnsTopicName',
)

/**
 * @since 0.0.1
 */
export type SnsTopicName = t.TypeOf<typeof SnsTopicName>
