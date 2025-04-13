import { DDD } from "https://unpkg.com/@lrnwebcomponents/d-d-d/ddd.js?module";
import { html, css } from "https://unpkg.com/lit@2.6.1/index.js?module";

class DddStepsList extends DDD {
  static get properties() {
    return {
      dddPrimary: { type: String, attribute: 'ddd-primary', reflect: true }
    };
  }

  constructor() {
    super();
    this.dddPrimary = '#1e90ff';
  }

  connectedCallback() {
    super.connectedCallback();
    this.render();
    this.validateChildren();
    this.applyNumbering();
    this.applyColorToItems();
  }

  updated(changedProps) {
    if (changedProps.has('dddPrimary')) {
      this.style.setProperty('--ddd-primary-color', this.dddPrimary);
      this.applyColorToItems();
    }
  }

  validateChildren() {
    Array.from(this.children).forEach(child => {
      if (child.tagName.toLowerCase() !== 'ddd-steps-list-item') {
        child.remove();
      }
    });
  }

  applyNumbering() {
    const items = Array.from(this.children).filter(child =>
      child.tagName.toLowerCase() === 'ddd-steps-list-item'
    );
    items.forEach((item, index) => {
      item.setAttribute('step', index + 1);
    });
  }

  applyColorToItems() {
    const color = this.dddPrimary || '#1e90ff';
    Array.from(this.children).forEach(child => {
      if (child.tagName.toLowerCase() === 'ddd-steps-list-item') {
        child.setAttribute('data-primary', color);
      }
    });
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          padding: var(--ddd-spacing-md, 1rem);
          background-color: var(--ddd-theme-background, #f8f8f8);
          border: 2px dashed var(--ddd-primary-color, #1e90ff);
          font-family: var(--ddd-font-primary, sans-serif);
          border-radius: var(--ddd-border-radius-md, 12px);
        }
        ::slotted(ddd-steps-list-item:last-child) {
          margin-bottom: 0;
        }
      `
    ];
  }

  static get haxProperties() {
    return {
      canScale: true,
      canPosition: true,
      canEditSource: true,
      gizmo: {
        title: "Steps List",
        description: "A list container for steps",
        icon: "icons:reorder",
        color: "grey",
        groups: ["List"],
        handles: [
          {
            type: "inline",
            title: "title"
          }
        ],
        meta: {
          author: "psu",
        }
      },
      settings: {
        configure: [
          {
            property: "dddPrimary",
            title: "Primary Color",
            inputMethod: "colorpicker"
          }
        ],
        advanced: []
      },
      demoSchema: [
        {
          tag: "ddd-steps-list",
          properties: {
            dddPrimary: "#0052cc"
          },
          slot: "<ddd-steps-list-item title=\"Step One\"><p>Do something.</p></ddd-steps-list-item>"
        }
      ]
    };
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('ddd-steps-list', DddStepsList);