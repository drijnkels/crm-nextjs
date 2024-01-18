import Layout from "@/components/Layout/Layout";
import TopicsTable from "@/components/Tables/TopicsTable";
import { convertDateString } from "@/scripts/utils";
import { Metadata } from 'next'
import {TopicForTable, TopicHeaderName} from "@/types/TopicTypes";

export const metadata: Metadata = {
  title: 'Topics',
}

export default function Topics() {
  const topics: TopicForTable[] = [
      {eid: 'asdasdsaa', title: 'Green Sourcing for a Bright Tomorrow', organisation_name: "EcoLogiX Solutions", community_name: "CollabNet", num_views: 9, status: 'Live', created_on: convertDateString('2023-11-12 09:13:56'), url: '/topics/asdasdsaa'},
      {eid: 'hkjghjghj', title: 'Navigating the Digital Frontier: Proven Strategies for Success', organisation_name: "DigitalVista Labs", community_name: "BusinessLink Pro", num_views: 14, status: 'Live', created_on: convertDateString('2023-11-10 13:52:32'), url: '/topics/ghkjghjghj'},
      {eid: 'rtyrtyrty', title: 'Cultivating a Healthy Workplace: Strategies for Boosting Employee Wellbeing', organisation_name: "WellnessWorks Pro", community_name: "IndustryInsights", num_views: 21, status: 'Live', created_on: convertDateString('2023-11-10 11:02:26'), url: '/topics/rtyrtyrty'},
      {eid: 'tasdyarty', title: 'Global Growth Unleashed: Expanding Your E-commerce Empire', organisation_name: "MarketMasters International", community_name: "CollabNet", num_views: 3, status: 'Live', created_on: convertDateString('2023-11-09 16:05:21'), url: '/topics/rtyrtasdyarty'},
      {eid: 'rtasdyrty', title: 'AI-Powered Customer Care: Transforming Customer Experiences', organisation_name: "IntelliServe Innovations", community_name: "BusinessLink Pro", num_views: 50, status: 'Live', created_on: convertDateString('2023-11-09 13:32:45'), url: '/topics/rtasyrtasdyrty'},
    ];

  const headers: Array<TopicHeaderName> = ['title', 'organisation_name', 'community_name', 'num_views', 'status','created_on', 'url'];
  return (
    <Layout page_name="Topics" current_page="topics"  action={{label: 'Create', url: `/topics/new`}}>
      <TopicsTable title='Topics' headers={headers} rows={topics} loading_message="Loading topics" />
    </Layout>
  )
}