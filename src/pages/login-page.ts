import { LitElement, html, customElement, TemplateResult } from 'lit-element';
import '@polymer/paper-button';

import { signIn } from '../auth/auth';
import { style } from '../styles/LoginPage.style';

@customElement('login-page')
export class LoginPage extends LitElement {
  static styles = style;

  render(): TemplateResult {
    return html`
      <h1>Login page</h1>
      <paper-button @click="${this.handleLogin}">Login</paper-button>
    `;
  }

  /**
   * Trigger Sign up via popup
   * @event verify-login should trigger function to verify if user has been logged in
   */
  private async handleLogin() {
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
