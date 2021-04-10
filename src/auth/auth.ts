/**
 * Taken from Azure's sample b2c app:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js
 */

import { EndSessionRequest, SilentRequest } from '@azure/msal-browser';

import { tokenRequest } from './authConfig';

export function getAccountId(): string {
  return window.myMSALObj.getAllAccounts()[0]?.homeAccountId;
}

export async function signInPopup(): Promise<void> {
  try {
    const response = await window.myMSALObj.loginPopup();
    console.log('Successfully logged in via Popup. Response: ', response);
  } catch (error) {
    console.log('Error on account popup sign in: ', error);
  }
}

export async function signInRedirect(): Promise<void> {
  try {
    await window.myMSALObj.loginRedirect();
  } catch (error) {
    console.log('Error on account redirect sign in: ', error);
  }
}

export function signOut(): void {
  const currentAcc = window.myMSALObj.getAccountByHomeId(getAccountId());
  window.myMSALObj.logout(currentAcc as EndSessionRequest);
}

export async function getAccessTokenSilent(): Promise<void> {
  const account = await window.myMSALObj.getAccountByHomeId(getAccountId());

  const requestWithAccount = {
    ...tokenRequest,
    account,
  };

  try {
    await window.myMSALObj.acquireTokenSilent(
      requestWithAccount as SilentRequest
    );
  } catch (error) {
    throw new Error(error);
  }
}
