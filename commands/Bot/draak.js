
try {

module.exports = {
    name: "draak",
    aliases: ["dragun", "johandra"],
    category: "Utility",
    description: "Even draken spotten",
    ownerOnly: false,
    run: async (client, message, args) => {
        const msg = await message.channel.send(`wtf is dat een` + getRandomDragon());
    },



};

  } catch (error) {

   
        error.console.log(error);
       
  }
  
  

  //make a list of dragon types and return a random dragon
function getRandomDragon(){
    var dragons = ["blauwe draak", "groene draak", "10 koppige demon draak"];
    var random = dragons[Math.floor(Math.random() * dragons.length)];
    return random;
}