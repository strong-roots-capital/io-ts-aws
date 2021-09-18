/**
 * @since 0.0.32
 */

import * as t from 'io-ts'

import { awsRegionRegex } from './AwsRegion'
import { cognitoUserPoolNameRegex } from './CognitoUserPoolName'

/**
 * @since 0.0.32
 */
export interface CognitoUserPoolIDBrand {
  readonly CognitoUserPoolID: unique symbol
}

/**
 * NOTE: I'm assuming I've named whatever this `$region_$poolName`
 * entity is reasonably, but I would love to find some more
 * authoritative documentation on the matter. Consider this an
 * unofficial name.
 */

/**
 * @example
 * import { CognitoUserPoolID } from '@strong-roots-capital/io-ts-aws'
 * import { right } from 'fp-ts/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(
 *     CognitoUserPoolID.decode('eu-west-1_valid-Pool.name@123'),
 *     right('eu-west-1_valid-Pool.name@123')
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
    RegExp(
      '^' + awsRegionRegex() + '_' + cognitoUserPoolNameRegex() + '$',
    ).test(s),
  'CognitoUserPoolID',
)

/**
 * @since 0.0.32
 */
export type CognitoUserPoolID = t.TypeOf<typeof CognitoUserPoolID>
