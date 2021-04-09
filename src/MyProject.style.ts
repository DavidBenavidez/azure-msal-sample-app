import { css } from 'lit-element';

export const style = css`
  section.tabs {
    display: flex;
    justify-content: space-evenly;
    width: 100vw;
    height: 4vh;
    align-items: center;
  }

  button {
    border: none;
    outline: none;
  }

  .tab {
    flex-grow: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #213f4d;
    text-decoration: none;
  }

  .tab.sign-out {
    flex-grow: 0.1;
  }

  .tab:hover {
    cursor: pointer;
    background-color: #306568;
    color: white;
  }

  .tab[active] {
    background-color: #cf7651;
    color: white;
  }

  .tab[active] a {
    color: #f4ede6;
  }
`;
