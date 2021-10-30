/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

import { AwsAccountID, awsAccountIDRegex } from './AwsAccountID'
import { AwsRegion, awsRegionRegex } from './AwsRegion'
import { snsTopicNameRegex, SnsTopicName } from './SnsTopicName'

/**
 * @since 0.0.1
 */
export const snsTopicArnRegex = (): string =>
  `arn:aws:sns:${awsRegionRegex()}:${awsAccountIDRegex()}:${snsTopicNameRegex()}`

/**
 * @since 0.0.1
 */
export interface SnsTopicArnBrand {
  readonly SnsTopicArn: unique symbol
}

/**
 * @since 0.0.1
 */
export const SnsTopicArn = t.brand(
  t.string,
  (s): s is t.Branded<string, SnsTopicArnBrand> =>
    RegExp('^' + snsTopicArnRegex() + '$').test(s),
  'SnsTopicArn',
)

/**
 * @since 0.0.1
 */
export type SnsTopicArn = t.TypeOf<typeof SnsTopicArn>

/**
 * @since 0.0.2
 */
export const snsTopicArn = (parameters: {
  account: AwsAccountID
  region: AwsRegion
}) => (topicName: SnsTopicName): SnsTopicArn =>
  ['arn', 'aws', 'sns', parameters.region, parameters.account, topicName].join(
    ':',
  ) as SnsTopicArn
