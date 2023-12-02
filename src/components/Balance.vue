<template>
    <h4>Your Balance</h4>
    <h1 id="balance">$ {{ totalProp }}</h1>
</template>

<script setup>

import { defineProps } from 'vue'

const props = defineProps({
    totalProp: {
        type: Number,
        required: true,
    }
}) 


</script>