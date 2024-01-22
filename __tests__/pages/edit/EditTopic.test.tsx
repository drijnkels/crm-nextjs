import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import EditTopic from "@/app/topics/[id]/edit/page";

describe('EditTopic', () => {

  beforeEach(() => {
    render(
      <EditTopic params={{id: 'would_be_topic_eid'}} />
    );
  });

  it('should have an edit topic title', () => {
    expect(
      screen.getByText('Edit topic:'),
    ).toBeDefined()
  })

  it('It should have the correct fields', () => {
    const fields = ['Topic title', 'Topic content', 'Topic tags, seperated with a comma', 'Community *','Optionally: connect a user to this topic'];
    for (let field of fields) {
      expect(screen.getByText(field)).toBeDefined()
    }

    const placeholders = ['Topic title', 'Content of this topic', 'Tags for this topic'];
    for (let field of placeholders) {
      expect(screen.getByPlaceholderText(field)).toBeDefined()
    }

    expect(screen.getByRole('combobox', { name: /community/i })).toBeDefined()
  })

  it('should have data prefilled', async () => {
    // Community data
    const selectElement = screen.getByRole('combobox', { name: /community/i });
    /* @ts-ignore */
    expect(selectElement.value).not.toBe('');

    expect(screen.getByText('Selected organisation')).toBeDefined()

    // Save button show
    expect(
      screen.getByText('Save')
    ).toBeDefined()
  })

  it('should require a title and content', async () => {
    const nameInput = screen.getByPlaceholderText('Topic title')
    const contentInput = screen.getByPlaceholderText('Content of this topic')

    await userEvent.clear(nameInput);
    await userEvent.clear(contentInput);

    const button = screen.getByText('Save')
    await userEvent.click(button)

    expect(screen.getByText('Title is required')).toBeDefined()
    expect(screen.getByText('Content is required')).toBeDefined()
  })

});