---
title: AwsRegion.ts
nav_order: 2
parent: Modules
---

## AwsRegion overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [AwsRegion](#awsregion)
  - [AwsRegion (type alias)](#awsregion-type-alias)
  - [AwsRegionBrand (interface)](#awsregionbrand-interface)
  - [awsRegionRegex](#awsregionregex)

---

# utils

## AwsRegion

**Signature**

```ts
export declare const AwsRegion: t.BrandC<t.StringC, AwsRegionBrand>
```

Added in v0.0.1

## AwsRegion (type alias)

**Signature**

```ts
export type AwsRegion = t.TypeOf<typeof AwsRegion>
```

Added in v0.0.1

## AwsRegionBrand (interface)

**Signature**

```ts
export interface AwsRegionBrand {
  readonly AwsRegion: unique symbol
}
```

Added in v0.0.1

## awsRegionRegex

**Signature**

```ts
export declare const awsRegionRegex: () => string
```

Added in v0.0.1
