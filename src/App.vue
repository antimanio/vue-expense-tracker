<template>
 <div class="container">
  <Header />
  <Balance />
  <IncomeExspense />
  <TransactionList />
  <AddTransactions />
 </div>
</template>


<script>
import Header from './components/Header.vue'
import Balance from './components/Balance.vue'
import IncomeExspense from './components/IncomeExspense.vue'
import TransactionList from './components/TransactionList.vue'
import AddTransactions from './components/AddTransactions.vue'
export default {
  components: {
    Header,
    Balance,
    IncomeExspense,
    TransactionList,
    AddTransactions
  },
}
</script>