---
title: AwsEndpoint.ts
nav_order: 2
parent: Modules
---

## AwsEndpoint overview

Added in v0.0.23

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [AwsEndpoint](#awsendpoint)
  - [AwsEndpoint (type alias)](#awsendpoint-type-alias)
  - [AwsEndpointBrand (interface)](#awsendpointbrand-interface)

---

# utils

## AwsEndpoint

**Signature**

```ts
export declare const AwsEndpoint: t.BrandC<t.StringC, AwsEndpointBrand>
```

Added in v0.0.23

## AwsEndpoint (type alias)

**Signature**

```ts
export type AwsEndpoint = t.TypeOf<typeof AwsEndpoint>
```

Added in v0.0.23

## AwsEndpointBrand (interface)

**Signature**

```ts
export interface AwsEndpointBrand {
  readonly AwsEndpoint: unique symbol
}
```

Added in v0.0.23
