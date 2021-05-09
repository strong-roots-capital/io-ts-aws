---
title: LambdaDynamoStreamEvent.ts
nav_order: 7
parent: Modules
---

## LambdaDynamoStreamEvent overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [AnyDynamoEvent](#anydynamoevent)
  - [DynamoInsertEvent](#dynamoinsertevent)
  - [DynamoRemoveEvent](#dynamoremoveevent)
  - [DynamoStreamEvents](#dynamostreamevents)
  - [DynamoTimeToLiveRemoveEvent](#dynamotimetoliveremoveevent)
  - [DynamoUnknownEvent](#dynamounknownevent)
  - [DynamoUnknownEvent (type alias)](#dynamounknownevent-type-alias)

---

# utils

## AnyDynamoEvent

https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html

Note: currently only supports streams configured with `NewImage`.
PRs welcome!

**Signature**

```ts
export declare const AnyDynamoEvent: <K>({
  keys,
}: {
  keys: K
}) => t.TypeC<{
  eventID: t.BrandC<t.StringC, DynamoStreamEventIDBrand>
  eventName: t.KeyofC<{ INSERT: any; MODIFY: any; REMOVE: any }>
  eventSource: t.LiteralC<'aws:dynamodb'>
  awsRegion: t.BrandC<t.StringC, AwsRegionBrand>
  dynamodb: t.TypeC<{
    Keys: K
    SizeBytes: t.NumberC
    StreamViewType: t.KeyofC<{ KEYS_ONLY: any; NEW_IMAGE: any; OLD_IMAGE: any; NEW_AND_OLD_IMAGES: any }>
  }>
  eventSourceARN: t.BrandC<t.StringC, EventSourceArnBrand>
}>
```

Added in v0.0.3

## DynamoInsertEvent

https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html

Note: currently only supports streams configured with `NewImage`.
PRs welcome!

**Signature**

```ts
export declare const DynamoInsertEvent: <K extends t.Mixed, I extends t.Mixed>({
  keys,
  newImage,
}: {
  keys: K
  newImage: I
}) => t.TypeC<{
  eventID: t.BrandC<t.StringC, DynamoStreamEventIDBrand>
  eventName: t.LiteralC<'INSERT'>
  eventSource: t.LiteralC<'aws:dynamodb'>
  awsRegion: t.BrandC<t.StringC, AwsRegionBrand>
  dynamodb: t.TypeC<{
    Keys: K
    NewImage: I
    SizeBytes: t.NumberC
    StreamViewType: t.KeyofC<{ KEYS_ONLY: any; NEW_IMAGE: any; OLD_IMAGE: any; NEW_AND_OLD_IMAGES: any }>
  }>
  eventSourceARN: t.BrandC<t.StringC, EventSourceArnBrand>
}>
```

Added in v0.0.3

## DynamoRemoveEvent

https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html

Note: currently only supports streams configured with `NewImage`.
PRs welcome!

**Signature**

```ts
export declare const DynamoRemoveEvent: <K>({
  keys,
}: {
  keys: K
}) => t.TypeC<{
  eventID: t.BrandC<t.StringC, DynamoStreamEventIDBrand>
  eventName: t.LiteralC<'REMOVE'>
  eventSource: t.LiteralC<'aws:dynamodb'>
  awsRegion: t.BrandC<t.StringC, AwsRegionBrand>
  dynamodb: t.TypeC<{
    Keys: K
    SizeBytes: t.NumberC
    StreamViewType: t.KeyofC<{ KEYS_ONLY: any; NEW_IMAGE: any; OLD_IMAGE: any; NEW_AND_OLD_IMAGES: any }>
  }>
  eventSourceARN: t.BrandC<t.StringC, EventSourceArnBrand>
}>
```

Added in v0.0.3

## DynamoStreamEvents

**Signature**

```ts
export declare const DynamoStreamEvents: <A extends StreamEvent, B extends StreamEvent, C extends StreamEvent>(
  events: readonly [A, B, ...C[]]
) => t.TypeC<{ Records: NonEmptyArrayC<t.UnionC<[A, B, ...C[]]>> }>
```

Added in v0.0.3

## DynamoTimeToLiveRemoveEvent

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/time-to-live-ttl-streams.html

Note: currently only supports streams configured with `NewImage`.
PRs welcome!

**Signature**

```ts
export declare const DynamoTimeToLiveRemoveEvent: <K extends t.Mixed>(__0: {
  keys: K
}) => t.IntersectionC<
  [
    t.TypeC<{
      eventID: t.BrandC<t.StringC, DynamoStreamEventIDBrand>
      eventName: t.LiteralC<'REMOVE'>
      eventSource: t.LiteralC<'aws:dynamodb'>
      awsRegion: t.BrandC<t.StringC, AwsRegionBrand>
      dynamodb: t.TypeC<{
        Keys: K
        SizeBytes: t.NumberC
        StreamViewType: t.KeyofC<{ KEYS_ONLY: any; NEW_IMAGE: any; OLD_IMAGE: any; NEW_AND_OLD_IMAGES: any }>
      }>
      eventSourceARN: t.BrandC<t.StringC, EventSourceArnBrand>
    }>,
    t.TypeC<{
      userIdentity: t.TypeC<{ type: t.LiteralC<'Service'>; principalId: t.LiteralC<'dynamodb.amazonaws.com'> }>
    }>
  ]
>
```

Added in v0.0.3

## DynamoUnknownEvent

Successfully decodes any dynamo event.

Note: currently only supports streams configured with `NewImage`.
PRs welcome!

**Signature**

```ts
export declare const DynamoUnknownEvent: t.TypeC<{
  eventID: t.BrandC<t.StringC, DynamoStreamEventIDBrand>
  eventName: t.KeyofC<{ INSERT: any; MODIFY: any; REMOVE: any }>
  eventSource: t.LiteralC<'aws:dynamodb'>
  awsRegion: t.BrandC<t.StringC, AwsRegionBrand>
  dynamodb: t.TypeC<{
    Keys: t.UnknownC
    SizeBytes: t.NumberC
    StreamViewType: t.KeyofC<{ KEYS_ONLY: any; NEW_IMAGE: any; OLD_IMAGE: any; NEW_AND_OLD_IMAGES: any }>
  }>
  eventSourceARN: t.BrandC<t.StringC, EventSourceArnBrand>
}>
```

Added in v0.0.3

## DynamoUnknownEvent (type alias)

**Signature**

```ts
export type DynamoUnknownEvent = t.TypeOf<typeof DynamoUnknownEvent>
```

Added in v0.0.3
