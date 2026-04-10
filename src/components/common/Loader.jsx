function Loader({ size = "md", text = "Loading..." }) {
  const sizeClass =
    size === "sm"
      ? "spinner-border-sm"
      : size === "lg"
      ? "spinner-border"
      : "spinner-border";

  return (
    <div className="d-flex flex-column justify-content-center align-items-center py-5">
      <div
        className={sizeClass}
        role="status"
        aria-label="Loading"
      >
        <span className="visually-hidden">{text}</span>
      </div>

      {text && (
        <div className="mt-2 small text-muted">
          {text}
        </div>
      )}
    </div>
  );
}

export default Loader;