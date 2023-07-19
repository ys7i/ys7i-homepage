import { AppImage } from "~/components/atoms/image/Image";
import "./ProfileCover.scss";

import { AppText } from "~/components/atoms/text/Text";
import { AppButton } from "~/components/atoms/button/Button";
import { TypedText } from "~/components/atoms/text/TypedText";
import { Meta, useNavigate } from "solid-start";

export function ProfileCover() {
  const navigation = useNavigate();
  return (
    <section class="profile-section">
      <div class="profile-left-section">
        <AppImage
          src="/backgrounds/profile-cover.jpg"
          objectFit="cover"
        ></AppImage>
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
              objectFit="contain"
              inputClass="round-image"
            />
          </div>
          <div class="profile-text-content">
            <div class="profile-text-border">
              <span class="box__line"></span>
              <span class="box__line"></span>
              <span class="box__line"></span>
              <span class="box__line"></span>

              <AppText variant="h5" inputClass="accent" text="Yuhi Sakaguchi" />
              <AppText
                variant="p"
                inputClass="dark-primary font-medium "
                text={
                  <>
                    Thank you for visiting my website. <br />I am a graduate
                    student and freelance software engineer. <br />I have
                    experience in both front-end and back-end development, and I
                    excel at adapting to a wide range of technologies.
                  </>
                }
              />
            </div>
            <AppButton text="Detail" onClick={() => navigation("/about")} />
          </div>
        </div>
      </div>
    </section>
  );
}
