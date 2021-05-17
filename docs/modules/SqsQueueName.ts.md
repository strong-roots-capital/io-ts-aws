---
title: SqsQueueName.ts
nav_order: 20
parent: Modules
---

## SqsQueueName overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [SqsQueueName](#sqsqueuename)
  - [SqsQueueName (type alias)](#sqsqueuename-type-alias)
  - [SqsQueueNameBrand (interface)](#sqsqueuenamebrand-interface)
  - [sqsQueueNameRegex](#sqsqueuenameregex)

---

# utils

## SqsQueueName

**Signature**

```ts
export declare const SqsQueueName: t.BrandC<t.StringC, SqsQueueNameBrand>
```

Added in v0.0.1

## SqsQueueName (type alias)

**Signature**

```ts
export type SqsQueueName = t.TypeOf<typeof SqsQueueName>
```

Added in v0.0.1

## SqsQueueNameBrand (interface)

**Signature**

```ts
export interface SqsQueueNameBrand {
  readonly SqsQueueName: unique symbol
}
```

Added in v0.0.1

## sqsQueueNameRegex

A queue name can have up to 80 characters. The following characters
are accepted: alphanumeric characters, hyphens (-), and underscores
(\_).

**Signature**

```ts
export declare const sqsQueueNameRegex: () => string
```

Added in v0.0.1
