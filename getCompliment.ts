import { compliments } from "./compliments";

export function getCompliment(): string {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  const compliment = compliments[randomIndex];
  return compliment;
}
