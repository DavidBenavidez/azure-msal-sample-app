import { html, fixture, expect } from '@open-wc/testing';

import { MyProject } from '../src/MyProject.js';
import '../src/my-project.js';

describe('MyProject', () => {
  let element: MyProject;
  beforeEach(async () => {
    element = await fixture(html`<my-project></my-project>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
