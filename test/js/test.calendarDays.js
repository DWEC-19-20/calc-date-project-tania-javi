var assert = chai.assert,
    expect = chai.expect;

suite("Testing calcDate", function() {
    test("Test pasado", function() {
        expect(calcDate(new Date(2019, 09, 14),14)).to.equal("28/10/2019");
    });
    test("Test pasado", function() {
        expect(calcDate(new Date(2019, 09, 28),-14)).to.equal("14/10/2019");
    });
    test("Test pasado", function() {
        expect(calcDate(new Date(2019, 09, 10),10953)).to.equal("5/10/2049");
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
});

