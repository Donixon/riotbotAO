try {
    fs = require('fs');

    module.exports = {
        name: "eggs",
        aliases: ["eggies", "eggos", "egg", "eggsos"],
        category: "Utility",
        description: "Hoeveel eieren zitter er in m'n mandje",
        ownerOnly: false,
        run: async (client, message, args) => {
           
            var credits = getCredits();
        
            const msg = await message.channel.send(`Er zitten ` + credits + ` eieren in m'n mandje`);
            
        
        },
        
    
    };
    
      } catch (error) {
       
       console.log(error);
       

      }
      
        function getCredits()
        {
            var credits = 0;
            var obj = JSON.parse(fs.readFileSync("./stats.json", "utf8"));
            credits = obj.count;
            return credits;
        }



    
    