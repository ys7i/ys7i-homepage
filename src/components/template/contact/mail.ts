import { json } from "solid-start";

export function POST() {
  return json({ name: "hello" });
}
