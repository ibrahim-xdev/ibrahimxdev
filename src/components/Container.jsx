export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 lg:px-0 ${className}`}>
      {children}
    </div>
  );
}
