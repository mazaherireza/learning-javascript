const regions = [
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

if (region) {
  console.log(
    `spectacular Place(s) of ${destination} is/are: `,
    region.spectacularPlaces
  );
} else {
  console.log("Not found!");
}
