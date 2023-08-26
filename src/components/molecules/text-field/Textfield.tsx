import { useI18n } from "@solid-primitives/i18n";
import "./Textfield.scss";

export type Props = {
  isTextArea?: boolean;
  id: string;
  isRequired: boolean;
  placeholder?: string;
};

export function Textfield({
  isTextArea,
  id,
  isRequired,
  placeholder = "",
}: Props) {
  const [t] = useI18n();
  return (
    <div class="form-field">
      {isTextArea ? (
        <>
          <textarea class="input-text" name={id} placeholder={t(placeholder)} />
        </>
      ) : (
        <input
          class="input-text"
          type="text"
          name={id}
          required={isRequired}
          placeholder={t(placeholder)}
        />
      )}
    </div>
  );
}
