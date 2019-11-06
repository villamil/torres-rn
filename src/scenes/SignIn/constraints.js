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
      minimum: 1,
      message: "^Ingresa una contrasena."
    }
  }
};

export default constraints;
