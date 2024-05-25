import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailTo = process.env.EMAIL_TO ?? 'test@example.com';

export async function POST(request: Request) {
  // const { username, subject, email, content, file } = await request.json();
  const formData = await request.formData();
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const content = formData.get("content") as string;
  const file = formData.get("file") as File;
  console.log("file async function POST username,file >", username, file)

  const buffer = Buffer.from(await file.arrayBuffer());
  console.log("buffer >", buffer)

  try {
    const { data, error} = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [emailTo],
      subject: subject,
      react: EmailTemplate({
        username: username,
        email, // このように省略できる
        content: content,
      }) as React.ReactElement,
      attachments: [
        {
          filename: file.name,
          // 画像データをバイナリデータに置き換え、一時的にバッファに格納してこのcontentに含める
          content: buffer
        }
      ],
    });

    if (error) {
      console.log("await resend.emails.send error", error)
      return NextResponse.json({ error })
    }

    return NextResponse.json({data})
  } catch (error) {
    return NextResponse.json({ error });
  }
}