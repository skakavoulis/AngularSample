import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/AngularSample/);
});

test('should navigate to home page', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL('/');
});

test('should have main navigation elements', async ({ page }) => {
  await page.goto('/');

  // Check if common navigation elements exist
  await expect(page.getByRole('navigation')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
});

test('should be responsive', async ({ page }) => {
  await page.goto('/');

  // Test different viewport sizes
  await page.setViewportSize({ width: 1200, height: 800 });
  await expect(page.getByRole('main')).toBeVisible();

  // Mobile viewport
  await page.setViewportSize({ width: 375, height: 667 });
  await expect(page.getByRole('main')).toBeVisible();
});

test('should handle form submission', async ({ page }) => {
  await page.goto('/');

  // Assuming you have a form with these elements
  await page.getByLabel('Email').fill('test@example.com');
  await page.getByLabel('Password').fill('password123');
  await page.getByRole('button', { name: 'Submit' }).click();

  // Check for success message or navigation
  await expect(page.getByText('Success')).toBeVisible();
});

test('should handle error states', async ({ page }) => {
  await page.goto('/');

  // Test invalid form submission
  await page.getByRole('button', { name: 'Submit' }).click();

  // Check for error messages
  await expect(page.getByText('This field is required')).toBeVisible();
});
