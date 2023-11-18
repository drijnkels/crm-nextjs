import { create } from 'zustand';
import { FlashMessage } from '@/types/FlashMessageTypes';

type FlashState = {
  messages: FlashMessage[];
  addMessage: (message: FlashMessage) => void,
  removeFirst: () => void
}

const useFlashStore = create<FlashState>()((set) => ({
  messages: [],
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  removeFirst: () => set((state) => ({ messages: state.messages.slice(1, state.messages.length - 1)}))
}))

export default useFlashStore;