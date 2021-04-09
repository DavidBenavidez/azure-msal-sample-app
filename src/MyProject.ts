import { LitElement, html, property, TemplateResult } from 'lit-element';
import { router, navigator } from 'lit-element-router';

// Style
import { style } from './MyProject.style';

// Components
import './components/app-link';
import './components/router-outlet';
import './components/loader-spinner';
import './pages/login-page';

// Utils
import { getAccessTokenSilent, signOut } from './auth/auth';
import { ROUTER_CONFIG } from './config';

type PageConfig = {
  import: () => void;
};

@router
export class MyProject extends navigator(LitElement) {
  static styles = style;
  static routes = ROUTER_CONFIG;

  @property({ type: Object })
  params = {};

  @property({ type: Object })
  query = {};

  @property({ type: String })
  readonly title = 'Sample App';

  @property({ type: Boolean })
  private isLoading = false;

  @property({ type: Boolean })
  private isLoggedIn = false;

  @property({ type: String })
  private loaderMessage = '';

  @property({ type: String })
  private route = '';

  async firstUpdated(): Promise<void> {
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
      return html`
        <loader-spinner .message=${this.loaderMessage}></loader-spinner>
      `;
    }

    if (!this.isLoggedIn) {
      return html`
        <login-page @verify-login=${this.handleSignIn}></login-page>
      `;
    }

    return html`
      ${this.renderHeader()}
      <router-outlet active-route=${this.route}>
        <home-page route="home"></home-page>
        <about-page route="about"></about-page>
      </router-outlet>
    `;
  }

  private renderHeader(): TemplateResult {
    return html`
      <header>
        <nav>
          <section class="tabs">
            <button
              @click="${() => this.navigate('/')}"
              class="tab"
              ?active=${this.route === 'home'}
            >
              Home
            </button>
            <button
              @click="${() => this.navigate('/about')}"
              class="tab"
              ?active=${this.route === 'about'}
            >
              About
            </button>
            <div @click=${this.handleSignOut} class="tab sign-out">
              Sign Out
            </div>
          </section>
        </nav>
      </header>
    `;
  }

  private async checkIfLoggedIn(): Promise<void> {
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

  private handleSignIn(): void {
    this.loaderMessage = 'Verifying login...';
    this.checkIfLoggedIn();
  }

  private handleSignOut(): void {
    this.navigate('/');
    signOut();
  }
}
