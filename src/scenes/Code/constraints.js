const constraints = {
  firstName: {
    presence: {
      message: "^Ingresa tu nombre."
    }
  },
  lastName: {
    presence: {
      message: "^Ingresa tus apellidos."
    }
  },
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
      minimum: 4,
      message: "^Ingresa una contraseña mayor a 4 letras."
    }
  },

  repeatPassword: {
    presence: {
      message: "^La contraseña no coincide."
    }
  }
};

export default constraints;
