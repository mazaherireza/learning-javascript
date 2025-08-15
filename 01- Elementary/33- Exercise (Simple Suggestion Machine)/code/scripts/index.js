const regions = [
  {
    title: "Tehran",
    spectacularPlaces: ["Golestan Palace"],
  },
  {
    title: "London",
    spectacularPlaces: ["Hyde Park", "Tower Bridge", "Sky Garden"],
  },
  {
    title: "Milan",
    spectacularPlaces: ["Duomo di Milano", "Milan Cathedral"],
  },
];

let destination = prompt("Enter your destination: ");

const capitalize = () => {
  destination =
    destination.charAt(0).toUpperCase() + destination.slice(1).toLowerCase();
};

capitalize();

const region = regions.find((region) => region.title === destination);

const moreThanOne = (arr) => arr.length > 1;

if (region) {
  console.log(
    `Spectacular place(s) of ${destination} ${
      moreThanOne(region.spectacularPlaces) ? `are: ` : `is: `
    }`,
    region.spectacularPlaces.join(", ")
  );
} else {
  console.log("Not found!");
}
