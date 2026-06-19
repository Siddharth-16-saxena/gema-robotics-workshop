import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Registration from '../components/sections/Registration';

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

const renderWithQueryClient = (ui: React.ReactElement) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>
  );
};

describe('Registration Form Component', () => {
  it('should render all input fields and the submit button', () => {
    renderWithQueryClient(<Registration />);

    expect(screen.getByLabelText(/Parent \/ Child Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Secure My Enrollment/i })).toBeInTheDocument();
  });

  it('should disable the submit button initially when fields are empty', () => {
    renderWithQueryClient(<Registration />);
    const submitBtn = screen.getByRole('button', { name: /Secure My Enrollment/i });
    expect(submitBtn).toBeDisabled();
  });

  it('should display live validation errors when invalid information is input', async () => {
    renderWithQueryClient(<Registration />);

    const nameInput = screen.getByLabelText(/Parent \/ Child Full Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const phoneInput = screen.getByLabelText(/Phone Number/i);

    // Enter invalid details
    fireEvent.change(nameInput, { target: { value: 'A' } }); // Name too short
    fireEvent.change(emailInput, { target: { value: 'not-an-email' } }); // Invalid email format
    fireEvent.change(phoneInput, { target: { value: '123' } }); // Invalid phone format

    // Trigger validation loop blur/focus events if needed, react-hook-form does it live on change
    await waitFor(() => {
      expect(screen.getByText(/Full name must be at least 2 characters long/i)).toBeInTheDocument();
      expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
      expect(screen.getByText(/Enter a valid 10-15 digit phone number/i)).toBeInTheDocument();
    });

    const submitBtn = screen.getByRole('button', { name: /Secure My Enrollment/i });
    expect(submitBtn).toBeDisabled();
  });

  it('should enable the submit button when all fields have valid entries', async () => {
    renderWithQueryClient(<Registration />);

    const nameInput = screen.getByLabelText(/Parent \/ Child Full Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const phoneInput = screen.getByLabelText(/Phone Number/i);

    fireEvent.change(nameInput, { target: { value: 'Sonia Gandhi' } });
    fireEvent.change(emailInput, { target: { value: 'sonia@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '9876543210' } });

    await waitFor(() => {
      const submitBtn = screen.getByRole('button', { name: /Secure My Enrollment/i });
      expect(submitBtn).not.toBeDisabled();
    });
  });
});
