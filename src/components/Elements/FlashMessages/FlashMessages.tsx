'use client';

import useFlashStore from "@/stores/useFlashStore";
import FlashMessage from "./FlashMessage";

export default function FlashMessages(){
  const messages = useFlashStore(state => state.messages);

  console.log(messages);

  if (messages.length == 0){
    return ('')
  }

  return (
    <div className={"fixed bottom-4 right-4 flex flex-col items-center gap-3"}>
      {messages.map((message, index ) => <FlashMessage key={index} message={message} />)}
    </div>
  )
}