import dbConnect from "../../../db/connect"
import Attraction from "../../../db/models/Attraction"

export default async function handler(req, res) {
  dbConnect()
  const attractions = await Attraction.find()
  console.log(attractions)
  res.status(200).json(attractions)
}
