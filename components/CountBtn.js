class CountButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            this.incrementCount();
        });
    }

    incrementCount() {
        const countValueElement = document.getElementById('countValue');
        let currentCount = parseInt(countValueElement.textContent);
        countValueElement.textContent = currentCount + 1;
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                button {
                    padding: 10px 20px;
                    font-size: 18px;
                }
            </style>
            <button>Increment</button>
        `;
    }
}

customElements.define('count-button', CountButton);
