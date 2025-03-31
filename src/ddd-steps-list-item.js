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
        }

        .card {
          position: relative;
          background: var(--ddd-theme-background, #fff);
          padding: 1.5rem 1rem 1rem 3rem;
          border-left: 5px solid var(--ddd-theme-default, #333);
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .step-number {
          position: absolute;
          left: -1.25rem;
          top: 1rem;
          background: var(--ddd-theme-${this.dddPrimary}, #0072ce);
          color: white;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.9rem;
        }

        .title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        ::slotted(p) {
          margin: 0.5rem 0 0 0;
        }

        ::slotted(ul) {
          margin: 0.5rem 0 0 1rem;
        }
      `,
    ];
  }

  render() {
    return html`
      <div
        class="card"
        style="border-color: var(--ddd-theme-${this.dddPrimary}, #0072ce);"
      >
        <div class="step-number">${this.step}</div>
        <div class="title">${this.title}</div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define(DDDStepsListItem.tag, DDDStepsListItem);