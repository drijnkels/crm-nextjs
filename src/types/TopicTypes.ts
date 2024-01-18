import {Community} from "@/types/CommunityTypes";
import {User} from "@/types/UserTypes";
import {Organisation} from "@/types/OrganisationTypes";
import {Header} from "@/types/GeneralTypes";

export type Topic = {
    eid: string,
    title: string,
    content: string,
    user: User,
    organisation: Organisation,
    organisation_name: string,
    community: Community,
    community_name: string,
    views: View[],
    num_views: number,
    tags: string[],
    collaborations: number,
    status: string,
    url: string,
    created_on: string,
}

export type View = {
    user: string,
    organisation: string,
    created_on: Date,
    url: string
}

export type TopicHeaderName = 'title' | 'organisation_name' | 'community_name' | 'num_views' | 'status' | 'created_on' | 'url';

// Define allowed headers
export type TopicTableHeaders = {
    [key in TopicHeaderName ] : Header
}

export type TopicForTable = Pick<Topic, 'eid' | 'title' | 'organisation_name' | 'community_name' | 'num_views' | 'status' | 'created_on' | 'url'>;