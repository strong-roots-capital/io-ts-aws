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
 * The name of a FIFO queue must end with the .fifo suffix. The suffix
 * counts towards the 80-character queue name quota.
 *
 * @since 0.0.1
 */
export const sqsFifoQueueNameRegex = (): string =>
  '[-a-zA-Z0-9_]{1,75}(?:.fifo)'

/**
 * @since 0.0.1
 */
export interface SqsFifoQueueNameBrand {
  readonly SqsFifoQueueName: unique symbol
}

/**
 * @since 0.0.1
 */
export const SqsFifoQueueName = t.brand(
  t.string,
  (s): s is t.Branded<string, SqsFifoQueueNameBrand> =>
    RegExp('^' + sqsFifoQueueNameRegex() + '$').test(s),
  'SqsFifoQueueName'
)

/**
 * @since 0.0.1
 */
export type SqsFifoQueueName = t.TypeOf<typeof SqsFifoQueueName>
