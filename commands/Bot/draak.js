
try {

module.exports = {
    name: "draak",
    aliases: ["dragun", "johandra"],
    category: "Utility",
    description: "Even draken spotten",
    ownerOnly: false,
    run: async (client, message, args) => {
        const msg = await message.channel.send(`wtf is dat een` + this.getRandomDragon());
    },

//make a list of dragon types and return a random dragon
getRandomDragon: function() {
    var dragons = ["blauwe draak", "groene draak", "10 koppige demon draak"];
    var random = dragons[Math.floor(Math.random() * dragons.length)];
    return random;
}

};

  } catch (error) {
    console.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }
  
