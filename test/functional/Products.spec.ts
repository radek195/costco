import { test, expect } from '@playwright/test';
import { ProductPage } from './pages/ProductPage';

test.describe('As a client I want to view product page', () => {

  let productPage: ProductPage;

  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
  })

  test('Should display all teas on page load', async ({ page }) => {
    await productPage.launch()
    await productPage.clickShowAll()
    await productPage.assertCardAmount(10)
  })

});
