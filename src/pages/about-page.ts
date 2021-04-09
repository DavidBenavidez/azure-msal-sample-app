import { LitElement, html, customElement, TemplateResult } from 'lit-element';

import { style } from '../styles/AboutPage.style';

@customElement('about-page')
export class AboutPage extends LitElement {
  static styles = style;

  render(): TemplateResult {
    return html`
      <main>
        <h1>This is the about page</h1>
      </main>
    `;
  }
}
