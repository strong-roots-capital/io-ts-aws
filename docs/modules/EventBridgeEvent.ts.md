---
title: EventBridgeEvent.ts
nav_order: 4
parent: Modules
---

## EventBridgeEvent overview

Added in v0.0.8

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [EventBridgeEvent](#eventbridgeevent)

---

# utils

## EventBridgeEvent

**Signature**

```ts
export declare const EventBridgeEvent: <C extends EventBridgeEventType>(
  codec: C
) => t.IntersectionC<
  [
    t.TypeC<{
      version: IntFromStringC
      id: t.BrandC<t.StringC, UUIDBrand>
      time: DateFromISOStringC
      account: t.BrandC<t.StringC, AwsAccountIDBrand>
      region: t.BrandC<t.StringC, AwsRegionBrand>
      resources: t.ArrayC<t.StringC>
    }>,
    C
  ]
>
```

Added in v0.0.8
