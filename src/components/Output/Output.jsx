export const Output = ({ count }) => {
  return (
    <>
      <p>
        The promotion ends in{" "}
        {(Math.floor(count / 1000 / 60 / 60) + "").padStart(2, "0")}:
        {(Math.floor((count % (1000 * 60 * 60)) / 1000 / 60) + "").padStart(
          2,
          "0"
        )}
        :
        {(
          Math.floor(((count % (1000 * 60 * 60)) % (1000 * 60)) / 1000) + ""
        ).padStart(2, "0")}
      </p>
    </>
  );
};
