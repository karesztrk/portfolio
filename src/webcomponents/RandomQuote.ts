import LightElement from "@/webcomponents/LightElement";
import quotes from "@/data/quotes.json";

export class RandomQuote extends LightElement {
  static {
    this.register("random-quote", RandomQuote);
  }

  get quote() {
    return Array.isArray(quotes) && quotes.length > 0
      ? quotes[Math.floor(Math.random() * quotes.length)]
      : "";
  }

  render() {
    this.innerText = this.quote;
  }
}
export default RandomQuote;
