
import { FlashMessage, FlashVariant } from '@/types/FlashMessageTypes';

const state_classes: { [key in FlashVariant] : string } = {
  'positive' : 'bg-emerald-50 border-emerald-950/10 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-50 dark:border-emerald-700',
  'negative' : 'bg-rose-50 border-rose-950/10 text-rose-800 dark:bg-rose-800 dark:text-rose-50 dark:border-rose-700',
  'alert' : 'bg-amber-50 border-amber-950/10 text-amber-800 dark:bg-amber-800 dark:text-amber-50 dark:border-amber-700',
}

export default function FlashMessage({ message }: {message: FlashMessage}){
  return (
    <div className={"border-y md:border-x md:bottom-8 w-fit md:rounded-xl right-0 md:right-8 z-30 px-6 flex items-center h-[56px] md:h-[44px] shadow-md shadow-zinc-950/10 gap-3 " + state_classes[message.state]}>
      {message.label}
    </div>
  )
}