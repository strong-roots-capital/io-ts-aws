/**
 * @since 0.0.24
 */

import * as t from 'io-ts'

/**
 * Naming rules:
 * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.NamingRules
 */

/**
 * Naming rules:
 *
 * 1. Table names must be between 3 and 255 characters long.
 * 2. Table names can consist only of lowercase letters, uppercase
 *    letters, numbers, dots (.), hyphens (-), and underscores (_).
 *
 * @example
 * import { DynamoTableName } from '@strong-roots-capital/io-ts-aws'
 * import { right } from 'fp-ts/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 *
 * assert.deepStrictEqual(
 *     DynamoTableName.decode('valid-TABLE_name.0123'),
 *     right('valid-TABLE_name.0123')
 * )
 *
 * assert.deepStrictEqual(
 *     PathReporter.report(DynamoTableName.decode('invalid::tableName')),
 *     ['Invalid value "invalid::tableName" supplied to : DynamoTableName']
 * )
 *
 * @since 0.0.24
 */
export const dynamoTableNameRegex = (): string => '[-_.a-zA-Z0-9]{3,255}'

/**
 * @since 0.0.24
 */
export interface DynamoTableNameBrand {
  readonly DynamoTableName: unique symbol
}

/**
 * @since 0.0.24
 */
export const DynamoTableName = t.brand(
  t.string,
  (s): s is t.Branded<string, DynamoTableNameBrand> =>
    RegExp('^' + dynamoTableNameRegex() + '$').test(s),
  'DynamoTableName',
)

/**
 * @since 0.0.24
 */
export type DynamoTableName = t.TypeOf<typeof DynamoTableName>
