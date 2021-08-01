/**
 * @since 0.0.9
 */

/**
 * ARN reference:
 * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
 */

import * as t from 'io-ts'

import { AwsAccountID, awsAccountIDRegex } from './AwsAccountID'
import { AwsRegion, awsRegionRegex } from './AwsRegion'
import {
  LambdaFunctionName,
  lambdaFunctionNameRegex,
} from './LambdaFunctionName'

/**
 * @since 0.0.9
 */
const lambdaFunctionArnRegex = (): string =>
  `arn:aws:lambda:${awsRegionRegex()}:${awsAccountIDRegex()}:function:${lambdaFunctionNameRegex()}`

/**
 * @since 0.0.9
 */
export interface LambdaFunctionArnBrand {
  readonly LambdaFunctionArn: unique symbol
}

/**
 * @since 0.0.9
 */
export const LambdaFunctionArn = t.brand(
  t.string,
  (s): s is t.Branded<string, LambdaFunctionArnBrand> =>
    RegExp('^' + lambdaFunctionArnRegex() + '$').test(s),
  'LambdaFunctionArn',
)

/**
 * @since 0.0.9
 */
export type LambdaFunctionArn = t.TypeOf<typeof LambdaFunctionArn>

/**
 * @since 0.0.9
 */
export const lambdaFunctionArn = (parameters: {
  account: AwsAccountID
  region: AwsRegion
}) => (functionName: LambdaFunctionName): LambdaFunctionArn =>
  [
    'arn',
    'aws',
    'lambda',
    parameters.region,
    parameters.account,
    'function',
    functionName,
  ].join(':') as LambdaFunctionArn
