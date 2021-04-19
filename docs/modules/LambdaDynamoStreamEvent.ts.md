---
title: LambdaDynamoStreamEvent.ts
nav_order: 6
parent: Modules
---

## LambdaDynamoStreamEvent overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [AnyDynamoEvent](#anydynamoevent)
  - [DynamoInsertEvent](#dynamoinsertevent)
  - [DynamoModifyEvent](#dynamomodifyevent)
  - [DynamoRemoveEvent](#dynamoremoveevent)
  - [DynamoStreamEvents](#dynamostreamevents)
  - [DynamoTimeToLiveRemoveEvent](#dynamotimetoliveremoveevent)
  - [DynamoUnknownEvent](#dynamounknownevent)

---

# utils

## AnyDynamoEvent

https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html

Note: currently only supports streams configured with `NewImage`.
PRs welcome!

**Signature**

```ts
export declare const AnyDynamoEvent: <K, I>({
  keys,
  newImage,
}: {
  keys: K
  newImage: I
}) => t.TypeC<{
  eventID: t.BrandC<t.StringC, DynamoStreamEventIDBrand>
  eventName: t.KeyofC<{ INSERT: any; MODIFY: any; REMOVE: any }>
  eventSource: t.LiteralC<'aws:dynamodb'>
  eventVersion: NumberFromStringC
  awsRegion: t.BrandC<t.StringC, AwsRegionBrand>
  dynamodb: t.TypeC<{
    Keys: K
    NewImage: I
    SequenceNumber: IntFromStringC
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
export declare const DynamoInsertEvent: <K, I>({
  keys,
  newImage,
}: {
  keys: K
  newImage: I
}) => t.TypeC<{
  eventID: t.BrandC<t.StringC, DynamoStreamEventIDBrand>
  eventName: t.LiteralC<'INSERT'>
  eventSource: t.LiteralC<'aws:dynamodb'>
  eventVersion: NumberFromStringC
  awsRegion: t.BrandC<t.StringC, AwsRegionBrand>
  dynamodb: t.TypeC<{
    Keys: K
    NewImage: I
    SequenceNumber: IntFromStringC
    SizeBytes: t.NumberC
    StreamViewType: t.KeyofC<{ KEYS_ONLY: any; NEW_IMAGE: any; OLD_IMAGE: any; NEW_AND_OLD_IMAGES: any }>
  }>
  eventSourceARN: t.BrandC<t.StringC, EventSourceArnBrand>
}>
```

Added in v0.0.3

## DynamoModifyEvent

https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html

Note: currently only supports streams configured with `NewImage`.
PRs welcome!

**Signature**

```ts
export declare const DynamoModifyEvent: <K, I>({
  keys,
  newImage,
}: {
  keys: K
  newImage: I
}) => t.TypeC<{
  eventID: t.BrandC<t.StringC, DynamoStreamEventIDBrand>
  eventName: t.LiteralC<'MODIFY'>
  eventSource: t.LiteralC<'aws:dynamodb'>
  eventVersion: NumberFromStringC
  awsRegion: t.BrandC<t.StringC, AwsRegionBrand>
  dynamodb: t.TypeC<{
    Keys: K
    NewImage: I
    SequenceNumber: IntFromStringC
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
export declare const DynamoRemoveEvent: <K, I>({
  keys,
  newImage,
}: {
  keys: K
  newImage: I
}) => t.TypeC<{
  eventID: t.BrandC<t.StringC, DynamoStreamEventIDBrand>
  eventName: t.LiteralC<'REMOVE'>
  eventSource: t.LiteralC<'aws:dynamodb'>
  eventVersion: NumberFromStringC
  awsRegion: t.BrandC<t.StringC, AwsRegionBrand>
  dynamodb: t.TypeC<{
    Keys: K
    NewImage: I
    SequenceNumber: IntFromStringC
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
export declare const DynamoStreamEvents: <
  A extends
    | t.TypeC<{
        eventID: t.BrandC<t.StringC, DynamoStreamEventIDBrand>
        eventName: t.Mixed
        eventSource: t.LiteralC<'aws:dynamodb'>
        eventVersion: NumberFromStringC
        awsRegion: t.BrandC<t.StringC, AwsRegionBrand>
        dynamodb: t.TypeC<{
          Keys: t.Mixed
          NewImage: t.Mixed
          SequenceNumber: IntFromStringC
          SizeBytes: t.NumberC
          StreamViewType: t.KeyofC<{ KEYS_ONLY: any; NEW_IMAGE: any; OLD_IMAGE: any; NEW_AND_OLD_IMAGES: any }>
        }>
        eventSourceARN: t.BrandC<t.StringC, EventSourceArnBrand>
      }>
    | t.IntersectionC<
        [
          t.TypeC<{
            eventID: t.BrandC<t.StringC, DynamoStreamEventIDBrand>
            eventName: t.LiteralC<'REMOVE'>
            eventSource: t.LiteralC<'aws:dynamodb'>
            eventVersion: NumberFromStringC
            awsRegion: t.BrandC<t.StringC, AwsRegionBrand>
            dynamodb: t.TypeC<{
              Keys: t.Mixed
              NewImage: t.Mixed
              SequenceNumber: IntFromStringC
              SizeBytes: t.NumberC
              StreamViewType: t.KeyofC<{ KEYS_ONLY: any; NEW_IMAGE: any; OLD_IMAGE: any; NEW_AND_OLD_IMAGES: any }>
            }>
            eventSourceARN: t.BrandC<t.StringC, EventSourceArnBrand>
          }>,
          t.TypeC<{
            userIdentity: t.TypeC<{ type: t.LiteralC<'Service'>; principalId: t.LiteralC<'dynamodb.amazonaws.com'> }>
          }>
        ]
      >,
  B extends
    | t.TypeC<{
        eventID: t.BrandC<t.StringC, DynamoStreamEventIDBrand>
        eventName: t.Mixed
        eventSource: t.LiteralC<'aws:dynamodb'>
        eventVersion: NumberFromStringC
        awsRegion: t.BrandC<t.StringC, AwsRegionBrand>
        dynamodb: t.TypeC<{
          Keys: t.Mixed
          NewImage: t.Mixed
          SequenceNumber: IntFromStringC
          SizeBytes: t.NumberC
          StreamViewType: t.KeyofC<{ KEYS_ONLY: any; NEW_IMAGE: any; OLD_IMAGE: any; NEW_AND_OLD_IMAGES: any }>
        }>
        eventSourceARN: t.BrandC<t.StringC, EventSourceArnBrand>
      }>
    | t.IntersectionC<
        [
          t.TypeC<{
            eventID: t.BrandC<t.StringC, DynamoStreamEventIDBrand>
            eventName: t.LiteralC<'REMOVE'>
            eventSource: t.LiteralC<'aws:dynamodb'>
            eventVersion: NumberFromStringC
            awsRegion: t.BrandC<t.StringC, AwsRegionBrand>
            dynamodb: t.TypeC<{
              Keys: t.Mixed
              NewImage: t.Mixed
              SequenceNumber: IntFromStringC
              SizeBytes: t.NumberC
              StreamViewType: t.KeyofC<{ KEYS_ONLY: any; NEW_IMAGE: any; OLD_IMAGE: any; NEW_AND_OLD_IMAGES: any }>
            }>
            eventSourceARN: t.BrandC<t.StringC, EventSourceArnBrand>
          }>,
          t.TypeC<{
            userIdentity: t.TypeC<{ type: t.LiteralC<'Service'>; principalId: t.LiteralC<'dynamodb.amazonaws.com'> }>
          }>
        ]
      >,
  C extends
    | t.TypeC<{
        eventID: t.BrandC<t.StringC, DynamoStreamEventIDBrand>
        eventName: t.Mixed
        eventSource: t.LiteralC<'aws:dynamodb'>
        eventVersion: NumberFromStringC
        awsRegion: t.BrandC<t.StringC, AwsRegionBrand>
        dynamodb: t.TypeC<{
          Keys: t.Mixed
          NewImage: t.Mixed
          SequenceNumber: IntFromStringC
          SizeBytes: t.NumberC
          StreamViewType: t.KeyofC<{ KEYS_ONLY: any; NEW_IMAGE: any; OLD_IMAGE: any; NEW_AND_OLD_IMAGES: any }>
        }>
        eventSourceARN: t.BrandC<t.StringC, EventSourceArnBrand>
      }>
    | t.IntersectionC<
        [
          t.TypeC<{
            eventID: t.BrandC<t.StringC, DynamoStreamEventIDBrand>
            eventName: t.LiteralC<'REMOVE'>
            eventSource: t.LiteralC<'aws:dynamodb'>
            eventVersion: NumberFromStringC
            awsRegion: t.BrandC<t.StringC, AwsRegionBrand>
            dynamodb: t.TypeC<{
              Keys: t.Mixed
              NewImage: t.Mixed
              SequenceNumber: IntFromStringC
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
>(
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
export declare const DynamoTimeToLiveRemoveEvent: <K extends t.Mixed, I extends t.Mixed>(__0: {
  keys: K
  newImage: I
}) => t.IntersectionC<
  [
    t.TypeC<{
      eventID: t.BrandC<t.StringC, DynamoStreamEventIDBrand>
      eventName: t.LiteralC<'REMOVE'>
      eventSource: t.LiteralC<'aws:dynamodb'>
      eventVersion: NumberFromStringC
      awsRegion: t.BrandC<t.StringC, AwsRegionBrand>
      dynamodb: t.TypeC<{
        Keys: K
        NewImage: I
        SequenceNumber: IntFromStringC
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
  eventVersion: NumberFromStringC
  awsRegion: t.BrandC<t.StringC, AwsRegionBrand>
  dynamodb: t.TypeC<{
    Keys: t.UnknownC
    NewImage: t.UnknownC
    SequenceNumber: IntFromStringC
    SizeBytes: t.NumberC
    StreamViewType: t.KeyofC<{ KEYS_ONLY: any; NEW_IMAGE: any; OLD_IMAGE: any; NEW_AND_OLD_IMAGES: any }>
  }>
  eventSourceARN: t.BrandC<t.StringC, EventSourceArnBrand>
}>
```

Added in v0.0.3
