import test from 'ava'
import * as E from 'fp-ts/Either'
import * as PathReporter from 'io-ts/lib/PathReporter'
import { pipe, flow } from 'fp-ts/function'

/**
 * Unit under test
 */
import { SqsFifoQueueArn } from '../../src/SqsFifoQueueArn'

const sqsFifoQueueArn = 'arn:aws:sqs:eu-west-1:012345678901:redacted.fifo'

test('should decode a SQS queue ARN', t => {
    pipe(
        SqsFifoQueueArn.decode(sqsFifoQueueArn),
        E.fold(
            flow(
                errors => PathReporter.failure(errors).join('\n'),
                error => t.fail(error)
            ),
            () => t.pass()
        )
    )
})
