/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

/**
 * @since 0.0.1
 */
export const awsRegionRegex = (): string => '[a-z]{2}-[-a-z]+-[0-9]'

/**
 * @since 0.0.1
 */
export interface AwsRegionBrand {
    readonly AwsRegion: unique symbol
}

/**
 * @since 0.0.1
 */
export const AwsRegion = t.brand(
    t.string,
    (s): s is t.Branded<string, AwsRegionBrand> =>
        RegExp('^' + awsRegionRegex() + '$').test(s),
    'AwsRegion'
)

/**
 * @since 0.0.1
 */
export type AwsRegion = t.TypeOf<typeof AwsRegion>
