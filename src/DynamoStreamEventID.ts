/**
 * @since 0.0.5
 */

import * as t from 'io-ts'

/**
 * @since 0.0.5
 */
export interface DynamoStreamEventIDBrand {
  readonly DynamoStreamEventID: unique symbol
}

/**
 * @since 0.0.5
 */
export const DynamoStreamEventID = t.brand(
  t.string,
  (_): _ is t.Branded<string, DynamoStreamEventIDBrand> => true,
  'DynamoStreamEventID'
)

/**
 * @since 0.0.5
 */
export type DynamoStreamEventID = t.TypeOf<typeof DynamoStreamEventID>
