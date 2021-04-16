module.exports = {
  port: 8081,
  // dbURL: 'mongodb+srv://admin:igbQIjjNG0bvLW7S@cluster0.xoruu.mongodb.net/stores',
  dbURL: 'mongodb://localhost/articles',
  dbOptions: {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
}
