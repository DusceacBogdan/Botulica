module.exports = {
  name: "command",
  description: "this is a command command!",
  execute(message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("lista de comenzi")
      .setURL("https://www.youtube.com/channel/UCO4_lU1yRZjYQyUbW5oK8YA")
      // .setDescription('Some description here')
      .setThumbnail("https://i.ytimg.com/vi/EXjckRleyG0/maxresdefault.jpg")
      .addFields(
        { name: "-spune ceva actual", value: "baga proverbe" },
        { name: "-ping", value: "zice pong" },
        { name: "-help", value: "deschide chestia asta" },
        {
          name: "-clear //un numar n//",
          value: "sterge ultimele n mesaje de pe channel",
        },
        {
          name: "-image //ceva//",
          value:
            "pune o imagine random despre acel //ceva// pe care l-ai introdus",
        }
      )
      // .addField('Inline field title', 'Some value here', true)
      .setImage(
        "https://dod6qkb6gz8ef.cloudfront.net/app/uploads/2020/09/08145740/Domcake-Dancing-Alien.gif"
      )
      .setFooter(
        "Are botulica footer",
        "https://lh3.googleusercontent.com/UWgWHOivVTCt4J_HRPBfy4l_Zzgzu_py71WjEtX2yWSdrYrEPUcyfw1YugDrFPgEuVqmgB1jDwZs4ZJ7Yb_CsfTJhT1NzuNOGXzJUyeSKtAtkymueDtDI3hy_3Q8Rm3m13Zs4l4q40PMAF-5bA71e7APYrMTUAVeYtRV5osknTjj9RIv7uTTdgyJDdJyF9XUDYzmk0vbGItPm301CDGIpIKVGGAtpQVAaru83QByb-TWMXzgsPvz46lSIMWZd-sBGAyLzRmgtfbrfwKTAr8HH_u9VrPZ_qsLX-UD5Lqt20EYnRIHZSNHcvp4V1Lwi98vZhxOtS6B-BNGAyaVCHMzNzKmxHHjwcaQ_7YqD-fdr5NkzDYB_9UHL21y9rYirDXu22nNiNExOZRsYkQWnfFN8KV6Fz0l1daw2hI4YFNMkN9bDT2xQmjC8ZU4KGEkeLZGtI9duo0pepZZxdR5n-V4Qeczcuc43276rka1I7gZOpeQDnOynGFn3uO9ptMbWcpYtO3wwZr8EJfV_8frX5_bFcRz4dW-NDr4dhLtVqvkxQiZGbXe-gRkHsBnAjJVO09oI9sDQZRmeFU41coK_CcoUcLqYrLQMtuj83fk8aRK-3fGEK6cuz2NyiHFQDSXZOo4O6MFJDg9IMiOJyvXZAG9LZWWcw0yW1N9645pfCm-TBycAeRJX98YG94NAKThHw=w235-h205-no?authuser=0"
      );

    message.channel.send(newEmbed);
  },
};
