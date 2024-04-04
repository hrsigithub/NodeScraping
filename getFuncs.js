const axios = require("axios");
const cheerio = require("cheerio");

function getSP500() {
  const URL = "https://itf.minkabu.jp/fund/03311187";
  const data = {};

  axios(URL)
    .then((res) => {
      // console.log(res.data);
      const parser = res.data;
      const $ = cheerio.load(parser);
      $(".fund_price", parser).each(function () {
        const basePrice = $(this).find(".fund_cv .stock_price").text();
        const futurePrice = $(this).find(".fd_estimate .stock_price").text();

        // オブジェクトへ追加
        data.basePrice = basePrice;
        data.futurePrice = futurePrice;
        console.log(data);
      });
    })
    .catch((err) => console.log(err));
}

function getRakuten() {
  const URL = "https://search.rakuten.co.jp/search/mall/keyboard/";
  const data = [];

  axios(URL)
    .then((response) => {
      const htmlParser = response.data;
      const $ = cheerio.load(htmlParser);

      $(".searchresultitem", htmlParser).each(function () {
        const title = $(this).find(".title").text();
        const price = $(this).find(".important").text();
        data.push({ title, price });
        console.log(price);
      });
    })
    .catch((error) => console.log(error));
}

module.exports = { getSP500, getRakuten };
