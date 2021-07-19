const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override')
const Expense = require('./models/expense');

mongoose.connect('mongodb://localhost:27017/saver', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.engine('ejs',ejsMate)
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))


const bills = [
    { name: 'utilities', amount: 15, category: 'bill'},
    { name: 'simCard', amount: 8.21, category: 'bill'},
    { name: 'license', amount: .575, category: 'bill'},
    { name: 'carRego', amount: 18.75, category: 'bill'},
    { name: 'fuel', amount: 28.665, category: 'bill'},
    { name: 'rent', amount: 175, category: 'bill'},
    { name: 'photoshop', amount: 3.57, category: 'bill'},
    { name: 'healthInsurance', amount: 5.69, category: 'bill'},
    { name: 'carInsurance', amount: 8.31, category: 'bill'},
];

const categoryBudgets = {
    groceries: 70,
    household: 40,
    personal: 40,
    leisure: 40,
}


const getBeginningOfTheWeek = (now) => {
    const days = (now.getDay() + 7 - 1) % 7;
    now.setDate(now.getDate() - days);
    now.setHours(0, 0, 0, 0);
    return now;
};


app.get('/expenses',async (req,res) => {
    const expenses = await Expense.find({})
    const week = await Expense.find({"createdAt" :{$gte: getBeginningOfTheWeek(new Date())}})
    
    res.render('expenses/show', {expenses, week, bills, categoryBudgets})
})

app.post('/expenses', async (req, res) => {
    const { amount,category } = req.body;
    const expense = new Expense({amount,category});
    await expense.save();
    res.redirect('/expenses');
})


app.listen(3000, () => {
    console.log('serving on port 3000')
})