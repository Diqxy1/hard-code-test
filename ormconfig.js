require("dotenv/config");

const devConfig = [
  {
    "type": "mongodb",
    "url": process.env.DATABASE_URL,
    "entities": ['./src/modules/**/typeorm/entities/*.ts'],
  }
]
const prodConfig = [
  {
    "type": 'mongodb',
    "url": process.env.DATABASE_URL,
    "entities": ['./dist/modules/**/typeorm/entities/*.js'],
  }
]

module.exports = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;