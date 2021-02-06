---
title: SqsFifoQueueUrl.ts
nav_order: 12
parent: Modules
---

## SqsFifoQueueUrl overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [SqsFifoQueueUrl](#sqsfifoqueueurl)
  - [SqsFifoQueueUrl (type alias)](#sqsfifoqueueurl-type-alias)
  - [SqsFifoQueueUrlBrand (interface)](#sqsfifoqueueurlbrand-interface)
  - [sqsFifoQueueUrl](#sqsfifoqueueurl)

---

# utils

## SqsFifoQueueUrl

**Signature**

```ts
export declare const SqsFifoQueueUrl: t.BrandC<t.StringC, SqsFifoQueueUrlBrand>
```

Added in v0.0.1

## SqsFifoQueueUrl (type alias)

**Signature**

```ts
export type SqsFifoQueueUrl = t.TypeOf<typeof SqsFifoQueueUrl>
```

Added in v0.0.1

## SqsFifoQueueUrlBrand (interface)

**Signature**

```ts
export interface SqsFifoQueueUrlBrand {
  readonly SqsFifoQueueUrl: unique symbol
}
```

Added in v0.0.1

## sqsFifoQueueUrl

**Signature**

```ts
export declare const sqsFifoQueueUrl: (parameters: {
  account: t.Branded<string, AwsAccountIDBrand>
  region: t.Branded<string, AwsRegionBrand>
}) => (queueName: t.Branded<string, SqsFifoQueueNameBrand>) => t.Branded<string, SqsFifoQueueUrlBrand>
```

Added in v0.0.1
