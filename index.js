console.log("hello world")
let ania = { age: 12 };
let basia = { age: 22 };
let maciek = { age: 18 };
function checkIsLegalToDrink(person){
    // jezeli wiecej lub rowno niz 18 napisz legalne
    // jezeli nie to napisz niestety brakuje ci jeszcze x lat
    if(person.age >= 18){
        console.log("legalne")
    }
    if(person.age < 18)
    {
        let diffrence = 18 - person.age;
        console.log(`napisz niestety brakuje ci jeszcze ${diffrence} lat`)
    }
}
console.log("basia")
checkIsLegalToDrink(basia);
console.log("ania")
checkIsLegalToDrink(ania);
console.log("maciek")
checkIsLegalToDrink(maciek);