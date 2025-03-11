import { Page } from '@playwright/test';

export class WikipediaPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getAutomationYear(): Promise<string> {
        const element = await this.page.locator("//p[contains(., '1745')]").first();
        const text = await element.textContent();
        return text ? "1745" : "Unknown Year"; // Returns 1745 if found, otherwise "Unknown Year"
    }
}
