---
title: SnsTopicName.ts
nav_order: 18
parent: Modules
---

## SnsTopicName overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [SnsTopicName](#snstopicname)
  - [SnsTopicName (type alias)](#snstopicname-type-alias)
  - [SnsTopicNameBrand (interface)](#snstopicnamebrand-interface)
  - [snsTopicNameRegex](#snstopicnameregex)

---

# utils

## SnsTopicName

**Signature**

```ts
export declare const SnsTopicName: t.BrandC<t.StringC, SnsTopicNameBrand>
```

Added in v0.0.1

## SnsTopicName (type alias)

**Signature**

```ts
export type SnsTopicName = t.TypeOf<typeof SnsTopicName>
```

Added in v0.0.1

## SnsTopicNameBrand (interface)

**Signature**

```ts
export interface SnsTopicNameBrand {
  readonly SnsTopicName: unique symbol
}
```

Added in v0.0.1

## snsTopicNameRegex

**Signature**

```ts
export declare const snsTopicNameRegex: () => string
```

Added in v0.0.1
