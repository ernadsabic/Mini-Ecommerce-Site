import React from "react";

const useFormValidator = () => {
  const validate = (values) => {
    const errors = {};
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexName =
      /^[A-Za-zČĆŽŠĐčćžšđ]+ [A-Za-zČĆŽŠĐčćžšđ]+(?: [A-Za-zČĆŽŠĐčćžšđ]+)*$/;

    if (values.username === "") {
      errors.username = "Ovo polje je obavezno!";
    } else if (!regexName.test(values.username)) {
      errors.username = "Neispravan format (ex. Marko Markovic)!";
    }
    if (values.email === "") {
      errors.email = "Ovo polje je obavezno!";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Neispravan format (ex. marko.markovic@gmail.com)!";
    }
    if (values.password === "") {
      errors.password = "Ovo polje je obavezno";
    } else if (values.password.length < 6) {
      errors.password = "Lozinka mora imati min. 6 karaktera";
    }
    return errors;
  };

  return { validate };
};

export default useFormValidator;
