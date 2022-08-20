import axios from "axios";
import { parse } from "node-html-parser";

export default async function handler(req, res) {
  const response = await axios.get("https://jaha.edman.se");
  const { data } = response;
  const document = parse(data);
  const jaha = document.querySelector(".centeredText");
  const jahaSON = { text: jaha.innerText.trim() };
  res.status(200).send(jahaSON);
}
