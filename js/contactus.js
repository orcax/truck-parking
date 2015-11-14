/**
 * 
 */
// Create a function to log the response from the Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('aq3sX8e2RN4Ki15athi_UA');

// create a variable for the API call parameters
//var params = {
//    "message": {
//        "from_email":"bruce.q.rutgers@gmail.com",
//        "to":[{"email":"qybo123@gmail.com"}],
//        "subject": "Sending a text email from the Mandrill API",
//        "text": "Testing from website."
//    }
//};

var params, name_web, email_web, company_web, msg_web;



function sendTheMail(form) {
// Send the email!
	
	 name_web = form.name.value;
	 email_web = form.email.value;
	 company_web = form.company.value;
	 msg_web = form.message.value;
	
	 params = {
	    "message": {
	    	"from_email":"rutgers.truckparking@gmail.com",
	        "to":[{"email":"bella.yunbai@gmail.com"}],
	        "subject": "Feedback for parking facility website",
	       
	        "html": "<p>Hi Dr. Bai </p>" +
	        		"<p>This is message from *|COOLFRIEND|* </p>" +
	        		"<p>Email: *|EMAIL|*</p>" + 
	        		"<p>Company: *|COMPANY|*</p>" +
	        		"<p>Message: *|MESSAGE|*</p>",
	        "autotext": true,
	        "track_opens": true,
	        "track_clicks": true,
	        "merge_vars": [
	            {
	                "rcpt": "bella.yunbai@gmail.com",
	                "vars": [
	                    {
	                        "name": "COOLFRIEND",
	                        "content": name_web
	                    },
	                    {
	                        "name": "EMAIL",
	                        "content": email_web
	                    },
	                    {
	                        "name": "COMPANY",
	                        "content": company_web
	                    },
	                    {
	                        "name": "MESSAGE",
	                        "content": msg_web
	                    }
	                ]
	            }
	        ]
	    }
	};



    m.messages.send(params, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });
    
    alert("Thanks for your feedback, we will reply you as soon as possible!")
    console.log("name: "+ name_web);
}