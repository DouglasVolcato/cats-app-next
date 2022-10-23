import type { NextApiRequest, NextApiResponse } from "next";
import { cats } from "../../../data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;
  const cat = cats.find((cat) => cat.id === Number(id));
  res.status(200).json(cat);
}
