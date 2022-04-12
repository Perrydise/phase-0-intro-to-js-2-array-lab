// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push('Ralph')
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(){
    const copyOfCats = [...cats]
   copyOfCats.push('Broom')
   return copyOfCats
}

function prependCat(){
    const copyOfCats = [...cats]
    copyOfCats.unshift('Arnold')
    return copyOfCats
}

function removeLastCat(){
    const copyOfCats = [...cats]
    copyOfCats.pop()
    return copyOfCats
}

function removeFirstCat(){
    const copyOfCats = [...cats]
    copyOfCats.shift()
    return copyOfCats
}