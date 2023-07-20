class Wrapper extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                button {
                    padding: 10px 20px;
                    font-size: 18px;
                }
            </style>
            <count-button></count-button>
            <subtract-button></subtract-button>
        `;
    }
}

customElements.define('wrapper-app', Wrapper);
