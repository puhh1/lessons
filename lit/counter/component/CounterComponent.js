import { html, css, LitElement} from "lit";

export class CounterComponent extends LitElement {
    static get styles(){
        return css`
        :host{
          display: block;
          padding: 25px;
          color: var(--counter-elemet, #000);
        }
        `;
    }

    static get properties() {
        return{
            title: {
                type: String
            },
            counter: {
                type: Number
            },
        };
    }

    constructor() {
        super();
        this.title = 'Hi';
        this.counter = 1;
    }

    increment(){
        this.counter +=1;
    }

    subtraction() {
        this.counter -=1;
    }

    render() {
        return html`
        <h2>${this.title}. Считаем вместе ${this.counter}!</h2>
        <button @click=${this.increment}>Плюс 1</button>
        <button @click=${this.subtraction}>Минус 1</button>
        `;
    }
}