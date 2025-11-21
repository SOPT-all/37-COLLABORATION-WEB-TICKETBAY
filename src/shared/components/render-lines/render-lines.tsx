export const RenderLines = (text: string) => {
  return (
    <p>
      {text.split("\n").map((line, idx) => (
        <>
          {line}
          {idx !== text.split("\n").length - 1 && <br />}
        </>
      ))}
    </p>
  );
};
