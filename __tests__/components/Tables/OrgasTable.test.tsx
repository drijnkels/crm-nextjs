import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

import { mockOrganisations } from "../../mocks/OrganisationsDataMock";
import OrgasTable from "@/components/Tables/OrgasTable";
import {OrgaHeaderName} from "@/types/OrganisationTypes";

const headers: Array<OrgaHeaderName> = ['name', 'city', 'num_users', 'num_topics', 'url'];

describe('Orga table test', () => {

  beforeEach(() => {
    render (
      <OrgasTable title="Organisations" headers={headers} rows={mockOrganisations} loading_message="Loading organisations" />
    );
  });

  afterEach(cleanup);

  it('Does table render correctly', () => {
    expect(screen.getByText('Name')).toBeDefined();
    expect(screen.getByText('City')).toBeDefined();
    expect(screen.getByText('Users')).toBeDefined();
    expect(screen.getByText('Topics')).toBeDefined();
    expect(screen.getAllByText('View')).toBeDefined();
    expect(screen.getAllByText('View').length).toEqual(6);
  })

  it('Data is shown', () => {
    expect(screen.getByText('EcoLogiX Solutions')).toBeDefined();
    expect(screen.getByText(1)).toBeDefined();
    expect(screen.getByText(5)).toBeDefined();
    expect(screen.getByText(6)).toBeDefined();
    expect(screen.getByText(10)).toBeDefined();
  })

  it('Urls are formatted correctly', () => {
    const links = screen.getAllByRole('link', { name: /View/i});
    expect(links[0].getAttribute('href')).toBe('/organisations/knrbpkdwne')
  })
})