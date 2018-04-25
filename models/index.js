const Sequelize = require('sequelize');
// connect to database and remove logging on the terminal;
const db = new Sequelize('postgres://localhost:5433/wikistack', {
  logging: false
});

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING
    },
    urlTitle: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }
});

const User = db.define('user', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});

module.exports = {
  Page: Page,
  User: User,
  db : db
};
