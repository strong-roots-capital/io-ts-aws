---
title: LambdaFunctionArn.ts
nav_order: 9
parent: Modules
---

## LambdaFunctionArn overview

Added in v0.0.9

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [LambdaFunctionArn](#lambdafunctionarn)
  - [LambdaFunctionArn (type alias)](#lambdafunctionarn-type-alias)
  - [LambdaFunctionArnBrand (interface)](#lambdafunctionarnbrand-interface)
  - [lambdaFunctionArn](#lambdafunctionarn)

---

# utils

## LambdaFunctionArn

**Signature**

```ts
export declare const LambdaFunctionArn: t.BrandC<t.StringC, LambdaFunctionArnBrand>
```

Added in v0.0.9

## LambdaFunctionArn (type alias)

**Signature**

```ts
export type LambdaFunctionArn = t.TypeOf<typeof LambdaFunctionArn>
```

Added in v0.0.9

## LambdaFunctionArnBrand (interface)

**Signature**

```ts
export interface LambdaFunctionArnBrand {
  readonly LambdaFunctionArn: unique symbol
}
```

Added in v0.0.9

## lambdaFunctionArn

**Signature**

```ts
export declare const lambdaFunctionArn: (parameters: {
  account: t.Branded<string, AwsAccountIDBrand>
  region: t.Branded<string, AwsRegionBrand>
}) => (functionName: t.Branded<string, LambdaFunctionNameBrand>) => t.Branded<string, LambdaFunctionArnBrand>
```

Added in v0.0.9
