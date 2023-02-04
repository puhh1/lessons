import {css,html,LitElement} from "lit-element";
import {NavigationComponent} from './NavigationComponent';

export class HeaderComponent extends LitElement {
    static get styles() {
        return css`
        header {
          margin: 0;
          padding: 0;
          background: red;
        }
          ul {
            width: 50%;
            margin: 0 auto;
            padding: 8px 0;
            list-style: none;
            display: flex;
            justify-content: space-between;
          }
        `;
    }

    static get properties(){
        return{
            navigation: {
                type: Object
            }
        };
    }

    constructor() {
        super();
        this.navigation = new NavigationComponent().hostConnected();
    }

    render() {
        return html `<header>${this.navigation}</header>`;
    }
}