/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge"
  // runtime: "edge"
};

const fontInter = fetch(
  new URL("../../assets/og/custom-fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());
// const fontFigTree = fetch(
// new URL("../../assets/og/custom-fonts/Figtree-ExtraBold.ttf", import.meta.url)
// new URL("../../assets/og/custom-fonts/Figtree-Bold.ttf", import.meta.url)
// ).then((res) => res.arrayBuffer());
const fontPoppins = fetch(
  new URL("../../assets/og/custom-fonts/Poppins-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function OgImage(req: NextRequest) {
  const Inter = await fontInter;
  // const FigTree = await fontFigTree;
  const Poppins = await fontPoppins;

  const { searchParams } = req.nextUrl;

  const theme = searchParams.get("theme") || "light";
  const title = searchParams.get("title") || "Hello World!";
  const description =
    searchParams.get("description") ||
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur";

  const style = {
    headline: theme === "dark" ? "#f8fafc" : "#1e293b",
    text: theme === "dark" ? "#cbd5e1" : "#475569",
    logoColor: theme === "dark" ? "#3b82f6" : "#2563EB",
    bgColor: theme === "dark" ? "#111827" : "#eff6ff",
    bg:
      theme === "dark"
        ? "https://ik.imagekit.io/lzkn3c9xkpp/Portfolio/og/bg-dark_PbZ_Cb5xD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672904676737"
        : "https://ik.imagekit.io/lzkn3c9xkpp/Portfolio/og/bg-light_GotcZsuli.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672904676738"
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: style.bgColor
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          }}
        >
          <img
            src={style.bg}
            alt="Background"
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              objectFit: "cover",
              position: "absolute",
              zIndex: "0"
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "0 300px"
            }}
          >
            <h1
              style={{
                fontFamily: "Poppins",
                // fontFamily: "FigTree",
                fontSize: "48px",
                color: style.headline,
                letterSpacing: "-0.075rem"
              }}
            >
              {`${title.slice(0, 80) + (title.length > 80 ? "..." : "")}`}
            </h1>
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "20px",
                lineHeight: "32px",
                color: style.text
              }}
            >
              {`${
                description.slice(0, 200) +
                (description.length > 200 ? "..." : "")
              }`}
            </p>
          </div>

          <svg
            width="113"
            height="113"
            viewBox="0 0 113 113"
            fill="none"
            style={{
              width: "30px",
              height: "30px",
              position: "absolute",
              bottom: "70px"
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M74.6972 109.989C63.3691 113.843 51.1099 114.001 39.6862 110.44C28.2626 106.879 18.2644 99.7836 11.1325 90.1755C4.0006 80.5674 0.103225 68.9432 0.00202198 56.9779C-0.0991811 45.0125 3.60101 33.324 10.5694 23.5967C17.5378 13.8693 27.4145 6.6055 38.7762 2.8519C50.138 -0.901693 62.3981 -0.951209 73.7898 2.71049C85.1816 6.37219 95.1166 13.556 102.163 23.2267C109.21 32.8975 113.005 44.5557 113 56.5215L86.9679 56.5116C86.9704 50.059 84.9242 43.7722 81.1242 38.5572C77.3242 33.3422 71.9667 29.4683 65.8236 27.4937C59.6806 25.5191 53.0693 25.5458 46.9424 27.57C40.8155 29.5941 35.4894 33.5112 31.7317 38.7567C27.9739 44.0022 25.9786 50.3053 26.0332 56.7577C26.0877 63.2101 28.1894 69.4785 32.0353 74.6597C35.8813 79.8409 41.2728 83.6673 47.4331 85.5875C53.5933 87.5078 60.2042 87.4226 66.3129 85.3444L74.6972 109.989Z"
              fill={style.logoColor}
            />
            <path
              d="M87 56H113V112H112C98.1929 112 87 100.807 87 87V56Z"
              fill={style.logoColor}
            />
            <path
              d="M72 56C72 64.2843 65.2843 71 57 71C48.7157 71 42 64.2843 42 56C42 47.7157 48.7157 41 57 41C65.2843 41 72 47.7157 72 56Z"
              fill={style.logoColor}
            />
          </svg>
          <span
            style={{
              position: "absolute",
              bottom: "40px",
              fontFamily: "Inter",
              color: style.headline
            }}
          >
            www.anfa.my.id
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      status: 200,
      fonts: [
        {
          name: "Poppins",
          data: Poppins,
          style: "normal",
          weight: 700
        },
        // {
        //   name: "FigTree",
        //   data: FigTree,
        //   style: "normal",
        //   weight: 700
        // },
        {
          name: "Inter",
          data: Inter,
          style: "normal",
          weight: 500
        }
      ]
    }
  );
}
