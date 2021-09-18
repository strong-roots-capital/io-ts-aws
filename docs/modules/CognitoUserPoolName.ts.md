---
title: CognitoUserPoolName.ts
nav_order: 5
parent: Modules
---

## CognitoUserPoolName overview

Added in v0.0.35

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [CognitoUserPoolName](#cognitouserpoolname)
  - [CognitoUserPoolName (type alias)](#cognitouserpoolname-type-alias)
  - [CognitoUserPoolNameBrand (interface)](#cognitouserpoolnamebrand-interface)
  - [cognitoUserPoolNameRegex](#cognitouserpoolnameregex)

---

# utils

## CognitoUserPoolName

Naming rules:

1. Pool names must be between 1 and 128 characters long.
2. Pool Names can consist only of lowercase letters, uppercase
   letters, numbers, and the following characters: -+=,.@

**Signature**

```ts
export declare const CognitoUserPoolName: t.BrandC<t.StringC, CognitoUserPoolNameBrand>
```

**Example**

```ts
import { CognitoUserPoolName } from '@strong-roots-capital/io-ts-aws'
import { right } from 'fp-ts/Either'
import { PathReporter } from 'io-ts/lib/PathReporter'

assert.deepStrictEqual(CognitoUserPoolName.decode('valid-Pool.name@123'), right('valid-Pool.name@123'))

assert.deepStrictEqual(PathReporter.report(CognitoUserPoolName.decode('invalid::poolName')), [
  'Invalid value "invalid::poolName" supplied to : CognitoUserPoolName',
])
```

Added in v0.0.35

## CognitoUserPoolName (type alias)

**Signature**

```ts
export type CognitoUserPoolName = t.TypeOf<typeof CognitoUserPoolName>
```

Added in v0.0.35

## CognitoUserPoolNameBrand (interface)

**Signature**

```ts
export interface CognitoUserPoolNameBrand {
  readonly CognitoUserPoolName: unique symbol
}
```

Added in v0.0.35

## cognitoUserPoolNameRegex

**Signature**

```ts
export declare const cognitoUserPoolNameRegex: () => string
```

Added in v0.0.35
