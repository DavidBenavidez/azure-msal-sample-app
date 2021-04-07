import {
  LitElement,
  html,
  customElement,
  TemplateResult,
  css,
} from 'lit-element';

@customElement('loader-spinner')
export class LoaderSpinner extends LitElement {
  static styles = css`
    .loader {
      margin: auto;
      border: 2px solid #f3f3f3; /* Light grey */
      border-top: 2px solid #3498db; /* Blue */
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin 1s linear infinite;
      display: flex;
      margin: 15% 50%;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .loader--black {
      border-top: 2px solid black;
    }
  `;

  render(): TemplateResult {
    return html` <div class="loader loader--black"></div> `;
  }
}
