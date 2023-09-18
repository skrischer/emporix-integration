import { emporixConnector } from './connector';
import type { Options } from './types';
import type { Module } from '@vue-storefront/sdk';

/**
 * Emporix module type.
 */
export interface EmporixSdkModule extends Module {
  /**
   * The connector of the emporix module.
   */
  connector: ReturnType<typeof emporixConnector>;
}

/**
 * Emporix module.
 */
export const emporixSdkModule = (options: Options): EmporixSdkModule => ({
  connector: emporixConnector({
    apiUrl: options.apiUrl,
  }),
  utils: {},
  subscribers: {},
});

export { client } from './client';

export * from './types';
