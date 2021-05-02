/**
 * @since 0.0.1
 */

import * as t from 'io-ts'
import { awsAccountIDRegex } from './AwsAccountID'
import { awsRegionRegex } from './AwsRegion'
import { SqsFifoQueueName } from './SqsFifoQueueName'

/**
 * @since 0.0.1
 */
const sqsFifoQueueArnRegex = (): string =>
    `arn:aws:sqs:${awsRegionRegex()}:${awsAccountIDRegex()}:${SqsFifoQueueName}`

/**
 * @since 0.0.1
 */
export interface SqsFifoQueueArnBrand {
    readonly SqsFifoQueueArn: unique symbol
}

/**
 * @since 0.0.1
 */
export const SqsFifoQueueArn = t.brand(
    t.string,
    (s): s is t.Branded<string, SqsFifoQueueArnBrand> =>
        RegExp('^' + sqsFifoQueueArnRegex() + '$').test(s),
    'SqsFifoQueueArn'
)

/**
 * @since 0.0.1
 */
export type SqsFifoQueueArn = t.TypeOf<typeof SqsFifoQueueArn>
