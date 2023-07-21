import "./Link.scss";

import { A, useIsRouting, useLocation } from "solid-start";
import { children } from "solid-js";

interface LinkProps {
  text: string;
  href: string;
  onClick?: () => void;
}

export function Link({ text, href, onClick = () => {} }: LinkProps) {
  // const isRouting = useIsRouting();
  const location = useLocation();
  const t = children(() => text);
  return (
    <A
      href={href}
      classList={{
        "custom-link": true,
        "not-current": location.pathname !== href,
        current: location.pathname === href,
      }}
      onClick={onClick}
    >
      {t()}
    </A>
  );
}
