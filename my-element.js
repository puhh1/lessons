import {LitElement, html, css} from 'lit';

export class ByeElement extends LitElement {
    static properties = {
        _showMessage: {state: true},
    };

    constructor() {
        super();
        this._showMessage = false;
    }

    get _message() {
        return this.renderRoot?.querySelector('#message') ?? null;
    }

    render() {
        return html`
            <div>todo: Написать кастомный элеммент</div>
      <button @click=${() =>
            (this._showMessage = !this._showMessage)}>stackoverflow</button>
      <div id="message" ?hidden=${!this._showMessage}>
          <div> Делай сам, <a href="https://fb.ru/article/375138/bezdar---eto-kto-takoy-znachenie-sinonimyi-i-tolkovanie?ysclid=le9ialw64n338858685">Бездарь!</a></div>
          <button @click=${() =>
              (this._showMessage = !this._showMessage)}>скрыть</button></div>
    `;
    }
}
customElements.define('bye-element', ByeElement);