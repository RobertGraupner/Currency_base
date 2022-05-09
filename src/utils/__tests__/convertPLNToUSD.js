import { convertPLNToUSD } from './../convertPLNtoUSD';
// describe --> opisujemy czego tyczy się test
describe('ConvertPLNtoUSD', () => {
	// it --> opisujemy co konkretnie sprawdzamy. W środku jest scenariusz testowy
	it('should return proper value when good input', () => {
		expect(convertPLNToUSD(1)).toBe('$0.29');
		expect(convertPLNToUSD(2)).toBe('$0.57');
		expect(convertPLNToUSD(20)).toBe('$5.71');
		expect(convertPLNToUSD(12)).toBe('$3.43');
	});

	it('should return NaN when input is text', () => {
		expect(convertPLNToUSD('6')).toBeNaN();
		expect(convertPLNToUSD('abc')).toBeNaN();
		expect(convertPLNToUSD('2000')).toBeNaN();
		expect(convertPLNToUSD('-65')).toBeNaN();
	});

	it('should return NaN when input is empty', () => {
		expect(convertPLNToUSD()).toBeNaN();
	});

	it('should return Error when input is not a string or number', () => {
		expect(convertPLNToUSD(true)).toBe('Error');
		expect(convertPLNToUSD(false)).toBe('Error');
	});

	it('should return $0.00 when input is lower than 0 ', () => {
		expect(convertPLNToUSD(-1)).toBe('$0.00');
		expect(convertPLNToUSD(-6)).toBe('$0.00');
		expect(convertPLNToUSD(-200)).toBe('$0.00');
		expect(convertPLNToUSD(-65)).toBe('$0.00');
	});
});

// bloków kodu describe i it możemy mieć w pliku ile chcemy
