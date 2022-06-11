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
            
            //send message that says
            message.channel.send("Ik zit er in mijn mandje");
           
            var credits = getCredits();
        
            const msg = await message.channel.send(`Er zitten ` + credits + ` eieren in m'n mandje`);
            
        
        },
        
    
    };
    
      } catch (error) {
       
       console.log(error);
       

      }
      
      //from stats.xml get Credits from from User by Name
        function getCredits(){
            var data = fs.readFileSync('./stats.xml', 'utf8'); 
            var json = parser.toJson(data);
            var obj = JSON.parse(json);
            message.channel.send(obj);
            var credits = obj.users.user.credits._text;
            return credits;
        }
    
    
    
    