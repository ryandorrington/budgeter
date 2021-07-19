const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    amount: Number,
    name: String,
    category: {
        type: String,
        enum: ['bills', 'groceries', 'household', 'personal', 'leisure']
    },
    createdAt: {type: Date, default: Date.now}
    
});

const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;