
const numbers = [10, 25, 45, 55, 60, 75, 90, 30];

const filterNumbers = () => {

    const filtered = numbers.filter(num => num > 50);

    document.getElementById("original").innerText =
        numbers.join(", ");

    document.getElementById("result").innerText =
        filtered.join(", ");
};
