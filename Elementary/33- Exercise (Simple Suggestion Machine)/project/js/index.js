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

const destination = prompt("Enter your destination: ");

const region = regions.find((region) => region.title === destination);

const moreThanOne = (arr) => arr.length > 1;

if (region) {
  console.log(
    `spectacular Places of ${destination} ${
      moreThanOne(region.spectacularPlaces) ? `are` : `is`
    }`,
    region.spectacularPlaces
  );
} else {
  console.log("Not found!");
}
