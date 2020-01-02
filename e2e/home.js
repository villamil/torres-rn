import { fillSignIn } from "./common";
const fakeEmail = "test@email.com";
const fakePassword = "1234";
const fakeEmail3 = "test3@email.com";

export const homeTests = () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should be able to see home menu", async () => {
    // login
    await element(by.text("Inicia sesión")).tap();
    await fillSignIn(fakeEmail, fakePassword);
    await element(by.id("sign-in-submit")).tap();

    await expect(element(by.text("102A"))).toBeVisible();

    await element(by.id("home-menu-btn")).tap();

    await expect(element(by.text("Inquilinos"))).toBeVisible();
    await expect(element(by.text("Departamentos"))).toBeVisible();
    await expect(element(by.text("Reglamento"))).toBeVisible();
    await expect(element(by.text("Caseta"))).toBeVisible();
    await expect(element(by.text("Cerrar sesión"))).toBeVisible();
  });

  it("should be able to change unit", async () => {
    await element(by.text("Inicia sesión")).tap();
    await fillSignIn(fakeEmail3, fakePassword);
    await element(by.id("sign-in-submit")).tap();

    await element(by.id("home-menu-btn")).tap();
    await element(by.text("Departamentos")).tap();
    await element(by.text("104A")).tap();
    await expect(element(by.text("104A"))).toBeVisible();
  });
};
