import "./Header.scss";

import { createEffect, createSignal, onCleanup, Show } from "solid-js";
import { Link } from "~/components/atoms/link/Link";
import { AppSymbol } from "../symbol/Symbol";
import { AppButton } from "~/components/atoms/button/Button";
import { useScopedI18n } from "@solid-primitives/i18n";
import { I18nLnDict } from "~/i18n/type";

interface HeaderProps {
  setOverFlowHidden: (fn: (value: boolean) => boolean) => void;
}

export function Header({ setOverFlowHidden }: HeaderProps) {
  const [scrollPosition, setScrollPosition] = createSignal(0);
  const [isNarrowHeaderActive, setIsNarrowHeaderActive] = createSignal(false);
  const [t, { locale }] = useScopedI18n<I18nLnDict["header"], string>("header");

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
          <Link text={t("home")} href="/" />
          <Link text="About" href="/about" />
          <Link text="Blog" href="/blog" />
          <Link text="Contact" href="/contact" />
          <p style={{ color: "white" }}>{t("home")}</p>
          <AppButton
            text="language"
            onClick={() => {
              console.log(t("home"));
              console.log(locale("jp"));
            }}
          />
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
              onClick={() => toggleHeaderButtonClass()}
            />
            <Link
              text="About"
              href="/about"
              onClick={() => toggleHeaderButtonClass()}
            />
            <Link
              text="Blog"
              href="/blog"
              onClick={() => toggleHeaderButtonClass()}
            />
            <Link
              text="Contact"
              href="/contact"
              onClick={() => toggleHeaderButtonClass()}
            />
          </div>
        </Show>
      </div>
    </header>
  );
}
