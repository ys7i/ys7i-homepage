import "./Link.scss";

import { A, useLocation } from "solid-start";
import { useI18n } from "@solid-primitives/i18n";

interface LinkProps {
  key: string;
  href: string;
  onClick?: () => void;
}

export function Link({ key, href, onClick = () => {} }: LinkProps) {
  const [t] = useI18n();
  const location = useLocation();
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
      {t(key)}
    </A>
  );
}
