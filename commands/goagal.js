module.exports = {
  name: "goagal",
  description: "this is a goagal command!",
  execute(message, args, request, cheerio) {
    var options = {
      url: "http://results.dogpile.com/serp?qc=images&q=" + args,
      method: "GET",
      headers: {
        Accept: "text/html",
        "User-Agent": "Chrome",
      },
    };
    request(options, function (error, response, responseBody) {
      if (error) {
        return;
      }

      $ = cheerio.load(responseBody);

      var links = $(".image a.link");

      var urls = new Array(links.length)
        .fill(0)
        .map((v, i) => links.eq(i).attr("href"));

      ///console.log(urls);

      if (!urls.length) {
        console.log("no results");
        message.channel.send("no results");
        return;
      }

      message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
    });
  },
};

//   module.exports = {
//     name: 'goagal',
//     description: "this is a goagal command!",
//     execute(message, args, cherrio, request){
//         var options = {
//             url: "http://results.dogpile.com/serp?qc=image&q=" + "cursed images",
//             method: "GET",
//             headers: {
//               "Accept": "text/html",
//               "User-Agent": "Chrome"
//             }
//           };
//           request(options, function (error, response, responseBody) {
//             if (error) {
//               return;
//             }

//             $ = cherrio.load(responseBody);

//             var links = $(".image a.Link");

//             var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

//             console.log(urls);
//             if (!urls.length) {

//               return;
//             }

//             message.channel.send( urls[Math.floor(Math.random() * urls.length)] + " " + message.guild.members.random());
//           });
//     }
// }
