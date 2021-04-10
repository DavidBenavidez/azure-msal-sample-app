import {
  LitElement,
  html,
  css,
  customElement,
  property,
  TemplateResult,
} from 'lit-element';

import '@dile/dile-hamburger/dile-hamburger.js';
import { navigator } from 'lit-element-router';

import { signOut } from '../auth/auth';

@customElement('nav-bar')
export class NavBar extends navigator(LitElement) {
  static styles = css`
    button {
      border: none;
      outline: none;
    }

    dile-hamburger {
      display: none;
      position: absolute;
      z-index: 3;
    }

    nav {
      display: none;
    }

    section.tabs {
      display: flex;
      justify-content: space-evenly;
      width: 100vw;
      height: 4vh;
      align-items: center;
    }

    .side-menu {
      display: none;
      flex-direction: column;
      padding-top: 10vh;
      height: 100vh;
      position: fixed;
      box-shadow: 0 0 10px #aaa;
      width: 40vw;
      background-color: white;
      z-index: 2;
    }

    .side-menu[hidden] {
      display: none;
    }

    .tab {
      flex-grow: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #213f4d;
      text-decoration: none;
    }

    .tab.sign-out {
      flex-grow: 0.1;
    }

    .tab:hover {
      cursor: pointer;
      background-color: #306568;
      color: white;
    }

    .tab[active] {
      background-color: #cf7651;
      color: white;
    }

    .tab[active] a {
      color: #f4ede6;
    }

    @media only screen and (max-width: 992px) {
      dile-hamburger {
        display: block;
      }

      .side-menu {
        display: flex;
      }
    }

    @media only screen and (min-width: 993px) {
      nav {
        display: block;
      }
    }
  `;

  @property({ type: String })
  private route = '';

  @property({ type: Boolean })
  private isBurgerActive = false;

  render(): TemplateResult {
    return html` ${this.renderHamburgerNavbar()} ${this.renderNavbar()} `;
  }

  private renderHamburgerNavbar(): TemplateResult {
    return html`
      <dile-hamburger
        .active=${this.isBurgerActive}
        @click=${this.toggleBurger}
      >
      </dile-hamburger>
      <section class="side-menu" ?hidden=${!this.isBurgerActive}>
        <paper-button
          @click="${() => this.handleBurgerNavigate('/')}"
          ?active=${this.route === 'home'}
          class="burger__button"
        >
          Home
        </paper-button>
        <paper-button
          @click="${() => this.handleBurgerNavigate('/about')}"
          class="burger__button"
        >
          About
        </paper-button>
        <paper-button @click="${this.handleSignOut}" class="burger__button">
          Sign Out
        </paper-button>
      </section>
    `;
  }

  private renderNavbar(): TemplateResult {
    return html`
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
          <div @click=${this.handleSignOut} class="tab sign-out">Sign Out</div>
        </section>
      </nav>
    `;
  }

  private handleBurgerNavigate(route: string) {
    this.isBurgerActive = false;
    this.navigate(route);
  }

  private handleSignOut(): void {
    this.navigate('/');
    signOut();
  }

  private toggleBurger(): void {
    this.isBurgerActive = !this.isBurgerActive;
  }
}
