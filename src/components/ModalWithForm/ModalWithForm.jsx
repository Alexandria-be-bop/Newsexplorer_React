import "./ModalWithForm.css";
import closeBtn from "../../assets/close-btn.svg";
import { useEffect } from "react";

function ModalWithForm({
  children,
  buttonText,
  altButtonText,
  altButtonOnClick,
  title,
  activeModal,
  closeActiveModal,
  onSubmit,
  disabled = false,
}) {
  useEffect(() => {
    const handleEscClose = (e) => e.key === "Escape" && closeActiveModal();

    if (activeModal) {
      document.addEventListener("keydown", handleEscClose);
      return () => document.removeEventListener("keydown", handleEscClose);
    }
  }, [activeModal, closeActiveModal]);

  return (
    <div
      className={`modal ${activeModal && "modal_opened"}`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          closeActiveModal();
        }
      }}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={closeActiveModal}
          className="modal__close-btn"
          type="button"
        >
          <img
            src={closeBtn}
            alt="X"
          />
        </button>
        <form
          onSubmit={onSubmit}
          className="modal__form"
        >
          {children}
          <div className="modal__button-container">
            <button
              type="submit"
              className="modal__submit"
              disabled={disabled}
            >
              {buttonText}
            </button>
            <div className="modal__alt-button-container">
              <p className="modal__button-text">or</p>
              <button
                type="button"
                className="modal__button"
                onClick={altButtonOnClick}
              >
                {altButtonText}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
