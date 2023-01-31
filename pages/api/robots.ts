// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

import { crawable, notCrawable } from "../../config/robots.config"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const robots =
    process.env.ENVIRONMENT === "development" ? notCrawable : crawable

  res.status(200).send(robots)
}
