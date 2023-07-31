import "@/styles/ui/button.scss";
export default function Button({ onClick, className, children }) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
