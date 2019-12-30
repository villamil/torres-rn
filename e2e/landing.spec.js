describe("Landing", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have landing screen", async () => {
    await expect(
      element(by.text("Empieza a administrar tu condominio"))
    ).toBeVisible();
    await expect(element(by.text("CREAR TU CUENTA"))).toBeVisible();
    await expect(element(by.text("Inicia sesión"))).toBeVisible();
  });
});
