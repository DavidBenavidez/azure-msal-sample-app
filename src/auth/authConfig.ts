import { AccountInfo } from '@azure/msal-browser';

// Config object to be passed to Msal on creation
export const msalConfig = {
  auth: {
    clientId: '6f0b9f22-5d90-4956-a26e-ff844086dc38',
    authority:
      'https://houseatreides.b2clogin.com/houseatreides.onmicrosoft.com/B2C_1_SignUpIn/',
    knownAuthorities: ['houseatreides.onmicrosoft.com'],
  },
  cache: {
    cacheLocation: 'sessionStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

interface TokenRequest {
  scopes: string[];
  forceRefresh: boolean;
  account?: AccountInfo;
}

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const tokenRequest: TokenRequest = {
  scopes: ['https://houseatreides.onmicrosoft.com/api/houses.read'],
  forceRefresh: false, // Set this to 'true' to skip a cached token and go to the server to get a new token
};
