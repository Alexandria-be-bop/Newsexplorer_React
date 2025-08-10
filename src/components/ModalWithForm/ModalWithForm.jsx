import "./ModalWithForm.css";
import closeBtn from "../../assets/close-btn.svg";

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
  return (
    <div className={`modal ${activeModal && "modal_opened"}`}>
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
            <button
              type="button"
              className="modal__button modal__button-gray"
              onClick={altButtonOnClick}
            >
              {altButtonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
