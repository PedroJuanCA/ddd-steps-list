import { html, css, LitElement } from "https://unpkg.com/lit@2.6.1/index.js?module";

class DddStepsListItem extends LitElement {
  static get properties() {
    return {
      step: { type: Number, reflect: true },
      dataPrimary: { type: String, attribute: 'data-primary', reflect: true },
    };
  }

  constructor() {
    super();
    this.step = 0;
    this.dataPrimary = "#004080";
  }

  static styles = css`
    :host {
      display: block;
      position: relative;
      margin-bottom: var(--ddd-spacing-md, 1.75rem);
    }

    .step-circle::before {
      content: attr(data-step);
      position: absolute;
      left: -2.95rem;
      top: 0;
      width: 2rem;
      height: 2rem;
      background-color: var(--ddd-primary-color, #004080);
      color: #fff;
      border-radius: 50%;
      border: 2px solid var(--ddd-primary-color, #004080);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 1rem;
      z-index: 1;
    }

    ::slotted(h3) {
      margin: 0 0 0.3rem;
      font-size: 1.15rem;
      color: #002855;
    }

    ::slotted(p),
    ::slotted(ul),
    ::slotted(li) {
      color: #333;
      font-size: 1rem;
    }
  `;

  render() {
    return html`<div class="step-circle" data-step="${this.step}"><slot></slot></div>`;
  }
}

customElements.define('ddd-steps-list-item', DddStepsListItem);