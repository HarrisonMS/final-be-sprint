describe("jokesModel", () => {
  const jokes = {
    id: 1,
    joke: "I'm hungry. -Hey hungry.",
  };
  //the joke has the property of ID
  describe("get the joke", () => {
    it("Jokes has an id", () => {
      expect(jokes).toHaveProperty("id");
      expect(jokes.id).toBe(1);
    });
    // the joke has the property of 'joke'
    it("New joke to jokes", () => {
      expect(jokes).toHaveProperty("joke");
    });
  });
});
