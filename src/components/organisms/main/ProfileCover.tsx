import { AppImage } from "~/components/atoms/image/Image";
import "./ProfileCover.scss";

import { AppText, TranslatableText } from "~/components/atoms/text/Text";
import { AppButton } from "~/components/atoms/button/Button";
import { TypedText } from "~/components/atoms/text/TypedText";
import { Meta, useNavigate } from "solid-start";

export function ProfileCover() {
  const navigation = useNavigate();
  return (
    <section class="profile-section">
      <div class="profile-left-section">
        <AppImage src="/backgrounds/profile-cover.jpg" objectFit="contain" />
      </div>
      <div class="profile-right-section"></div>
      <div class="profile-box">
        <TypedText
          text={["Profile"]}
          textAlign="center"
          speed="normal"
          loop={true}
        />
        <div class="profile-content">
          <div class="profile-photo-section">
            <AppImage
              src="/profile/me.jpg"
              objectFit={null}
              inputClass="round-image"
            />
          </div>
          <div class="profile-text-content">
            <div class="profile-text-border">
              <span class="box__line"></span>
              <span class="box__line"></span>
              <span class="box__line"></span>
              <span class="box__line"></span>

              <TranslatableText
                variant="h5"
                inputClass="accent"
                translationKey="common.name"
              />
              <TranslatableText
                variant="p"
                inputClass="dark-primary font-medium"
                translationKey="top.selfIntroduction"
              />
            </div>
            <AppButton key="top.detail" onClick={() => navigation("/about")} />
          </div>
        </div>
      </div>
    </section>
  );
}
