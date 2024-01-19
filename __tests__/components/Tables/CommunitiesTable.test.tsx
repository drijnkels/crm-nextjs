import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import {CommunityHeaderName} from "@/types/CommunityTypes";

import { mockCommunities} from "../../mocks/CommunityDataMocks";
import CommunitiesTable from "@/components/Tables/CommunitiesTable";

const headers: Array<CommunityHeaderName> = ['name', 'num_topics', 'num_organisations', 'num_users', 'url'];

describe('Communities table test', () => {

  beforeEach(() => {
    render (
      <CommunitiesTable title="Communities" headers={headers} rows={mockCommunities} loading_message="Loading communities" />
    );
  });

  afterEach(cleanup);

  it('Does table render correctly', () => {
    expect(screen.getByText('Communities')).toBeDefined();
    expect(screen.getByText('Name')).toBeDefined();
    expect(screen.getByText('Topics')).toBeDefined();
    expect(screen.getByText('Organisations')).toBeDefined();
    expect(screen.getByText('Users')).toBeDefined();
    expect(screen.getAllByText('View')).toBeDefined();
    expect(screen.getAllByText('View').length).toEqual(4);
  })

  it('Data is shown', () => {
    expect(screen.getByText('CollabNet')).toBeDefined();
    expect(screen.getByText(9)).toBeDefined();
    expect(screen.getByText(2)).toBeDefined();
    expect(screen.getByText(56)).toBeDefined();
  })

  it('Urls are formatted correctly', () => {
    const communityLink = screen.getAllByRole('link', { name: /View/i});
    expect(communityLink[0].getAttribute('href')).toBe('/communities/asdasdsaa')
  })
})