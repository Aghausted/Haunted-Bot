const Discord = require('discord.js');


const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot has been Updated!');

});

//Moderation --------------------------

//Ban -------------------

client.on('message', message => {

  if (!message.guild) return;

  if (message.content.startsWith('>ban')) {

    const user = message.mentions.users.first();

    if (user) {

      const member = message.guild.member(user);

      if (member) {

        member.ban({
          reason: 'They were bad!',
        }).then(() => {

          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {

          message.reply('I was unable to ban the member');

          console.error(err);
        });
      } else {

        message.reply('That user isn\'t in this guild!');
      }
    } else {

      message.reply('You didn\'t mention the user to ban!');
    }
  }
});

//  KICK ---------

client.on('message', message => {

  if (!message.guild) return;


  if (message.content.startsWith('>kick')) {

    const user = message.mentions.users.first();

    if (user) {

      const member = message.guild.member(user);

      if (member) {

        member.kick('Optional reason that will display in the audit logs').then(() => {

          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {

          message.reply('I was unable to kick the member');

          console.error(err);
        });
      } else {

        message.reply('That user isn\'t in this guild!');
      }

    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
  }
});

// SERVER GREETING -------------


client.on('guildMemberAdd', member => {

  const channel = member.guild.channels.find(ch => ch.name === 'join-and-leave-log');

  if (!channel) return;

  channel.send(`Welcome to the server, ${member}`);
});

// AVATAR --------

client.on('message', message => {

  if (message.content === '>avatar') {

    message.reply(message.author.avatarURL);
  }
});


// VERSION ----
var version = '1.1.1'

var lastUpdated = '2019/06/27'

client.on('message', message => {

  if (message.content === '>version') {

    message.channel.send('Version ' + version + ', last updated ' + lastUpdated);
  }
});

// HELP PAGE ---------

var help1 = (':small_blue_diamond: {Economy} : >help eco                                                                    :small_blue_diamond: {Fun} : >help fun                                                                                  :small_blue_diamond: {Music} : >help music                                                                     :small_blue_diamond:  {Misc} : >help misc ')
var helpeco = ('')



client.on('message', message => {

  if (message.content === '>help') {

    message.channel.send(help1);
  }
});


client.login('process.env.BOT_TOKEN');
