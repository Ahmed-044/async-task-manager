# Async Task Manager

A simple task manager to help you manage and run tasks sequentially or concurrently in JavaScript.

## Installation

```bash
npm install async-task-manager

const TaskManager = require('async-task-manager');

// Create a new task manager instance
const taskManager = new TaskManager();

// Add tasks to the manager
taskManager.addTask(() => new Promise(resolve => setTimeout(() => {
  console.log('Task 1 Completed');
  resolve();
}, 1000)));

taskManager.addTask(() => new Promise(resolve => setTimeout(() => {
  console.log('Task 2 Completed');
  resolve();
}, 500)));

taskManager.addTask(() => new Promise(resolve => setTimeout(() => {
  console.log('Task 3 Completed');
  resolve();
}, 2000)));

// Run tasks sequentially
taskManager.runSequential();
