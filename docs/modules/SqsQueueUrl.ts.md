---
title: SqsQueueUrl.ts
nav_order: 24
parent: Modules
---

## SqsQueueUrl overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [SqsQueueUrl](#sqsqueueurl)
  - [SqsQueueUrl (type alias)](#sqsqueueurl-type-alias)
  - [SqsQueueUrlBrand (interface)](#sqsqueueurlbrand-interface)
  - [sqsQueueUrl](#sqsqueueurl)

---

# utils

## SqsQueueUrl

**Signature**

```ts
export declare const SqsQueueUrl: t.BrandC<t.StringC, SqsQueueUrlBrand>
```

Added in v0.0.1

## SqsQueueUrl (type alias)

**Signature**

```ts
export type SqsQueueUrl = t.TypeOf<typeof SqsQueueUrl>
```

Added in v0.0.1

## SqsQueueUrlBrand (interface)

**Signature**

```ts
export interface SqsQueueUrlBrand {
  readonly SqsQueueUrl: unique symbol
}
```

Added in v0.0.1

## sqsQueueUrl

**Signature**

```ts
export declare const sqsQueueUrl: (parameters: {
  account: t.Branded<string, AwsAccountIDBrand>
  region: t.Branded<string, AwsRegionBrand>
}) => (queueName: t.Branded<string, SqsQueueNameBrand>) => t.Branded<string, SqsQueueUrlBrand>
```

Added in v0.0.1
