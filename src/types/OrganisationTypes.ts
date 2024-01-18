import {Topic} from "@/types/TopicTypes";
import {User} from "@/types/UserTypes";
import {Community} from "@/types/CommunityTypes";
import {Header} from "@/types/GeneralTypes";

export type Organisation = {
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
    topics?: Topic[],
    users?: User[],
    communities: Community[],
    num_users?: number,
    num_topics?: number,
    active?: string,
    created_on?: string,
    url?: string
}

export type OrgaHeaderName = 'name' | 'city' | 'num_users' | 'num_topics' | 'active' | 'created_on' | 'url'

// Define allowed headers
export type OrgaTableHeaders = {
    [key in OrgaHeaderName ] : Header
}

export type OrganisationForTable = Pick<Organisation, 'eid' | 'name' | 'city' | 'num_users' | 'num_topics' | 'active' | 'created_on' | 'url'>;

export type OrganisationForForm = Pick<Community, 'eid' | 'name' | 'url'>