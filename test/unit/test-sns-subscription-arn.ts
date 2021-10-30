import test from 'ava'
import * as E from 'fp-ts/Either'
import { pipe, flow } from 'fp-ts/function'
import * as PathReporter from 'io-ts/lib/PathReporter'

/**
 * Unit under test
 */
import { SnsSubscriptionArn } from '../../src/SnsSubscriptionArn'

const snsSubscriptionArn =
  'arn:aws:sns:eu-west-1:012345678901:redacted:b7b65116-b0af-4245-b2ff-f9bd02c9fb37'

test('should decode a SQS queue ARN', (t) => {
  pipe(
    SnsSubscriptionArn.decode(snsSubscriptionArn),
    E.fold(
      flow(
        (errors) => PathReporter.failure(errors).join('\n'),
        (error) => t.fail(error),
      ),
      () => t.pass(),
    ),
  )
})
