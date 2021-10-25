let randNum = Math.floor(Math.random() * 4)
console.log(`The random Number is ${randNum}`)

const charactersFactory = (names, tribe, bends) => {
    return {
        names,
        tribe,
        bends
    }
}
const characters1 = charactersFactory('Aang', 'Air Nation', "Everything(HE'S THE AVATAR!!)");
const characters2 = charactersFactory('Katara', 'Water Nation', "Water(SHE'S THE PRINCESS!!)");
const characters3 = charactersFactory('Sokka', 'Water Nation', "Nothing(BUT HE'S THE WARRIOR & JOKER TOO!!)");
const characters4 = charactersFactory('Zuko', 'Fire Nation', "Fire(HE'S THE GREAT EMPEROR!!)");
console.log(characters2)
/*if (randNum === 0){
    'your character is ';
    "you're from the ";
    'you bend ';
}*/
