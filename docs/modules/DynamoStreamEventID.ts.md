---
title: DynamoStreamEventID.ts
nav_order: 7
parent: Modules
---

## DynamoStreamEventID overview

Added in v0.0.5

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [DynamoStreamEventID](#dynamostreameventid)
  - [DynamoStreamEventID (type alias)](#dynamostreameventid-type-alias)
  - [DynamoStreamEventIDBrand (interface)](#dynamostreameventidbrand-interface)

---

# utils

## DynamoStreamEventID

**Signature**

```ts
export declare const DynamoStreamEventID: t.BrandC<t.StringC, DynamoStreamEventIDBrand>
```

Added in v0.0.5

## DynamoStreamEventID (type alias)

**Signature**

```ts
export type DynamoStreamEventID = t.TypeOf<typeof DynamoStreamEventID>
```

Added in v0.0.5

## DynamoStreamEventIDBrand (interface)

**Signature**

```ts
export interface DynamoStreamEventIDBrand {
  readonly DynamoStreamEventID: unique symbol
}
```

Added in v0.0.5
