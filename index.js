const fs = require("fs");
const replaceJSONProperty = require("replace-json-property");

for (var i = 0; i < 30; i++) {
  replaceJSONProperty.replace(
    `./json/${i + 1}.json`,
    "image",
    `https://gateway.pinata.cloud/ipfs/QmRWuwGe7rkVdT5yAzHC5iTi2FZ9pvVg9xdj9d8pGcNzrp/${
      i + 1
    }.png`
  );
}
