import { create } from 'zustand';
import { FlashMessage } from '@/types/FlashMessageTypes';

type FlashState = {
  messages: FlashMessage[];
  addMessage: (message: FlashMessage) => void,
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
  }
}))

export default useFlashStore;