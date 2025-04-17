// app/api/subscribe/route.ts
import directus from "@/lib/directus/directus";
import { createItem, readItems } from "@directus/sdk";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, name, profession, subject, message } = await request.json();

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

    return NextResponse.json(result);
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// export async function GET(request: Request) {
//   try {
//     // Get query parameters for filtering/sorting
//     const { searchParams } = new URL(request.url);
//     const limit = searchParams.get("limit");
//     const sort = searchParams.get("sort") || "-date_created";

//     // Fetch contacts from Directus
//     const contacts = await directus.request(
//       readItems("contacts", {
//         limit: limit ? Number(limit) : 100,
//         sort: [sort as string],
//         fields: ["id", "name", "email", "subject", "date_created"],
//       })
//     );

//     return NextResponse.json(contacts);
//   } catch (error) {
//     console.error("Failed to fetch contacts:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
