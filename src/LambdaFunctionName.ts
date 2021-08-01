/**
 * @since 0.0.9
 */

import * as t from 'io-ts'

/**
 * Naming rules:
 * can't find them! So I'm going to reuse the SQS Queue Name rules
 */

/**
 * Note: I can't find the naming rules on lambda functions,
 * so I'm reusing the SQS queue name rules.
 * Pull requests welcome!
 *
 * A lambda function name can have up to 80 characters. The following
 * characters are accepted: alphanumeric characters, hyphens (-), and
 * underscores (_).
 *
 * @since 0.0.9
 */
export const lambdaFunctionNameRegex = (): string => '[-a-zA-Z0-9_]{1,80}'

/**
 * @since 0.0.9
 */
export interface LambdaFunctionNameBrand {
  readonly LambdaFunctionName: unique symbol
}

/**
 * @since 0.0.9
 */
export const LambdaFunctionName = t.brand(
  t.string,
  (s): s is t.Branded<string, LambdaFunctionNameBrand> =>
    RegExp('^' + lambdaFunctionNameRegex() + '$').test(s),
  'LambdaFunctionName',
)

/**
 * @since 0.0.9
 */
export type LambdaFunctionName = t.TypeOf<typeof LambdaFunctionName>
