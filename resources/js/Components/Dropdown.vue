<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
    align: {
        type: String,
        default: 'right',
    },
    width: {
        type: String,
        default: '48',
    },
    contentClasses: {
        type: String,
        default: 'py-1 bg-white',
    },
});

// const closeOnEscape = (e) => {
//     if (open.value && e.key === 'Escape') {
//         open.value = false;
//     }
// };

// onMounted(() => document.addEventListener('keydown', closeOnEscape));
// onUnmounted(() => document.removeEventListener('keydown', closeOnEscape));

const widthClass = computed(() => {
    return {
        48: 'w-48',
    }[props.width.toString()];
});

const alignmentClasses = computed(() => {
    if (props.align === 'left') {
        return 'ltr:origin-top-left rtl:origin-top-right start-0';
    } else if (props.align === 'right') {
        return 'ltr:origin-top-right rtl:origin-top-left end-0';
    } else {
        return 'origin-top';
    }
});

const open = ref(false);
</script>

<template>
    <li class="nav-item menu-is-opening menu-open" @click="open = !open">
        <slot name="trigger" />
    </li>

    <Transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
    >
        <div
            v-show="open"
            class=""
            :class="alignmentClasses"
            style="display: block"
            @click="open = true"
        >
            <ul class="nav nav-treeview" style="display: block;">
                <slot name="content" />
            </ul>
        </div>
    </Transition>
</template>
