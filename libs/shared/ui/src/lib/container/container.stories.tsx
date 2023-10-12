import type { Meta, StoryObj } from '@storybook/react';

import { Container } from './container';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

const meta: Meta<typeof Container> = {
  component: Container,
  title: 'Container',
};
export default meta;
type Story = StoryObj<typeof Container>;

export const Primary = {
  args: {
    children: 'Welcome to Container!',
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Container!/gi)).toBeTruthy();
  },
};
