import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  count: number;
  next: string;
  previous: null;
  results: Pocketmon[];
};

export default async function getPocketmonList(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  res.status(200).json(response.data);
}
