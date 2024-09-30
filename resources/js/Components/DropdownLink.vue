<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    href: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <li class="nav-item">
        <Link
            :href="href"
            class="nav-link"
        >
            <slot />
        </Link>
    </li>
</template>
