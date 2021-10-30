import test from 'ava'
import * as E from 'fp-ts/Either'
import { pipe, flow } from 'fp-ts/function'
import * as PathReporter from 'io-ts/lib/PathReporter'

/**
 * Unit under test
 */
import { SnsTopicArn } from '../../src/SnsTopicArn'

const snsTopicArn = 'arn:aws:sns:eu-west-1:012345678901:redacted'

test('should decode a SQS queue ARN', (t) => {
  pipe(
    SnsTopicArn.decode(snsTopicArn),
    E.fold(
      flow(
        (errors) => PathReporter.failure(errors).join('\n'),
        (error) => t.fail(error),
      ),
      () => t.pass(),
    ),
  )
})
