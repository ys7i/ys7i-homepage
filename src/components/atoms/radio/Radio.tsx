import { For } from "solid-js";
import "./Radio.scss";

interface RadioProps {
  title: string;
  options: { id: string; title: string }[];
  onChange: (value: string) => void;
  value: () => string;
}

export function Radio({ title, options, onChange, value }: RadioProps) {
  return (
    <fieldset>
      <legend>{title}</legend>
      <For each={options}>
        {(option) => (
          <div>
            <input
              type="radio"
              value={option.id}
              checked={option.id === value()}
              onChange={(e) => {
                onChange(e.target.value);
              }}
            >
              {option.title}
            </input>
            <label for={option.id}>{option.title}</label>
          </div>
        )}
      </For>
    </fieldset>
  );
}
