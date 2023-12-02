<template>
    <div class = "inc-exp-container">
        <div>
            <h4>Income</h4>
            <p id="money-plus" class="money plus">+$ {{ incomeProp }}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p id="money-minus" class="money minus">-$ {{ expenseProp }}</p>
        </div>
    </div>
</template>

<script setup>

import { defineProps } from 'vue'

const props = defineProps({
    incomeProp: {
        type: Number, 
        required: true,
    }, 
    expenseProp: {
        type: Number, 
        required: true,
    }
})

</script>

