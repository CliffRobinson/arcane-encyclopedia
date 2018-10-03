const nock = require("nock");
const request = require("superagent");



const testQuery = "https://api.scryfall.com/cards/search";
let fakeMultiPageResult = {
    name:'fakey multi boi',
    has_more: true,
    data: ["pretend I'm a card"],
    next_page: testQuery
};

let fakeSinglePageResult = {
    name:'fakey single boi',
    has_more: false,
    data: ["pretend I'm a card"],
};

const scope = nock("https://api.scryfall.com")
    .get("/cards/search")
    .times(1)
    .reply(200, fakeMultiPageResult)
    .get("/cards/search")
    .times(1)
    .reply(200, fakeSinglePageResult)
    ;

const getCardsFromScryfall = (queryString, callback) => {
        
    request.get(queryString)
        .then( (res) =>{
            console.log(res.body);
            
            if (res.body.has_more)  {
                getCardsFromScryfall(res.body.next_page, callback);
            } else if (callback) {
                callback(res); 
                //Will only execute the callback once ALL data has been resquested and dispatched.
            }
        });
};

const callback = () => console.log("all done!");

console.log("ere we go!");
// request.get(testQuery)
//     .then(
//         (res) => console.log(res.body)
//     );
// request.get(testQuery)
//     .then(
//         (res) => console.log(res.body)
//     );
// request.get(testQuery)
//     .then(
//         (res) => console.log(res.body)
//     );

getCardsFromScryfall(testQuery, callback);