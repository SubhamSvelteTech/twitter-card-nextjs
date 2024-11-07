import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Title";
  const desc = searchParams.get("desc") ?? "Description";
  const siteName = searchParams.get("siteName") ?? "yehezgun.com";
  const socialMedia = searchParams.get("socialMedia") ?? "Twitter: @yehezgun";
  const imgUrl =
    searchParams.get("imgUrl") ??
    "https://res.cloudinary.com/yehez/image/upload/v1646485864/yehez_avatar_transparent_swwqcq.png";
  return new ImageResponse(
    (
      <div tw="bg-gray-800 w-full h-full flex flex-col">
        <div tw="w-full h-10/12 flex items-center justify-between px-24 text-white">
          <div tw="flex flex-col max-w-3xl">
            <h1 tw="text-5xl" style={{ fontFamily: "FiraSans-Bold" }}>
              {title}
            </h1>
            <h4 tw="text-3xl mt-8" style={{ fontFamily: "FiraSans-Light" }}>
              {desc}
            </h4>
          </div>
          <figure
            tw={
              imgUrl ===
              "https://res.cloudinary.com/yehez/image/upload/v1646485864/yehez_avatar_transparent_swwqcq.png"
                ? "bg-slate-600 rounded-full"
                : ""
            }
          >
            <img
              tw={
                imgUrl ===
                "https://res.cloudinary.com/yehez/image/upload/v1646485864/yehez_avatar_transparent_swwqcq.png"
                  ? "rounded-full"
                  : ""
              }
              src={imgUrl}
              alt="og-image"
              width="256"
              height="256"
            />
          </figure>
        </div>
        <div tw="w-full h-1/6 px-24 flex items-center justify-between text-white">
          <p tw="font-bold text-xl" style={{ fontFamily: "FiraSans-Medium" }}>
            {siteName}
          </p>
          <p
            tw="font-medium text-xl"
            style={{ fontFamily: "FiraSans-Regular" }}
          >
            {socialMedia}
          </p>
        </div>
      </div>
    )
  );
}
