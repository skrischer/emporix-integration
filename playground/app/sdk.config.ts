import {emporixSdkModule, EmporixSdkModule} from '@medienwerft/emporix-sdk/src';
import { initSDK, buildModule } from '@vue-storefront/sdk';


const sdkConfig = {
  emporix: buildModule<EmporixSdkModule>(emporixSdkModule, {
    apiUrl: 'http://localhost:8181/emporix',
  }),
};

export const sdk = initSDK<typeof sdkConfig>(sdkConfig);
