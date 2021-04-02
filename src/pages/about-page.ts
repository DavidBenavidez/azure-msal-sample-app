import { LitElement, html, customElement, TemplateResult } from 'lit-element';
import { style } from '../styles/AboutPage.style';

@customElement('about-page')
export class AboutPage extends LitElement {
  static styles = style;

  render(): TemplateResult {
    return html` <h1>About page</h1> `;
  }
}
