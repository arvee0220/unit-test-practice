const googleSearch = require("./script");

const mockData = [
	"dog.com",
	"starwars.com",
	"tiktok.com",
	"facebook.com",
	"youtube.com",
	"ztm.com",
];

const googleDatabase = [
	"cats.com",
	"souprecipese.com",
	"chef.com",
	"catpictures.com",
	"youtube.com",
];
describe("googleSearch", () => {
	it("searches the array", () => {
		expect.assertions(1);
		expect(googleSearch("dog", mockData)).toEqual(["dog.com"]);
	});

	it("will work with an empy search values and will return null or undefined", () => {
		expect.assertions(2);
		expect(googleSearch(undefined, mockData)).toEqual([]);
		expect(googleSearch(null, mockData)).toEqual([]);
	});

	it("only returns 3 or less matches", () => {
		expect.assertions(1);
		expect(googleSearch("dog", mockData).length).toEqual(1);
	});
});
