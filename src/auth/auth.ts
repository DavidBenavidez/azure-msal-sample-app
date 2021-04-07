/**
 * Taken from Azure's sample b2c app:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js
 */

import { EndSessionRequest, SilentRequest } from '@azure/msal-browser';

import { tokenRequest } from './authConfig';

export function getAccountId() {
  return window.myMSALObj.getAllAccounts()[0].homeAccountId;
}

export async function signIn() {
  await window.myMSALObj.loginPopup().catch(function (error: Error) {
    console.log('Error on account sign in: ', error);
  });
}

export function signOut() {
  const currentAcc = window.myMSALObj.getAccountByHomeId(getAccountId());
  window.myMSALObj.logout(currentAcc as EndSessionRequest);
}

export function getAccessTokenPopup() {
  const request = tokenRequest;
  window.myMSALObj.acquireTokenPopup(request).catch((error: Error) => {
    console.log(error);
  });
}

export async function getAccessTokenSilent() {
  const requestWithAccount = {
    ...tokenRequest,
    account: window.myMSALObj.getAccountByHomeId(getAccountId()),
  };

  try {
    await window.myMSALObj.acquireTokenSilent(
      requestWithAccount as SilentRequest
    );
  } catch (error) {
    throw new Error(error);
  }
}
