import { LitElement, html, customElement, TemplateResult } from 'lit-element';
import { style } from '../styles/HomePage.style';

@customElement('home-page')
export class HomePage extends LitElement {
  static styles = style;

  render(): TemplateResult {
    return html` <h1>Home page</h1> `;
  }
}
