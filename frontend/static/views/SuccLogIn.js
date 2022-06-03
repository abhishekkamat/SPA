import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Dashboard");
    }

    async getHtml(){
        return `
        <h1>You have successfully Registered Yourself</h1>`;
    }
}