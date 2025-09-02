import { useId, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({
  handleRegistration,
  activeModal,
  closeActiveModal,
  openLoginModal,
  showSuccess,
  onCloseSuccess,
  registerError,
  clearRegisterError,
}) {
  const [emailError, setEmailError] = useState("");

  const emailId = useId();
  const passwordId = useId();
  const nameId = useId();

  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const submitRegistrationForm = (e) => {
    e.preventDefault();
    handleRegistration(data);
    setData({ email: "", password: "", name: "" });
  };

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid =
    isEmailValid(data.email) && data.password.trim() && data.name.trim();

  const handleEmailValidation = (e) => {
    if (isEmailValid(e.target.value)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email address");
    }
  };

  return (
    <>
      <ModalWithForm
        title="Sign Up"
        buttonText="Sign Up"
        altButtonText="Log in"
        altButtonOnClick={openLoginModal}
        activeModal={activeModal}
        closeActiveModal={closeActiveModal}
        onSubmit={submitRegistrationForm}
        disabled={!isFormValid}
        onMouseDown={clearRegisterError}
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
            autoComplete="new-password"
          />
        </label>

        <label
          htmlFor={nameId}
          className="modal__label"
        >
          Username
          <input
            id={nameId}
            name="name"
            type="text"
            placeholder="Enter your username"
            value={data.name}
            onChange={handleChange}
            className="modal__input"
            required
            maxLength={30}
            autoComplete="name"
          />
        </label>
        <p className="modal__invalid-field">{registerError}</p>
      </ModalWithForm>
      <ModalWithForm
        title="Registration successfully completed!"
        altButtonText="Sign in"
        altButtonOnClick={onCloseSuccess}
        activeModal={showSuccess}
        closeActiveModal={onCloseSuccess}
      />
    </>
  );
}

export default RegisterModal;
