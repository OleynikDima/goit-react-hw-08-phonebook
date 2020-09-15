const key = 'e0660ee431msh9648e06be65dc52p1b14d4jsned8935730630'

const CNNKey ='bcaafe07bfdc4ea5885fe47775020d18'

var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=API_KEY';//bcaafe07bfdc4ea5885fe47775020d18
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })