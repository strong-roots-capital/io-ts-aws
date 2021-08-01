import test from 'ava'

/**
 * Unit under test
 */
import { SqsQueueName } from '../../src/SqsQueueName'

test('should not allow names longer than 80 characters', (t) => {
  t.false(
    SqsQueueName.is(
      Array.from({ length: 81 })
        .map(() => '.')
        .join(''),
    ),
  )
})
