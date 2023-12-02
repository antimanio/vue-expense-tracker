<template>
 <div class="container">
  <Header />
  <Balance 
  :totalProp="+getTotal"
  />
  <IncomeExpenses 
  :incomeProp="+getIncome"
  :expenseProp="+getExpenses"
  />
  <TransactionList
  :transactionsProp="transactionsValues" 
  />
  <AddTransactions 
  @transactionsSubmitted="handleTransactionsSubmitted"

  />
 </div>
</template>


<script setup>
import Header from './components/Header.vue'
import Balance from './components/Balance.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import TransactionList from './components/TransactionList.vue'
import AddTransactions from './components/AddTransactions.vue'

import { ref, computed } from 'vue'
import { nanoid } from 'nanoid'



const transactionsValues = ref([ 
  { id: 1, text: 'Phone', amount: -199.99 },
  { id: 2, text: 'Paycheck', amount: 800 },
  { id: 3, text: 'Grandma money', amount: 100 },
  { id: 4, text: 'Computer', amount: -399.99 },
  ])


//start the index at 0
const getTotal = computed(() => {
  return transactionsValues.value.reduce((index, transaction) => {
    return index + transaction.amount
  }, 0)
})

const getIncome = computed(() => {
  return transactionsValues.value
  .filter((transaction) => transaction.amount > 0)
  .reduce((index, transaction) => {
  return index + transaction.amount
 }, 0).toFixed(2)
})


const getExpenses = computed(() => {
  return transactionsValues.value
  .filter((transaction) => transaction.amount < 0)
  .reduce((index, transaction) => {
  return index + transaction.amount
 }, 0).toFixed(2)
 })


 const handleTransactionsSubmitted = (transactionData) =>{
  transactionsValues.value.push({
    id: nanoid,
    text: transactionData.text,
    amount: transactionData.amount
  })
 }


</script>