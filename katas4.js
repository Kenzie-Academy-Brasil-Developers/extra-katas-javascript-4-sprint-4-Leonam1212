const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function showResults (kataNum, result){

    const div = document.getElementById("container")
    const newElement = document.createElement("div")
    const title = document.createElement("h3")
    const p = document.createElement("p")
    div.appendChild(newElement)
    newElement.appendChild(title)
    newElement.appendChild(p)

    title.innerText = kataNum
    p.textContent = JSON.stringify(result)

}


function kata1() {

    let arrCitiesCSV = gotCitiesCSV.split(", ")
    
    showResults("Kata 01",arrCitiesCSV)
    return arrCitiesCSV

  

}
kata1()



const kata2 = () => {
    //Transformar a frase bestThing em um array
    // dessa vez separar por espaços usando o split método

    let arrayBestThing = bestThing.split(" ")
    showResults("Kata 02",arrayBestThing)
    return arrayBestThing

}

kata2()




const kata3 = () => {

    //Devo pegar a string gotCitiesCSV e substituir as virgulas por ponto e virgula, usar o replace

    let newString = gotCitiesCSV.replace(/,/g, "; ")

    showResults("Kata 03",newString)
    return newString
}
kata3()



const kata4 = () => {

//Devo retornar uma nova string baseada no array lotrCitiesArray separado por virgulas usar join separando por virgula 

let newString = lotrCitiesArray.join(", ")
console.log(newString)

showResults("Kata 04",newString)
return newString
}
kata4()



function kata5 () {

   
    let output = []

    for (let i = 0; i < lotrCitiesArray.length-3; i++){
            output.push(lotrCitiesArray[i])
    }
    console.log(output)
   
    showResults("Kata 05",output)
    return output
 }

 kata5()



function kata6 () {

    let output = []
    for(let i = 3; i <lotrCitiesArray.length; i++) {
        output.push(lotrCitiesArray[i])
    }


showResults("Kata 06",output)
return output

}
kata6()




let kata7 = () => {

    let output = []

    for(let i = 2; i < 5; i++) {
        output.push(lotrCitiesArray[i])
    }
    showResults("Kata 07",output)
    return output
} 

kata7()




function kata8 () {

lotrCitiesArray.splice(2,1)
showResults("kata 08", lotrCitiesArray)
return lotrCitiesArray

}


kata8()


function kata9 () {

lotrCitiesArray.splice(5,2)
showResults("kata 09", lotrCitiesArray)
return lotrCitiesArray
}


kata9()


function kata10 () {
lotrCitiesArray.splice(2,0, "Rohan")
    showResults("kata 10", lotrCitiesArray)
    return lotrCitiesArray
    }
    
    
kata10()


function kata11 () {
    lotrCitiesArray.splice(5,1, "Deadest Marshes")
        showResults("kata 11", lotrCitiesArray)
            return lotrCitiesArray
        }
        
        
kata11()



function kata12 () {
    
           let remove = bestThing.slice(0,14)
           showResults("Kata 12", remove)

return remove
}

kata12()


function kata13 () {
    
    let remove = bestThing.slice(bestThing.length-12)
    showResults("Kata 13", remove)
return remove

}

kata13()



function kata14 () {
    
    let remove = bestThing.slice(23, 38)
    showResults("Kata 14", remove)

    return remove
}

kata14()





function kata15 () {
    //RETORNAR 12 ULTIMOS CARACTERES DE BEST THING COM SUBSTRING
    let remove = bestThing.substring(bestThing.length-12)
    showResults("Kata 15", remove)

return remove
}

kata15()

function kata16 () {
    
    let remove = bestThing.substring(23, 38)
    showResults("Kata 16", remove)
    return remove

}

kata16()

function kata17 () {

    //Retirar a ultima cidade de lotrCitiesArray
    let removeLast = lotrCitiesArray.pop()
    showResults("Kata 17", lotrCitiesArray)
    return lotrCitiesArray

}

kata17()

function kata18 () {

    let addLast = lotrCitiesArray.push("Dead Marshes")
    showResults("Kata 18", lotrCitiesArray)
    return lotrCitiesArray

}

kata18()


function kata19 () {


    lotrCitiesArray.shift()
    showResults("Kata 19", lotrCitiesArray)
    return lotrCitiesArray
}

kata19()


function kata20 () {

    lotrCitiesArray.unshift("Mordor")
    showResults("Kata 20", lotrCitiesArray)
    return lotrCitiesArray
}
kata20()





// EXTRAS

// const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";
function kataBonus1 () {
    let arrBestThing = bestThing.split(" ")
    let resultOnly = arrBestThing.indexOf("only")

    showResults("KataBonus1", resultOnly)
    return resultOnly
}
kataBonus1()


function kataBonus2 ()  {

let arrBestThing = bestThing.split(" ")
let result = arrBestThing.indexOf("bit")

showResults("KataBonus2", result)
return result

}

kataBonus2()



// retornar todas as cidades que tiverem vogais duplicadas
const kataBonus3  = () => {

}

kataBonus3()

// Ler cada palavra do array 
// Retirar as vogais ,

const kataBonus4  = () => {
    //retornar palavras que terminam om "or"
    let newArr = []

    for (let i = 0; i < lotrCitiesArray.length; i++) {
        if(lotrCitiesArray[i].endsWith("or")){
            newArr.push(lotrCitiesArray[i])
        }
    }

showResults("kataBonus4", newArr)
return newArr

}

kataBonus4()


const kataBonus5  = () => {
    //retornar palavras que terminam om "or"
    let newArr = []

    for (let i = 0; i < lotrCitiesArray.length; i++) {
        if(lotrCitiesArray[i].toLowerCase().startsWith("b")){
            newArr.push(lotrCitiesArray[i])
        }
    }

showResults("kataBonus5", newArr)
return newArr
}

kataBonus5()



const kataBonus6  = () => {
    


let include = lotrCitiesArray.includes("Mirkwood")
let result = include ? "Sim" : "Não"

showResults("kataBonus6", result)
return result
}

kataBonus6()

const kataBonus7  = () => {
    


    let include = lotrCitiesArray.includes("Hollywood")
    let result = include ? "Sim" : "Não"
    
    showResults("kataBonus7", result)
    return result
    }
    
kataBonus7()


const kataBonus8 = () => {


let index = lotrCitiesArray.indexOf("Mirkwood")
showResults("kataBonus8", index)
return index
}
kataBonus8()


const kataBonus9 = () => {


for (let i = 0; i< lotrCitiesArray.length; i++) {
    if(lotrCitiesArray[i].includes(" ")){
        showResults("kataBonus9", lotrCitiesArray.indexOf(lotrCitiesArray[i]))
    }
  }

  return lotrCitiesArray
}
kataBonus9()


const kataBonus10 = () => {
    
showResults("kataBonus10", lotrCitiesArray.reverse())
return lotrCitiesArray
}

kataBonus10()

const kataBonus11 = () => {


showResults("kataBonus11", lotrCitiesArray.sort())
return lotrCitiesArray.sort()
}
kataBonus11()


const kataBonus12 = () => {

}
kataBonus12()