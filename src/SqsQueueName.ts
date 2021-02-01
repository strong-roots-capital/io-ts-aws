/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

/**
 * Naming rules:
 * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-queues.html
 */

/**
 * A queue name can have up to 80 characters. The following characters
 * are accepted: alphanumeric characters, hyphens (-), and underscores
 * (_).
 *
 * @since 0.0.1
 */
export const sqsQueueNameRegex = (): string => '[-a-zA-Z0-9_]{1,80}'

/**
 * @since 0.0.1
 */
export interface SqsQueueNameBrand {
    readonly SqsQueueName: unique symbol
}

/**
 * @since 0.0.1
 */
export const SqsQueueName = t.brand(
    t.string,
    (s): s is t.Branded<string, SqsQueueNameBrand> =>
        RegExp('^' + sqsQueueNameRegex() + '$').test(s),
    'SqsQueueName'
)

/**
 * @since 0.0.1
 */
export type SqsQueueName = t.TypeOf<typeof SqsQueueName>
