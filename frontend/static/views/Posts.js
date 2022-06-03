import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Posts");
    }

    async getHtml(){
        return `
        <h1>You are now reading Posts!</h1>`;
    }
}