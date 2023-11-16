const { writeFile } = require("fs");
const { join } = require("path");

let filePath = join(__dirname, "chirps.json");

let chirps = [
    { author: "Simmon", content: "Let's play corners!" },
    { author: "Wilem", content: "You're a dreadful partner." },
    { author: "Simmon", content: "Oh, please. I can play well enough." },
    { author: "Wilem", content: "I'll play if Kvothe here joins.." },
    { author: "Kvothe", content: "I could play a round. Who will be our fourth?" }
  ];

  writeFile(filePath, JSON.stringify(chirps), err => {
    if (err) console.log(err);
    console.log("wrote chrips");
  });