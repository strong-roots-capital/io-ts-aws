---
title: SqsQueueArn.ts
nav_order: 13
parent: Modules
---

## SqsQueueArn overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [SqsQueueArn](#sqsqueuearn)
  - [SqsQueueArn (type alias)](#sqsqueuearn-type-alias)
  - [SqsQueueArnBrand (interface)](#sqsqueuearnbrand-interface)

---

# utils

## SqsQueueArn

**Signature**

```ts
export declare const SqsQueueArn: t.BrandC<t.StringC, SqsQueueArnBrand>
```

Added in v0.0.1

## SqsQueueArn (type alias)

**Signature**

```ts
export type SqsQueueArn = t.TypeOf<typeof SqsQueueArn>
```

Added in v0.0.1

## SqsQueueArnBrand (interface)

**Signature**

```ts
export interface SqsQueueArnBrand {
  readonly SqsQueueArn: unique symbol
}
```

Added in v0.0.1
