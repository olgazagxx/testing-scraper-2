import { Actor } from 'apify';

await Actor.main(async () => {
    const input = await Actor.getInput();
    console.log('Input received:', input);
    await Actor.pushData({ message: 'Hello from GitHub actor!' });
});

