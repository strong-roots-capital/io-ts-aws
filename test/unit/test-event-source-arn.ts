import test from 'ava'

/**
 * Unit under test
 */
import { EventSourceArn } from '../../src/EventSourceArn'

test('should match ARN obtained from log data', t => {
    t.true(
        EventSourceArn.is(
            'arn:aws:dynamodb:eu-west-1:012345678901:table/redacted-table-name/stream/2021-05-01T19:06:58.732'
        )
    )
})
