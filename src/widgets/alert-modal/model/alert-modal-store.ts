import { create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

type OpenState = {
  isOpen: true;
  title: string;
  body?: string;
  onPositive?: () => void;
  onNegative?: () => void;
};
type CloseState = {
  isOpen: false;
};
type AlertModalState = OpenState | CloseState;

const initialState = {
  isOpen: false,
} as AlertModalState;

const useAlertModalStore = create(
  devtools(
    combine(initialState, set => ({
      actions: {
        open: (params: Omit<OpenState, 'isOpen'>) => {
          set({ ...params, isOpen: true });
        },
        close: () => {
          set({ isOpen: false });
        },
      },
    })),
    { name: 'alert-modal-store' },
  ),
);

export const useOpenAlertModal = () => {
  return useAlertModalStore(state => state.actions.open);
};

export const useAlertModal = () => {
  const store = useAlertModalStore();
  return store as typeof store & AlertModalState;
};
