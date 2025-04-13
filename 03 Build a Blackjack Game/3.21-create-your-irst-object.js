// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let airbnbCastle = {
  name: "Castle in the Sky",
  location: "Scotland",
  pricePerNight: 250,
  isAvailable: true,
  amenities: ["WiFi", "Pool", "Garden"],
};

console.log(airbnbCastle.name); // "Castle in the Sky"
console.log(airbnbCastle.pricePerNight); // 250
console.log(airbnbCastle.isAvailable); // true
console.log(airbnbCastle.amenities); // ["WiFi", "Pool", "Garden"]
console.log(airbnbCastle.location); // "Scotland"
console.log(airbnbCastle.amenities[0]); // "WiFi"
console.log(airbnbCastle.amenities[1]); // "Pool"
console.log(airbnbCastle.amenities[2]); // "Garden"
