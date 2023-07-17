import "./TypedText.scss";

import { onCleanup, onMount } from "solid-js";
import Typed from "typed.js";

interface TypedTextProps {
  text: string[];
  textAlign?: "start" | "end" | "center";
  speed: "fast" | "normal" | "slow";
  loop?: boolean;
  size?: "small" | "normal";
}

export function TypedText({
  text,
  textAlign = "start",
  loop = false,
  speed,
  size = "normal",
}: TypedTextProps) {
  let ref: HTMLDivElement | undefined;
  let typed: Typed;
  onMount(() => {
    if (ref !== undefined) {
      const typed = new Typed(ref, {
        strings: [text.join("<br/>")],
        typeSpeed: speed === "fast" ? 50 : speed === "normal" ? 70 : 150,
        loop,
        fadeOut: true,
        backDelay: 3000,
      });
    }
  });

  onCleanup(() => {
    typed?.destroy();
  });
  return (
    <div
      classList={{
        "normal-size": size === "normal",
        "typed-text": true,
        "small-size": size === "small",
      }}
      style={{ "text-align": textAlign }}
    >
      <span ref={ref} />
    </div>
  );
}
