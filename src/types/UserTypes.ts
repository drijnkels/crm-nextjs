import {Community} from "@/types/CommunityTypes";
import {Topic} from "@/types/TopicTypes";
import {Organisation} from "@/types/OrganisationTypes";
import {Header} from "@/types/GeneralTypes";

export type User = {
    eid: string,
    name: string,
    email: string,
    avatar: string,
    topics: Topic[],
    num_topics?: number,
    active: string,
    communities: Community[],
    organisations: Organisation[],
    last_login: string,
    joined_on: string,
    url: string,
}

export type UserHeaderName = 'name' | 'email' | 'num_topics' | 'active' | 'last_login' | 'joined_on' | 'created_on' | 'url'

// Define allowed headers
export type UserTableHeaders = {
    [key in UserHeaderName ] : Header
}

export type UserForTable = Pick<User, 'eid' | 'name' | 'email' | 'num_topics' | 'active' | 'last_login' | 'joined_on' | 'url'>;