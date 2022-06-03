import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Settings");
    }

    async getHtml(){
        return `
        <h1>New user</h1>
        <h2>Name</h2>
        <h2>Factory Reset</h2>
        <h2>Change Server</h2>

        `;
    }
}