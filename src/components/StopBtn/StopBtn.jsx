export const StopBtn = ({ stopTimer, count }) => {
  return (
    <button disabled={count > 0 ? false : true} onClick={stopTimer}>
      Order a shopper
    </button>
  );
};
