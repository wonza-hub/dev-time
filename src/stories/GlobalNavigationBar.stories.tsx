import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import GlobalNavigationBar from '@/widgets/global-navigation-bar/ui/global-navigation-bar';

const meta = {
  title: 'Widgets/GlobalNavigationBar',
  component: GlobalNavigationBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    isLoggedIn: {
      control: 'boolean',
      description: '로그인 상태',
    },
  },
  decorators: [
    Story => (
      <div className="mx-0 pb-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof GlobalNavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Desktop (default)
export const Desktop: Story = {};
