"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import * as assert from 'assert';
const chai = __importStar(require("chai"));
const expectChai = chai.expect;
const assert = chai.assert;
chai.should();
describe('Website', function () {
    it('should be alive', function () {
        browser.url('/');
        const img = $('img[src$="images/logotype.png"]');
        if (!img.isExisting()) {
            throw new Error('Website should be opened, and logo displayed');
        }
    });
});
describe("Chai", function () {
    it("should", function () {
        browser.url('/');
        $("div").isDisplayed().should.equal(true, 'error message');
        $("div").isDisplayed().should.to.be.equal(true, 'error message');
    });
    it("expect", function () {
        browser.url('/');
        expectChai($("div").isDisplayed(), 'error message').to.be.true;
    });
    it("assert", function () {
        browser.url('/');
        assert.isTrue($("div").isDisplayed(), 'error message');
    });
});
describe("WebDriverIO expect", function () {
    it("expect", function () {
        browser.url('/');
        expect($("div")).not.toBeVisible;
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3QvYXNzZXJ0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBbUM7QUFDbkMsMkNBQTRCO0FBQzVCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7QUFDOUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtBQUUxQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFZCxRQUFRLENBQUMsU0FBUyxFQUFFO0lBRWhCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTtRQUVsQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO1FBQ2hELElBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1NBQ25FO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQTtBQUVGLFFBQVEsQ0FBQyxNQUFNLEVBQUU7SUFFYixFQUFFLENBQUMsUUFBUSxFQUFFO1FBRVQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUE7UUFDMUQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUE7SUFDcEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsUUFBUSxFQUFFO1FBRVQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNoQixVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFBO0lBQ2xFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLFFBQVEsRUFBRTtRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUE7SUFDMUQsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtJQUUzQixFQUFFLENBQUMsUUFBUSxFQUFFO1FBRVQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNoQixNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=