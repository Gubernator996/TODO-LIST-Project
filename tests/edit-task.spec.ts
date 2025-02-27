import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';

test('100-000-004 User can edit task title', async ({ page }) => {

  // Arrange
  const homePage = new HomePage(page);
  const oldTaskName = 'OldTaskName'
  const newTaskName = 'NewTaskName'

  // Act
  await homePage.navigate();
  await homePage.addTask(oldTaskName);
  await homePage.editFirstTask(newTaskName);

  // Assert
  await expect(homePage.taskName).toHaveText(newTaskName);
});
