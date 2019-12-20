import { html, LitElement } from 'lit-element';
import style from './phone-component-styles.js';
import '@catsys/battery-component';
import '@catsys/player-component';


class PhoneComponent extends LitElement {
  static get properties() {
    return {
      hello: { type: String }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
  }

  render() {
    return html`
        <nav style="width: 300px">
          <a ><img width="15px" src="https://cdn4.iconfinder.com/data/icons/audio-video-6/16/02_radio-signal-broadcast-512.png"></a>
          <a>2019-12-10 12:29pm</a>
          <battery-component></battery-component>
        </nav>

        <player-component></player-component>
      `;
    }

    play(){

    }
}

window.customElements.define("phone-component", PhoneComponent);
