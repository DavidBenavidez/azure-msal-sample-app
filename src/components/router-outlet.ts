import { LitElement, html, customElement, TemplateResult } from 'lit-element';
import { outlet } from 'lit-element-router';

@outlet
@customElement('router-outlet')
export class RouterOutlet extends LitElement {
  render(): TemplateResult {
    return html` <slot></slot> `;
  }
}
