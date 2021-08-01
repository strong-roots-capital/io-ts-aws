/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

/**
 * @since 0.0.1
 */
export const awsAccountIDRegex = (): string => '[0-9]{12}'

/**
 * @since 0.0.1
 */
export interface AwsAccountIDBrand {
  readonly AwsAccountID: unique symbol
}

/**
 * @since 0.0.1
 */
export const AwsAccountID = t.brand(
  t.string,
  (s): s is t.Branded<string, AwsAccountIDBrand> =>
    RegExp('^' + awsAccountIDRegex() + '$').test(s),
  'AwsAccountID'
)

/**
 * @since 0.0.1
 */
export type AwsAccountID = t.TypeOf<typeof AwsAccountID>
