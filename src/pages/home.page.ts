import { Page, Locator } from '@playwright/test';

export class HomePage {
  private page: Page;
  readonly titleInput: Locator;
  readonly addTaskButton: Locator;
  readonly updateTaskButton: Locator;
  readonly confirmNewTaskButton: Locator;
  readonly taskName: Locator;
  readonly firstTaskCheckbox: Locator;
  readonly firstTaskEditButton: Locator;
  readonly firstTaskDeleteButton: Locator;
  readonly filterSelect: Locator;
  readonly deleteMessage: Locator;
  readonly createMessage: Locator;
  readonly titleInputMessage: Locator;



  constructor(page: Page) {
    this.page = page;
    this.titleInput = page.locator("#title");
    this.addTaskButton = page.getByRole('button', { name: 'Add Task' });
    this.updateTaskButton = page.getByRole('button', { name: 'Update Task' });
    this.confirmNewTaskButton = page.locator('form').getByRole('button', { name: 'Add Task' });
    this.taskName = page.getByText('TaskName');
    this.firstTaskCheckbox = page.locator('.todoItem_svgBox__z1vm6').first();
    this.firstTaskEditButton = page.locator('.todoItem_todoActions__CuQMN div[role="button"]').nth(1);
    this.firstTaskDeleteButton = page.locator('.todoItem_todoActions__CuQMN div[role="button"]').nth(0);
    this.filterSelect = page.locator('select#status');
    this.deleteMessage = page.getByText('Todo Deleted Successfully')
    this.createMessage = page.getByText('Task added successfully')
    this.titleInputMessage = page.getByText('Please enter a title')
  }

  async navigate() {
    await this.page.goto('/');
  }

  async addTask(taskName: string) {
    await this.addTaskButton.click();
    await this.titleInput.fill(taskName);
    await this.confirmNewTaskButton.click();
  }

  async deleteFirstTask() {
    await this.firstTaskDeleteButton.click();
  }

  async markFirstTaskAsCompleted() {
    await this.firstTaskCheckbox.click();
  }

  async filterTasks(filterOption: 'All' | 'Completed' | 'Incomplete') {
    await this.filterSelect.selectOption(filterOption);
  }

  async editFirstTask(newTaskName: string) {
    await this.firstTaskEditButton.click();
    await this.titleInput.fill(newTaskName);
    await this.updateTaskButton.click();
  }
}
