import Layout from "@/components/Layout/Layout";
import TopicsTable from "@/components/Tables/TopicsTable";
import { convertDateString } from "@/scripts/utils";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Topics',
}

export default function Topics() {
  const topics = {
    title: 'Topics',
    headers: ['title', 'organisation', 'community', 'views', 'status','created_on', 'url'],
    rows: [
      {title: 'Green Sourcing for a Bright Tomorrow', organisation: "EcoLogiX Solutions", community: "CollabNet", views: 9, collaborations: 6, status: 'Live', created_on: convertDateString('2023-11-12 09:13:56'), url: '/topics/asdasdsaa'},
      {title: 'Navigating the Digital Frontier: Proven Strategies for Success', organisation: "DigitalVista Labs", community: "BusinessLink Pro", views: 14, collaborations: 2, status: 'Live', created_on: convertDateString('2023-11-10 13:52:32'), url: '/topics/ghkjghjghj'},
      {title: 'Cultivating a Healthy Workplace: Strategies for Boosting Employee Wellbeing', organisation: "WellnessWorks Pro", community: "IndustryInsights", views: 21, collaborations: 12, status: 'Live', created_on: convertDateString('2023-11-10 11:02:26'), url: '/topics/rtyrtyrty'},
      {title: 'Global Growth Unleashed: Expanding Your E-commerce Empire', organisation: "MarketMasters International", community: "CollabNet", views: 3, collaborations: 0, status: 'Live', created_on: convertDateString('2023-11-09 16:05:21'), url: '/topics/rtyrtasdyarty'},
      {title: 'AI-Powered Customer Care: Transforming Customer Experiences', organisation: "IntelliServe Innovations", community: "BusinessLink Pro", views: 50, collaborations: 22, status: 'Live', created_on: convertDateString('2023-11-09 13:32:45'), url: '/topics/rtasyrtasdyrty'},
    ]};
  return (
    <Layout page_name="Topics" current_page="topics"  action={{label: 'Create', url: `/topics/new`}}>
      <TopicsTable title={topics.title} headers={topics.headers} rows={topics.rows} loading_message="Loading topics" />
    </Layout>
  )
}