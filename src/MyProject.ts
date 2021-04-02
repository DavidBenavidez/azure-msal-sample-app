import { LitElement, html, property, TemplateResult } from 'lit-element';
import { router } from 'lit-element-router';

import { ROUTER_CONFIG } from './config';

import './components/router-outlet';

interface PageConfig {
  import: () => void;
}

@router
export class MyProject extends LitElement {
  static routes = ROUTER_CONFIG;

  @property({ type: String }) title = 'My app';
  @property({ type: String }) route = '';
  @property({ type: Object }) params = {};
  @property({ type: Object }) query = {};

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
    return html`
      <router-outlet active-route=${this.route}>
        <home-page route="home"></home-page>
        <about-page route="about"></about-page>
      </router-outlet>
    `;
  }
}
