import {Topic} from "@/types/TopicTypes";
import {User} from "@/types/UserTypes";
import {Community} from "@/types/CommunityTypes";

export type Organisation = {
    eid: string,
    name: string,
    street: string,
    city: string,
    state: string,
    postal: string,
    province: string,
    country: string,
    email: string,
    web: string,
    phone: string,
    description: string,
    topics?: Topic[],
    users?: User[],
    communities: Community[],
    num_users?: number,
    num_topics?: number,
    active?: string,
    created_on?: Date | string,
    url?: string
}

export type OrganisationForTable = Pick<Organisation, 'eid'| 'name'| 'num_users' | 'num_topics' | 'active' | 'url'>;