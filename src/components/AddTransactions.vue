<template>
    <h3>Add new transaction</h3>
      <form id="form" @submit.prevent="onSubmit">
        <div class="form-control">
          <label for="text">Text</label>
          <input type="text" id="text" 
          v-model="textRef"
          placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount"
          v-model="amountRef"
           placeholder="Enter amount..." />
        </div>
        <button class="btn">Add transaction</button>
      </form>
</template>


<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const textRef = ref('')
const amountRef = ref('')

const emit = defineEmits(['transactionsSubmitted'])

const toast = useToast()

const onSubmit = () => {
  if(!textRef.value || !amountRef.value){
    toast.error('Both fields must be filled!')
    return
  }
  
  const transactionData = {
      text: textRef.value,
      amount: parseFloat(amountRef.value)
  }

  emit('transactionsSubmitted', transactionData)

  textRef.value = ''
  amountRef.value = ''

}
</script>
