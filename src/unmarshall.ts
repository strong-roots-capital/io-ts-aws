/**
 * Convert a DynamoDB record into a JavaScript object.
 *
 * @param {any} data - The DynamoDB record
 * @param {unmarshallOptions} options - An optional configuration object for `unmarshall`
 */
export const unmarshall = (
  data: { [key: string]: AttributeValue },
  options?: unmarshallOptions
): { [key: string]: NativeAttributeValue } =>
  convertToNative({ M: data }, options) as { [key: string]: NativeAttributeValue };
