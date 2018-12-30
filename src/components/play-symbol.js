import { WritableComponent } from "../libs/writable-component";

/** Much like CurrentTurn, it shouws the Symbol that is in-play */
export class PlaySymbol extends WritableComponent {
  constructor() {
    super("symbol");
    this.element.setAttribute("style", "float: right");
  }
  set textContent(v) {
    super.textContent = `playing: ${v}`;
  }
}
