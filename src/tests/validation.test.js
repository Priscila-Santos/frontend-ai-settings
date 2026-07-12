import { describe, expect, it } from 'vitest';
import { validateSettings } from '../utils/validation';

describe('validation rules', () => {
  it('reports an empty username as invalid', () => {
    const result = validateSettings({ username: '', email: 'user@example.com', updateFrequency: 'Daily' });

    expect(result.username).toBe('Username must be at least 3 characters long.');
  });

  it('reports a short username as invalid', () => {
    const result = validateSettings({ username: 'ab', email: 'user@example.com', updateFrequency: 'Daily' });

    expect(result.username).toBe('Username must be at least 3 characters long.');
  });

  it('reports an invalid email as invalid', () => {
    const result = validateSettings({ username: 'alex', email: 'invalid-email', updateFrequency: 'Daily' });

    expect(result.email).toBe('Please enter a valid email address.');
  });

  it('requires an update frequency selection', () => {
    const result = validateSettings({ username: 'alex', email: 'alex@example.com', updateFrequency: '' });

    expect(result.updateFrequency).toBe('Please select an update frequency.');
  });
});
