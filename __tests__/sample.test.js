describe("simple test", () => {
  it("does action exist", async () => {
    const actionFile = require("../actions/actions.json");
    const messageAction = actionFile.find((o) => o.action.type === "message");
    expect(messageAction).toStrictEqual(
      expect.objectContaining({
        action: expect.objectContaining({
          title: "Some New Message",
        }),
      })
    );
  });
});
