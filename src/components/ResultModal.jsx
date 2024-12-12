const ResultModal = ({ ref, result, targetTime, timeElapsed, onClose }) => {
  // When you have a form element with method="dialog" within a dialog element, the form will close the dialog when submitted.
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was{" "}
        <strong>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </strong>
      </p>
      {timeElapsed <= targetTime && (
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
