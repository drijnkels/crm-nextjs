import { Metadata} from "next";
import Layout from "@/components/Layout/Layout";
import Text from "@/components/Text/Text";
import ManageOrganisation from "@/components/Forms/ManageOrganisation";
import {convertDateString} from "@/scripts/utils";
import {Organisation} from "@/types/OrganisationTypes";

export const metadata: Metadata = {
    title: 'Create a new organisation',
}

export default function EditOrganisation(){
    const organisation: Organisation = {
        eid: 'knrbpkdwne',
        name: 'EcoLogiX Solutions',
        street: '124 Fulton St',
        city: 'New York',
        state: 'NY',
        postal: '10038',
        province: '',
        country: 'USA',
        email: 'info@ecologixsolutions.com',
        web: 'https://www.ecologixsolutions.com/',
        phone: '+12122670860',
        description: 'Empowering Business Excellence Through Green Innovations',
        communities: [
            {eid: 'asdasdsaa', name: 'CollabNet', url: '/communities/asdasdsaa'},
            {eid: 'ghkjghjghj', name: 'BusinessLink Pro', url: '/communities/ghkjghjghj'},
        ]
    };
    // const current_communities = organisation.communities.map((c) => c.eid);

    return (
        <Layout page_name={'Organisations / Create new'} current_page='organisations' return_option={{label: '<- Back to organisation', url: `/organisations/${organisation.eid}`}}>
            <div>
                <Text variant="heading1">Edit: {organisation.name}</Text>
            </div>

            <ManageOrganisation
                eid={organisation.eid}
                name={organisation.name}
                street={organisation.street}
                city={organisation.city}
                state={organisation.state}
                postal={organisation.postal}
                province={organisation.province}
                country={organisation.country}
                email={organisation.email}
                web={organisation.web}
                phone={organisation.phone}
                description={organisation.description}
                communities={organisation.communities}
                submit_url={`/organisations/${organisation.eid}`}
                feedback={{pos: " organisation was updated", neg: "Could not update the organisation"}}
            />
        </Layout>
    )
}