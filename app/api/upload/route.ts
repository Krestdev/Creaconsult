// pages/api/upload.ts
import fs from "fs";
import path, { resolve } from "path";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { pipeline } from "stream";
import { promisify } from "util";
import { NextResponse } from "next/server";
const pump = promisify(pipeline);

export async function POST(req: Request) {
  const uploadDir = path.join(process.cwd(), "public/uploads");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const reqBody = await req.formData();

  console.log("form data", reqBody.get("cv"));

  // await new Promise(async (resolve, reject) => {
  let attachments: { filename: string; path: string }[] = [];

  let files = [reqBody.get("cv"), reqBody.get("cni"), reqBody.get("diplome")];

  let filedata: { filename: string; path: string }[] = [];

  await Promise.all(
    files.map(async (file) => {
      if (file) {
        const filePath = `./public/uploads/${(file as File).name}`;
        await pump((file! as any).stream(), fs.createWriteStream(filePath));
        filedata.push({
          filename: (file! as File).name,
          path: filePath,
        });
      }
    })
  );

  let fields = {
    fullname: reqBody.get("fullname"),
    telephone: reqBody.get("telephone"),
    addresse: reqBody.get("addresse"),
    mail: reqBody.get("mail"),
    poste: reqBody.get("poste")
  };

  filedata.forEach((file) => {
    const filePath = path.join(process.cwd(), "public/uploads", file.filename);

    attachments.push({
      filename: file.filename,
      path: filePath,
    });
  });

  attachments = filedata;

  try {
    await sendEmailWithAttachment(fields, attachments);
    // await sendEmailWithAttachment(fields, attachments, fields.mail as string);
    return NextResponse.json({
      message: "File uploaded and email sent successfully!",
    });
  } catch (emailErr) {
    return NextResponse.json(
      {
        message: "Failed to send email.",
        error: emailErr,
      },
      { status: 500 }
    );
  }
  // });
}

const sendEmailWithAttachment = async (fields: any, attachments: any, to?:string) => {
  // Configure the email transporter
  const message = `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Application Details</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #fff;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h2 {
              color: #333;
            }
            p,a {
              line-height: 1.6;
            }
            p{
              color: #666;
            }
            .header, .footer {
              text-align: center;
              padding: 10px 0;
              background-color: #007BFF;
              color: #fff;
              border-radius: 10px 10px 0 0;
            }
            .footer {
              border-radius: 0 0 10px 10px;
            }
            .footer p{
              color: #fff;
            }
            .details {
              margin-bottom: 20px;
              padding: 10px;
            }
            .details strong {
              color: #333;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Application Details</h1>
            </div>
            <div class="details">
              <p><strong>Full Name:</strong> ${fields.fullname}</p>
              <a href="tel:${fields.telephone}"><strong>Telephone:</strong> ${fields.telephone}</a><br/>
              <a href="mailto:${fields.mail}"><strong>Email:</strong> ${fields.mail}</a>
              <p><strong>Address:</strong> ${fields.addresse}</p>
              <p><strong>Position Applied For:</strong> ${fields.poste}</p>
            </div>
            <div class="footer">
              <p>&copy; 2024 krestdev.com. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>`;
  // const fileContent = fs.readFileSync(file.filepath);

  let transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true,
    logger: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL, // Your Gmail address
      pass: process.env.NEXT_PUBLIC_PASSWORD, // Your Gmail password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Email options
  let mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL,
    to: to ? to : process.env.NEXT_PUBLIC_EMAIL_TO, // Your Gmail address to receive the email
    // to: "jkenfack@krestholding.com",
    subject: `Application de ${fields.fullname} aux poste de ${fields.poste}`,
    html: message,
    attachments,
  };

  // Read the file content to attach it to the email

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    console.log("Mail sent");
  } catch (error) {
    console.log(error);
  }

  // Send the email
  await transporter.sendMail(mailOptions);
};
