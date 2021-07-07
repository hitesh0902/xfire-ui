import { Meta, Story } from '@storybook/react';
import XFButton, { XFButtonProps } from './XFButton';

export default { component: XFButton, title: 'XFButton' } as Meta;

const template: Story<XFButtonProps> = (args) => (
  <XFButton {...args}>{args.children}</XFButton>
);

export const XFButtonPrimary = template.bind({});
XFButtonPrimary.args = { variant: 'primary', children: 'primary' };

export const XFButtonSecondary = template.bind({});
XFButtonSecondary.args = { variant: 'secondary', children: 'secondary' };
