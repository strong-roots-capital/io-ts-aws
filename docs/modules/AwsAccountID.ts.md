---
title: AwsAccountID.ts
nav_order: 1
parent: Modules
---

## AwsAccountID overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [AwsAccountID](#awsaccountid)
  - [AwsAccountID (type alias)](#awsaccountid-type-alias)
  - [AwsAccountIDBrand (interface)](#awsaccountidbrand-interface)
  - [awsAccountIDRegex](#awsaccountidregex)

---

# utils

## AwsAccountID

**Signature**

```ts
export declare const AwsAccountID: t.BrandC<t.StringC, AwsAccountIDBrand>
```

Added in v0.0.1

## AwsAccountID (type alias)

**Signature**

```ts
export type AwsAccountID = t.TypeOf<typeof AwsAccountID>
```

Added in v0.0.1

## AwsAccountIDBrand (interface)

**Signature**

```ts
export interface AwsAccountIDBrand {
  readonly AwsAccountID: unique symbol
}
```

Added in v0.0.1

## awsAccountIDRegex

**Signature**

```ts
export declare const awsAccountIDRegex: () => string
```

Added in v0.0.1
