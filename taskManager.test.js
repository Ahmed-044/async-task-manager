const TaskManager = require('./index');

test('runs tasks sequentially', async () => {
  const taskManager = new TaskManager();

  const results = [];
  taskManager.addTask(() => {
    results.push('Task 1');
    return Promise.resolve();
  });
  taskManager.addTask(() => {
    results.push('Task 2');
    return Promise.resolve();
  });

  await taskManager.runSequential();

  expect(results).toEqual(['Task 1', 'Task 2']);
});
