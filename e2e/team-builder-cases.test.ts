import puppeteer from 'puppeteer';

describe('Team Builder use cases', function () {

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

    it('should open the team builder page', async () => {
        await page.waitForSelector('.App');

        const html = await page.$eval('.App-title', e => e.innerHTML);
        expect(html).toBe('Main Page');
    });
    it('should display the team build and suggestions when the user chose a new one', async () => {
        await page.waitForSelector('.App');

        const champion = await page.$('.champion');
        if(champion) {
            await champion.click();
        }
        const html = await page.$eval('.team-composition', e => e.innerHTML);
        expect(html).toBe('Atrox');
    });
});