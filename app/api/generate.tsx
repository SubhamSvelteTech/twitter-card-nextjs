import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const heading = searchParams.get("heading")?.slice(0, 100);
  const text = searchParams.get("text")?.slice(0, 200);
  const width = Number(searchParams.get("width") ?? 1200);
  const height = Number(searchParams.get("height") ?? 630);

  return new ImageResponse(
    (
      <div>
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    ),
    {
      width,
      height,
    }
  );
}
