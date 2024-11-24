class TaskManager {
    constructor() {
      this.queue = [];
      this.isRunning = false;
    }
  
    // Add a task to the queue
    addTask(task, options = { delay: 0, priority: 'medium' }) {
      this.queue.push({ task, options });
    }
  
    // Run the tasks sequentially
    async runSequential() {
      if (this.isRunning) return;
      this.isRunning = true;
  
      for (const { task, options } of this.queue) {
        await this._runTaskWithDelay(task, options);
      }
  
      this.isRunning = false;
    }
  
    // Run the tasks concurrently
    async runConcurrent() {
      if (this.isRunning) return;
      this.isRunning = true;
  
      const taskPromises = this.queue.map(({ task, options }) => this._runTaskWithDelay(task, options));
  
      await Promise.all(taskPromises);
  
      this.isRunning = false;
    }
  
    // Private method to handle delay and task execution
    async _runTaskWithDelay(task, options) {
      const { delay } = options;
  
      if (delay > 0) {
        console.log(`Waiting for ${delay}ms before executing task...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
  
      try {
        await task();
      } catch (error) {
        console.error('Task failed:', error);
      }
    }
  
    // Clear the task queue
    clearQueue() {
      this.queue = [];
    }
  }
  
  module.exports = TaskManager;
  