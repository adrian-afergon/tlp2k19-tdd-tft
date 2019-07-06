import puppeteer from 'puppeteer';

describe('Main use cases', function () {

    let browser: puppeteer.Browser;
    let page : puppeteer.Page;

    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: false
        });
        page = await browser.newPage();

        await page.emulate({
            viewport: {
                width: 500,
                height: 2400
            },
            userAgent: ''
        });

        await page.goto('http://localhost:3000/best-builds');
    });

    afterEach(async () => {
        await browser.close();
    });

    it('should open the main page by default', async () => {
        await page.waitForSelector('.App');

        const html = await page.$eval('.App-title', e => e.innerHTML);
        expect(html).toBe('Main Page');
    });
    it('should display the champion info when he/she is chosen', async () => {
        await page.waitForSelector('.App');

        const champion = await page.$('.champion');
        if(champion) {
            await champion.click();
        }
        const html = await page.$eval('.champion-title', e => e.innerHTML);
        expect(html).toBe('Atrox');
    });
});