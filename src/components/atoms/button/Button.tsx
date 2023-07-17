import { AppText } from "../text/Text";
import "./Button.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export function AppButton({ text, onClick }: ButtonProps) {
  return (
    <button class="app-button" onClick={onClick}>
      <p>{text}</p>
    </button>
  );
}
