---
title: EventSourceArn.ts
nav_order: 6
parent: Modules
---

## EventSourceArn overview

Added in v0.0.3

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [EventSourceArn](#eventsourcearn)
  - [EventSourceArn (type alias)](#eventsourcearn-type-alias)
  - [EventSourceArnBrand (interface)](#eventsourcearnbrand-interface)

---

# utils

## EventSourceArn

**Signature**

```ts
export declare const EventSourceArn: t.BrandC<t.StringC, EventSourceArnBrand>
```

Added in v0.0.3

## EventSourceArn (type alias)

**Signature**

```ts
export type EventSourceArn = t.TypeOf<typeof EventSourceArn>
```

Added in v0.0.3

## EventSourceArnBrand (interface)

**Signature**

```ts
export interface EventSourceArnBrand {
  readonly EventSourceArn: unique symbol
}
```

Added in v0.0.3
