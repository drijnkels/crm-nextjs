import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import NewTopic from "@/app/topics/new/page.tsx";

describe('CreateTopic', () => {

  beforeEach(() => {
    render(
      <NewTopic />
    );
  });

  it('should have a create topic title', () => {
    expect(
      screen.getByText('Create a new Topic'),
    ).toBeDefined()
  })

  it('It should have the correct fields', () => {
    const fields = ['Topic title', 'Topic content', 'Topic tags, seperated with a comma', 'Community *','Organisation*','Optionally: connect a user to this topic'];
    for (let field of fields) {
      expect(screen.getByText(field)).toBeDefined()
    }

    const placeholders = ['Topic title', 'Content of this topic', 'Tags for this topic', 'Organisation name'];
    for (let field of placeholders) {
      expect(screen.getByPlaceholderText(field)).toBeDefined()
    }

    expect(screen.getByRole('combobox', { name: /community/i })).toBeDefined()
  })

  it('should have a save button after entering an organisation', async () => {

    const orgaInput = screen.getByPlaceholderText('Organisation name');
    const searchBtn = screen.getByText('Search');

    // Select a community
    const selectElement = screen.getByRole('combobox', { name: /community/i });
    // Simulate selecting an option
    fireEvent.change(selectElement, { target: { value: 'asdasdsaa' } });
    /* @ts-ignore */
    expect(selectElement.value).toBe('asdasdsaa');

    // Search an organisation
    await userEvent.type(orgaInput, 'col');
    await userEvent.click(searchBtn);
    expect(screen.getByText('EcoLogiX Solutions')).toBeDefined()

    // Select an organisation
    const selectOrgaBtn = screen.getByText('Select');
    await userEvent.click(selectOrgaBtn);

    // Select a user
    expect(screen.getByText('Sarah Johnson - Not active')).toBeDefined()
    expect(screen.getAllByText('Select').length).toBe(6)

    // Save button show
    expect(
      screen.getByText('Save')
    ).toBeDefined()
  })

  it('should require a title, content and organisation', async () => {
    // Search an organisation
    const searchBtn = screen.getByText('Search');
    await userEvent.click(searchBtn);
    expect(screen.getByText('EcoLogiX Solutions')).toBeDefined()

    // Select an organisation
    const selectOrgaBtn = screen.getAllByText('Select');
    await userEvent.click(selectOrgaBtn[0]);

    const button = screen.getByText('Save')
    await userEvent.click(button)

    expect(screen.getByText('Title is required')).toBeDefined()
    expect(screen.getByText('Content is required')).toBeDefined()
    expect(screen.getByText('Community is required')).toBeDefined()
  })

});