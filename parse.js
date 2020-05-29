const csvFilePath='donne.csv'
const csv=require('csvtojson')
const fs = require('fs');

csv({
    noheader:true,
    headers:["title","seo_title","url","author","date","category","locales","content"],
    trim:false,
    delimiter:";"
})
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj.length);
    let i=0;
    let index={"index":{"_index":"groupe_9","_id":0}}
    for (elem of jsonObj){
        index["index"]["_id"]=i
        // Ajout de l'index
        string=JSON.stringify(index)+"\n"+JSON.stringify(elem)+"\n"

        fs.appendFile("data.json", string, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
         
            console.log("JSON file has been saved.");
        });
        i++;
    }
    
    
})
// Async / await usage
const jsonArray= csv({
    noheader:true,
    headers:["title","seo_title","url","author","date","category","locales","content"],
    trim:false,
    delimiter:";"
}).fromFile(csvFilePath);
