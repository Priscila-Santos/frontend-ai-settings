import { useState } from 'react';
import SettingsForm from './components/SettingsForm';
import { validateSettings } from './utils/validation';

function App() {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    notificationsEnabled: true,
    updateFrequency: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const nextValue = type === 'checkbox' ? checked : value;

    setFormValues((previous) => ({ ...previous, [name]: nextValue }));

    if (errors[name]) {
      setErrors((previous) => ({ ...previous, [name]: '' }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateSettings(formValues);
    setErrors(validationErrors);

    if (Object.values(validationErrors).every((message) => !message)) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <main className="app-shell">
      <SettingsForm
        formValues={formValues}
        errors={errors}
        submitted={submitted}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </main>
  );
}

export default App;
