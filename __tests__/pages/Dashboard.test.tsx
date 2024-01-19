import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Dashboard from "@/app/dashboard/page"

describe('Dashboard', () => {

  beforeEach(() => {
    render(
      <Dashboard />
    );
  });

  it('should have a dashboard header', () => {
    const header = within(screen.getByRole("header"));
    expect(
      header.getByText('Dashboard'),
    ).toBeDefined();
  })

  it('dashboard should be highlighted in the menu', () => {
    const menu = within(screen.getByRole("menu"));
    expect(
      menu.getByText('Dashboard').classList.contains('bg-indigo-100'),
    ).toBe(true);
  })

  it('should show stats', () => {
    expect(screen.getByText('Topics last 7 days')).toBeDefined()
    expect(screen.getByText('Topics last 30 days')).toBeDefined()
    expect(screen.getByText('Views')).toBeDefined()
  })

  it('should have a communities table', () => {
    const page = within(screen.getByTestId('page'));
    expect(page.getByText('Communities')).toBeDefined()
  })

});