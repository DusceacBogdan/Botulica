module.exports = {
  name: "default",
  description: "this is a default command!",
  execute(message, args) {
    // const vorbe =['Cine zice lui ii zice si tiganu contrazice!','Cine zice ala ii! ;)','hai ca '  + args[Math.floor(Math.random() * args.length)] + ' daca e!','Ce dracu vrei?'];
    const vorbe = [
      "hai ca " + args[Math.floor(Math.random() * args.length)] + " daca e!",
    ];

    message.channel.send(vorbe[Math.floor(Math.random() * vorbe.length)]);
  },
};
