/**
 * @since 0.0.32
 */

import * as t from 'io-ts'

/**
 * Naming rules:
 * https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-name.html
 */

/**
 * @since 0.0.32
 */
export const cognitoUserPoolIDRegex = (): string => '[-+=,.@a-zA-Z0-9]{1,128}'

/**
 * @since 0.0.32
 */
export interface CognitoUserPoolIDBrand {
  readonly CognitoUserPoolID: unique symbol
}

/**
 * Naming rules:
 *
 * 1. Pool names must be between 1 and 128 characters long.
 * 2. Pool Names can consist only of lowercase letters, uppercase
 *    letters, numbers, and the following characters: -+=,.@
 *
 * @example
 * import { CognitoUserPoolID } from '@strong-roots-capital/io-ts-aws'
 * import { right } from 'fp-ts/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(
 *     CognitoUserPoolID.decode('valid-Pool.name@123'),
 *     right('valid-Pool.name@123')
 * )
 *
 * assert.deepStrictEqual(
 *     PathReporter.report(CognitoUserPoolID.decode('invalid::poolName')),
 *     ['Invalid value "invalid::poolName" supplied to : CognitoUserPoolID']
 * )
 *
 * @since 0.0.32
 */
export const CognitoUserPoolID = t.brand(
  t.string,
  (s): s is t.Branded<string, CognitoUserPoolIDBrand> =>
    RegExp('^' + cognitoUserPoolIDRegex() + '$').test(s),
  'CognitoUserPoolID',
)

/**
 * @since 0.0.32
 */
export type CognitoUserPoolID = t.TypeOf<typeof CognitoUserPoolID>
