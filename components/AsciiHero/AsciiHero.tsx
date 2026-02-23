import figlet from "figlet";
import AsciiReveal from "./AsciiReveal";

function getLines(text: string): string[] {
  return figlet.textSync(text, { font: "ANSI Shadow" }).split("\n");
}

export default function AsciiHero() {
  const zainLines = getLines("ZAIN");
  const babarLines = getLines("BABAR");

  return <AsciiReveal zainLines={zainLines} babarLines={babarLines} />;
}
