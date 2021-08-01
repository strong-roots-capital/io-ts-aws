/**
 * @since 0.0.21
 */

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
