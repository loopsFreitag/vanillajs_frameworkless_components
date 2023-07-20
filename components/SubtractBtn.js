class SubtractButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            this.decrementCount();
        });
    }

    decrementCount() {
        const countValueElement = document.getElementById('countValue');
        let currentCount = parseInt(countValueElement.textContent);
        countValueElement.textContent = currentCount - 1;
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                button {
                    padding: 10px 20px;
                    font-size: 18px;
                }
            </style>
            <button>Subtract</button>
        `;
    }
}

customElements.define('subtract-button', SubtractButton);
