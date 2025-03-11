import { Page } from '@playwright/test';

export class GoogleSearchPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async acceptCookies() {
        const acceptButton = this.page.locator("#L2AGLb");
        if (await acceptButton.isVisible()) {
            await acceptButton.click();
        }
    }

    async searchFor(term: string) {
        await this.page.goto('https://www.google.com');
        await this.acceptCookies();
        await this.page.fill('[name="q"]', term);
        await this.page.keyboard.press('Enter');
        await this.page.waitForLoadState('networkidle');
    }

    async clickWikipediaLink() {
        const wikipediaLink = this.page.locator("#rso a[href*='wikipedia.org']").first();
        await wikipediaLink.click();
        await this.page.waitForLoadState('domcontentloaded');
    }

    async takeScreenshot() {
        await this.page.screenshot({ path: 'wikipedia_screenshot.png' });
    }
}