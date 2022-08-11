import 'reflect-metadata'
import 'dotenv/config'
import '../typeorm/Index'

import { errors } from 'celebrate'
import cors from 'cors'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'

import { AppError } from '@shared/errors/AppError'

import { routes } from '../routes/Index'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use(errors())

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'Error',
      message: err.message
    })
  }

  // eslint-disable-next-line no-console
  console.error(err)

  return response.status(500).json({
    status: 'Error',
    message: 'Internal server error'
  })
})

export { app }
