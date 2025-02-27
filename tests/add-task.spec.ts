import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';

test('100-000-001 User can add new task', async ({ page }) => {

    // Arrange
    const homePage = new HomePage(page);
    const expectedTaskName = 'TaskName'
    const expectedInfoMessage = 'Task added successfully'

    // Act
    await homePage.navigate();
    await homePage.addTask(expectedTaskName);

    // Assert
    await expect(homePage.taskName).toHaveText(expectedTaskName);
    await expect(homePage.createMessage).toHaveText(expectedInfoMessage)
});
