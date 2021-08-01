/**
 * @since 0.0.23
 */

import * as t from 'io-ts'

import { awsRegionRegex } from './AwsRegion'

/**
 * @since 0.0.23
 */
const awsEndpointRegex = (): string =>
  `https?://[-a-z0-9.]+\.${awsRegionRegex()}\.amazonaws\.com/?`

/**
 * @since 0.0.23
 */
export interface AwsEndpointBrand {
  readonly AwsEndpoint: unique symbol
}

/**
 * @since 0.0.23
 */
export const AwsEndpoint = t.brand(
  t.string,
  (s): s is t.Branded<string, AwsEndpointBrand> =>
    RegExp('^' + awsEndpointRegex() + '$').test(s),
  'AwsEndpoint'
)

/**
 * @since 0.0.23
 */
export type AwsEndpoint = t.TypeOf<typeof AwsEndpoint>
