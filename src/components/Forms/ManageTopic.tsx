'use client';

import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form';
import useFlashStore from "@/stores/useFlashStore";
import { FlashMessage } from '@/types/FlashMessageTypes';

import Text from "@/components/Text/Text";
import Section from '@/components/Layout/Section';
import Form from '@/components/Form/Form';
import Input from '@/components/Form/Input';
import Textarea from '@/components/Form/Textarea';
import Checkbox from '@/components/Form/Checkbox';
import Button from '@/components/Form/Button';

type FormValues = {
  eid: string,
  submit_url: string,
  feedback: {pos: string, neg?: string}
  title: string;
  user: string;
  organisation: string;
  community: string;
  content: string;
  tags: string[];
  status: string;
};

export default function ManageTopic ({ eid, submit_url, feedback, title, user, organisation, community, content, tags, status }: FormValues){
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const addMessage = useFlashStore(state => state.addMessage);

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);

    // Handle data submission here and state management
    const zustandMessage:FlashMessage = {label: data.title + feedback.pos, state: 'positive'};
    addMessage(zustandMessage)

    router.push(submit_url);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Section>
        <Text variant='heading2'>Topic</Text>
        <Input id="title" label="Topic title" name="title" value={title} type="text" placeholder="Topic title" register={register} required="Title is required" error={errors.title?.message} />
        <Textarea id="content" label="Topic content" name="content" value={content} placeholder="Content of this topic" register={register} required="Content is required" error={errors.content?.message} />
        <Textarea id="tags" label="Topic tags, seperated with a comma" name="tags" value={tags.join(', ')} placeholder="Tags for this topic" register={register} />
      </Section>

      <Section>
        <Text variant='heading2'>Settings</Text>
        <div className='py-4 px-6 rounded flex flex-col gap-2'>
          <Input id="community" label="Community this topic is visible in" name="community" value={community} type="text" placeholder="Community name" register={register} required="Community is required" error={errors.community?.message} />
          <Input id="organisation" label="Organisation this topic is connected to" name="organisation" value={organisation} type="text" placeholder="Organisation name" register={register} />
          <Input id="user" label="User connected to this topic" name="user" value={user} type="text" placeholder="User" register={register} required="A user is required" error={errors.user?.message} />
        </div>
      </Section>

      <Button type='submit'>Save</Button>
    </Form>
  )
}