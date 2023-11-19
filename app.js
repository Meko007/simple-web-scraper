const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeWebPage(url){
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    $('h2').each((i, elem) => {
        console.log($(elem).text());
    });
}

scrapeWebPage('https://myanimelist.net/anime/season/2024/winter');