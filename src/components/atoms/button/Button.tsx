import { AppText } from "../text/Text";
import "./Button.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "submit" | "button";
}

export function AppButton({
  text,
  onClick = () => {},
  type = "button",
}: ButtonProps) {
  return (
    <button class="app-button" onClick={onClick} type={type}>
      <p>{text}</p>
    </button>
  );
}
