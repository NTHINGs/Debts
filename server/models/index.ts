import { Sequelize } from 'sequelize-typescript';
import { People } from './People.model';
import { Debt } from './Debt.model';
import { Period } from './Period.model';
import { hashPassword } from '../utils/login';

export * from './People.model';
export * from './Debt.model';
export * from './Period.model';

const host = process.env.MYSQL_HOST || 'localhost';
const port = +process.env.MYSQL_PORT || 4000;
const username = process.env.MYSQL_USERNAME || 'root';
const password = process.env.MYSQL_PASSWORD || '';

export const sequelize = new Sequelize({
    host,
    dialect: 'mysql',
    port,
    define: {
        paranoid: true
    },
    database: 'debts',
    username,
    password,
});

(async () => {
    sequelize.addModels([
        People,
        Debt,
        Period,
    ]);

    if (!process.env.MYSQL_HOST) {
        await sequelize.sync({force: true});
        const obj = new People({
            name: 'Mauricio Martinez',
            color: '#000000',
            email: 'n_othing@hotmail.com',
            password: hashPassword('12345'),
        });
        obj.save();
    } else {
        sequelize.sync();
    }

})();
