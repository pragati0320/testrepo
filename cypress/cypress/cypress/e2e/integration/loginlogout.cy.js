const cypress = require("cypress");

function loginlogout(username : String, password : String){

    //send request
    cypress.request({
        url: "https://confignepal.com/web",
        body: {username, password},
        
    })


}