import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Page from '@/app/page'

// Basic smoke tests to ensure key copy renders and runtime diagnostics exist
it('renders hero headline', () => {
  render(<Page />)
  expect(screen.getByText(/Direct‑response/i)).toBeInTheDocument()
  expect(screen.getByText(/moves product/i)).toBeInTheDocument()
})

it('shows diagnostics block', () => {
  render(<Page />)
  expect(screen.getByText(/Diagnostics:/i)).toBeInTheDocument()
})
