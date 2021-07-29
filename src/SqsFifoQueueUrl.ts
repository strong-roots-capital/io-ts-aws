/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

import { awsAccountIDRegex, AwsAccountID } from './AwsAccountID'
import { awsRegionRegex, AwsRegion } from './AwsRegion'
import { sqsFifoQueueNameRegex, SqsFifoQueueName } from './SqsFifoQueueName'

const sqsFifoQueueUrlRegex = (): string =>
    `https://sqs.${awsRegionRegex()}.amazonaws.com/${awsAccountIDRegex()}/${sqsFifoQueueNameRegex()}`

/**
 * @since 0.0.1
 */
export interface SqsFifoQueueUrlBrand {
    readonly SqsFifoQueueUrl: unique symbol
}

/**
 * @since 0.0.1
 */
export const SqsFifoQueueUrl = t.brand(
    t.string,
    (s): s is t.Branded<string, SqsFifoQueueUrlBrand> =>
        RegExp('^' + sqsFifoQueueUrlRegex() + '$').test(s),
    'SqsFifoQueueUrl'
)

/**
 * @since 0.0.1
 */
export type SqsFifoQueueUrl = t.TypeOf<typeof SqsFifoQueueUrl>

/**
 * @since 0.0.1
 */
export const sqsFifoQueueUrl = (parameters: {
    account: AwsAccountID
    region: AwsRegion
}) => (queueName: SqsFifoQueueName): SqsFifoQueueUrl =>
    `https://sqs.${parameters.region}.amazonaws.com/${parameters.account}/${queueName}` as SqsFifoQueueUrl
