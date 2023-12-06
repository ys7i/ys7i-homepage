import "./Header.scss";
import { createEffect, createSignal, onCleanup, Show } from "solid-js";

import { Link } from "~/components/atoms/link/Link";
import { AppSymbol } from "../symbol/Symbol";

import { useI18n } from "@solid-primitives/i18n";
import { Select } from "~/components/atoms/selector/Select";
import { Radio } from "~/components/atoms/radio/Radio";

interface HeaderProps {
  setOverFlowHidden: (fn: (value: boolean) => boolean) => void;
}

export function Header({ setOverFlowHidden }: HeaderProps) {
  const [scrollPosition, setScrollPosition] = createSignal(0);
  const [isNarrowHeaderActive, setIsNarrowHeaderActive] = createSignal(false);
  const [t, { locale, dict }] = useI18n();

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
          <Link key="header.home" href="/" />
          <Link key="header.about" href="/about" />
          <Link key="header.blog" href="/blog" />
          <Link key="header.review" href="/review" />
          <Link key="header.contact" href="/contact" />
          <Select
            value={locale()}
            onChange={(option) => {
              locale(option);
            }}
            options={[
              { id: "jp", title: "日本語" },
              { id: "en", title: "English" },
            ]}
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
              key="header.home"
              href="/"
              onClick={() => toggleHeaderButtonClass()}
            />
            <Link
              key="header.about"
              href="/about"
              onClick={() => toggleHeaderButtonClass()}
            />
            <Link
              key="header.blog"
              href="/blog"
              onClick={() => toggleHeaderButtonClass()}
            />
            <Link
              key="header.review"
              href="/review"
              onClick={() => toggleHeaderButtonClass()}
            />
            <Link
              key="header.contact"
              href="/contact"
              onClick={() => toggleHeaderButtonClass()}
            />
            <div>
              <Radio
                title="Language"
                value={locale}
                onChange={(option) => {
                  locale(option);
                }}
                options={[
                  { id: "jp", title: "日本語" },
                  { id: "en", title: "English" },
                ]}
              />
            </div>
          </div>
        </Show>
      </div>
    </header>
  );
}
