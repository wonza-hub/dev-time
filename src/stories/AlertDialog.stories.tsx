import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import AlertModal from '@/widgets/alert-modal/ui/alert-modal';
import { AlertDialogTrigger } from '@/shared/ui/alert-dialog';
import { Button } from '@/shared/ui/button';

const meta = {
  title: 'UI/AlertDialog',
  component: AlertModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>
        <Story />
      </>
    ),
  ],
  argTypes: {
    title: { control: 'text', description: '제목 텍스트' },
    body: { control: 'text', description: '본문 텍스트' },
    cancelText: { control: 'text', description: '취소 버튼 텍스트' },
    actionText: { control: 'text', description: '확인 버튼 텍스트' },
    onCancel: { action: 'clicked', description: '취소 버튼 클릭' },
    onAction: { action: 'clicked', description: '확인 버튼 클릭' },
  },
  args: {
    title: 'Title Text',
    cancelText: 'Button',
    actionText: 'Button',
  },
} satisfies Meta<typeof AlertModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title Text',
    body: 'Body Text',
  },
};

export const TitleOnly: Story = {
  args: {
    title: 'Title Text',
  },
};
