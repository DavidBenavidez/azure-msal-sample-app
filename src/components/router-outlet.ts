import { LitElement, html, customElement, TemplateResult } from 'lit-element';
import { outlet } from 'lit-element-router';

@customElement('router-outlet')
export class RouterOutlet extends outlet(LitElement) {
  render(): TemplateResult {
    return html` <slot></slot> `;
  }
}
