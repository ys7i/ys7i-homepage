import "./Footer.scss";

import { Link } from "~/components/atoms/link/Link";
import { AppSymbol } from "../symbol/Symbol";
import { AppText } from "~/components/atoms/text/Text";
import { IconLink } from "~/components/atoms/link/IconLink";
import { AiFillTwitterCircle } from "solid-icons/ai";
import { AiFillLinkedin } from "solid-icons/ai";
import { AiFillInstagram } from "solid-icons/ai";
import { AiFillGithub } from "solid-icons/ai";

export function Footer() {
  return (
    <footer>
      <div class="footer-flex">
        <div style={{ "margin-top": "-1rem" }} class="footer-symbol">
          <AppSymbol />
        </div>
        <div class="footer-sitemap column-flex margin-top">
          <Link text="Home" href="/" />
          <Link text="About" href="/about" />
          <Link text="Blog" href="/blog" />
          <Link text="Contact" href="/contact" />
        </div>
        <div class="icon-links">
          <AppText variant="p" text="Follow me on:" inputClass="primary-dark" />
          <div class="row-flex">
            <IconLink
              icon={<AiFillTwitterCircle />}
              href="https://twitter.com/y_s7i"
            />
            <IconLink
              icon={<AiFillLinkedin />}
              href="https://www.linkedin.com/in/yuhi-sakaguchi-ab5b89238/"
            />
            <IconLink
              icon={<AiFillInstagram />}
              href="https://instagram.com/s7i.yuhi?igshid=MjEwN2IyYWYwYw=="
            />
            <IconLink icon={<AiFillGithub />} href="https://github.com/ys7i" />
          </div>
        </div>
      </div>
      <div>
        <p class="primary-dark" style={{ "font-size": "18px" }}>
          &copy; 2023 Yuhi Sakaguchi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
