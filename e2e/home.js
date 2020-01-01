const fakeEmail = "test@email.com";
const fakePassword = "1234";

export const homeTests = () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should be able to see home menu", async () => {
    // login
    await element(by.text("Inicia sesión")).tap();
    await element(by.id("sign-in-email")).typeText(fakeEmail);
    await element(by.id("sign-in-click-outside")).tap();
    await element(by.id("sign-in-password")).typeText(fakePassword);
    await element(by.id("sign-in-click-outside")).tap();
    await element(by.id("sign-in-submit")).tap();

    await expect(element(by.text("102A"))).toBeVisible();

    await element(by.id("home-menu-btn")).tap();

    await expect(element(by.text("Inquilinos"))).toBeVisible();
    await expect(element(by.text("Departamentos"))).toBeVisible();
    await expect(element(by.text("Reglamento"))).toBeVisible();
    await expect(element(by.text("Caseta"))).toBeVisible();
    await expect(element(by.text("Cerrar sesión"))).toBeVisible();
  });
};
