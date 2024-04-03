
const axios = require("axios");
const cheerio = require("cheerio")

function getSP500() {
    const URL = "https://itf.minkabu.jp/fund/03311187"
    const data = {};

    axios(URL)
    .then((res) => { 
        // console.log(res.data); 
        const parser = res.data
        const $ = cheerio.load(parser);
        $(".fund_price", parser).each(function() {
            const basePrice = $(this).find(".fund_cv .stock_price").text();
            const futurePrice = $(this).find(".fd_estimate .stock_price").text();
    
            // オブジェクトへ追加
            data.basePrice = basePrice
            data.futurePrice = futurePrice
            console.log(data)
        })
    }).catch(err => console.log(err)) 
}
 

module.exports = getSP500