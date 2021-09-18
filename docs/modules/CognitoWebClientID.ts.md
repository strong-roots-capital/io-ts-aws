---
title: CognitoWebClientID.ts
nav_order: 6
parent: Modules
---

## CognitoWebClientID overview

Added in v0.0.34

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [CognitoWebClientID](#cognitowebclientid)
  - [CognitoWebClientID (type alias)](#cognitowebclientid-type-alias)
  - [CognitoWebClientIDBrand (interface)](#cognitowebclientidbrand-interface)
  - [cognitoWebClientIDRegex](#cognitowebclientidregex)

---

# utils

## CognitoWebClientID

Naming rules:

1. Web Client ID names are 26-char alphanumeric strings

**Signature**

```ts
export declare const CognitoWebClientID: t.BrandC<t.StringC, CognitoWebClientIDBrand>
```

**Example**

```ts
import { CognitoWebClientID } from '@strong-roots-capital/io-ts-aws'
import { right } from 'fp-ts/Either'
import { PathReporter } from 'io-ts/lib/PathReporter'

assert.deepStrictEqual(CognitoWebClientID.decode('abcdefghijklmnopqrstuvwxyz'), right('abcdefghijklmnopqrstuvwxyz'))

assert.deepStrictEqual(PathReporter.report(CognitoWebClientID.decode('invalid::poolName')), [
  'Invalid value "invalid::poolName" supplied to : CognitoWebClientID',
])
```

Added in v0.0.34

## CognitoWebClientID (type alias)

**Signature**

```ts
export type CognitoWebClientID = t.TypeOf<typeof CognitoWebClientID>
```

Added in v0.0.34

## CognitoWebClientIDBrand (interface)

**Signature**

```ts
export interface CognitoWebClientIDBrand {
  readonly CognitoWebClientID: unique symbol
}
```

Added in v0.0.34

## cognitoWebClientIDRegex

**Signature**

```ts
export declare const cognitoWebClientIDRegex: () => string
```

Added in v0.0.34
