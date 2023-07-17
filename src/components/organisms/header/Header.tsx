import "./Header.scss";

import { BiSolidCoinStack } from "solid-icons/bi";
import { AppText } from "~/components/atoms/text/Text";
import { createEffect, createSignal, onCleanup, Show } from "solid-js";
import { Link } from "~/components/atoms/link/Link";
import { AppSymbol } from "../symbol/Symbol";

interface HeaderProps {
  setOverFlowHidden: (fn: (value: boolean) => boolean) => void;
}

export function Header({ setOverFlowHidden }: HeaderProps) {
  const [scrollPosition, setScrollPosition] = createSignal(0);
  const [isNarrowHeaderActive, setIsNarrowHeaderActive] = createSignal(false);

  const toggleHeaderButtonClass = () => {
    setIsNarrowHeaderActive((sgnl) => !sgnl);
    setOverFlowHidden((item) => !item);
  };

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  createEffect(() => {
    window.addEventListener("scroll", handleScroll);
    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  });

  return (
    <header
      classList={{
        upmove: scrollPosition() > 500,
        downmove: scrollPosition() <= 500,
      }}
    >
      <div class="large-header">
        <div class="flex-start">
          <AppSymbol iconColorSecondary={false} />
        </div>
        <div class="header-link">
          <Link text="Home" href="/" />
          <Link text="About" href="/about" />
          <Link text="Blog" href="/blog" />
          <Link text="Contact" href="/contact" />
        </div>
      </div>
      <div class="narrow-header">
        <div class="narrow-header-top">
          <AppSymbol />
          <div
            classList={{
              "narrow-header-button": true,
              active: isNarrowHeaderActive(),
            }}
            onClick={toggleHeaderButtonClass}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <Show when={isNarrowHeaderActive()}>
          <div class="narrow-header-body">
            <Link
              text="Home"
              href="/"
              onClick={() => setIsNarrowHeaderActive(false)}
            />
            <Link
              text="About"
              href="/about"
              onClick={() => setIsNarrowHeaderActive(false)}
            />
            <Link
              text="Blog"
              href="/blog"
              onClick={() => setIsNarrowHeaderActive(false)}
            />
            <Link
              text="Contact"
              href="/contact"
              onClick={() => setIsNarrowHeaderActive(false)}
            />
          </div>
        </Show>
      </div>
    </header>
  );
}
