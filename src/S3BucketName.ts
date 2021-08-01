/**
 * @since 0.0.22
 */

import * as t from 'io-ts'

/**
 * Naming rules:
 * https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html
 */

/**
 * Naming rules:
 *
 * 1. Bucket names must be between 3 and 63 characters long.
 * 2. Bucket names can consist only of lowercase letters, numbers,
 *    dots (.), and hyphens (-).
 * 3. Bucket names must begin and end with a letter or number.
 *
 * Note: AWS recommends you avoid using dots (.) in bucket names.
 *
 * @example
 * import { S3BucketName } from '@strong-roots-capital/io-ts-aws'
 * import { right } from 'fp-ts/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(
 *     S3BucketName.decode('kebab-case-bucket-name'),
 *     right('kebab-case-bucket-name')
 * )
 *
 * assert.deepStrictEqual(
 *     PathReporter.report(S3BucketName.decode('camelCaseBucketName')),
 *     ['Invalid value "camelCaseBucketName" supplied to : S3BucketName']
 * )
 *
 * @since 0.0.22
 */
export const s3BucketNameRegex = (): string => '[-a-z0-9.]{3,63}'

/**
 * @since 0.0.22
 */
export interface S3BucketNameBrand {
  readonly S3BucketName: unique symbol
}

/**
 * @since 0.0.22
 */
export const S3BucketName = t.brand(
  t.string,
  (s): s is t.Branded<string, S3BucketNameBrand> =>
    RegExp('^' + s3BucketNameRegex() + '$').test(s),
  'S3BucketName'
)

/**
 * @since 0.0.22
 */
export type S3BucketName = t.TypeOf<typeof S3BucketName>
