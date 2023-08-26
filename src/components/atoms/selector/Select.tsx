import { For } from "solid-js";
import "./Select.scss";

interface SelectProps {
  options: { id: string; title: string }[];
  onChange: (value: string) => void;
  value: string;
}

export function Select({ options, onChange, value }: SelectProps) {
  return (
    <div class="cp_ipselect">
      <select onChange={(e) => onChange(e.target.value)} value={value}>
        <For each={options}>
          {(option) => <option value={option.id}>{option.title}</option>}
        </For>
      </select>
    </div>
  );
}
