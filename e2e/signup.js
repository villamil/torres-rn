import { fillCode, fillSignUpForm, fillSignIn } from "./common";

const fakeEmail = "test@email.com";
const fakePassword = "1234";
const fakeCode = "XX91CA14";

const fakeEmail2 = "test2@email.com";
const fakeCode2 = "HN51ET19";

export const signUpTests = () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should be able to create an account", async () => {
    // Code validation
    await fillCode(fakeCode);
    await expect(element(by.text(fakeCode))).toBeVisible();
    await element(by.id("sing-up-code-btn")).tap();
    // Signup form
    await fillSignUpForm("First", "Last", fakeEmail, fakePassword);
    await element(by.id("code-form-submit")).tap();
    await expect(element(by.text("INGRESAR"))).toBeVisible();

    // Try to sign In
    await fillSignIn(fakeEmail, fakePassword);
    await element(by.id("sign-in-submit")).tap();

    await expect(element(by.text("102A"))).toBeVisible();
  });

  it("should be able to create a second", async () => {
    // Code validation
    await fillCode(fakeCode2);
    await expect(element(by.text(fakeCode2))).toBeVisible();
    await element(by.id("sing-up-code-btn")).tap();

    // Signup form
    await fillSignUpForm("First", "Last", fakeEmail2, fakePassword);
    await element(by.id("code-form-submit")).tap();
    await expect(element(by.text("INGRESAR"))).toBeVisible();

    // Try to sign In
    await fillSignIn(fakeEmail2, fakePassword);
    await element(by.id("sign-in-submit")).tap();

    await expect(element(by.text("104A"))).toBeVisible();
  });

  it("should validate codes", async () => {
    await fillCode("wrongCode");
    await element(by.id("sing-up-code-btn")).tap();
    await expect(element(by.text("El código no es valido."))).toBeVisible();
  });

  it("should validate sign up form", async () => {
    await fillCode(fakeCode);
    await element(by.id("sing-up-code-btn")).tap();

    await element(by.id("code-form-scrollview")).scrollTo("bottom");
    await element(by.id("code-form-submit")).tap();
    await expect(element(by.text("Ingresa tu nombre."))).toBeVisible();
    await expect(element(by.text("Ingresa tus apellidos."))).toBeVisible();
    await expect(
      element(by.text("Ingresa un correo electrónico."))
    ).toBeVisible();
    await expect(element(by.text("Ingresa una contraseña."))).toBeVisible();
    await expect(element(by.text("La contraseña no coincide."))).toBeVisible();
  });

  it("should validate email format", async () => {
    await fillCode(fakeCode);
    await element(by.id("sing-up-code-btn")).tap();

    await element(by.id("code-form-email")).typeText("wrongemail");
    await element(by.id("code-form-click-outside")).tap();
    await element(by.id("code-form-scrollview")).scrollTo("bottom");
    await element(by.id("code-form-submit")).tap();
    await expect(
      element(by.text("Ingresa un correo electrónico valido."))
    ).toBeVisible();
  });

  it("should validate email existing emails", async () => {
    await fillCode(fakeCode);
    await element(by.id("sing-up-code-btn")).tap();

    await fillSignUpForm("First", "Last", fakeEmail, fakePassword);
    await element(by.id("code-form-submit")).tap();
    await expect(
      element(by.text("Este correo ya está registrado."))
    ).toBeVisible();
  });
};
