import "./Link.scss";

import { A, useIsRouting, useLocation } from "solid-start";

interface LinkProps {
  text: string;
  href: string;
}

export function Link({ text, href }: LinkProps) {
  // const isRouting = useIsRouting();
  const location = useLocation();
  return (
    <A
      href={href}
      classList={{
        "custom-link": true,
        "not-current": location.pathname !== href,
        current: location.pathname === href,
      }}
    >
      {text}
    </A>
  );
}
