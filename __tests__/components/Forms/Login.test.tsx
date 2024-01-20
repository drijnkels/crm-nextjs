import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Home from "@/app/page"

describe('Login', () => {

  beforeEach(() => {
    render(
      <Home />
    );
  });

  it('should have input input, password input and login button', () => {
    const emailInput = screen.getByLabelText(/Your email/i)
    const passwordInput = screen.getByLabelText(/Your password/i)
    const loginButton = screen.getByRole('button', {name: /Login/i})

    expect(emailInput).toBeDefined()
    expect(passwordInput).toBeDefined()
    expect(loginButton).toBeDefined()
  })

  it('should warn if no email was entered', async () => {
    const loginButton = screen.getByRole('button', {name: /Login/i})

    await userEvent.click(loginButton);

    expect(screen.getByText('Email is required')).toBeDefined()
    expect(screen.getByText('Password is required')).toBeDefined()
  })

  it('should warn if an invalid email was entered', async () => {
    const emailInput = screen.getByLabelText(/Your email/i)
    const passwordInput = screen.getByLabelText(/Your password/i)
    const loginButton = screen.getByRole('button', {name: /Login/i})

    await userEvent.type(emailInput, 'invalidemail')
    await userEvent.type(passwordInput, 'validpassword')

    await userEvent.click(loginButton)

    expect(screen.getByText('Please enter a valid email')).toBeDefined()
  })

  it('should login', async () => {
    const emailInput = screen.getByLabelText(/Your email/i)
    const passwordInput = screen.getByLabelText(/Your password/i)
    const loginButton = screen.getByRole('button', {name: /Login/i})

    await userEvent.type(emailInput, 'valid@email.com');
    await userEvent.type(passwordInput, 'validpassword')

    await userEvent.click(loginButton)

    const errorMessages = [
      screen.queryByText('Email is required'),
      screen.queryByText('Password is required'),
      screen.queryByText('Please enter a valid email'),
      ]
    expect(errorMessages[0]).toBeNull()
    expect(errorMessages[1]).toBeNull()
    expect(errorMessages[2]).toBeNull()
  })

});