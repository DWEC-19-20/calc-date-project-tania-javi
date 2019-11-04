var assert = chai.assert,
    expect = chai.expect;

suite("Testing calcDate", function() {
    test("Test pasado", function() {
        expect(calcDate(new Date("2019-10-14"),14)).to.equal("28/10/2019");
    });
    test("Test pasado", function() {
        expect(calcDate(new Date("2019-10-28"),-14)).to.equal("14/10/2019");
    });
    test("Test pasado", function() {
        expect(calcDate(new Date("2019-10-10"),10953)).to.equal("5/10/2049");
    });
    test("Test pasado", function() {
        expect(calcDate(new Date("2019-11-03"),396)).to.equal("3/12/2020");
    });
    test("Test pasado", function() {
        expect(calcDate(new Date("1970-01-01"),9612)).to.equal("26/4/1996");
    });
    test("Test pasado", function() {
        expect(calcDate(new Date("742-05-01"),26193)).to.equal("16/1/814");
    });
    test("Test pasado", function() {
        expect(calcDate(new Date("1776-07-04"),792)).to.equal("3/9/1778");
    });
});

suite("Testing getDays", function() {
    test("Test pasado", function() {
        expect(getDays(new Date(2019, 09, 14),new Date(2019, 09, 28))).to.equal(14);
    });
    test("Test pasado", function() {
        expect(getDays(new Date(2019, 09, 28),new Date(2019, 09, 14))).to.equal(-14);
    });
    test("Test pasado", function() {
        expect(getDays(new Date(2019, 09, 10),new Date(2049, 09, 05))).to.equal(10953);
    });
    test("Test pasado", function() {
        expect(getDays(new Date(2019, 10, 03),new Date(2020, 11, 03))).to.equal(396);
    });
    test("Test pasado", function() {
        expect(getDays(new Date(1970, 00, 01),new Date(1996, 03, 26))).to.equal(9612);
    });
    test("Test pasado", function() {
        expect(getDays(new Date(742, 04, 01),new Date(814, 00, 16))).to.equal(26193);
    });
    test("Test pasado", function() {
        expect(getDays(new Date(1776, 06, 04),new Date(1778, 08, 03))).to.equal(791);
    });
});

