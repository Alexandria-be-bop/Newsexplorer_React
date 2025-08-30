import { useState, useEffect, useId } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({
  activeModal,
  closeActiveModal,
  handleLogin,
  newUserRegistration,
  loginError,
}) {
  const [data, setData] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleLogin) {
      handleLogin(data);
    }
    setData({ email: "", password: "" });
  };

  // clear login fields when not active
  useEffect(() => {
    if (!activeModal) {
      setEmailError("");
      setData({ email: "", password: "" });
    }
  }, [activeModal]);

  const emailId = useId();
  const passwordId = useId();

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid = isEmailValid(data.email) && data.password.trim();

  const handleEmailValidation = (e) => {
    if (isEmailValid(e.target.value)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email address");
    }
  };

  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      altButtonText="Sign up"
      altButtonOnClick={newUserRegistration}
      activeModal={activeModal}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
      disabled={!isFormValid}
    >
      <label
        htmlFor={emailId}
        className="modal__label modal__error-field"
      >
        Email
        <input
          id={emailId}
          name="email"
          type="email"
          placeholder="Enter email"
          value={data.email}
          onChange={handleChange}
          className="modal__input"
          required
          onBlur={handleEmailValidation}
          autoComplete="email"
        />
        <p className={`modal__invalid-input`}>{emailError}</p>
      </label>

      <label
        htmlFor={passwordId}
        className="modal__label"
      >
        Password
        <input
          id={passwordId}
          name="password"
          type="password"
          placeholder="Enter password"
          value={data.password}
          onChange={handleChange}
          className="modal__input"
          required
          autoComplete="current-password"
        />
      </label>

      <p className="modal__invalid-field">{loginError}</p>
    </ModalWithForm>
  );
}

export default LoginModal;
