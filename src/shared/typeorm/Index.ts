import 'dotenv/config'
import { createConnection } from 'typeorm'

// eslint-disable-next-line
createConnection().then(() => console.log('🔥 Connected with database'))
