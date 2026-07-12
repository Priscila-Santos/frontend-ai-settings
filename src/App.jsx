import React from 'react'
import SettingsForm from './SettingsForm'

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>Application Settings</h1>
        <p>A small demo settings form with validation (React + Vite)</p>
      </header>
      <main>
        <SettingsForm />
      </main>
    </div>
  )
}
