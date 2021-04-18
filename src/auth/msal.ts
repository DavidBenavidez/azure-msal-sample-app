import {
  AuthenticationResult,
  PublicClientApplication,
} from '@azure/msal-browser';

import { msalConfig } from './authConfig';

// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
window.myMSALObj = new PublicClientApplication(msalConfig) || {};

// Register Callbacks for Redirect flow
window.myMSALObj
  .handleRedirectPromise()
  .then(async (response: AuthenticationResult | null) => {
    if (response) {
      await window.myMSALObj.setActiveAccount(response.account);

      const loginPage = document
        .querySelector('my-project')
        ?.shadowRoot?.querySelector('login-page');

      loginPage?.dispatchEvent(
        new CustomEvent('verify-login', {
          bubbles: true,
          composed: true,
        })
      );
    }
  })
  .catch((error: Error) => {
    console.log('error in login via redirect');
    console.log(error);
  });

declare global {
  interface Window {
    myMSALObj: PublicClientApplication;
  }
}
