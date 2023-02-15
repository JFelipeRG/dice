const randomizer = document.getElementById("randomizer");
const record = document.getElementsByClassName("record")[0];
const arrayNumbers = [] 

const randomize = () => Math.floor(Math.random() * 6) + 1;

randomizer.addEventListener('click',() => {
    let randNum = randomize();
    arrayNumbers.push(randNum)
    record.innerHTML = arrayNumbers.join("-")
    document.getElementById("dice").innerText = randNum;
});