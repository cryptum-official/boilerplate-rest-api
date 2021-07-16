import { createConnection, ConnectionOptions } from 'typeorm';

class Database {
  static async getOrCreateConnection(
    options: ConnectionOptions,
  ): Promise<void> {
    try {
      await createConnection(options);
    } catch (error) {
      console.error({
        error: error.message,
        msg: 'App DB Connection Failed',
        stack: error.stack,
      });

      throw error;
    }
  }
}
export { Database };
