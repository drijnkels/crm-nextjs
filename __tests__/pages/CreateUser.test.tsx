import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import NewUser from "@/app/users/new/page.tsx";

describe('NewUser', () => {

  beforeEach(() => {
    render(
      <NewUser />
    );
  });

  it('should have a create user title', () => {
    expect(
      screen.getByText('Create a new user'),
    ).toBeDefined()
  })

  it('It should have the correct fields', () => {
    const fields = ['Name *', 'Email *', 'About the user', 'Organisation*','Connected organisations'];
    for (let field of fields) {
      expect(screen.getByText(field)).toBeDefined()
    }

    const placeholders = ['Bob Dylan', 'b.dylan@email.com', 'A short about me description', 'Organisation name'];
    for (let field of placeholders) {
      expect(screen.getByPlaceholderText(field)).toBeDefined()
    }
  })

  it('should search and add organisations', async () => {
    const searchInput = screen.getByPlaceholderText('Organisation name');
    const searchBtn = screen.getByText('Search');

    await userEvent.click(searchBtn);
    expect(screen.getAllByText('Select').length).toBe(5);

    // Search a community
    await userEvent.type(searchInput, 'Digi');
    await userEvent.click(searchBtn);
    expect(screen.getByText('Select')).toBeDefined()
    expect(screen.getByText('DigitalVista Labs')).toBeDefined()

    const addOrgaBtn = screen.getByText('Select');
    await userEvent.click(addOrgaBtn);

    expect(screen.getByText('Enter a name to start searching for organisations')).toBeDefined()
    expect(screen.getByText('Remove')).toBeDefined()

    // Save button
    expect(screen.getByText('Save')).toBeDefined()
  })

  it('should have a save button', async () => {
    // Save button
    expect(screen.getByText('Save')).toBeDefined()
  })

  it('should require a name and email', async () => {
    const button = screen.getByText('Save')
    await userEvent.click(button)

    expect(screen.getByText('Name is required')).toBeDefined()
    expect(screen.getByText('Email is required')).toBeDefined()
  })

});