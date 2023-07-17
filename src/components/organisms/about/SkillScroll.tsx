import { gsap } from "gsap";

import { createEffect } from "solid-js";
import { AppText } from "~/components/atoms/text/Text";

import "./SkillScroll.scss";

export function SkillScroll() {
  let frontTitleRef: HTMLHeadingElement | undefined;
  createEffect(() => {
    if (frontTitleRef) {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".skill-scroll",
          start: "top center",
          end: "+=2000",
          scrub: true,
          pin: true,
          markers: true,
        },
      });
    }
  });
  return (
    <div class="skill-scroll">
      <div class="title-divs">
        <div>
          <AppText variant="h2" text="Skills&nbsp;" />
        </div>
        <div ref={frontTitleRef}>
          <AppText variant="h2" text="as Front Engineer" />
        </div>
      </div>
    </div>
  );
}
