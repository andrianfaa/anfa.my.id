/**
 * Medium Stories API
 */
import { NextApiRequest, NextApiResponse } from "next";
import { HttpResponse, StoriesResponseTypes } from "@/types";
import { FetchWithCache } from "@/utils";

export default async function MediumStories(
  _: NextApiRequest,
  res: NextApiResponse<HttpResponse<StoriesResponseTypes | null>>
) {
  try {
    const mediumRSSUrl = `https://medium.com/feed/${
      (process.env.MEDIUM_PROFILE_USERNAME as string) || "@andrianfaa"
    }`;
    const json = await FetchWithCache(
      // I use toptal developer tools called 'feed2json' for parse RSS Feed to JSON
      `https://www.toptal.com/developers/feed2json/convert?url=${mediumRSSUrl}`,
      "stories-api",
      {
        method: "GET"
      }
    );
    // ).then((result) => result.json());

    return res.status(200).json({
      status: "success",
      status_code: 200,
      message: "Success getting stories!",
      data: json
    } as HttpResponse<typeof json>);
  } catch (error: any) {
    return res.status(500).json({
      status: "error/failed",
      status_code: 500,
      message: "Internal server error"
    } as HttpResponse<null>);
  }
}
