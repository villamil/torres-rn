const constraints = {
  email: {
    presence: {
      message: "^Ingresa un correo electrónico."
    },
    email: {
      message: "^Ingresa un correo electrónico valido."
    }
  },

  password: {
    presence: {
      message: "^Ingresa una contraseña."
    },
    length: {
      minimum: 1,
      message: "^Ingresa una contraseña."
    }
  }
};

export default constraints;
