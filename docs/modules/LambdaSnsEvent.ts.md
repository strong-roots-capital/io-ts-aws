---
title: LambdaSnsEvent.ts
nav_order: 14
parent: Modules
---

## LambdaSnsEvent overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [LambdaSnsEvent](#lambdasnsevent)

---

# utils

## LambdaSnsEvent

https://docs.aws.amazon.com/lambda/latest/dg/with-sns.html

**Signature**

```ts
export declare const LambdaSnsEvent: <C extends t.Mixed>(
  codec: C
) => t.TypeC<{
  Records: NonEmptyArrayC<
    t.TypeC<{
      EventVersion: t.StringC
      EventSubscriptionArn: t.StringC
      EventSource: t.LiteralC<'aws:sns'>
      Sns: t.TypeC<{
        SignatureVersion: IntFromStringC
        Signature: t.StringC
        SigningCertUrl: t.StringC
        Type: t.StringC
        TopicArn: t.BrandC<t.StringC, SnsTopicArnBrand>
        Subject: t.UnionC<[t.StringC, t.NullC]>
        Timestamp: DateFromISOStringC
        MessageId: t.StringC
        Message: C
        UnsubscribeUrl: t.StringC
      }>
    }>
  >
}>
```

Added in v0.0.1
