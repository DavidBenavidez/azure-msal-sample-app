import { css } from 'lit-element';

export const style = css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-size: 1rem;
  }

  main {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
    height: 50vh;
    width: 30vh;
    box-shadow: 0 0 10px #aaa;
    overflow: auto;
  }

  img {
    max-height: 7vh;
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

  paper-button {
    width: 80%;
    background-color: #2483c5;
    color: #f4ede6;
  }
`;
