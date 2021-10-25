let randNum = Math.floor(Math.random() * 4)
console.log(`Your random Number is ${randNum}`)

const charactersFactory = (names, tribe, bends) => {
    return {
        names,
        tribe,
        bends
    }
}
const characters1 = charactersFactory('Aang', 'Air Nation', "Everything(HE'S THE AVATAR!!)");
const characters2 = charactersFactory('Katara', 'Water Nation', "Water(SHE'S THE PRINCESS!!)");
const characters3 = charactersFactory('Sokka', 'Water Nation', "Nothing(BUT HE'S THE WARRIOR & FUNNY TOO!!)");
const characters4 = charactersFactory('Zuko', 'Fire Nation', "Fire(HE'S THE GREAT EMPEROR!!)");

if (randNum === 0){
    console.log(`It's character is ${characters1.names}.`) 
    console.log(`He's from the ${characters1.tribe}.`) 
    console.log(`He bends ${characters1.bends}.`) 
}else if (randNum === 1){
    console.log(`It's character is ${characters2.names}`)
    console.log(`He's from the ${characters2.tribe}.`) 
    console.log(`He bends ${characters2.bends}.`) 
}else if (randNum === 2){
    console.log(`It's character is ${characters3.names}`)
    console.log(`He's from the ${characters3.tribe}.`) 
    console.log(`He bends ${characters3.bends}.`) 
}else {
    console.log(`It's character is ${characters4.names}`)
    console.log(`He's from the ${characters4.tribe}.`) 
    console.log(`He bends ${characters4.bends}.`) 
}