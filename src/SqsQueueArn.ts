/**
 * @since 0.0.1
 */

import * as t from 'io-ts'
import { awsAccountIDRegex } from './AwsAccountID'
import { awsRegionRegex } from './AwsRegion'
import { SqsQueueName } from './SqsQueueName'

/**
 * @since 0.0.1
 */
const sqsQueueArnRegex = (): string =>
    `arn:aws:sqs:${awsRegionRegex()}:${awsAccountIDRegex()}:${SqsQueueName}`

/**
 * @since 0.0.1
 */
export interface SqsQueueArnBrand {
    readonly SqsQueueArn: unique symbol
}

/**
 * @since 0.0.1
 */
export const SqsQueueArn = t.brand(
    t.string,
    (s): s is t.Branded<string, SqsQueueArnBrand> =>
        RegExp('^' + sqsQueueArnRegex() + '$').test(s),
    'SqsQueueArn'
)

/**
 * @since 0.0.1
 */
export type SqsQueueArn = t.TypeOf<typeof SqsQueueArn>
