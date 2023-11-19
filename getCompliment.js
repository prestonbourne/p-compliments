import { compliments } from "./compliments";

export function getCompliment() {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  const compliment = compliments[randomIndex];
  return compliment;
}
