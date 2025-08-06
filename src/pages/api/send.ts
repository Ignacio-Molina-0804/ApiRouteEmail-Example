import type { APIRoute } from "astro";
import { Resend } from "resend";
import { render } from "@react-email/render";
import SampleEmail from "../../emails/sampleEmail";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const GET: APIRoute = async () => {
  //Crear Email
  const emailContent = SampleEmail({ username: "Nacho" });
  const html = await render(emailContent);
  const text = await render(emailContent, { plainText: true });
  //Enviar Email
  const { data, error } = await resend.emails.send({
    from: "YOUR_NAME <YOUR_EMAIL@YOUR_DOMAIN>",
    to: ["delivered@resend.dev"],
    subject: "It works!",
    html,
    text,
  });

  if (error) {
    return new Response(JSON.stringify(error));
  }

  return new Response(JSON.stringify(data));
};
