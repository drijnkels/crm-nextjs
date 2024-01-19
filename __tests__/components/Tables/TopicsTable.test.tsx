import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

import { mockTopics } from "../../mocks/TopicsDataMock";
import TopicsTable from "@/components/Tables/TopicsTable";
import {TopicHeaderName} from "@/types/TopicTypes";

const headers: Array<TopicHeaderName> = ['title', 'organisation_name', 'community_name', 'num_views', 'status', 'created_on', 'url'];

describe('Topics table test', () => {

  beforeEach(() => {
    render (
      <TopicsTable title="Topics" headers={headers} rows={mockTopics} loading_message="Loading topics" />
    );
  });

  afterEach(cleanup);

  it('Does table render correctly', () => {
    expect(screen.getByText('Title')).toBeDefined();
    expect(screen.getByText('Organisation')).toBeDefined();
    expect(screen.getByText('Community')).toBeDefined();
    expect(screen.getByText('Views')).toBeDefined();
    expect(screen.getByText('Status')).toBeDefined();
    expect(screen.getByText('Created')).toBeDefined();
    expect(screen.getAllByText('View')).toBeDefined();
    expect(screen.getAllByText('View').length).toEqual(6);
  })

  it('Data is shown', () => {
    expect(screen.getByText('Cultivating a Healthy Workplace: Strategies for Boosting Employee Wellbeing')).toBeDefined();
    expect(screen.getByText('EcoLogiX Solutions')).toBeDefined();
    expect(screen.getByText(9)).toBeDefined();
    expect(screen.getByText(14)).toBeDefined();
    expect(screen.getByText('Not live')).toBeDefined();
    expect(screen.getAllByText('Live').length).toEqual(4)
  })

  it('Urls are formatted correctly', () => {
    const links = screen.getAllByRole('link', { name: /View/i});
    expect(links[4].getAttribute('href')).toBe('/topics/rtasyrtasdyrty')
  })
})