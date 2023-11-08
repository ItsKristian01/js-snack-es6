const bicycles = [
    {
        type: "Bicycle1",
        weight: "50kg",
    },
    {
        type: "Bicycle2",
        weight: "80kg",
    },
    {
        type: "Bicycle3",
        weight: "120kg",
    },
    {
        type: "Bicycle4",
        weight: "40kg",
    },
    {
        type: "Bicycle5",
        weight: "75kg",
    },
    {
        type: "Bicycle6",
        weight: "90kg",
    }
];

const min = "40kg";
const max = "120kg";

console.log(bicycles);

for (let i = 0; i < bicycles.length; i++) {
    const curNumber = bicycles[i];
    curNumber.weight === min ? console.log(curNumber) : console.log("Non e' la bicicletta con peso minore");
}


