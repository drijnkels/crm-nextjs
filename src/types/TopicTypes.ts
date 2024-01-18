import {Community} from "@/types/CommunityTypes";
import {User} from "@/types/UserTypes";
import {Organisation} from "@/types/OrganisationTypes";

export type Topic = {
    title: string,
    content: string,
    user: User,
    organisation: Organisation,
    community: Community,
    views: View[],
    tags: string[],
    collaborations: number,
    status: string,
    created_on: Date,
}

export type View = {
    user: string,
    organisation: string,
    created_on: Date,
    url: string
}