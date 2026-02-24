import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // A simple dummy route as the app is fully static
  app.get('/api/dummy', (req, res) => {
    res.json({ message: "Hello from backend" });
  });

  return httpServer;
}
