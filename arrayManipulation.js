let arrayNum=[1,2,8,9,5]
let arrayofString = ['santos','johnson','MAJID','PILLAR','ConQueR']


function processArray(array){
   const newArray= array.map((i)=>{
        if (i%2 === 0){
          return i*i;
        }
        else{
            return i*i*i;
        }
    })
    return newArray;

}


 function formatArrayStrings(arrayString,newArray){
    let modified_String =[]
    for (let i in newArray){
       
            if(newArray[i]%2===0){
                 modified_String.push(arrayString[i].toUpperCase());
            }
            else{
                 modified_String.push(arrayString[i].toLowerCase());
                
            }
        
    }

return modified_String

}
let processArrayNum = processArray(arrayNum)
//export{processArrayNum};
//export{arrayofString};
//let modifiedString = formatArrayStrings(arrayofString,processArrayNum)

console.log(formatArrayStrings(arrayofString,processArrayNum))
module.exports = {formatArrayStrings,processArrayNum,arrayofString}


