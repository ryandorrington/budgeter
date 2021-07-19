const mongoose = require('mongoose');
const Expense = require('../saver/models/expense');

mongoose.connect('mongodb://localhost:27017/saver', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('MONGO CONNECTION OPEN')
})
.catch(err => {
    console.log('OH NO CONNECTION ERROR')
    console.log(err)
})

const seedExpenses = [
    {
        amount: 101.43,
        category: 'groceries',
        createdAt: Date("2020-12-9")
    },
    {
        amount: 50.14,
        category: 'household',
        createdAt: Date("2020-12-9")
    },
    {
        amount: 56,
        category: 'household',
        createdAt: Date("2020-12-9")
    },
    {
        amount: 28.95,
        category: 'household',
        createdAt: Date("2020-12-9")
    },
    {
        amount: 90,
        category: 'personal',
        createdAt: Date("2020-12-9")
    },
    {
        amount: 25,
        category: 'personal',
        createdAt: Date("2020-12-9")
    },
    {
        amount: 30,
        category: 'personal',
        createdAt: Date("2020-12-9")
    },
    {
        amount: 5,
        category: 'personal',
        createdAt: Date("2020-12-9")
    },
    {
        amount: 33.79,
        category: 'leisure',
        createdAt: Date("2020-12-9")
    },
    {
        amount: 43.40,
        category: 'leisure',
        createdAt: Date("2020-12-9")
    },
    {
        amount: 10,
        category: 'leisure',
        createdAt: Date("2020-12-9")
    },
    {
        amount: 22.50,
        category: 'leisure',
        createdAt: Date("2020-12-9")
    },
    {
        amount: 113.21,
        category: 'groceries',
        createdAt: Date("2020-12-23")
    },
    {
        amount: 16.43,
        category: 'groceries',
        createdAt: Date("2020-12-23")
    },
    {
        amount: 15.29,
        category: 'groceries',
        createdAt: Date("2020-12-23")
    },
    {
        amount: 14,
        category: 'household',
        createdAt: Date("2020-12-23")
    },
    {
        amount: 262.45,
        category: 'personal',
        createdAt: Date("2020-12-23")
    },
    {
        amount: 4,
        category: 'personal',
        createdAt: Date("2020-12-23")
    },
    {
        amount: 3.68,
        category: 'personal',
        createdAt: Date("2020-12-23")
    },
    {
        amount: 132.06,
        category: 'groceries',
        createdAt: Date("2021-01-07")
    },
    {
        amount: 75.39,
        category: 'household',
        createdAt: Date("2021-01-07")
    },
    {
        amount: 5.79,
        category: 'household',
        createdAt: Date("2021-01-07")
    },
    {
        amount: 16.99,
        category: 'personal',
        createdAt: Date("2021-01-07")
    },
    {
        amount: 12.88,
        category: 'personal',
        createdAt: Date("2021-01-07")
    },
    {
        amount: 15.28,
        category: 'personal',
        createdAt: Date("2021-01-07")
    },
    {
        amount: 15.75,
        category: 'leisure',
        createdAt: Date("2021-01-07")
    },
    {
        amount: 235.02,
        category: 'groceries',
        createdAt: Date("2021-01-21")
    },
    {
        amount: 76.94,
        category: 'personal',
        createdAt: Date("2021-01-21")
    },
    {
        amount: 147.89,
        category: 'leisure',
        createdAt: Date("2021-01-21")
    },
    {
        amount: 1,
        category: 'leisure',
    },


]
Expense.deleteMany({amount: {$gt: 1}})
.then(res => {
    Expense.insertMany(seedExpenses)
    console.log(res)
})
.catch(e => {
    console.log(e)
})

