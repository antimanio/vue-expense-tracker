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
  @transactionDeleted="handleTransactionDeleted"
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

import { ref, computed, onMounted } from 'vue'
import { nanoid } from 'nanoid'
import { useToast } from 'vue-toastification'

const toast = useToast()

const transactionsValues = ref([])

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'))

if(savedTransactions){
  transactionsValues.value = savedTransactions
}

})


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


 const handleTransactionsSubmitted = (transactionData) => {
  transactionsValues.value.push({
    id: nanoid(),
    text: transactionData.text,
    amount: transactionData.amount
  })

  saveTransactionsToLocalStorage()
  toast.success('Transaction added')
 }

 const handleTransactionDeleted = (id) => {
  transactionsValues.value = transactionsValues.value.filter(
    (transaction) => transaction.id !== id
  )

  saveTransactionsToLocalStorage()
  toast.success('Transaction deleted')
 }


 const saveTransactionsToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactionsValues.value))
 }

</script>