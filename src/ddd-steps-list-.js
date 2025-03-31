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
    this.validateChildren();
    this.numberSteps();
  }

  validateChildren() {
    [...this.children].forEach((el) => {
      if (el.tagName.toLowerCase() !== "ddd-steps-list-item") {
        el.remove();
      }
    });
  }

  numberSteps() {
    const items = [...this.querySelectorAll("ddd-steps-list-item")];
    items.forEach((item, index) => {
      item.step = index + 1;
      item.dddPrimary = this.dddPrimary;
    });
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 2rem;
          background-color: var(--ddd-theme-background, #f9f9f9);
          border-left: 6px solid var(--ddd-theme-default, #0072ce);
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
          max-width: 800px;
          margin: 0 auto;
        }
      `,
    ];
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define(DDDStepsList.tag, DDDStepsList);