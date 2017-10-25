const dbConfig = (env) => {
  if (env === 'development') {
    return 'postgres://localhost:5432/hotel_db'
  } else if (env === 'test') {
    return 'postgres://localhost:5432/hotel_db_test'
  }
}

module.exports = { dbConfig }
