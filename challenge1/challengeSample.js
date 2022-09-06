// ?
// ! https://adventjs.dev/challenges/01
// ?

// * Return a list with the right Sheeps.
// * The list must contains the following elements:
// * Sheep with: color red and must contains the following characters:
// * "a" & "n"


const sheeps = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "na", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

export default function contarOvejas(sheeps) {
  if (sheeps.length < 0) return;
  let rightSheeps = [];

  sheeps.map((sheep) => {
    if (
      sheep.color === "rojo" &&
      sheep.name.toLowerCase().includes("n") &&
      sheep.name.toLowerCase().includes("a")
    ) {
      rightSheeps.push(sheep);
    }
  });
  return rightSheeps;
}

const filteredSheeps = contarOvejas(sheeps);

console.log(filteredSheeps);
