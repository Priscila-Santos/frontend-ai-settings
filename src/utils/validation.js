export function validateSettings(values) {
  const errors = {};

  if (!values.username || values.username.trim().length < 3) {
    errors.username = 'Username must be at least 3 characters long.';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email || !emailPattern.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.updateFrequency) {
    errors.updateFrequency = 'Please select an update frequency.';
  }

  return errors;
}
