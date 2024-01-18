import {Community} from "@/types/CommunityTypes";
import {Topic} from "@/types/TopicTypes";
import {Organisation} from "@/types/OrganisationTypes";

export type User = {
    eid: string,
    name: string,
    email: string,
    avatar: string,
    topics: Topic[],
    communities: Community[],
    organisations: Organisation[]
}