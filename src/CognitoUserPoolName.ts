/**
 * @since 0.0.35
 */

import * as t from 'io-ts'

/**
 * Naming rules:
 * https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-name.html
 */

/**
 * @since 0.0.35
 */
export const cognitoUserPoolNameRegex = (): string => '[-+=,.@a-zA-Z0-9]{1,128}'

/**
 * @since 0.0.35
 */
export interface CognitoUserPoolNameBrand {
  readonly CognitoUserPoolName: unique symbol
}

/**
 * Naming rules:
 *
 * 1. Pool names must be between 1 and 128 characters long.
 * 2. Pool Names can consist only of lowercase letters, uppercase
 *    letters, numbers, and the following characters: -+=,.@
 *
 * @example
 * import { CognitoUserPoolName } from '@strong-roots-capital/io-ts-aws'
 * import { right } from 'fp-ts/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(
 *     CognitoUserPoolName.decode('valid-Pool.name@123'),
 *     right('valid-Pool.name@123')
 * )
 *
 * assert.deepStrictEqual(
 *     PathReporter.report(CognitoUserPoolName.decode('invalid::poolName')),
 *     ['Invalid value "invalid::poolName" supplied to : CognitoUserPoolName']
 * )
 *
 * @since 0.0.35
 */
export const CognitoUserPoolName = t.brand(
  t.string,
  (s): s is t.Branded<string, CognitoUserPoolNameBrand> =>
    RegExp('^' + cognitoUserPoolNameRegex() + '$').test(s),
  'CognitoUserPoolName',
)

/**
 * @since 0.0.35
 */
export type CognitoUserPoolName = t.TypeOf<typeof CognitoUserPoolName>
