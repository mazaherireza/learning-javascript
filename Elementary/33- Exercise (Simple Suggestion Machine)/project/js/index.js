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
  if (moreThanOne(region.spectacularPlaces)) {
    console.log(
      `spectacular Places of ${destination} are: `,
      region.spectacularPlaces
    );
  } else {
    console.log(
      `spectacular Place of ${destination} is: `,
      region.spectacularPlaces
    );
  }
} else {
  console.log("Not found!");
}
