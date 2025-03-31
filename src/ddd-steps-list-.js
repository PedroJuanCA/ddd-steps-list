import { html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class DDDStepsList extends DDDSuper {
  static get tag() {
    return "ddd-steps-list";
  }

  static get properties() {
    return {
      dddPrimary: { type: String, attribute: "ddd-primary" },
    };
  }

  constructor() {
    super();
    this.dddPrimary = "1";
  }

  connectedCallback() {
    super.connectedCallback();
    this._observer = new MutationObserver(() => this.updateSteps());
    this._observer.observe(this, { childList: true, subtree: false });
    this.updateSteps();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._observer) this._observer.disconnect();
  }

  updateSteps() {
    const validItems = [...this.children].filter((el) =>
      el.tagName.toLowerCase() === "ddd-steps-list-item"
    );

    [...this.children].forEach((el) => {
      if (el.tagName.toLowerCase() !== "ddd-steps-list-item") {
        this.removeChild(el);
      }
    });

    validItems.forEach((item, index) => {
      item.step = index + 1;
      item.dddPrimary = this.dddPrimary;
    });
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          padding-left: 1rem;
          border-left: 6px solid var(--ddd-theme-default, #000);
        }
      `,
    ];
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define(DDDStepsList.tag, DDDStepsList);