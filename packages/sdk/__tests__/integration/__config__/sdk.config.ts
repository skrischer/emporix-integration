import { initSDK, buildModule } from '@vue-storefront/sdk';
import { emporixSdkModule, EmporixSdkModule } from '../../../src';

const sdkConfig = {
  emporix: buildModule<EmporixSdkModule>(emporixSdkModule, {
    apiUrl: 'http://localhost:8181/emporix',
  }),
};

export const sdk = initSDK<typeof sdkConfig>(sdkConfig);
