import { alertDisplayed } from '../src/client/js/utils/alertDisplayed';

describe("alertDisplayed() testing", () => {
    test("Invalid value false", () => {
        let value = false;
        expect(alertDisplayed(value)).toBe(false);
    });
    test("Correct value", () => {
        let value = true;
        expect(alertDisplayed(value)).toBe(true);
    });
});