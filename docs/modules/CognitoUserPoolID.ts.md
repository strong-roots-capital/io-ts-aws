---
title: CognitoUserPoolID.ts
nav_order: 4
parent: Modules
---

## CognitoUserPoolID overview

Added in v0.0.32

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [CognitoUserPoolID](#cognitouserpoolid)
  - [CognitoUserPoolID (type alias)](#cognitouserpoolid-type-alias)
  - [CognitoUserPoolIDBrand (interface)](#cognitouserpoolidbrand-interface)
  - [cognitoUserPoolIDRegex](#cognitouserpoolidregex)

---

# utils

## CognitoUserPoolID

Naming rules:

1. Pool names must be between 1 and 128 characters long.
2. Pool Names can consist only of lowercase letters, uppercase
   letters, numbers, and the following characters: -+=,.@

**Signature**

```ts
export declare const CognitoUserPoolID: t.BrandC<t.StringC, CognitoUserPoolIDBrand>
```

**Example**

```ts
import { CognitoUserPoolID } from '@strong-roots-capital/io-ts-aws'
import { right } from 'fp-ts/Either'
import { PathReporter } from 'io-ts/lib/PathReporter'

assert.deepStrictEqual(CognitoUserPoolID.decode('valid-Pool.name@123'), right('valid-Pool.name@123'))

assert.deepStrictEqual(PathReporter.report(CognitoUserPoolID.decode('invalid::poolName')), [
  'Invalid value "invalid::poolName" supplied to : CognitoUserPoolID',
])
```

Added in v0.0.32

## CognitoUserPoolID (type alias)

**Signature**

```ts
export type CognitoUserPoolID = t.TypeOf<typeof CognitoUserPoolID>
```

Added in v0.0.32

## CognitoUserPoolIDBrand (interface)

**Signature**

```ts
export interface CognitoUserPoolIDBrand {
  readonly CognitoUserPoolID: unique symbol
}
```

Added in v0.0.32

## cognitoUserPoolIDRegex

**Signature**

```ts
export declare const cognitoUserPoolIDRegex: () => string
```

Added in v0.0.32
