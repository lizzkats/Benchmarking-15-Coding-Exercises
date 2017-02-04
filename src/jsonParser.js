//function takes in JSON
//returns path -> value
//use js traverse method
let randomJSON = {
    "name": "William Shakespeare",
    "dead" : true,
    "works" : [
        {
            "name" : "Romeo and Juliet",
            "published" : 1591,
            "isAwesome" : true
        },
        {
            "name" : "Richard III",
            "published" : 1592,
            "isAwesome" : false
        }
    ],
    "favoriteSites" : [
        "tumblr",
        "4chan"
    ]
}
console.log(randomJSON[1])
  // let jsonParser = function(randomJSON){
  //   for(let key in randomJSON){
  //   }
    // for(let i=0; i>randomJSON.length;i++){
    //   if(randomJSON.key.isArray()){
    //     for(let j=0;j>randomJSON.key[i].length; j++){
    //       if(randomJSON.key[i][j])
    //     }
    //   }
    //   return randomJSON.key[]
    // }
  // }
  // jsonParser(randomJSON)
  // console.log(randomJSON.favoriteSites[1])
