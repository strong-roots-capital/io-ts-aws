---
title: LambdaSqsFifoEvent.ts
nav_order: 8
parent: Modules
---

## LambdaSqsFifoEvent overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [LambdaSqsFifoEvent](#lambdasqsfifoevent)

---

# utils

## LambdaSqsFifoEvent

https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html

**Signature**

```ts
export declare const LambdaSqsFifoEvent: <C extends t.Mixed>(
  codec: C
) => t.TypeC<{
  Records: NonEmptyArrayC<
    t.TypeC<{
      messageId: t.StringC
      receiptHandle: t.StringC
      body: C
      attributes: t.TypeC<{
        ApproximateReceiveCount: IntFromStringC
        SentTimestamp: t.Type<Date, string, unknown>
        SenderId: t.StringC
        ApproximateFirstReceiveTimestamp: t.Type<Date, string, unknown>
        SequenceNumber: IntFromStringC
        MessageGroupId: t.StringC
        MessageDeduplicationId: t.StringC
      }>
      messageAttributes: t.UnknownRecordC
      md5OfBody: t.StringC
      eventSource: t.LiteralC<'aws:sqs'>
      eventSourceARN: t.BrandC<t.StringC, SqsFifoQueueArnBrand>
      awsRegion: t.BrandC<t.StringC, AwsRegionBrand>
    }>
  >
}>
```

Added in v0.0.1
