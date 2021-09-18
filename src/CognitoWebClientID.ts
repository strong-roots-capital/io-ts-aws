/**
 * @since 0.0.34
 */

import * as t from 'io-ts'

/**
 * Naming rules:
 * 26-char alphanumeric string
 *
 * NOTE: looking for an authoritative source on this
 */

/**
 * @since 0.0.34
 */
export const cognitoWebClientIDRegex = (): string => '[a-z0-9]{26}'

/**
 * @since 0.0.34
 */
export interface CognitoWebClientIDBrand {
  readonly CognitoWebClientID: unique symbol
}

/**
 * Naming rules:
 *
 * 1. Web Client ID names are 26-char alphanumeric strings
 *
 * @example
 * import { CognitoWebClientID } from '@strong-roots-capital/io-ts-aws'
 * import { right } from 'fp-ts/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(
 *     CognitoWebClientID.decode('abcdefghijklmnopqrstuvwxyz'),
 *     right('abcdefghijklmnopqrstuvwxyz')
 * )
 *
 * assert.deepStrictEqual(
 *     PathReporter.report(CognitoWebClientID.decode('invalid::poolName')),
 *     ['Invalid value "invalid::poolName" supplied to : CognitoWebClientID']
 * )
 *
 * @since 0.0.34
 */
export const CognitoWebClientID = t.brand(
  t.string,
  (s): s is t.Branded<string, CognitoWebClientIDBrand> =>
    RegExp('^' + cognitoWebClientIDRegex() + '$').test(s),
  'CognitoWebClientID',
)

/**
 * @since 0.0.34
 */
export type CognitoWebClientID = t.TypeOf<typeof CognitoWebClientID>
