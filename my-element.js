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
            <div>Сколько будет 2 + 2?</div>
      <button @click=${() =>
            (this._showMessage = !this._showMessage)}>ГДЗ</button>
      <div id="message" ?hidden=${!this._showMessage}>
        Решай сам, Бездарь!
          <button @click=${() =>
              (this._showMessage = !this._showMessage)}>скрыть</button>
      </div>
    `;
    }
}
customElements.define('bye-element', ByeElement);