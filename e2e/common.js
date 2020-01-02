export const fillCode = async code => {
  await element(by.text("CREAR TU CUENTA")).tap();
  await element(by.id("sing-up-code")).typeText(code);
  await element(by.id("sing-up-code-click-outside")).tap();
  return Promise.resolve();
};

export const fillSignUpForm = async (firstName, lastName, email, password) => {
  await element(by.id("code-form-first-name")).typeText(firstName);
  await element(by.id("code-form-click-outside")).tap();
  await element(by.id("code-form-last-name")).typeText(lastName);
  await element(by.id("code-form-click-outside")).tap();
  await element(by.id("code-form-email")).typeText(email);
  await element(by.id("code-form-click-outside")).tap();
  await element(by.id("code-form-password")).typeText(password);
  await element(by.id("code-form-click-outside")).tap();
  await element(by.id("code-form-password-repeat")).typeText(password);
  await element(by.id("code-form-click-outside")).tap();
  await element(by.id("code-form-scrollview")).scrollTo("bottom");
  return Promise.resolve();
};

export const fillSignIn = async (email, password) => {
  await element(by.id("sign-in-email")).typeText(email);
  await element(by.id("sign-in-click-outside")).tap();
  await element(by.id("sign-in-password")).typeText(password);
  await element(by.id("sign-in-click-outside")).tap();
  return Promise.resolve();
};
