import { Actor } from 'apify';
// no need to import fetch — Node 18+ already has it
import * as cheerio from 'cheerio';

await Actor.main(async () => {
    const input = await Actor.getInput();
    const { startUrl } = input;

    console.log(`Fetching: ${startUrl}`);
    const response = await fetch(startUrl);
    const html = await response.text();
    const $ = cheerio.load(html);

    const title = $('title').text();
    console.log(`Page title: ${title}`);

    await Actor.pushData({ url: startUrl, title });
});

