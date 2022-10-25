import { Sequelize } from "sequelize";

export const database = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'petclinica_development',
  username: 'postgres',
  password: 'postgres',
	define: {
    underscored: true
  }
})