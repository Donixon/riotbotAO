try {
    fs = require('fs');
    var parser = require('xml2json');

    module.exports = {
        name: "eggs",
        aliases: ["eggies", "eggos", "egg", "eggsos"],
        category: "Utility",
        description: "Hoeveel eieren zitter er in m'n mandje",
        ownerOnly: false,
        run: async (client, message, args) => {
            
            var credits = getCredits();

            
                message.channel.send(credits + " eieren zitter er in m'n mandje");
          

          

            const msg = await message.channel.send(`Er zitten ` + credits + ` eieren in m'n mandje`);
            
        
        },
        
    
    };
    
      } catch (error) {
       
       console.log(error);
       message.channel.send("dreoaieaieiaiea");

      }
      
      //from stats.xml get Credits from from User by Name
        function getCredits(){
            var data = fs.readFileSync('./stats.xml', 'utf8');
            var json = parser.toJson(data);
            var obj = JSON.parse(json);
            var credits = obj.stats.user[0].credits[0]._text;
            return credits;
        }
    
    
    
    