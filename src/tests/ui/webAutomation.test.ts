import { test, chromium } from '@playwright/test';
import { GoogleSearchPage } from '../../pages/GoogleSearchPage';
import { WikipediaPage } from '../../pages/WikipediaPage';

test('Google Search and Wikipedia Automation Year', async () => {
    // Launch browser with slowMo
    const browser = await chromium.launch({ headless: false, slowMo: 1000 });
    const context = await browser.newContext();
    const page = await context.newPage();

    const googleSearch = new GoogleSearchPage(page);
    const wikipedia = new WikipediaPage(page);

    await googleSearch.searchFor('automation');
    await googleSearch.clickWikipediaLink();
    
    const automationYear = await wikipedia.getAutomationYear();
    console.log(`First automation year: ${automationYear}`);

    await googleSearch.takeScreenshot();

    // Close browser
    await browser.close();
});
