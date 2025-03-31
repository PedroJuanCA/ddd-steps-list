import { html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class DDDStepsListItem extends DDDSuper {
  static get tag() {
    return "ddd-steps-list-item";
  }

  static get properties() {
    return {
      title: { type: String },
      step: { type: Number },
      dddPrimary: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "";
    this.step = 1;
    this.dddPrimary = "1";
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          position: relative;
          background: var(--ddd-theme-background, #fff);
          border-left: 4px solid var(--ddd-theme-color, #0072ce);
          padding: 1rem 1rem 1rem 3.5rem;
          margin-bottom: 1rem;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .step-circle {
          position: absolute;
          top: 1rem;
          left: -1.5rem;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: var(--ddd-theme-color, #0072ce);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .title {
          font-weight: bold;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        ::slotted(p), ::slotted(ul) {
          margin: 0.5rem 0 0 0;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="step-circle">${this.step}</div>
      <div class="title">Step ${this.step}: ${this.title}</div>
      <slot></slot>
    `;
  }
}

customElements.define(DDDStepsListItem.tag, DDDStepsListItem);