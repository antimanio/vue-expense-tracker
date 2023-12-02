<template>
     <h3>History</h3>
      <ul id="list" class="list">
       <li v-for="transaction in transactions"
       :key="transaction.id"
       :class="transaction.amount > 0 ? 'plus' : 'minus'"
       >
       {{transaction.text }}<span>$ {{transaction.amount}} </span>
       <button class="delete-btn">x</button>
       </li>
      </ul>
</template>

<script>
export default {
    data() {
        return {
            transactions: [ 
                { id: 1, text: 'Phone', amount: -199.99 },
                { id: 2, text: 'Paycheck', amount: 500 },
                { id: 3, text: 'Grandma money', amount: 100 },
                { id: 4, text: 'Computer', amount: -399.99 }
            ]
        }
    },
}
</script>