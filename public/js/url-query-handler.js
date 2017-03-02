var query = {};

location.search.substr(1).split("&")
    .forEach(function(item) {
        query[item.split("=")[0]] = item.split("=")[1]
    });

var link = 'http://nilakshdas.com/';

switch (query.q) {
    case 'iiitd':
        link = 'http://precog.iiitd.edu.in/';
        break;
    case 'thinkup':
        link = 'https://www.thinkup.com/';
        break;
    case 'mlabs':
        link = 'http://mlabsresearch.com/';
        break;
    case 'baudcast':
        link = 'https://www.npmjs.com/package/baudcast';
        break;
    case 'passage':
        link = 'https://dl.acm.org/citation.cfm?id=2879470';
        break;
    case 'cse6730':
        link = 'https://www.youtube.com/playlist?list=PLO7-kuERP4OIfgfvRqmH-LDwgX5j-8Ofz';
        break;
}

if (query.q !== undefined) {
    document.body.innerHTML = "<div style=\"margin: 150px auto; text-align: center;\">"+
        "<a href=\""+link+"\">Click here</a> if the page does not redirect automatically..."+
    "</div>";

    setTimeout(function() {
        window.location = link;
    }, 2000);
}