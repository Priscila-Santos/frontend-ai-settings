import styles from './SettingsForm.module.css';

function SettingsForm({ formValues, errors, submitted, onChange, onSubmit }) {
  return (
    <section className={styles.card} aria-labelledby="settings-title">
      <h1 id="settings-title">Account Settings</h1>
      <p className={styles.subtitle}>Update your profile preferences below.</p>

      <form onSubmit={onSubmit} className={styles.form} noValidate>
        <label className={styles.field}>
          <span>Username</span>
          <input
            name="username"
            value={formValues.username}
            onChange={onChange}
            placeholder="Enter username"
            aria-invalid={Boolean(errors.username)}
          />
          {errors.username ? <small className={styles.error}>{errors.username}</small> : null}
        </label>

        <label className={styles.field}>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={onChange}
            placeholder="name@example.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <small className={styles.error}>{errors.email}</small> : null}
        </label>

        <label className={styles.checkboxField}>
          <input
            type="checkbox"
            name="notificationsEnabled"
            checked={formValues.notificationsEnabled}
            onChange={onChange}
          />
          <span>Enable notifications</span>
        </label>

        <label className={styles.field}>
          <span>Update frequency</span>
          <select
            name="updateFrequency"
            value={formValues.updateFrequency}
            onChange={onChange}
            aria-invalid={Boolean(errors.updateFrequency)}
          >
            <option value="">Select one</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
          {errors.updateFrequency ? <small className={styles.error}>{errors.updateFrequency}</small> : null}
        </label>

        <button type="submit">Save settings</button>
      </form>

      {submitted ? <p className={styles.success}>Settings saved successfully.</p> : null}
    </section>
  );
}

export default SettingsForm;
