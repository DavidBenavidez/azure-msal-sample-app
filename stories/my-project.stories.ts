import { html, TemplateResult } from 'lit-html';
import '../src/my-project.js';

export default {
  title: 'MyProject',
  component: 'my-project',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <my-project style="--my-project-background-color: ${backgroundColor}" .title=${title}></my-project>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
