<script setup>
    defineProps({
        label: {
            type: String,
            required: true,
        },
        name: {
            type: String
        },
        id: {
            type: String
        },
        value: {
            type: String
        },
        placeholder: {
            type: String
        }
    });
</script>

<template>
    <div class="form-group">
      <label>{{ label }}</label>
      <input type="text" class="form-control" :id="id" :name="name" :placeholder="placeholder" :value="value" />
    </div>
</template>