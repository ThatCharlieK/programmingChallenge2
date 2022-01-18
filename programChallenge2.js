
const fs = require('fs');
const { finished } = require('stream');
subPos = [0, 0];

function readInput(fileName){
    //tries to read file
    try {
        //puts the items from the file into an array called 'data'
        data = fs.readFileSync(fileName, 'utf8');
    } catch (err) {
        console.error(err);
    }
    //splits the data and putss it into a new variable
    finishedData = data.split("\n")
    return finishedData;
}

readInput('PC2input.txt')
console.log(finishedData)
for (i = 0; i < finishedData.length; i ++){
    finishedData[i] = finishedData[i].split(" ")
}

for (i = 0; i < finishedData.length; i ++){
    
    if (finishedData[i][0] == "forward"){
        subPos[0]+= parseInt(finishedData[i][1]);

    }
    if(finishedData[i][0] == "down"){
        subPos[1] -= parseInt(finishedData[i][1])
    }
    if(finishedData[i][0] == "up"){
        subPos[1]+= parseInt(finishedData[i][1])
    }


}

console.log(finishedData)
console.log(subPos)




