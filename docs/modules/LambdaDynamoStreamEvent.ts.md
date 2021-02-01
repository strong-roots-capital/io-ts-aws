---
title: LambdaDynamoStreamEvent.ts
nav_order: 4
parent: Modules
---

## LambdaDynamoStreamEvent overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [DynamoEvent](#dynamoevent)
  - [DynamoInsertEvent](#dynamoinsertevent)
  - [DynamoModifyEvent](#dynamomodifyevent)
  - [DynamoRemoveEvent](#dynamoremoveevent)

---

# utils

## DynamoEvent

https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html

Note: currently only supports streams configured with `NewImage`
PRs welcome

**Signature**

```ts
export declare const DynamoEvent: <K extends t.Mixed, I extends t.Mixed>({
  keys,
  newImage,
}: {
  keys: K
  newImage: I
}) => t.TypeC<{
  Records: NonEmptyArrayC<
    t.TypeC<{
      eventID: IntFromStringC
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
      eventSourceARN: t.StringC
    }>
  >
}>
```

Added in v0.0.1

## DynamoInsertEvent

https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html

Note: currently only supports streams configured with `NewImage`
PRs welcome

**Signature**

```ts
export declare const DynamoInsertEvent: <K extends t.Mixed, I extends t.Mixed>({
  keys,
  newImage,
}: {
  keys: K
  newImage: I
}) => t.TypeC<{
  Records: NonEmptyArrayC<
    t.TypeC<{
      eventID: IntFromStringC
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
      eventSourceARN: t.StringC
    }>
  >
}>
```

Added in v0.0.1

## DynamoModifyEvent

https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html

Note: currently only supports streams configured with `NewImage`
PRs welcome

**Signature**

```ts
export declare const DynamoModifyEvent: <K extends t.Mixed, I extends t.Mixed>({
  keys,
  newImage,
}: {
  keys: K
  newImage: I
}) => t.TypeC<{
  Records: NonEmptyArrayC<
    t.TypeC<{
      eventID: IntFromStringC
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
      eventSourceARN: t.StringC
    }>
  >
}>
```

Added in v0.0.1

## DynamoRemoveEvent

https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html

Note: currently only supports streams configured with `NewImage`
PRs welcome

**Signature**

```ts
export declare const DynamoRemoveEvent: <K extends t.Mixed, I extends t.Mixed>({
  keys,
  newImage,
}: {
  keys: K
  newImage: I
}) => t.TypeC<{
  Records: NonEmptyArrayC<
    t.TypeC<{
      eventID: IntFromStringC
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
      eventSourceARN: t.StringC
    }>
  >
}>
```

Added in v0.0.1
