import "./IconLink.scss";

import { JSXElement, children } from "solid-js";

interface IconLinkProps {
  icon: JSXElement;
  href: string;
}

export function IconLink({ icon, href }: IconLinkProps) {
  const i = children(() => icon);
  return <a href={href}>{i()}</a>;
}
