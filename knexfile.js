require("dotenv").config();

// if not declear where migaration and seeds file goes then, default is migrations folder and seeds folder.

const sharConfig = {
  client: "postgres",
  connection: process.env.DATABASE_URL,
};

module.exports = {
  development: {
    ...sharConfig,
  },
  production: {
    ...sharConfig,
    connection: sharConfig.connection,
    // migth need ssl?
  },
};
