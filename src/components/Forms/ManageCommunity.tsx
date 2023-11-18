'use client';

import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form';
import useFlashStore from "@/stores/useFlashStore";

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
  name: string;
  description: string;
  joining_requires_approval: boolean;
  allow_invites: boolean;
  topics_require_approval: boolean;
  public_community: boolean;
};

export default function ManageCommunity ({ eid, submit_url, feedback, name, description, joining_requires_approval, allow_invites, topics_require_approval, public_community }: FormValues){
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const addMessage = useFlashStore(state => state.addMessage);

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
    // Handle data submission here and state management
    addMessage({label: data.name + feedback.pos, state: 'positive'})
    router.push(submit_url);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Section>
        <Text variant='heading2'>Data</Text>
        <Input id="name" label="Community name" name="name" value={name} type="text" placeholder="Community name" register={register} required="Name is required" error={errors.name?.message} />
        <Textarea id="description" label="Community description" name="description" value={description} placeholder="Short description of the community" register={register} required="Description is required" error={errors.description?.message} />
      </Section>

      <Section>
        <Text variant='heading2'>Settings</Text>
        <div className='py-4 px-6 rounded flex flex-col gap-2'>
          <Checkbox id="joining_requires_approval" name="joining_requires_approval" value={joining_requires_approval} placeholder='Joining this community requires admin approval' register={register} />
          <Checkbox id="allow_invites" name="allow_invites" value={allow_invites} placeholder='Users can invite new members' register={register} />
          <Checkbox id="topics_require_approval" name="topics_require_approval" value={topics_require_approval} placeholder='Topics need to be approved before they display' register={register} />
          <Checkbox id="public_community" name="public_community" value={public_community} placeholder='This community is public' register={register} />
        </div>
      </Section>

      <Button type='submit'>Save</Button>
    </Form>
  )
}