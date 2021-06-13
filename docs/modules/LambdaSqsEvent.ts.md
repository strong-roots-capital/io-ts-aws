---
title: LambdaSqsEvent.ts
nav_order: 13
parent: Modules
---

## LambdaSqsEvent overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [LambdaSqsEvent](#lambdasqsevent)

---

# utils

## LambdaSqsEvent

https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html

**Signature**

```ts
export declare const LambdaSqsEvent: <C extends t.Mixed>(
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
      }>
      messageAttributes: t.UnknownRecordC
      md5OfBody: t.StringC
      eventSource: t.LiteralC<'aws:sqs'>
      eventSourceARN: t.BrandC<t.StringC, SqsQueueArnBrand>
      awsRegion: t.BrandC<t.StringC, AwsRegionBrand>
    }>
  >
}>
```

Added in v0.0.1
