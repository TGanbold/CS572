
    // ES6 features
    String.prototype.filterWords = function (words){
        let allWords = this.split(" ");         
        return allWords.map(word=>words.includes(word) ? "***": word).join(" ");        
    };
    console.log("This house is nice !".filterWords(["nice","house"]));

    //Promise function
    let filterWords2 = (str,words) => {
        return new Promise((resolve, reject) => {                
          if ( str != null) {
            let result = str.split(" ").map(word=>words.includes(word) ? "***": word).join(" ");     
            resolve(result);
          } else {
            reject(Error("Something is wrong!"));
          }
        });
    };  
 
    filterWords2("This house is nice !",["nice","house"]).then(res => {
        console.log("Promise Succeed: " +res);
      })
      .catch(res => {
        console.log("Promise Error: " + res);
      });
    
    console.log("I am syncronouse process");

//async function
async function askMe(str,words) {
    try {
        let result = await str.split(" ").map(word=>words.includes(word) ? "***": word).join(" ");  
        console.log("async " + result);
    } 
    catch (error) {
       console.log("its async a error " + error);
    }
}

askMe("This house is nice !",["nice","house"]);

