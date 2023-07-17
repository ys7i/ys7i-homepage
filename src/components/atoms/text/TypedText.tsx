import "./TypedText.scss";

import { onCleanup, onMount } from "solid-js";
import Typed from "typed.js";

interface TypedTextProps {
  text: string[];
  textAlign?: "start" | "end" | "center";
  speed: "fast" | "normal" | "slow";
  loop?: boolean;
}

export function TypedText({
  text,
  textAlign = "start",
  loop = false,
  speed,
}: TypedTextProps) {
  let ref: HTMLDivElement | undefined;
  let typed: Typed;
  onMount(() => {
    console.log("mounted");

    if (ref !== undefined) {
      console.log("mounted inside");
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
    <div class="typed-text" style={{ "text-align": textAlign }}>
      <span ref={ref} />
    </div>
  );
}
