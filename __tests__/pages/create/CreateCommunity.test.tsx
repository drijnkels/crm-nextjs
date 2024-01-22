import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import NewCommunity from "@/app/communities/new/page";

describe('CreateCommunity', () => {

  beforeEach(() => {
    render(
      <NewCommunity />
    );
  });

  it('should have a create community title', () => {
    expect(
      screen.getByText('Create a new community'),
    ).toBeDefined()
  })

  it('It should have the correct fields', () => {
    const fields = ['Community name', 'Community description', 'Joining this community requires admin approval', 'Users can invite new members','Topics need to be approved before they display','This community is public'];
    for (let field of fields) {
      expect(screen.getByText(field)).toBeDefined()
    }
  })

  it('should have a save button', () => {
    expect(
      screen.getByText('Save')
    ).toBeDefined()
  })

  it('should require a name and description', async () => {
    const button = screen.getByText('Save')
    await userEvent.click(button)

    expect(screen.getByText('Name is required')).toBeDefined()
    expect(screen.getByText('Description is required')).toBeDefined()
  })

});