const sequelize = require('./db');
const Car = require('./models/car');

async function main() {
  try {
    await sequelize.authenticate();
    console.log('✅ Подключение к базе работает');

    await sequelize.sync({ force: true });
    console.log('✅ Таблица создана');

    await Car.bulkCreate([
      { brand: 'Lada', model: 'Vesta', year: 2023, price: 1500000, isAvailable: true },
      { brand: 'Toyota', model: 'Camry', year: 2022, price: 3200000, isAvailable: true },
    ]);
    console.log('✅ Машины добавлены');

    const allCars = await Car.findAll();
    console.log('\n📋 СПИСОК МАШИН:');
    allCars.forEach(car => {
      console.log(`${car.brand} ${car.model} (${car.year}) - ${car.price} руб.`);
    });

  } catch (error) {
    console.error('Ошибка:', error);
  } finally {
    await sequelize.close();
    console.log('\n🔌 База закрыта');
  }
}

main();