import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import EditUser from "@/app/users/[id]/edit/page";

describe('EditUser', () => {

  beforeEach(() => {
    render(
      <EditUser params={{id: 'would_be_user_eid'}} />
    );
  });

  it('should have en edit user title', () => {
    expect(
      screen.getByText('Edit user:'),
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

  it('should remove and add organisations', async () => {
    const removeButtons = screen.getAllByText('Remove');
    await userEvent.click(removeButtons[0]);
    const newNumRemoveButtons = screen.getAllByText('Remove');
    expect(removeButtons.length > newNumRemoveButtons.length).toBe(true);

    const searchInput = screen.getByPlaceholderText('Organisation name');
    const searchBtn = screen.getByText('Search');

    await userEvent.click(searchBtn);
    expect(screen.getAllByText('Select').length).toBeGreaterThan(0);

    const addOrgaBtn = screen.getAllByText('Select');
    await userEvent.click(addOrgaBtn[0]);

    expect(screen.getByText('Enter a name to start searching for organisations')).toBeDefined()
    expect( screen.getAllByText('Remove') > newNumRemoveButtons).toBeDefined()

    // Save button
    expect(screen.getByText('Save')).toBeDefined()
  })

  it('should have a save button', async () => {
    // Save button
    expect(screen.getByText('Save')).toBeDefined()
  })

  it('should require a name and email', async () => {
    const nameInput = screen.getByPlaceholderText('Bob Dylan');
    const descriptionInput = screen.getByPlaceholderText('b.dylan@email.com');

    await userEvent.clear(nameInput);
    await userEvent.clear(descriptionInput)

    const button = screen.getByText('Save')
    await userEvent.click(button)

    expect(screen.getByText('Name is required')).toBeDefined()
    expect(screen.getByText('Email is required')).toBeDefined()
  })

});