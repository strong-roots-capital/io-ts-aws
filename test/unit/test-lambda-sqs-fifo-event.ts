import test from 'ava'
import * as E from 'fp-ts/Either'
import { pipe, flow } from 'fp-ts/function'
import * as iots from 'io-ts'
import { JsonFromString } from 'io-ts-types'
import * as PathReporter from 'io-ts/lib/PathReporter'

import { LambdaSqsFifoEvent } from '../../src/LambdaSqsFifoEvent'

/**
 * Unit under test
 */

const event = {
  Records: [
    {
      messageId: '667c3c79-3987-4dac-b612-785623e4ce30',
      receiptHandle:
        'AQEBa7xyyOddSbRU2JggsN/h+h4Odw9ywFE1MCbb0t15CcZ1bTNeuniSfhokfS/ATnJ2h2O8+vVUntBXivvHaUzcRhYTm3Mxuf6uet8F2n7jvIotzXgZYagNT7WFDaxKNYEuw1saE8iqIcikXw4OUfH1qJBQZKqq7p2Rwrqt5VmoVmYoR7Ulm51Mb05swuid37JM9fpraSsWM7Pggky9Wy7NmSW4cr8EMHfbnHaFjXBYH255EmoLUUEcWo+Ura7TQQw9jzA2tX6rSDBrZ0siJLKJFa+kN1m5/7mPWtMyC/eY65A=',
      body: '{}',
      attributes: {
        ApproximateReceiveCount: '115',
        SentTimestamp: '1620526921858',
        SequenceNumber: '18861598965705199872',
        MessageGroupId: 'redacted',
        SenderId: 'AROAVPSMPIYQZOF3A37IY:redacted',
        MessageDeduplicationId: 'c13fb3b3-a1fb-489f-aee0-fe74341c7b4a',
        ApproximateFirstReceiveTimestamp: '1620526935580',
      },
      messageAttributes: {},
      md5OfBody: '23e6cc3edb0a557dfe732630d5d00ce4',
      eventSource: 'aws:sqs',
      eventSourceARN: 'arn:aws:sqs:eu-west-1:012345678901:redacted.fifo',
      awsRegion: 'eu-west-1',
    },
  ],
} as const

test('should decode a real-world event', t => {
  pipe(
    LambdaSqsFifoEvent(iots.string.pipe(JsonFromString)).decode(event),
    E.bimap(
      flow(
        errors => PathReporter.failure(errors).join('\n'),
        error => t.fail(error)
      ),
      () => t.pass()
    )
  )
})
