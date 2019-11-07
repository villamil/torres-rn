const constraints = {
  email: {
    presence: {
      message: "^Ingresa un correo electronico."
    },
    email: {
      message: "^Ingresa un correo electronico valido."
    }
  },

  password: {
    presence: {
      message: "^Ingresa una contrasena."
    },
    length: {
      minimum: 4,
      message: "^Ingresa una contrasena mayor a 4 letras."
    }
  },

  repeatPassword: {
    presence: {
      message: "^La contrasenia con coincide."
    }
  }
};

export default constraints;
