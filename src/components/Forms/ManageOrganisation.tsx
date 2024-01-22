'use client';

import { useEffect, useState } from "react";

import {useRouter} from "next/navigation";
import {SubmitHandler, useForm} from "react-hook-form";
import useFlashStore from "@/stores/useFlashStore";
import {FlashMessage} from "@/types/FlashMessageTypes";
import {CommunityForForm} from "@/types/CommunityTypes";

import Form from "@/components/Form/Form";
import Section from "@/components/Layout/Section";
import Text from "@/components/Text/Text";
import Input from "@/components/Form/Input";
import Button from "@/components/Form/Button";
import Textarea from "@/components/Form/Textarea";
import SearchAdd from "@/components/Form/SearchAdd";

type FormValues = {
    eid: string,
    name: string,
    street: string,
    city?: string,
    state: string,
    postal: string,
    province: string,
    country: string,
    email: string,
    web: string,
    phone: string,
    description: string,
    communities: CommunityForForm[],
    community_eids?: string[],
    submit_url: string,
    feedback: {pos: string, neg?: string}
};

export default function ManageOrganisation ({eid, name, street, city, state, postal, province, country, email, web, phone, description, communities, submit_url, feedback}: FormValues){
    const router = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>();
    const addMessage = useFlashStore(state => state.addMessage);

    // Handle submitting form data to server
    const onSubmit: SubmitHandler<FormValues> = data => {
        data.eid = eid;
        console.log(data);

        // Handle data submission here and state management
        const zustandMessage:FlashMessage = {label: data.name + feedback.pos, state: 'positive'};
        addMessage(zustandMessage)

        router.push(submit_url);
    };

    const communityList: CommunityForForm[] = [
        {eid: 'asdasdsaa', name: 'CollabNet', url: '/communities/asdasdsaa'},
        {eid: 'ghkjghjghj', name: 'BusinessLink Pro', url: '/communities/ghkjghjghj'},
        {eid: 'rtyrtyrty', name: 'IndustryInsights', url: '/communities/rtyrtyrty'},
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<CommunityForForm[]>([]);
    const [connectedCommunities, setConnectedCommunities] = useState<CommunityForForm[]>(communities);
    const [connectedCommIds, setConnectedCommIds] = useState<string[]>(communities.map((c) => c.eid));

    // Run a search through the possible communities,
    // Ignore currently added communities
    const handleSearch = () => {
        const newList = communityList.filter(
          (c) =>
            c.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 &&
            connectedCommIds.indexOf(c.eid) === -1);
        setSearchResults(newList);
    }
    const handleSearchTermChange = (newTerm: string) => {
        setSearchTerm(newTerm);
    }

    // Add a new community to the community list and store the eid in a separate variable for form submission
    const handleAddCommunity = (community: CommunityForForm) => {
        setSearchResults([]);
        const newCommunityList = [...connectedCommunities, community];
        setConnectedCommunities(newCommunityList);
        setConnectedCommIds(newCommunityList.map((c) => c.eid));
    }

    const handleRemoveCommunity = (community: CommunityForForm) => {
        setConnectedCommunities(connectedCommunities.filter((c) => c.eid != community.eid));
    }

    // Update the value of communities in the form
    useEffect(() => {
        setValue('community_eids', connectedCommIds);
    }, [connectedCommIds, setValue]);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Section>
                <Text variant={'heading2'}>Organisation information</Text>
                <Input label={'Name'} id={'name'} name={'name'} value={name} placeholder={'The name of the organisation'} register={register} required='Name is required' error={errors.name?.message} />
                <Textarea label="Description" id="description" name="description" value={description} placeholder="A short description about the organisation" register={register} required="Description is required" error={errors.description?.message} />
                <Input label={'Website'} id={'web'} name={'web'} value={web} placeholder={'https://organisation.com'} register={register} />
            </Section>

            <Section>
                <Text variant={'heading2'}>Contact info</Text>
                <Input label={'Street'} id={'street'} name={'street'} value={street} placeholder={'1000 Streetname'} register={register} />
                <Input label={'Postal'} id={'postal'} name={'postal'} value={postal} placeholder={'00000'} register={register} />
                <Input label={'City'} id={'city'} name={'city'} value={city} placeholder={'City'} register={register} />
                <Input label={'State'} id={'state'} name={'state'} value={state} placeholder={'State'} register={register} />
                <Input label={'Country'} id={'country'} name={'country'} value={country} placeholder={'USA'} register={register} />

                <Input label={'Phone'} id={'phone'} name={'phone'} value={phone} placeholder={'000-000-0000'} register={register} />
                <Input label={'Email'} id={'email'} name={'email'} value={email} placeholder={'info@organisation.com'} register={register} />
            </Section>

            <Section>
                <SearchAdd
                    label={'Search communities'}
                    placeholder={'Community name'}
                    searchTerm={searchTerm}
                    onSearch={handleSearch}
                    onSearchTermChange={handleSearchTermChange}
                />
                <div className='p-4 border border-zinc-300 rounded-lg mb-4 flex flex-col gap-2'>
                {
                    (searchResults.length > 0) ?
                        searchResults.map((community, index) =>
                            <div key={index} className='flex items-center gap-2'>
                                <div className='flex-1'>{community.name}</div>
                                <Button onClick={() => handleAddCommunity(community)}>Add</Button>
                            </div>
                        ) :
                        'Enter a name to start searching for communities'
                }
                </div>
                <div className='p-4 border border-zinc-300 rounded-lg'>
                    <div><b>Connected communities</b></div>
                    <input type='hidden' {...register('community_eids')} />
                    <div className='flex flex-col gap-2'>
                    {
                        (connectedCommunities.length > 0) ?
                            connectedCommunities.map((community, index) =>
                                <div key={index} className='flex items-center gap-2'>
                                    <div className='flex-1'>{community.name}</div>
                                    <Button onClick={() => handleRemoveCommunity(community)}>Remove</Button>
                                </div>
                            ) :
                            'No communities connected'
                    }
                    </div>
                </div>
            </Section>
            <Button type='submit'>Save</Button>
        </Form>
    )
}