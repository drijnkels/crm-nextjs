import {TopicForTable} from "@/types/TopicTypes";
import {convertDateString} from "@/scripts/utils";

export const mockTopics: TopicForTable[] = [
  {eid: 'asdasdsaa', title: 'Green Sourcing for a Bright Tomorrow', organisation_name: "EcoLogiX Solutions", community_name: "CollabNet", num_views: 9, status: 'Live', created_on: convertDateString('2023-11-12 09:13:56'), url: '/topics/asdasdsaa'},
  {eid: 'hkjghjghj', title: 'Navigating the Digital Frontier: Proven Strategies for Success', organisation_name: "DigitalVista Labs", community_name: "BusinessLink Pro", num_views: 14, status: 'Live', created_on: convertDateString('2023-11-10 13:52:32'), url: '/topics/ghkjghjghj'},
  {eid: 'rtyrtyrty', title: 'Cultivating a Healthy Workplace: Strategies for Boosting Employee Wellbeing', organisation_name: "WellnessWorks Pro", community_name: "IndustryInsights", num_views: 21, status: 'Live', created_on: convertDateString('2023-11-10 11:02:26'), url: '/topics/rtyrtyrty'},
  {eid: 'tasdyarty', title: 'Global Growth Unleashed: Expanding Your E-commerce Empire', organisation_name: "MarketMasters International", community_name: "CollabNet", num_views: 3, status: 'Not live', created_on: convertDateString('2023-11-09 16:05:21'), url: '/topics/rtyrtasdyarty'},
  {eid: 'rtasdyrty', title: 'AI-Powered Customer Care: Transforming Customer Experiences', organisation_name: "IntelliServe Innovations", community_name: "BusinessLink Pro", num_views: 50, status: 'Live', created_on: convertDateString('2023-11-09 13:32:45'), url: '/topics/rtasyrtasdyrty'},
];