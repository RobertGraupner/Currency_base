// importujemy dodatkowe paczki userEvent i screen aby udało się zasymulować działanie użytkownika (kliknięcie w button i wywołanie funkcji)
import { render, screen, cleanup } from '@testing-library/react';
import CurrencyForm from './CurrencyForm';
import userEvent from '@testing-library/user-event';

describe('Component CurrencyForm', () => {
	it('should render without crashing', () => {
		render(<CurrencyForm action={() => {}} />);
	});

  it('should run action callback with proper data on form submit', () => {
    
    // tablica z danymi do różnych przypadków testowych
		const testCases = [
			{ amount: '100', from: 'PLN', to: 'USD' },
			{ amount: '20', from: 'USD', to: 'PLN' },
			{ amount: '200', from: 'PLN', to: 'USD' },
			{ amount: '345', from: 'USD', to: 'PLN' },
		];

		for (const testObj of testCases) {
			const action = jest.fn();

			// render component
			render(<CurrencyForm action={action} />);

			// find “convert” button
			const submitButton = screen.getByText('Convert');

			// find field elems -> znajdujemy elementy pod data-testid z komponentu, który testujemy
			const amountField = screen.getByTestId('amount');
			const fromField = screen.getByTestId('from-select');
			const toField = screen.getByTestId('to-select');

			// set test values to fields--> symulujemy wstawienie treści do pól komponentu
			userEvent.type(amountField, testObj.amount);
			userEvent.selectOptions(fromField, testObj.from);
			userEvent.selectOptions(toField, testObj.to);

			// simulate user click on 'convert' button
			userEvent.click(submitButton);

			// check if action callback was called once and with proper argument
			expect(action).toHaveBeenCalledTimes(1);
			expect(action).toHaveBeenCalledWith({ amount: parseInt(testObj.amount), from: testObj.from, to: testObj.to });
    
     // expect(action).toHaveBeenCalledWith({amount: 100,from: 'PLN',to: 'USD',});

			// unmount component --> korzystamy z funkcji cleanup, która 'wyczyści ekran' z wyrenderowanego komponentu (w kazdym przypadku renderujemy komponent od nowa)
			cleanup();
		}
	});
});
