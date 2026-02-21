import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Chip } from '@/shared/ui/chip';
import { fn } from 'storybook/test';

const meta = {
  title: 'UI/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    onDelete: fn(),
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ReadMode: Story = {
  args: {
    label: '읽기 전용',
    onDelete: undefined,
  },
};

export const WriteMode: Story = {
  args: {
    label: '수정 가능',
  },
};
