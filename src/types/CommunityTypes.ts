import {TopicForTable} from "@/types/TopicTypes";
import {OrganisationForTable} from "@/types/OrganisationTypes";
import {UserForTable} from "@/types/UserTypes";
import {Header} from "@/types/GeneralTypes";

export type Community = {
    eid: string,
    name: string,
    description: string,
    topics: TopicForTable[],
    organisations: OrganisationForTable[],
    users: UserForTable[],
    collaborations?: number,
    num_topics?: number,
    num_organisations?: number,
    num_users?: number,
    num_collaborations?: number,
    url?: string
    active?: string,
    settings?: CommunitySettings,
    created_on: string
}

export type CommunitySettings = {
    joining_requires_approval: boolean,
    topics_require_approval: boolean,
    public: boolean,
}

export type CommunityHeaderName = 'name' | 'active' | 'num_topics' | 'num_organisations' | 'num_users' | 'joined_on' | 'created_on' | 'url';

// Define allowed headers
export type CommunityTableHeaders = {
    [key in CommunityHeaderName ] : Header
}

export type CommunityForTable = Pick<Community, 'eid' | 'name' | 'num_topics' | 'num_users' | 'num_organisations' | 'url'>;