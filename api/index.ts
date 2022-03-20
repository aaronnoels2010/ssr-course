const express = require('express')
import { Response, Request, NextFunction } from 'express'


// Create express instnace
const app = express()

// Init body-parser options (inbuilt with express)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req: Request, res: Response,next: NextFunction ) => {
  console.log(`API call to ${req.url}`)
  next()
});

// Require & Import API routes
const configRoutes = require('./routes/config')

// Use API Routes
app.use(configRoutes)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
