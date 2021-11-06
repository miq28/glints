const got = require("got");
const parser = require("fast-xml-parser");

(async function main() {
  const buffer = await got("https://rss.tempo.co/", {
    responseType: "buffer",
    resolveBodyOnly: true,
    timeout: 5000,
    retry: 5,
  });
  var feed = parser.parse(buffer.toString());
  for (const item of feed.rss.channel.item) {
    console.log({ title: item.title, url: item.link });
    break;
  }
})();


// Outputs...
// {
//   title: 'MDN localization update, February 2021',
//   url: 'https://hacks.mozilla.org/2021/02/mdn-localization-update-february-2021/'
// }