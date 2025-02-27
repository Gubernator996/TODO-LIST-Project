import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';

test('100-000-005 User can filter tasks by filter option', async ({ page }) => {

  // Arrange
  const homePage = new HomePage(page);
  const taskName = 'TaskName'

  // Act
  await homePage.navigate();
  await homePage.addTask(taskName);
  await homePage.filterTasks('Completed');
  
  // Assert
  await expect(homePage.taskName).not.toBeVisible();
});
