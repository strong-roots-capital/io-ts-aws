---
title: SnsTopicArn.ts
nav_order: 15
parent: Modules
---

## SnsTopicArn overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [SnsTopicArn](#snstopicarn)
  - [SnsTopicArn (type alias)](#snstopicarn-type-alias)
  - [SnsTopicArnBrand (interface)](#snstopicarnbrand-interface)
  - [snsTopicArn](#snstopicarn)

---

# utils

## SnsTopicArn

**Signature**

```ts
export declare const SnsTopicArn: t.BrandC<t.StringC, SnsTopicArnBrand>
```

Added in v0.0.1

## SnsTopicArn (type alias)

**Signature**

```ts
export type SnsTopicArn = t.TypeOf<typeof SnsTopicArn>
```

Added in v0.0.1

## SnsTopicArnBrand (interface)

**Signature**

```ts
export interface SnsTopicArnBrand {
  readonly SnsTopicArn: unique symbol
}
```

Added in v0.0.1

## snsTopicArn

**Signature**

```ts
export declare const snsTopicArn: (parameters: {
  account: t.Branded<string, AwsAccountIDBrand>
  region: t.Branded<string, AwsRegionBrand>
}) => (topicName: t.Branded<string, SnsTopicNameBrand>) => t.Branded<string, SnsTopicArnBrand>
```

Added in v0.0.2
