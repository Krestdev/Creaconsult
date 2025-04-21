// app/api/subscribe/route.ts
import directus from "@/lib/directus/directus";
import nodemailer from "nodemailer";
import { createItem, readItems } from "@directus/sdk";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, name, profession, subject, message, lang } =
      await request.json();

    if (!email || !name) {
      return NextResponse.json(
        { error: "Email and name are required" },
        { status: 400 }
      );
    }

    // Store in Directus
    const result = await directus.request(
      createItem("Contacts", {
        email,
        name,
        profession: profession || "",
        subject: subject || "",
        message: message || "",
        date_created: new Date().toISOString(),
        status: "pending",
      })
    );

    try {
      await sendEmailWithAttachment(
        { title: "Newsletter subscription", email, name, lang },
        null
      );
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

    return NextResponse.json(result);
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

const sendEmailWithAttachment = async (fields: any, attachments: any) => {
  // Configure the email transporter
  const message =
    fields.lang == "en"
      ? `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Our Newsletter</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f8f9fa;
      color: #333;
      line-height: 1.6;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #fff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #700032;
      padding: 30px 20px;
      text-align: center;
      color: white;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
    }
    .header p {
      margin: 10px 0 0;
      font-size: 16px;
      opacity: 0.9;
    }
    .content {
      padding: 30px;
    }
    .welcome-text {
      margin-bottom: 25px;
      font-size: 16px;
    }
    .features {
      margin: 25px 0;
    }
    .feature-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 15px;
    }
    .feature-icon {
      background-color: #f5e6ed;
      color: #700032;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      flex-shrink: 0;
      font-weight: bold;
    }
    .cta-button {
      display: inline-block;
      background-color: #700032;
      color: white !important;
      text-decoration: none;
      padding: 12px 25px;
      border-radius: 5px;
      font-weight: bold;
      margin: 20px 0;
      text-align: center;
      transition: background-color 0.3s;
    }
    .cta-button:hover {
      background-color: #8a003d;
    }
    .footer {
      background-color: #f1f1f1;
      padding: 20px;
      text-align: center;
      font-size: 14px;
      color: #666;
    }
    .social-links {
      margin: 20px 0;
    }
    .social-links a {
      display: inline-block;
      margin: 0 10px;
      color: #700032;
      text-decoration: none;
      font-weight: bold;
    }
    .unsubscribe {
      font-size: 12px;
      color: #999;
      margin-top: 20px;
    }
    a {
      color: #700032;
    }
    h3 {
      color: #700032;
      margin-top: 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to Our Newsletter!</h1>
      <p>Stay updated with our latest news and offers</p>
    </div>
    
    <div class="content">
      <div class="welcome-text">
        <p>Dear Subscriber,</p>
        <p>Thank you for joining our community! We're excited to share valuable content, exclusive offers, and the latest updates with you.</p>
      </div>
      
      <div class="features">
        <h3>Here's what you can expect:</h3>
        
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div>
            <strong>Weekly insights</strong> - Get expert tips and industry trends
          </div>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div>
            <strong>Exclusive offers</strong> - Special discounts for our subscribers
          </div>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div>
            <strong>Latest updates</strong> - Be the first to know about new products
          </div>
        </div>
      </div>
      
      <div style="text-align: center;">
        <a href="#" class="cta-button">Explore Our Latest Content</a>
      </div>
      
      <div class="social-links" style="text-align: center;">
        <p>Follow us on:</p>
        <a href="#">Twitter</a> | 
        <a href="#">LinkedIn</a>
      </div>
    </div>
    
    <div class="footer">
      <p>© 2024 Creaconsult. All rights reserved.</p>
      <p>123 Business Street, City, Country</p>
    </div>
  </div>
</body>
</html>`
      : `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bienvenue à notre newsletter</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f8f9fa;
      color: #333;
      line-height: 1.6;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #fff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #700032;
      padding: 30px 20px;
      text-align: center;
      color: white;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
    }
    .header p {
      margin: 10px 0 0;
      font-size: 16px;
      opacity: 0.9;
    }
    .content {
      padding: 30px;
    }
    .welcome-text {
      margin-bottom: 25px;
      font-size: 16px;
    }
    .features {
      margin: 25px 0;
    }
    .feature-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 15px;
    }
    .feature-icon {
      background-color: #f5e6ed;
      color: #700032;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      flex-shrink: 0;
      font-weight: bold;
    }
    .cta-button {
      display: inline-block;
      background-color: #700032;
      color: white !important;
      text-decoration: none;
      padding: 12px 25px;
      border-radius: 5px;
      font-weight: bold;
      margin: 20px 0;
      text-align: center;
      transition: background-color 0.3s;
    }
    .cta-button:hover {
      background-color: #8a003d;
    }
    .footer {
      background-color: #f1f1f1;
      padding: 20px;
      text-align: center;
      font-size: 14px;
      color: #666;
    }
    .social-links {
      margin: 20px 0;
    }
    .social-links a {
      display: inline-block;
      margin: 0 10px;
      color: #700032;
      text-decoration: none;
      font-weight: bold;
    }
    .unsubscribe {
      font-size: 12px;
      color: #999;
      margin-top: 20px;
    }
    a {
      color: #700032;
    }
    h3 {
      color: #700032;
      margin-top: 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Bienvenue à notre newsletter !</h1>
      <p>Restez informé de nos dernières nouvelles et offres</p>
    </div>
    
    <div class="content">
      <div class="welcome-text">
        <p>Cher abonné,</p>
        <p>Merci de vous être joint à notre communauté ! Nous sommes ravis de partager avec vous du contenu de valeur, des offres exclusives et les dernières mises à jour.</p>
      </div>
      
      <div class="features">
        <h3>Voici ce qui vous attend :</h3>
        
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div>
            <strong>Des insights hebdomadaires</strong> - Conseils d'experts et tendances du secteur
          </div>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div>
            <strong>Des offres exclusives</strong> - Remises spéciales pour nos abonnés
          </div>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div>
            <strong>Les dernières actualités</strong> - Soyez les premiers informés de nos nouveautés
          </div>
        </div>
      </div>
      
      <div style="text-align: center;">
        <a href="#" class="cta-button">Découvrez notre dernier contenu</a>
      </div>
      
      <div class="social-links" style="text-align: center;">
        <p>Suivez-nous sur :</p> 
        <a href="#">Twitter</a> | 
        <a href="#">LinkedIn</a>
      </div>
    </div>
    
    <div class="footer">
      <p>© 2024 Creaconsult. Tous droits réservés.</p>
      <p>123 Rue des Entreprises, Ville, Pays</p>
    </div>
  </div>
</body>
</html>`;
  // const fileContent = fs.readFileSync(file.filepath);

  let transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true,
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
    to: fields.email,
    // to: process.env.NEXT_PUBLIC_EMAIL,
    // Your Gmail address to receive the email
    // to: "jkenfack@krestholding.com",
    subject:
      fields.lang == "en"
        ? `Newsletter subscription`
        : `Souscription a la news letter`,
    html: message,
    attachments,
  };

  // Read the file content to attach it to the email

  // Send email
  // try {
  //   await transporter.sendMail(mailOptions);
  //   console.log("Mail sent");
  //   return true;
  // } catch (error) {
  //   console.log(error);
  //   return false;
  // }

  // Send the email
  await transporter.sendMail(mailOptions);
};
