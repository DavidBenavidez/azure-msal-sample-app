import { LitElement, html, customElement, TemplateResult } from 'lit-element';

import { style } from '../styles/HomePage.style';

@customElement('home-page')
export class HomePage extends LitElement {
  static styles = style;

  render(): TemplateResult {
    return html`
      <main>
        <h1>This is the home page</h1>
      </main>
    `;
  }
}
