import { useImperativeHandle, useRef } from "react";

const ResultModal = ({ ref, targetTime, timeElapsed }) => {
  const dialog = useRef(null);
  const result = timeElapsed > targetTime ? "lost" : "won";

  useImperativeHandle(ref, () => {
    return {
      openModal: () => {
        dialog.current.showModal(); // this would have to be changed by this child component's dev as req'd
      },
    };
  });
  // When you have a form element with method="dialog" within a dialog element, the form will close the dialog when submitted.
  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was{" "}
        <strong>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </strong>
      </p>
      {result === "won" && (
        <p>
          You stopped the timer with{" "}
          <strong>{(targetTime - timeElapsed).toFixed(1)} seconds left</strong>
        </p>
      )}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
