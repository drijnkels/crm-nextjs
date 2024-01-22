import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import EditOrganisation from "@/app/organisations/[id]/edit/page";

describe('CreateTopic', () => {

  beforeEach(() => {
    render(
      <EditOrganisation params={{id: 'would_be_orga_eid'}} />
    );
  });

  it('should have a create organisation title', () => {
    expect(
      screen.getByText(/Edit:/i),
    ).toBeDefined()
  })

  it('should have the correct fields', () => {
    const fields = ['Name', 'Description', 'Website', 'Street','Postal','City', 'State', 'Country', 'Phone', 'Email', 'Search communities'];
    for (let field of fields) {
      expect(screen.getByText(field)).toBeDefined()
    }

    const placeholders = ['The name of the organisation', 'A short description about the organisation', 'https://organisation.com', '1000 Streetname', '00000', 'City', 'State', '000-000-0000', 'info@organisation.com', 'Community name'];
    for (let field of placeholders) {
      expect(screen.getByPlaceholderText(field)).toBeDefined()
    }
  })

  it('should search and add communities', async () => {
    const searchBtn = screen.getByText('Search')

    // Get the current list of communities so we can compare it to after we add a new one
    const current_communities = screen.getAllByText('Remove')

    // Search and add a new community
    await userEvent.click(searchBtn);
    const comm_options = screen.queryAllByText('Add')
    expect(comm_options.length).toBeGreaterThan(0)
    await userEvent.click(comm_options[0])

    // Get the new list of communities and test if there is an extra one now
    const new_communities = screen.getAllByText('Remove');
    expect(screen.getByText('Enter a name to start searching for communities')).toBeDefined()
    expect(new_communities.length - current_communities.length).toBe(1)

    // Save button
    expect(screen.getByText('Save')).toBeDefined()
  })

  it('should have a save button', async () => {
    // Save button
    expect(screen.getByText('Save')).toBeDefined()
  })

  it('should require a name and description', async () => {
    const nameInput = screen.getByPlaceholderText('The name of the organisation')
    const descriptionInput = screen.getByPlaceholderText('A short description about the organisation')

    await userEvent.clear(nameInput);
    await userEvent.clear(descriptionInput);

    const button = screen.getByText('Save')
    await userEvent.click(button)

    expect(screen.getByText('Name is required')).toBeDefined()
    expect(screen.getByText('Description is required')).toBeDefined()
  })

});