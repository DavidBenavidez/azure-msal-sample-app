import { html, TemplateResult } from 'lit-html';
import '../src/MyProject.js';

export default {
  title: 'MyProject',
  component: 'my-project',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
  (args: T): TemplateResult;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = () => html` <my-project></my-project> `;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
