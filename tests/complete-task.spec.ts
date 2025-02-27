import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';

test('100-000-002 User can complete task', async ({ page }) => {

    // Arrange
    const homePage = new HomePage(page);
    const expectedTaskName = 'TaskName'
    
    // Act
    await homePage.navigate();
    await homePage.addTask(expectedTaskName);
    const firstTask = homePage.taskName.first();
    await homePage.markFirstTaskAsCompleted();

    // Assert
    await expect(firstTask).toHaveClass(/completed/);
});
