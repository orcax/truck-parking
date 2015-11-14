/**
 * 
 */
var form_obj = document.getElementById("contactform");
var context = "";
var name_web = form_obj.elements["name"].value;
var params = {
    "message": {
        "from_email":"bruce.q.rutgers@gmail.com",
        "to":[{"email":"qybo123@gmail.com"}],
        "subject": "Sending a text email from the Mandrill API",
       
        "html": "<p>Hey *|COOLFRIEND|*, we've been friends for *|YEARS|*.</p>",
        "autotext": true,
        "track_opens": true,
        "track_clicks": true,
        "merge_vars": [
            {
                "rcpt": "qybo123@gmail.com",
                "vars": [
                    {
                        "name": "COOLFRIEND",
                        "content": name_web
                    },
                    {
                        "name": "YEARS",
                        "content": "5 awesome years"
                    }
                ]
            }
        ]
    }
};


console.log("name: "+ name_web);