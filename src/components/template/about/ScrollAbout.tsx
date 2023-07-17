import { gsap } from "gsap";
import { createEffect, For, Resource } from "solid-js";
import { Skill } from "~/api/contentful";
import { AppImage } from "~/components/atoms/image/Image";
import { AppText } from "~/components/atoms/text/Text";
import { MiniCard } from "~/components/organisms/card/MiniCard";

import "./ScrollAbout.scss";

interface ScrollAboutProps {
  skills: Resource<
    | {
        front: Skill[];
        back: Skill[];
      }
    | undefined
  >;
}

export function ScrollAbout({ skills }: ScrollAboutProps) {
  let profileTextRef: HTMLHeadingElement | undefined;
  let nameRef: HTMLHeadingElement | undefined;
  let photoRef: HTMLDivElement | undefined;
  let frontRef: HTMLDivElement | undefined;
  let backRef: HTMLDivElement | undefined;

  createEffect(() => {
    gsap.matchMedia().add(
      {
        isDesktop: `(min-width: 1300px) and (prefers-reduced-motion: no-preference)`,
        isMobile: `(max-width: 1299px) and (prefers-reduced-motion: no-preference)`,
      },
      (context) => {
        if (
          profileTextRef &&
          nameRef &&
          photoRef &&
          frontRef &&
          backRef &&
          context.conditions?.isDesktop
        ) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".scroll-about",
                start: "top top+=20%",
                end: "+=6000",
                scrub: true,
                pin: true,
              },
            })
            .fromTo(
              profileTextRef,
              {
                transform: "translateY(30vh)",
              },
              {
                scale: 350,
                display: "none",
                delay: 0.5,
              }
            )
            .from(nameRef, {
              display: "none",
              scale: 350,
              transform: "translateX(-30%)",
            })
            .from(
              photoRef,
              {
                transform: "translateY(100vh)",
                scale: 0.01,
              },
              "<"
            )
            .fromTo(
              frontRef,
              {
                transform: "translateX(-150vw)",
              },
              { transform: "none", delay: 0.5 }
            )
            .to(nameRef, { transform: "translateX(150vw)" }, "<")
            .from(backRef, {
              transform: "translateY(100vh)",
              delay: 0.5,
            })
            .to(frontRef, { transform: "translateY(-100vh)" }, "<");
        }
      }
    );
  });
  return (
    <div class="scroll-about">
      <div ref={profileTextRef} class="title-text profile-text">
        <AppText variant="h2" text="Profile" />
      </div>
      <div ref={nameRef} class="title-text">
        <AppText variant="h3" text="Yuhi Sakaguchi" />
      </div>
      <div class="profile-photo-area">
        <div class="profile-photo" ref={photoRef}>
          <AppImage
            src="/profile/me.jpg"
            objectFit="scale-down"
            inputClass="round-image"
          />
        </div>
      </div>
      <div class="mobile-text">
        <AppText variant="h3" text="Skills" />
      </div>
      <div class="icon-area" ref={frontRef}>
        <AppText variant="h3" text="Front Engineer" />
        <div class="icons">
          <For each={skills()?.front ?? []}>
            {(skill) => (
              <div class="skill-front-card">
                <MiniCard
                  title={skill.title}
                  src={`https:${skill.photo.fields.file.url}`}
                />
              </div>
            )}
          </For>
        </div>
      </div>
      <div class="icon-area" ref={backRef}>
        <AppText variant="h3" text="Backend Engineer" />
        <div class="icons">
          <For each={skills()?.back ?? []}>
            {(skill) => (
              <div class="skill-back-card">
                <MiniCard
                  title={skill.title}
                  src={`https:${skill.photo.fields.file.url}`}
                />
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
}
