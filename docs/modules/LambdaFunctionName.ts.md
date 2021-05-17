---
title: LambdaFunctionName.ts
nav_order: 10
parent: Modules
---

## LambdaFunctionName overview

Added in v0.0.9

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [LambdaFunctionName](#lambdafunctionname)
  - [LambdaFunctionName (type alias)](#lambdafunctionname-type-alias)
  - [LambdaFunctionNameBrand (interface)](#lambdafunctionnamebrand-interface)
  - [lambdaFunctionNameRegex](#lambdafunctionnameregex)

---

# utils

## LambdaFunctionName

**Signature**

```ts
export declare const LambdaFunctionName: t.BrandC<t.StringC, LambdaFunctionNameBrand>
```

Added in v0.0.9

## LambdaFunctionName (type alias)

**Signature**

```ts
export type LambdaFunctionName = t.TypeOf<typeof LambdaFunctionName>
```

Added in v0.0.9

## LambdaFunctionNameBrand (interface)

**Signature**

```ts
export interface LambdaFunctionNameBrand {
  readonly LambdaFunctionName: unique symbol
}
```

Added in v0.0.9

## lambdaFunctionNameRegex

Note: I can't find the naming rules on lambda functions,
so I'm reusing the SQS queue name rules.
Pull requests welcome!

A lambda function name can have up to 80 characters. The following
characters are accepted: alphanumeric characters, hyphens (-), and
underscores (\_).

**Signature**

```ts
export declare const lambdaFunctionNameRegex: () => string
```

Added in v0.0.9
