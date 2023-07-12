import { index } from '../src/server/index'

describe('Test express server', () => {
    it("port 8080", async () => {
      expect(index).toBe(undefined);
    });
  });