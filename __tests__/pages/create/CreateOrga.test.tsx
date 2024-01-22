import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import NewOrganisation from "@/app/organisations/new/page";

describe('CreateTopic', () => {

  beforeEach(() => {
    render(
      <NewOrganisation />
    );
  });

  it('should have a create organisation title', () => {
    expect(
      screen.getByText('Create a new organisation'),
    ).toBeDefined()
  })

  it('It should have the correct fields', () => {
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
    const commInput = screen.getByPlaceholderText('Community name');
    const searchBtn = screen.getByText('Search');

    await userEvent.click(searchBtn);
    expect(screen.getAllByText('Add').length).toBe(3);

    // Search a community
    await userEvent.type(commInput, 'col');
    await userEvent.click(searchBtn);
    expect(screen.getByText('CollabNet')).toBeDefined()

    const addOrgaBtn = screen.getByText('Add');
    await userEvent.click(addOrgaBtn);

    expect(screen.getByText('Enter a name to start searching for communities')).toBeDefined()
    expect(screen.getByText('Remove')).toBeDefined()

    // Save button
    expect(screen.getByText('Save')).toBeDefined()
  })

  it('should have a save button', async () => {
    // Save button
    expect(screen.getByText('Save')).toBeDefined()
  })

  it('should require a name and description', async () => {
    const button = screen.getByText('Save')
    await userEvent.click(button)

    expect(screen.getByText('Name is required')).toBeDefined()
    expect(screen.getByText('Description is required')).toBeDefined()
  })

});