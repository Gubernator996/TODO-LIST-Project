import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';

test('100-000-006 User cannot add new task without entering task title', async ({ page }) => {

  // Arrange
  const homePage = new HomePage(page);
  const expectedTaskName = ''
  const expectedErrorMessage = 'Please enter a title'

  // Act
  await homePage.navigate();
  await homePage.addTask(expectedTaskName);

  // Assert
  await expect(homePage.titleInputMessage).toHaveText(expectedErrorMessage)
});
