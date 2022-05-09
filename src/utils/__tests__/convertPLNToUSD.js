import { convertPLNToUSD } from "./../convertPLNtoUSD";
// descripe --> opisujemy czego tyczy się test
describe("ConvertPLNtoUSD", () => {
  // it --> opisujemy co konkretnie sprawdzamy. W środku jest scenariusz testowy
	it("should return proper value when good input", () => {
		expect(convertPLNToUSD(1)).toBe("$0.29");
		expect(convertPLNToUSD(2)).toBe("$0.57");
		expect(convertPLNToUSD(20)).toBe("$5.71");
		expect(convertPLNToUSD(12)).toBe("$3.43");
	});
});

// bloków kodu describe i it moemy mieć w pliku ile chcemy