import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { createServerAction$, redirect } from "solid-start/server";
import { Match, Switch } from "solid-js";
import { fromEnv } from "@aws-sdk/credential-provider-env";

import { AppText } from "~/components/atoms/text/Text";
import { Textfield } from "~/components/molecules/text-field/Textfield";
import "./ContactCard.scss";
import { Orbit3dLoading } from "~/components/atoms/loading/Orbit3dLoading";

export default function ContactCard() {
  const [result, { Form }] = createServerAction$(async (formData: FormData) => {
    const region = process.env.AWS_REGION;
    const sesClient = new SESClient({
      region,
      credentials: fromEnv(),
    });

    const createSendEmailCommand = (subject: string, body: string) => {
      const params = {
        Destination: {
          ToAddresses: [process.env.TO_MAIL ?? ""],
        },
        Message: {
          Body: {
            Text: {
              Charset: "UTF-8",
              Data: body,
            },
          },
          Subject: {
            Charset: "UTF-8",
            Data: subject,
          },
        },
        Source: process.env.FROM_MAIL,
      };
      return new SendEmailCommand(params);
    };

    const sendEmailCommand = createSendEmailCommand(
      `ys7i.com コンタクトページより問い合わせ ${formData.get("subject")}`,
      `名前: ${formData.get("name")}\nメールアドレス:  ${formData.get(
        "email"
      )}\n\n内容> ${formData.get("message")}`
    );

    try {
      const sesClient = new SESClient({
        region,
      });

      await sesClient.send(sendEmailCommand);
      return redirect("/contact/submitted");
    } catch (e) {
      console.error("Failed to send email.");
      return "failed";
    }
  });
  return (
    <div class="contact-card">
      <div class="contact-contents primary">
        <div class="contact-message">
          <AppText
            variant="p"
            inputClass="text-align-center accent font-medium"
            text={<>Please feel free to contact me! {result.result}</>}
          />
          <AppText
            variant="p"
            inputClass="text-align-center accent font-medium"
            text={
              <>
                I will respond to inquiries that are eligible for a reply within
                5 days.
              </>
            }
          />
          <Orbit3dLoading />
        </div>

        <Form class="contact-form">
          <Textfield placeholder="Your name" id="name" isRequired={true} />
          <Textfield id="email" isRequired={true} placeholder="Your email" />
          <Textfield placeholder="Subject" id="subject" isRequired={true} />
          <Textfield
            isTextArea={true}
            id="message"
            isRequired={true}
            placeholder="Your message"
          />
          <input type="submit" value="submit" class="input-button" />
        </Form>
      </div>
    </div>
  );
}
