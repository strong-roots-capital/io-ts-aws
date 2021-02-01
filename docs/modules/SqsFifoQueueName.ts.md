---
title: SqsFifoQueueName.ts
nav_order: 11
parent: Modules
---

## SqsFifoQueueName overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [SqsFifoQueueName](#sqsfifoqueuename)
  - [SqsFifoQueueName (type alias)](#sqsfifoqueuename-type-alias)
  - [SqsFifoQueueNameBrand (interface)](#sqsfifoqueuenamebrand-interface)
  - [sqsFifoQueueNameRegex](#sqsfifoqueuenameregex)

---

# utils

## SqsFifoQueueName

**Signature**

```ts
export declare const SqsFifoQueueName: t.BrandC<t.StringC, SqsFifoQueueNameBrand>
```

Added in v0.0.1

## SqsFifoQueueName (type alias)

**Signature**

```ts
export type SqsFifoQueueName = t.TypeOf<typeof SqsFifoQueueName>
```

Added in v0.0.1

## SqsFifoQueueNameBrand (interface)

**Signature**

```ts
export interface SqsFifoQueueNameBrand {
  readonly SqsFifoQueueName: unique symbol
}
```

Added in v0.0.1

## sqsFifoQueueNameRegex

A queue name can have up to 80 characters. The following characters
are accepted: alphanumeric characters, hyphens (-), and underscores
(\_).

The name of a FIFO queue must end with the .fifo suffix. The suffix
counts towards the 80-character queue name quota.

**Signature**

```ts
export declare const sqsFifoQueueNameRegex: () => string
```

Added in v0.0.1
