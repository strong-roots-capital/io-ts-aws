---
title: DynamoTableName.ts
nav_order: 5
parent: Modules
---

## DynamoTableName overview

Added in v0.0.24

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [DynamoTableName](#dynamotablename)
  - [DynamoTableName (type alias)](#dynamotablename-type-alias)
  - [DynamoTableNameBrand (interface)](#dynamotablenamebrand-interface)
  - [dynamoTableNameRegex](#dynamotablenameregex)

---

# utils

## DynamoTableName

**Signature**

```ts
export declare const DynamoTableName: t.BrandC<t.StringC, DynamoTableNameBrand>
```

Added in v0.0.24

## DynamoTableName (type alias)

**Signature**

```ts
export type DynamoTableName = t.TypeOf<typeof DynamoTableName>
```

Added in v0.0.24

## DynamoTableNameBrand (interface)

**Signature**

```ts
export interface DynamoTableNameBrand {
  readonly DynamoTableName: unique symbol
}
```

Added in v0.0.24

## dynamoTableNameRegex

Naming rules:

1. Table names must be between 3 and 255 characters long.
2. Table names can consist only of lowercase letters, uppercase
   letters, numbers, dots (.), hyphens (-), and underscores (\_).

**Signature**

```ts
export declare const dynamoTableNameRegex: () => string
```

**Example**

```ts
import { DynamoTableName } from '@strong-roots-capital/io-ts-aws'
import { right } from 'fp-ts/Either'
import { PathReporter } from 'io-ts/lib/PathReporter'

assert.deepStrictEqual(DynamoTableName.decode('valid-TABLE_name.0123'), right('valid-TABLE_name.0123'))

assert.deepStrictEqual(PathReporter.report(DynamoTableName.decode('invalid::tableName')), [
  'Invalid value "invalid::tableName" supplied to : DynamoTableName',
])
```

Added in v0.0.24
