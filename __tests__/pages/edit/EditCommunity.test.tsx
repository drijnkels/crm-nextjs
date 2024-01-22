import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import EditCommunity from "@/app/communities/[id]/edit/page";

describe('EditCommunity', () => {

  beforeEach(() => {
    render(
      <EditCommunity params={{id: 'asdasdasd'}} />
    );
  });

  it('should have an edit community title', () => {
    expect(
      screen.getByText(/Edit community:/i),
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
    const nameInput = screen.getByPlaceholderText('Community name');
    await userEvent.clear(nameInput);
    const descriptionInput = screen.getByPlaceholderText('Short description of the community');
    await userEvent.clear(descriptionInput);

    const button = screen.getByText('Save')
    await userEvent.click(button)

    expect(screen.getByText('Name is required')).toBeDefined()
    expect(screen.getByText('Description is required')).toBeDefined()
  })

});