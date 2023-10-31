import { getLocalization } from "./getLocalization.util";

const locale = "en";
const expected = {
  seo: {
    title: "Andrian Fadhilla - Computer Science Student and React Developer",
    description: "a Computer Science Student and also Freelance React Developer based in Bekasi, Indonesia."
  }
};

describe("Test `getLocalication` function", () => {
  it("should be render `title` and `description` key of seo objects", async () => {
    const text = await getLocalization(locale);

    expect(text.seo.title).toBe(expected.seo.title);
    expect(text.seo.description).toBe(expected.seo.description);
  });
});
