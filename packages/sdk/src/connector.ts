import { client } from './client';
import { Options } from './types';
import * as methods from './methods/index';

/**
 * Connector methods.
 */
type Methods = typeof methods;

/**
 * Initialize the emporix connector.
 */
export const emporixConnector = (options: Options): Methods => {
  client.defaults.baseURL = options.apiUrl;

  return methods;
};
