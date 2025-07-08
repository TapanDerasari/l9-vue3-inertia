<template>
    <div class="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500/30">
        <Link :href="route('listing.show', {listing: listing.id})" class="block h-full">
            
            <div class="p-5">
                <!-- Price -->
                <div class="flex items-baseline gap-2 mb-2">
                    <Price 
                        :price="listing.price" 
                        class="text-2xl font-bold text-gray-900 dark:text-white"
                    />
                    <span class="text-sm text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded-full">
                        <Price :price="monthlyPayment" /> <span class="text-xs">/mo</span>
                    </span>
                </div>
                
                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <ListingAddress :listing="listing" class="text-sm" />
                </div>
                
                <!-- Details -->
                <div class="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-3 mt-3">
                    <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <ListingSpace :listing="listing" class="text-sm" />
                    </div>
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                        {{ listing.code }}
                    </span>
                </div>
            </div>
        </Link>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3'
import ListingAddress from '@/Components/ListingAddress.vue'
import ListingSpace from '@/Components/ListingSpace.vue'
import Price from '@/Components/Price.vue'
import { useMonthlyPayment } from '@/Composables/useMonthlyPayment'

const props = defineProps({
    listing: {
        type: Object,
        required: true
    }
})

const { monthlyPayment } = useMonthlyPayment(
    props.listing.price, 
    2.5, // interest rate
    25 // years
)
</script>

<style scoped>
/* Smooth transitions for interactive elements */
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
}

/* Hover effect for the entire card */
.group:hover {
    transform: translateY(-4px);
}

/* Line clamp for text overflow */
.line-clamp-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Custom focus styles for better accessibility */
a:focus {
    outline: 2px solid rgba(99, 102, 241, 0.5);
    outline-offset: 2px;
    border-radius: 0.5rem;
}
</style>
