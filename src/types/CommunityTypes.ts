import {Topic} from "@/types/TopicTypes";
import {Organisation} from "@/types/OrganisationTypes";
import {User} from "@/types/UserTypes";

export type Community = {
    eid: string,
    name: string,
    topics?: Topic[],
    organisations?: Organisation[],
    users?: User[],
    collaborations?: number,
    num_topics?: number,
    num_organisations?: number,
    num_users?: number,
    num_collaborations?: number,
    url?: string
    active?: string,
    created_on?: Date
}
