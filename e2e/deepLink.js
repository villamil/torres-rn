import { fillSignIn, fillSignUpForm } from "./common";

const fakeEmail = "test@email.com";
const fakePassword = "1234";
const fakeCode = "XX91CA14";

const fakeEmail2 = "test2@email.com";
const fakeCode2 = "HN51ET19";

const fakeEmail3 = "test3@email.com";

export const deepLinksTests = () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should open sign up screen with code preloaded", async () => {
    await device.launchApp({
      newInstance: true,
      url: `app://torres?code=${fakeCode}`,
      sourceApp: "com.villamil.torresprod"
    });

    await expect(element(by.text(fakeCode))).toBeVisible();
    await element(by.id("sing-up-code-btn")).tap();

    await fillSignUpForm("First", "Last", fakeEmail3, fakePassword);
    await element(by.id("code-form-submit")).tap();
    await expect(element(by.text("INGRESAR"))).toBeVisible();

    await fillSignIn(fakeEmail3, fakePassword);
    await element(by.id("sign-in-maintain-session-btn")).tap();
    await element(by.id("sign-in-submit")).tap();
  });

  it("should open the code screen inside home", async () => {
    await device.launchApp({
      newInstance: true,
      url: `app://torres?code=${fakeCode2}`,
      sourceApp: "com.villamil.torresprod"
    });
    await expect(element(by.text(fakeCode2))).toBeVisible();
    await element(by.id("add-unit-btn")).tap();
    await element(by.id("home-menu-btn")).tap();
    await element(by.text("Departamentos")).tap();
    await expect(element(by.text("104A"))).toBeVisible();
    await element(by.id("units-list-close-btn")).tap();

    await element(by.id("home-menu-btn")).tap();
    await element(by.text("Cerrar sesión")).tap();
  });
};
