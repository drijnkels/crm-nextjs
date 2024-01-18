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
  eid: string
  submit_url: string
  feedback: {pos: string, neg?: string}
  name: string
  email: string
  description: string
  organisations: OrganisationForForm[]
};

export default function ManageUser ({ eid, submit_url, feedback, name, email, description, organisations }: FormValues){
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const addMessage = useFlashStore(state => state.addMessage);

  // This data would be loaded from an external srouce
  const organisationList = [
    {eid: 'knrbpkdwne', name: 'EcoLogiX Solutions', url: '/organisations/knrbpkdwne'},
    {eid: 'naxrqaawqy', name: 'DigitalVista Labs', url: '/organisations/naxrqaawqy'},
    {eid: 'kegrpbiwwf', name: 'WellnessWorks Pro', url: '/organisations/kegrpbiwwf'},
    {eid: 'lgfjvnvxdh', name: 'MarketMasters International', url: '/organisations/lgfjvnvxdh'},
    {eid: 'aeljedumhf', name: 'IntelliServe Innovations', url: '/organisations/aeljedumhf'},
  ];
  const [selectedOrganisation, setSelectedOrganisation] = useState<OrganisationForForm[] | null>(organisations);

  const onSubmit: SubmitHandler<FormValues> = data => {
    if (setConnectedOrganisations.length == 0) {
      return;
    }
    data.organisations = connectedOrganisations;
    console.log(data);

    // Handle data submission here and state management
    const zustandMessage:FlashMessage = {label: data.name + feedback.pos, state: 'positive'};
    addMessage(zustandMessage)

    router.push(submit_url);
  };

  // States for organisation search and user selection
  const [orgaSearchTerm, setOrgaSearchTerm] = useState("");
  const [orgaSearchResults, setOrgaSearchResults] = useState<OrganisationForForm[]>([]);
  const [connectedOrganisations, setConnectedOrganisations] = useState<OrganisationForForm[]>(organisations);
  const [connectedOrgaIds, setConnectedOrgaIds] = useState<string[]>(organisations.map((o) => o.eid));

  // Run a search through the possible communities,
  // Ignore currently added communities
  const handleOrgaSearch = () => {
    const newList: OrganisationForForm[] = organisationList.filter((c) => connectedOrgaIds.indexOf(c.eid) === -1);
    setOrgaSearchResults(newList);
  }
  const handleOrgaSearchTermChange = (newTerm: string) => {
    setOrgaSearchTerm(newTerm);
  }

  // Select an organisation and load its users so that a user can be connected too
  const handleSelectOrga = (new_organisation: OrganisationForForm) => {
    setOrgaSearchResults([]);
    const newOrganisationList = [...connectedOrganisations, new_organisation];
    setConnectedOrganisations(newOrganisationList);
    setConnectedOrgaIds(newOrganisationList.map((o) => o.eid));
  }

  const handleRemoveOrganisation = (organisation: CommunityForForm) => {
    setConnectedOrganisations(connectedOrganisations.filter((o) => o.eid != organisation.eid));
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Section>
        <Text variant='heading2'>User</Text>
        <Input id="name" label="Name *" name="name" value={name} type="text" placeholder="Bob Dylan" register={register} required="Name is required" error={errors.name?.message} />
        <Input id="email" label="Email *" name="email" value={email} type="text" placeholder="b.dylan@email.com" register={register} required="Email is required" error={errors.email?.message} />

        <Textarea id="description" label="About the user" name="description" value={description} placeholder="A short about me description" register={register} error={errors.description?.message} />

      </Section>

      <Section>
        <Text variant='heading2'>Organisations</Text>
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
          <div className='p-4 border border-zinc-300 rounded-lg'>
            <div><b>Connected organisations</b></div>
            <div className='flex flex-col gap-2'>
              {
                (connectedOrganisations.length > 0) ?
                  connectedOrganisations.map((organisation, index) =>
                    <div key={index} className='flex items-center gap-2'>
                      <div className='flex-1'>{organisation.name}</div>
                      <Button onClick={() => handleRemoveOrganisation(organisation)}>Remove</Button>
                    </div>
                  ) :
                  'No organisations connected'
              }
            </div>
          </div>
        </div>
      </Section>

      <Button type='submit'>Save</Button>

    </Form>
  )
}