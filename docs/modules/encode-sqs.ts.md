---
title: encode-sqs.ts
nav_order: 6
parent: Modules
---

## encode-sqs overview

Added in v0.0.21

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [sqsFifoQueueName](#sqsfifoqueuename)
  - [sqsQueueName](#sqsqueuename)

---

# utils

## sqsFifoQueueName

**Signature**

```ts
export declare const sqsFifoQueueName: (
  a: Branded<string, SqsFifoQueueArnBrand> | Branded<string, SqsFifoQueueUrlBrand>
) => Branded<string, SqsFifoQueueNameBrand>
```

Added in v0.0.29

## sqsQueueName

**Signature**

```ts
export declare const sqsQueueName: (
  a: Branded<string, SqsQueueArnBrand> | Branded<string, SqsQueueUrlBrand>
) => Branded<string, SqsQueueNameBrand>
```

Added in v0.0.21
