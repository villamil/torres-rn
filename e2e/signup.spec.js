const fakeEmail = "test@email.com";
const fakePassword = "1234";

describe("Signup", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should be able to create an account", async () => {
    // Code validation
    await element(by.text("CREAR TU CUENTA")).tap();
    await element(by.id("sing-up-code")).typeText("XX91CA14");
    await expect(element(by.text("XX91CA14"))).toBeVisible();
    await element(by.id("sing-up-code-click-outside")).tap();
    await element(by.id("sing-up-code-btn")).tap();

    // Signup form
    await element(by.id("code-form-first-name")).typeText("test firstname");
    await element(by.id("code-form-click-outside")).tap();
    await element(by.id("code-form-last-name")).typeText("test lastname");
    await element(by.id("code-form-click-outside")).tap();
    await element(by.id("code-form-email")).typeText(fakeEmail);
    await element(by.id("code-form-click-outside")).tap();
    await element(by.id("code-form-password")).typeText(fakePassword);
    await element(by.id("code-form-click-outside")).tap();
    await element(by.id("code-form-password-repeat")).typeText(fakePassword);
    await element(by.id("code-form-click-outside")).tap();
    await element(by.id("code-form-scrollview")).scrollTo("bottom");
    await element(by.id("code-form-submit")).tap();
    await expect(element(by.text("INGRESAR"))).toBeVisible();

    // Try to sign In
    await element(by.id("sign-in-email")).typeText(fakeEmail);
    await element(by.id("sign-in-click-outside")).tap();
    await element(by.id("sign-in-password")).typeText(fakePassword);
    await element(by.id("sign-in-click-outside")).tap();
    await element(by.id("sign-in-submit")).tap();

    await expect(element(by.text("102A"))).toBeVisible();
  });

  it("should validate codes", async () => {
    await element(by.text("CREAR TU CUENTA")).tap();
    await element(by.id("sing-up-code")).typeText("wrongcode");
    await element(by.id("sing-up-code-click-outside")).tap();
    await element(by.id("sing-up-code-btn")).tap();
    await expect(element(by.text("El código no es valido."))).toBeVisible();
  });

  it("should validate sign up form", async () => {
    await element(by.text("CREAR TU CUENTA")).tap();
    await element(by.id("sing-up-code")).typeText("XX91CA14");
    await expect(element(by.text("XX91CA14"))).toBeVisible();
    await element(by.id("sing-up-code-click-outside")).tap();
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
    await element(by.text("CREAR TU CUENTA")).tap();
    await element(by.id("sing-up-code")).typeText("XX91CA14");
    await expect(element(by.text("XX91CA14"))).toBeVisible();
    await element(by.id("sing-up-code-click-outside")).tap();
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
    await element(by.text("CREAR TU CUENTA")).tap();
    await element(by.id("sing-up-code")).typeText("XX91CA14");
    await expect(element(by.text("XX91CA14"))).toBeVisible();
    await element(by.id("sing-up-code-click-outside")).tap();
    await element(by.id("sing-up-code-btn")).tap();

    await element(by.id("code-form-first-name")).typeText("test firstname");
    await element(by.id("code-form-click-outside")).tap();
    await element(by.id("code-form-last-name")).typeText("test lastname");
    await element(by.id("code-form-click-outside")).tap();
    await element(by.id("code-form-email")).typeText(fakeEmail);
    await element(by.id("code-form-click-outside")).tap();
    await element(by.id("code-form-password")).typeText(fakePassword);
    await element(by.id("code-form-click-outside")).tap();
    await element(by.id("code-form-password-repeat")).typeText(fakePassword);
    await element(by.id("code-form-click-outside")).tap();
    await element(by.id("code-form-scrollview")).scrollTo("bottom");
    await element(by.id("code-form-submit")).tap();
    await expect(
      element(by.text("Este correo ya está registrado."))
    ).toBeVisible();
  });
});
