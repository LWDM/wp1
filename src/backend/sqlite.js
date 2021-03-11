// Какая-то обязательная строка

const sqlite3 = require('sqlite3').verbose()

// Подключаемся к базе

const db = new sqlite3.Database('./db/chinook.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message)
  }
  console.log('Connected to the chinook database.')
})

// Шурудим в базе

db.serialize(() => {
  db.each(`SELECT PlaylistId as id,
                  Name as name
           FROM playlists`, (err, row) => {
    if (err) {
      console.error(err.message)
    }
    console.log(row.id + '\t' + row.name)
  })
})

// Закрываем соединение с базой

db.close((err) => {
  if (err) {
    console.error(err.message)
  }
  console.log('Close the database connection.')
})
