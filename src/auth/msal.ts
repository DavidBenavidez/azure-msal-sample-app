import { PublicClientApplication } from '@azure/msal-browser';

import { msalConfig } from './authConfig';

// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
window.myMSALObj = new PublicClientApplication(msalConfig) || {};

declare global {
  interface Window {
    myMSALObj: any;
  }
}
