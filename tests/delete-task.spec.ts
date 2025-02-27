import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';

test('100-000-003 User can delete incompleted task', async ({ page }) => {

    // Arrange
    const homePage = new HomePage(page);
    const taskName = 'TaskName'
    const expectedInfoMessage = 'Todo Deleted Successfully'

    // Act
    await homePage.navigate();
    await homePage.addTask(taskName);
    await homePage.deleteFirstTask();
    
    // Assert
    await expect(homePage.taskName).not.toBeVisible();
    await expect(homePage.deleteMessage).toHaveText(expectedInfoMessage)
});
