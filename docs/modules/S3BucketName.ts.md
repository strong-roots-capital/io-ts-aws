---
title: S3BucketName.ts
nav_order: 17
parent: Modules
---

## S3BucketName overview

Added in v0.0.22

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [S3BucketName](#s3bucketname)
  - [S3BucketName (type alias)](#s3bucketname-type-alias)
  - [S3BucketNameBrand (interface)](#s3bucketnamebrand-interface)
  - [s3BucketNameRegex](#s3bucketnameregex)

---

# utils

## S3BucketName

Naming rules:

1. Bucket names must be between 3 and 63 characters long.
2. Bucket names can consist only of lowercase letters, numbers,
   dots (.), and hyphens (-).
3. Bucket names must begin and end with a letter or number.

Note: AWS recommends you avoid using dots (.) in bucket names.

**Signature**

```ts
export declare const S3BucketName: t.BrandC<t.StringC, S3BucketNameBrand>
```

**Example**

```ts
import { S3BucketName } from '@strong-roots-capital/io-ts-aws'
import { right } from 'fp-ts/Either'
import { PathReporter } from 'io-ts/lib/PathReporter'

assert.deepStrictEqual(S3BucketName.decode('kebab-case-bucket-name'), right('kebab-case-bucket-name'))

assert.deepStrictEqual(PathReporter.report(S3BucketName.decode('camelCaseBucketName')), [
  'Invalid value "camelCaseBucketName" supplied to : S3BucketName',
])
```

Added in v0.0.22

## S3BucketName (type alias)

**Signature**

```ts
export type S3BucketName = t.TypeOf<typeof S3BucketName>
```

Added in v0.0.22

## S3BucketNameBrand (interface)

**Signature**

```ts
export interface S3BucketNameBrand {
  readonly S3BucketName: unique symbol
}
```

Added in v0.0.22

## s3BucketNameRegex

**Signature**

```ts
export declare const s3BucketNameRegex: () => string
```

Added in v0.0.22
