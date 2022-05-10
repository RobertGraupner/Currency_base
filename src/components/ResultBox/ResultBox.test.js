import { render, screen, cleanup } from '@testing-library/react';
import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox', () => {
	it('should render without crashing', () => {
		render(<ResultBox from='PLN' to='USD' amount={100} />);

		cleanup();
	});

	// tablica z danymi do różnych przypadków testowych
	const plnToUsdCases = [
		{ amount: '105', from: 'PLN', to: 'USD', result: 'PLN 105.00 = $30.00' },
		{ amount: '43', from: 'PLN', to: 'USD', result: 'PLN 43.00 = $12.29' },
		{ amount: '200', from: 'PLN', to: 'USD', result: 'PLN 200.00 = $57.14' },
		{ amount: '350', from: 'PLN', to: 'USD', result: 'PLN 350.00 = $100.00' },
	];

	for (const testObj of plnToUsdCases) {
		it(`should render proper info about conversion when from ${testObj.from} -> to ${testObj.to}`, () => {

			// renderowanie testowego komponentu
			render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);

			// dostęp do głównego diva
			const output = screen.getByTestId('output');

			// sprawdzenie czy treść głównego diva ma oczekiwaną wartość
			expect(output).toHaveTextContent(testObj.result);

			// odmontowanie komponentu
			cleanup();
		});
	}

	// tablica z danymi do różnych przypadków testowych
	const usdToPlnCases = [
		{ amount: '105', from: 'USD', to: 'PLN', result: '$105.00 = PLN 367.50' },
		{ amount: '43', from: 'USD', to: 'PLN', result: '$43.00 = PLN 150.5' },
		{ amount: '200', from: 'USD', to: 'PLN', result: '$200.00 = PLN 700.00' },
		{ amount: '350', from: 'USD', to: 'PLN', result: '$350.00 = PLN 1,225.00' },
	];

	for (const testObj of usdToPlnCases) {
		it(`should render proper info about conversion when from ${testObj.from} -> ${testObj.to}`, () => {
			// renderowanie testowego komponentu
			render(
				<ResultBox
					from={testObj.from}
					to={testObj.to}
					amount={parseInt(testObj.amount)}
				/>
			);

			// dostęp do głównego diva
			const output = screen.getByTestId("output");

			// sprawdzenie czy treść głównego diva ma oczekiwaną wartość
			expect(output).toHaveTextContent(testObj.result);

			// odmontowanie komponentu
			cleanup();
		});
	}

	// tablica z danymi do różnych przypadków testowych
	const theSameFromToToCases = [
		{ amount: '105', from: 'USD', to: 'USD', result: '$105.00 = $105.00' },
		{ amount: '43', from: 'USD', to: 'USD', result: '$43.00 = $43.00' },
		{ amount: '200', from: 'PLN', to: 'PLN', result: 'PLN 200.00 = PLN 200.00' },
		{ amount: '350', from: 'PLN', to: 'PLN', result: 'PLN 350.00 = PLN 350.00' },
	];

	for (const testObj of theSameFromToToCases) {
		it(`should render proper info about conversion when from ${testObj.from} -> ${testObj.to}`, () => {
			// renderowanie testowego komponentu
			render(
				<ResultBox
					from={testObj.from}
					to={testObj.to}
					amount={parseInt(testObj.amount)}
				/>
			);

			// dostęp do głównego diva
			const output = screen.getByTestId("output");

			// sprawdzenie czy treść głównego diva ma oczekiwaną wartość
			expect(output).toHaveTextContent(testObj.result);

			// odmontowanie komponentu
			cleanup();
		});
	}

	// tablica z danymi do różnych przypadków testowych
	const negativeValueCases = [
		{ amount: '-105', from: 'USD', to: 'PLN', result: 'Wrong value...' },
		{ amount: '-43', from: 'PLN', to: 'USD', result: 'Wrong value...' },
		{ amount: '-200', from: 'USD', to: 'USD', result: 'Wrong value...' },
		{ amount: '-350', from: 'PLN', to: 'PLN', result: 'Wrong value...' },
	];

	for (const testObj of negativeValueCases) {
		it(`should render proper info about conversion when value is under 0`, () => {

			// renderowanie testowego komponentu
			render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);

			// dostęp do głównego diva
			const output = screen.getByTestId('output');

			// sprawdzenie czy treść głównego diva ma oczekiwaną wartość
			expect(output).toHaveTextContent(testObj.result);

			// odmontowanie komponentu
			cleanup();
		});
	}
});
