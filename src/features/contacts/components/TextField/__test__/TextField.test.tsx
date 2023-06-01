import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { TextField } from '../TextField'

it("renders TextField component", () => {
	render(<TextField type='email' labelText='Hello world' tipMessage='need to be' name='email' />)
	const el = screen.getByText('Hello world')
	expect(el).toBeInTheDocument()
})