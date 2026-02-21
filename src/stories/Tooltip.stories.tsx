import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/tooltip';
import { Button } from '@/shared/ui/button';

const meta = {
  title: 'UI/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <Story />
      </Tooltip>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TooltipContent>
      <p>Plain tooltip</p>
    </TooltipContent>
  ),
};

export const Bottom: Story = {
  render: () => (
    <TooltipContent side="bottom">
      <p>Bottom tooltip</p>
    </TooltipContent>
  ),
};

export const Left: Story = {
  render: () => (
    <TooltipContent side="left">
      <p>Left tooltip</p>
    </TooltipContent>
  ),
};

export const Right: Story = {
  render: () => (
    <TooltipContent side="right">
      <p>Right tooltip</p>
    </TooltipContent>
  ),
};
