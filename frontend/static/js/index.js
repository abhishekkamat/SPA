import Dashboard from "../views/Dashboard.js";
import Posts from "../views/Posts.js";
import register from "../views/register.js";
import SuccLogIn from "../views/SuccLogIn.js";
import Settings from "../views/Settings.js";

const navigateTo= url=>{
    history.pushState(null,null,url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Dashboard },
        {path:"/posts", view:Posts},
        { path: "/register", view: register},
        {path: "/SuccLogIn", view:SuccLogIn},
        { path: "/settings", view: Settings},
    ];


    //Test each route
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname ===route.path
        };
    });

    let match= potentialMatches.find(potentialMatch=> potentialMatch.isMatch);

    if(!match){
        match={
            route:routes[0],
            isMatch:true
        }
    }

    const view= new match.route.view();

    document.querySelector("#app").innerHTML=await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded",()=>{
    document.body.addEventListener("click",e=>{
        if (e.target.matches("[data-link]")){
            console.log(e.target.href);
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});

