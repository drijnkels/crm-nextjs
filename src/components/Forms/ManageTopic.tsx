'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form';
import useFlashStore from "@/stores/useFlashStore";
import { FlashMessage } from '@/types/FlashMessageTypes';

import Text from "@/components/Text/Text";
import Section from '@/components/Layout/Section';
import Form from '@/components/Form/Form';
import Input from '@/components/Form/Input';
import Textarea from '@/components/Form/Textarea';
import Dropdown from "@/components/Form/Dropdown";
import Button from '@/components/Form/Button';
import {CommunityForForm} from "@/types/CommunityTypes";
import { OrganisationForForm} from "@/types/OrganisationTypes";
import SearchAdd from "@/components/Form/SearchAdd";
import {UserForForm} from "@/types/UserTypes";

type FormValues = {
  eid: string,
  submit_url: string,
  feedback: {pos: string, neg?: string}
  title: string;
  community: CommunityForForm | null;
  organisation: OrganisationForForm | null;
  user: UserForForm | null;
  content: string;
  tags: string[];
  status: string;
};

export default function ManageTopic ({ eid, submit_url, feedback, title, user, organisation, community, content, tags, status }: FormValues){
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const addMessage = useFlashStore(state => state.addMessage);

  // This data would be loaded from an external srouce
  const communityList: CommunityForForm[] = [
    {eid: 'asdasdsaa', name: 'CollabNet', url: '/communities/asdasdsaa'},
    {eid: 'ghkjghjghj', name: 'BusinessLink Pro', url: '/communities/ghkjghjghj'},
    {eid: 'rtyrtyrty', name: 'IndustryInsights', url: '/communities/rtyrtyrty'},
  ];
  const communityOptions = communityList.map((c) => ({label: c.name, value: c.eid}));

  // This data would be loaded from an external srouce
  const organisationList = [
    {eid: 'knrbpkdwne', name: 'EcoLogiX Solutions', url: '/organisations/knrbpkdwne'},
    {eid: 'naxrqaawqy', name: 'DigitalVista Labs', url: '/organisations/naxrqaawqy'},
    {eid: 'kegrpbiwwf', name: 'WellnessWorks Pro', url: '/organisations/kegrpbiwwf'},
    {eid: 'lgfjvnvxdh', name: 'MarketMasters International', url: '/organisations/lgfjvnvxdh'},
    {eid: 'aeljedumhf', name: 'IntelliServe Innovations', url: '/organisations/aeljedumhf'},
  ];
  const [selectedOrganisation, setSelectedOrganisation] = useState<OrganisationForForm | null>(organisation);

  // This data would be loaded from an external srouce
  const usersInOrga = [
    {eid: 'jzthhamhka', name: 'Sarah Johnson', email: 's.johnson@email.com', active: 'Not active', url: '/organisations/jzthhamhka'},
    {eid: 'jdatsxezfh', name: 'David Rodriguez', email: 'david.rodriguez@email.com', active: 'Active', url: '/organisations/jdatsxezfh'},
    {eid: 'lnpckskjpo', name: 'Emily Patel', email: 'emily.p@email.com', active: 'Active', url: '/organisations/lnpckskjpo'},
    {eid: 'jnslmrgahq', name: 'Michael Carter', email: 'm.carter@email.com', active: 'Active', url: '/organisations/jnslmrgahq'},
    {eid: 'qgnslmivlq', name: 'Lisa Anderson', email: 'lisa.anderson@email.com', active: 'Not active', url: '/organisations/qgnslmivlq'},
    {eid: 'knrjiyuwne', name: 'Daniel Wong', email: 'daniel.w@email.com', active: 'Active', url: '/organisations/knrjiyuwne'},
  ];
  const [selectedUser, setSelectedUser] = useState<UserForForm | null>(user);

  const onSubmit: SubmitHandler<FormValues> = data => {
    if (!selectedOrganisation) {
      return;
    }
    data.organisation = selectedOrganisation;
    data.user = selectedUser;
    console.log(data);

    // Handle data submission here and state management
    const zustandMessage:FlashMessage = {label: data.title + feedback.pos, state: 'positive'};
    addMessage(zustandMessage)

    router.push(submit_url);
  };

  // States for organisation search and user selection
  const [orgaSearchTerm, setOrgaSearchTerm] = useState("");
  const [orgaSearchResults, setOrgaSearchResults] = useState<OrganisationForForm[]>([]);
  const [userList, setUserList] = useState<UserForForm[]>([]);

  // Run a search through the possible communities,
  // Ignore currently added communities
  const handleOrgaSearch = () => {
    const newList: OrganisationForForm[] = organisationList.filter(
      (c) =>
        c.name.toLowerCase().indexOf(orgaSearchTerm.toLowerCase()) > -1);
    setOrgaSearchResults(newList);
  }
  const handleOrgaSearchTermChange = (newTerm: string) => {
    setOrgaSearchTerm(newTerm);
  }

  // Select an organisation and load its users so that a user can be connected too
  const handleSelectOrga = (new_organisation: OrganisationForForm) => {
    setOrgaSearchResults([]);
    setSelectedOrganisation(new_organisation);
    setUserList(usersInOrga);
  }

  // Select a user to be connected to this topic
  const handleSelectUser = (new_user: UserForForm) => {
    setSelectedUser(new_user)
  }

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
          {/* Connect a community to the Topic - required */}
          <Dropdown
            label='Community *'
            id='community'
            name='community'
            value={community ? community.eid : ''}
            options={communityOptions}
            register={register}
            required="Community is required"
            error={errors.community?.message}
          />

          {/* Connect an organisation to the Topic - required, hide the save button until an organisation is selected */}
          {(selectedOrganisation) ?

            <div>
              <div className='block mb-2 text-indigo-800 font-medium'>Selected organisation</div>
              <div className='p-4 border border-zinc-300 rounded-lg mb-4 flex flex-col gap-2'>{selectedOrganisation.name} </div>
            </div>

            :

            <div>
            <SearchAdd label={'Organisation*'} placeholder={'Organisation name'}
                       searchTerm={orgaSearchTerm} onSearchTermChange={handleOrgaSearchTermChange}
                       onSearch={handleOrgaSearch}/>
            <div className='p-4 border border-zinc-300 rounded-lg mb-4 flex flex-col gap-2'>
              {
                (orgaSearchResults.length > 0) ?
                  orgaSearchResults.map((organisation, index) =>
                    <div key={index} className='flex items-center gap-2'>
                      <div className='flex-1'>{organisation.name}</div>
                      <Button onClick={() => handleSelectOrga(organisation)}>Select</Button>
                    </div>
                  ) :
                  'Enter a name to start searching for organisations'
              }
            </div>
          </div>
          }

          {/* Optionally after selecting an organisation a user can be connected to the Topic  */}
          <div>
            <div className='block mb-2 text-indigo-800 font-medium'>Optionally: connect a user to this topic</div>
            <div className='p-4 border border-zinc-300 rounded-lg mb-4 flex flex-col gap-2'>
              {
                (selectedUser) ?
                  <div>{selectedUser.name}</div>
                :
                  (userList.length > 0) ?
                    userList.map((user, index) =>
                      <div key={index} className='flex items-center gap-2'>
                        <div className='flex-1'>{user.name} - {user.active}</div>
                        <Button onClick={() => handleSelectUser(user)}>Select</Button>
                      </div>
                    )
                  :
                    'Select an organisation to show users'
              }
            </div>
          </div>

        </div>
      </Section>

      {/* Hide the save button until an organisation is selected */}
      { (selectedOrganisation) ? <Button type='submit'>Save</Button> : ''}

    </Form>
  )
}