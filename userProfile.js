
const {formatArrayStrings,processArrayNum,arrayofString} = require('./arrayManipulation')

let name_Original =['Kofi','samson','joshua','micheal','isabell']

function createUserProfile(originalName,modifiedName){
    const userprof = [];
    for(let i =0; i<originalName.length; i++){
        const object = {
            originalname: originalName[i],
            modifiedname: modifiedName[i],
            id:i+1

        }
        userprof.push(object)
    }
    return userprof;
}

console.log(createUserProfile(name_Original,formatArrayStrings(arrayofString,processArrayNum)))