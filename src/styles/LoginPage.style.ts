import { css } from 'lit-element';

export const style = css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-size: 1rem;
  }

  img {
    max-height: 7vh;
  }

  main {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
    height: 50vh;
    width: 40vh;
    box-shadow: 0 0 10px #aaa;
    overflow: auto;
  }

  paper-button {
    width: 80%;
    background-color: #2483c5;
    color: #f4ede6;
    text-transform: none;
    font-size: 1rem;
    margin: 10px;
  }

  .label-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 15vh;
    color: #213f4d;
    font-weight: bold;
  }

  .login-buttons__container {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }
`;
