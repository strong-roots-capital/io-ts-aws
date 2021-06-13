---
title: encode-sqs.ts
nav_order: 5
parent: Modules
---

## encode-sqs overview

Added in v0.0.21

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [sqsQueueName](#sqsqueuename)

---

# utils

## sqsQueueName

**Signature**

```ts
export declare const sqsQueueName: (
  a: Branded<string, SqsQueueArnBrand> | Branded<string, SqsQueueUrlBrand>
) => Branded<string, SqsQueueNameBrand>
```

Added in v0.0.21
