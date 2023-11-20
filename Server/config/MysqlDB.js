import {  Sequelize } from 'sequelize';
export const db = new Sequelize('blogs', 'root', 'Quocdung1207@@@', {
  host: 'localhost',
  dialect: 'mysql',
});

db.authenticate().then(()=>{
  console.log('connected DB...');
}).catch(err=>{
  console.log('Error'+ err);
})