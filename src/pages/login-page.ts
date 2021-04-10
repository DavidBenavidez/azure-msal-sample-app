import { LitElement, html, customElement, TemplateResult } from 'lit-element';

import { style } from '../styles/LoginPage.style';

import '@polymer/paper-button';

import { signIn } from '../auth/auth';

@customElement('login-page')
export class LoginPage extends LitElement {
  static styles = style;

  render(): TemplateResult {
    return html`
      <main>
        <section class="label-container">
          <span> Login with </span>
          <img src="https://i.ibb.co/LrLtwck/AzureAD.png" />
        </section>
        <section class="login-buttons__container">
          <paper-button raised @click="${this.handleLoginPopup}"
            >Login by Popup</paper-button
          >
          <span> or </span>
          <paper-button raised @click="${this.handleLoginRedirect}"
            >Login by Redirect
          </paper-button>
        </section>
      </main>
    `;
  }

  /**
   * Trigger Sign up via popup
   * @event verify-login should trigger a function to verify if user has been logged in
   */
  private async handleLoginPopup(): Promise<void> {
    try {
      await signIn();
      console.log('Logged in successfully. Attempting to acquire token again');

      this.dispatchEvent(
        new CustomEvent('verify-login', {
          bubbles: true,
          composed: true,
        })
      );
    } catch (error) {
      console.log('Login Failed: ', error);
    }
  }

  /**
   * Trigger Sign up via redirect
   * @event verify-login should trigger a function to verify if user has been logged in
   */
  private async handleLoginRedirect(): Promise<void> {
    try {
      await signIn();
      console.log('Logged in successfully. Attempting to acquire token again');

      this.dispatchEvent(
        new CustomEvent('verify-login', {
          bubbles: true,
          composed: true,
        })
      );
    } catch (error) {
      console.log('Login Failed: ', error);
    }
  }
}
