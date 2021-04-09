import {
  LitElement,
  html,
  customElement,
  TemplateResult,
  css,
  property,
} from 'lit-element';

@customElement('loader-spinner')
export class LoaderSpinner extends LitElement {
  static styles = css`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    main {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column wrap;
      width: 20vw;
    }

    .loader {
      margin: auto;
      border: 5px solid #f3f3f3; /* Light grey */
      border-top: 5px solid #2483c5; /* Blue */
      border-radius: 50%;
      width: 50px;
      height: 50px;
      -webkit-animation: spin 1s linear infinite;
      animation: spin 1s linear infinite;
      display: flex;
      margin: 15% 50%;
    }

    @-webkit-keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .message {
      color: var(--message-color);
    }
  `;

  @property({ type: String }) message = '';

  render(): TemplateResult {
    return html`
      <main>
        <div class="loader loader--black"></div>
        <span class="message">${this.message}</span>
      </main>
    `;
  }
}
