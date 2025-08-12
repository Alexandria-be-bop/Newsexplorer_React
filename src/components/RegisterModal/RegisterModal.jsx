import { useId, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

export default function RegisterModal({
  handleRegistration,
  activeModal,
  closeActiveModal,
  onLoginClick,
}) {
  const [emailError, setEmailError] = useState("");

  const emailId = useId();
  const passwordId = useId();
  const nameId = useId();

  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onRegistration = (e) => {
    e.preventDefault();
    handleRegistration(data);
    setData({ email: "", password: "", name: "", avatar: "" });
  };

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isAvatarValid = (avatar) => {
    try {
      new URL(avatar);
      return true;
    } catch {
      return false;
    }
  };

  const isFormValid =
    isEmailValid(data.email) &&
    data.password.trim() &&
    data.name.trim() &&
    isAvatarValid(data.avatar);

  const handleEmailValidation = (e) => {
    if (isEmailValid(e.target.value)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email address");
    }
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      altButtonText="Log in"
      altButtonOnClick={onLoginClick}
      activeModal={activeModal}
      closeActiveModal={closeActiveModal}
      onSubmit={onRegistration}
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
        <p className={`modal__invalid-email`}>{emailError}</p>
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
    </ModalWithForm>
  );
}
