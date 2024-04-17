import { LitElement, html, css } from 'lit';


export class questionSlide extends LitElement {


static get tag() {
    return 'question-slide';
}

constructor(){
    super();
    this.prompt = [];
}


static get styles() {
    return css`
    :host {
 display: block;
    }

    .question-ui {
        width:100%;
        height: 100%;
        position: relative;
        top: 10px;
        left: 0px;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: all;
    }

    .question-modal {
        background-color: white;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-align: center;
        width: 80vw;
        border: 2px solid white;
        box-sizing: border-box;
        padding: 20px;
        border: 5px dotted #ffffff;
    }


    
    
    
`}
}

globalThis.customElements.define(questionSlide.tag, questionSlide);