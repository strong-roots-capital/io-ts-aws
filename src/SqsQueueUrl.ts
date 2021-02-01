/**
 * @since 0.0.1
 */

import * as t from 'io-ts'
import { awsRegionRegex, AwsRegion } from './AwsRegion'
import { awsAccountIDRegex, AwsAccountID } from './AwsAccountID'
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
export const sqsQueueUrl = (account: AwsAccountID) => (region: AwsRegion) => (
    queueName: SqsQueueName
): SqsQueueUrl =>
    `https://sqs.${region}.amazonaws.com/${account}/${queueName}` as SqsQueueUrl
