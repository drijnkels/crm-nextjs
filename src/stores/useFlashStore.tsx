import { create } from 'zustand';
import { FlashMessage } from '@/types/FlashMessageTypes';

type FlashState = {
  messages: FlashMessage[];
  addMessage: (message: FlashMessage) => void,
  removeFirst: () => void
}

/**
 * Todo: give message a random ID and use that in the filter function to delete the specific message
 */
const useFlashStore = create<FlashState>()((set) => ({
  messages: [],
  addMessage: (message) => {
    set((state) => ({ messages: [...state.messages, message] }));
    setTimeout(() => {
      set((state) => ({ messages: state.messages.filter((state_message) => state_message.label != message.label)}) )
    }, 5000)
  },
  removeFirst: () => set((state) => ({ messages: state.messages.slice(1, state.messages.length - 1)}))
}))

export default useFlashStore;