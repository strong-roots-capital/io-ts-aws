/**
 * @since 0.0.21
 */

import { SqsFifoQueueArn } from './SqsFifoQueueArn'
import { SqsFifoQueueName } from './SqsFifoQueueName'
import { SqsFifoQueueUrl } from './SqsFifoQueueUrl'
import { SqsQueueArn } from './SqsQueueArn'
import { SqsQueueName } from './SqsQueueName'
import { SqsQueueUrl } from './SqsQueueUrl'

// WISH: I'd rather have one function for each input type, but not
// sure how to expose all those imports w the top-level export

/**
 * @since 0.0.21
 */
export const sqsQueueName = (a: SqsQueueArn | SqsQueueUrl): SqsQueueName => {
  const substringAfterLast = (character: string) => (str: string) =>
    str.slice(str.lastIndexOf(character) + 1)

  if (SqsQueueArn.is(a)) {
    return substringAfterLast(':')(a) as SqsQueueName
  }
  return substringAfterLast('/')(a) as SqsQueueName
}

/**
 * @since 0.0.29
 */
export const sqsFifoQueueName = (
  a: SqsFifoQueueArn | SqsFifoQueueUrl,
): SqsFifoQueueName => {
  const substringAfterLast = (character: string) => (str: string) =>
    str.slice(str.lastIndexOf(character) + 1)

  if (SqsQueueArn.is(a)) {
    return substringAfterLast(':')(a) as SqsFifoQueueName
  }
  return substringAfterLast('/')(a) as SqsFifoQueueName
}
