import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";
import { AppImage } from "~/components/atoms/image/Image";
import { TranslatableText } from "~/components/atoms/text/Text";
import "../404.scss";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <TranslatableText
        variant="h1"
        translationKey="notfound.title"
        inputClass="primary"
      />
      <div id="jail-img">
        <AppImage
          src="/profile/jail.jpg"
          objectFit="scale-down"
          inputClass="round-image"
        />
      </div>
      <TranslatableText
        variant="h5"
        translationKey="notfound.message"
        inputClass="primary"
      />
    </main>
  );
}
