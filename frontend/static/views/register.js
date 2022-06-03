import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Register");
    }

   

    async getHtml(){
        return `
        <section>
            <form  name="form">
                <h1>SignUp Form</h1><br>
                <input type="text" id="email" placeholder="Email ID" required><br>
                <input type="text" id="username" placeholder="Username" required><br>
                <input type="password" id="password" placeholder="Password" required><br>
                <input type="password" id="password2" placeholder="Confirm Password" required><br>
                <label for="assigned_role">Choose assigned role</label>
                <select id="assigned_role">
                    <option value="owner">Owner</option>
                    <option value="option2">Option2</option>
                    <option value="option3">Option3</option>
                    <option value="option4">Option4</option>
                </select><br>
                <button type="button" onclick="createUser()">SignUp</button><br>
            </form>
        </section>
        
        `;
    };
};