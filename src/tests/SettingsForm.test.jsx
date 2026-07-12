import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from '../App';

describe('SettingsForm', () => {
  it('shows validation errors and blocks submission when the form is incomplete', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /save settings/i }));

    expect(screen.getByText(/username must be at least 3 characters long/i)).toBeInTheDocument();
    expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
    expect(screen.getByText(/please select an update frequency/i)).toBeInTheDocument();
    expect(screen.queryByText(/settings saved successfully/i)).not.toBeInTheDocument();
  });

  it('submits successfully when all validations pass', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText(/username/i), 'alex');
    await user.type(screen.getByLabelText(/email/i), 'alex@example.com');
    await user.selectOptions(screen.getByLabelText(/update frequency/i), 'Weekly');
    await user.click(screen.getByRole('button', { name: /save settings/i }));

    expect(screen.getByText(/settings saved successfully/i)).toBeInTheDocument();
  });
});
