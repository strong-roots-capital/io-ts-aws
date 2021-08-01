/**
 * @since 0.0.1
 */

// TODO:
// create SqsStandardQueueUrl, and
// type SqsQueueUrl = SqsStandardQueueUrl | SqsFifoQueueUrl

import * as t from 'io-ts'

import { awsAccountIDRegex, AwsAccountID } from './AwsAccountID'
import { awsRegionRegex, AwsRegion } from './AwsRegion'
import { sqsQueueNameRegex, SqsQueueName } from './SqsQueueName'

const sqsQueueUrlRegex = (): string =>
  `https://sqs.${awsRegionRegex()}.amazonaws.com/${awsAccountIDRegex()}/${sqsQueueNameRegex()}`

/**
 * @since 0.0.1
 */
export interface SqsQueueUrlBrand {
  readonly SqsQueueUrl: unique symbol
}

/**
 * @since 0.0.1
 */
export const SqsQueueUrl = t.brand(
  t.string,
  (s): s is t.Branded<string, SqsQueueUrlBrand> =>
    RegExp('^' + sqsQueueUrlRegex() + '$').test(s),
  'SqsQueueUrl'
)

/**
 * @since 0.0.1
 */
export type SqsQueueUrl = t.TypeOf<typeof SqsQueueUrl>

/**
 * @since 0.0.1
 */
export const sqsQueueUrl = (parameters: {
  account: AwsAccountID
  region: AwsRegion
}) => (queueName: SqsQueueName): SqsQueueUrl =>
  `https://sqs.${parameters.region}.amazonaws.com/${parameters.account}/${queueName}` as SqsQueueUrl
