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
  return (
    <div class="form-field">
      {isTextArea ? (
        <textarea class="input-text" name={id} placeholder={placeholder} />
      ) : (
        <input
          class="input-text"
          type="text"
          name={id}
          required={isRequired}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
