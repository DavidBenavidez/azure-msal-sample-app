import { LitElement, html, property, TemplateResult } from 'lit-element';
import { router } from 'lit-element-router';

import { getAccessTokenSilent } from './auth/auth';
import { ROUTER_CONFIG } from './config';
import './components/router-outlet';
import './components/loader-spinner';
import './pages/login-page';

type PageConfig = {
  import: () => void;
};

@router
export class MyProject extends LitElement {
  static routes = ROUTER_CONFIG;

  @property({ type: Boolean }) isLoading = false;
  @property({ type: Boolean }) isLoggedIn = false;
  @property({ type: Object }) params = {};
  @property({ type: Object }) query = {};
  @property({ type: String }) route = '';
  @property({ type: String }) title = 'Sample App';

  async firstUpdated() {
    await this.checkIfLoggedIn();
  }

  router(
    route: string,
    params: Record<string, string>,
    query: Record<string, string>,
    data: PageConfig
  ): void {
    data.import();

    this.route = route;
    this.params = params;
    this.query = query;
  }

  render(): TemplateResult {
    if (this.isLoading) {
      return html` <loader-spinner></loader-spinner> `;
    }

    if (!this.isLoggedIn) {
      return html`
        <login-page @verify-login=${this.checkIfLoggedIn}></login-page>
      `;
    }

    return html`
      <router-outlet active-route=${this.route}>
        <home-page route="home"></home-page>
        <about-page route="about"></about-page>
      </router-outlet>
    `;
  }

  private async checkIfLoggedIn() {
    this.isLoading = true;

    try {
      await getAccessTokenSilent();
      this.isLoggedIn = true;
    } catch (error) {
      console.log('Token acquisition failed: ', error);
      this.isLoggedIn = false;
    } finally {
      this.isLoading = false;
    }
  }
}
