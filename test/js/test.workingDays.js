var assert = chai.assert,
    expect = chai.expect;

suite("Testing calcDate", function() {
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date("2019-11-15"),15)).to.equal("9/12/2019");
    });
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date("2019-11-15"),-15)).to.equal("24/10/2019");
    });
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date("2019-11-15"),300)).to.equal("22/1/2021");
    });
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date("2019-11-15"),-300)).to.equal("11/9/2018");
    });
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date("2019-09-01"),118)).to.equal("19/2/2020");
    });
    test("Test pasado", function() {
        expect(calcWorkingDate(new Date("1989-03-07"),-261)).to.equal("26/2/1988");
    });
});

suite("Testing getDays", function() {
    test("Test pasado", function() {
        expect(getWorkingDays(new Date("2019-11-15"),new Date("2019-12-09"))).to.equal(15);
    });
    test("Test pasado", function() {
        expect(getWorkingDays(new Date("2019-11-15"),new Date("2019-10-24"))).to.equal(-15);
    });
    test("Test pasado", function() {
        expect(getWorkingDays(new Date("2019-11-15"),new Date("2021-01-22"))).to.equal(300);
    });
    test("Test pasado", function() {
        expect(getWorkingDays(new Date("2019-11-15"),new Date("2018-09-11"))).to.equal(-300);
    });
    test("Test pasado", function() {
        expect(getWorkingDays(new Date("2019-09-01"),new Date("2020-02-19"))).to.equal(118);
    });
    test("Test pasado", function() {
        expect(getWorkingDays(new Date("1989-03-07"),new Date("1988-02-26"))).to.equal(-261);
    });
});
