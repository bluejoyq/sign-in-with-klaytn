import { isKlaytnAddress } from "./utils";

describe("Klaytn Address Test", () => {
    test.only('isEIP55Address', () => {
        expect(isKlaytnAddress('0x9312217c599f8d77de2fcf96f3aded1401c438bd')).toBe(true);
    });
});