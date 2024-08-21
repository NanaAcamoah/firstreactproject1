import ButtonSvg from "../assets/svg/ButtonSvg";
const Button = ({ className, onClick, white, px, href, children }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1  ${
    white ? "text-n-8" : "text-n-1"
  } ${className || ""}`;
  const spanClasses = "relative z-11";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  return href ? renderLink() : renderButton();
};

export default Button;
