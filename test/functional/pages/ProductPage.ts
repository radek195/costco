import { Locator, Page, expect } from "@playwright/test";

export class ProductPage {

    page: Page;

    teaCard: Locator;
    showAll: Locator;

    constructor(page: Page) {
        this.page = page;

        this.showAll = this.page.locator(".dropdown__show");
        this.teaCard = this.page.locator("div.teacard");
    }

    public async launch() {
        await this.page.goto("/costco/teas/teahome");
    }

    public async clickShowAll() {
        await this.showAll.click();
    }

    public async assertCardAmount(amount: number) {
        await expect(this.teaCard).toHaveCount(amount);
    }


}