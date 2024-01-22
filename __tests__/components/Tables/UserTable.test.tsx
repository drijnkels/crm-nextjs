import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

import { mockUsers } from "../../mocks/UsersDataMock";
import UsersTable from "@/components/Tables/UsersTable";
import {UserHeaderName} from "@/types/UserTypes";

const headers: Array<UserHeaderName> = ['name', 'email', 'num_topics', 'last_login', 'url'];

describe('User table test', () => {

  beforeEach(() => {
    render (
      <UsersTable title="Users" headers={headers} rows={mockUsers} loading_message="Loading users" />
    );
  });

  afterEach(cleanup);

  it('Does table render correctly', () => {
    expect(screen.getByText('Name')).toBeDefined();
    expect(screen.getByText('Email')).toBeDefined();
    expect(screen.getByText('Topics')).toBeDefined();
    expect(screen.getByText('Last Login')).toBeDefined();;
    expect(screen.getAllByText('View')).toBeDefined();
    expect(screen.getAllByText('View').length).toEqual(7);
  })

  it('Data is shown', () => {
    expect(screen.getByText('David Rodriguez')).toBeDefined();
    expect(screen.getByText('Lisa Anderson')).toBeDefined();
    expect(screen.getByText(3)).toBeDefined();
    expect(screen.getByText(7)).toBeDefined();
    expect(screen.getByText('emily.p@email.com')).toBeDefined();
    expect(screen.getByText('05:21 - 16/11/2023'));
    expect(screen.getAllByText('-').length).toEqual(4)
  })

  it('Urls are formatted correctly', () => {
    const links = screen.getAllByRole('link', { name: /View/i});
    expect(links[5].getAttribute('href')).toBe('/users/jzthhamhka')
  })
})