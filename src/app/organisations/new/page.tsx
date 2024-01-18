import { Metadata} from "next";
import Layout from "@/components/Layout/Layout";
import Text from "@/components/Text/Text";
import ManageOrganisation from "@/components/Forms/ManageOrganisation";

export const metadata: Metadata = {
    title: 'Create a new organisation',
}

export default function NewOrganisation(){
    const organisation = {
        eid: '',
        name: '',
        street: '',
        city: '',
        state: '',
        postal: '',
        province: '',
        country: 'USA',
        email: '',
        web: '',
        phone: '',
        description: '',
        communities: []
    };

    return (
        <Layout page_name={'Organisations / Create new'} current_page='organisations' return_option={{label: '<- Back to organisations', url: '/organisations'}}>
            <div>
                <Text variant="heading1">Create a new organisation</Text>
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
                submit_url={'/organisations'}
                feedback={{pos: " organisation was created", neg: "Could not create the organisations"}}
            />
        </Layout>
    )
}