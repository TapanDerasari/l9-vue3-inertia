<template>
    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Filters -->
        <div class="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-200 dark:border-gray-700">
            <Filters :filters="filters" />
        </div>
        
        <!-- Results Count -->
        <div class="flex items-center justify-between mb-6">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">
                {{ listings.total }} {{ listings.total === 1 ? 'Property' : 'Properties' }} Found
            </h2>
            <!-- Sort dropdown could go here -->
        </div>

        <!-- Listings Grid -->
        <div v-if="listings.data.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            <Listing 
                v-for="listing in listings.data" 
                :key="listing.id" 
                :listing="listing" 
                class="transition-transform duration-300 hover:scale-[1.02]"
            />
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-12">
            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="mt-2 text-lg font-medium text-gray-900 dark:text-white">No properties found</h3>
            <p class="mt-1 text-gray-500 dark:text-gray-400">
                Try adjusting your search or filter to find what you're looking for.
            </p>
        </div>

        <!-- Pagination -->
        <div v-if="listings.data.length" class="mt-10 flex justify-center">
            <Pagination :links="listings.links" />
        </div>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { router } from '@inertiajs/inertia-vue3'
import { debounce } from 'lodash'
import Listing from './Index/Components/Listing.vue'
import Pagination from '@/Components/UI/Pagination.vue'
import Filters from '@/Pages/Listing/Index/Components/Filters.vue'

const props = defineProps({
    listings: {
        type: Object,
        required: true
    },
    filters: {
        type: Object,
        required: true
    },
    canLogin: {
        type: Boolean,
        default: false
    },
    canRegister: {
        type: Boolean,
        default: false
    }
})

// Handle filter changes with debouncing
const filter = (key, value) => {
    router.get(route('listing.index'), 
        { ...route().params, [key]: value },
        { preserveState: true, preserveScroll: true, replace: true }
    )
}

// Debounced search function
const search = debounce((value) => {
    router.get(route('listing.index'), 
        { ...route().params, search: value },
        { preserveState: true, preserveScroll: true, replace: true }
    )
}, 500)

// Reset all filters
const resetFilters = () => {
    router.get(route('listing.index'), 
        {},
        { preserveState: true, preserveScroll: true, replace: true }
    )
}
</script>

<style scoped>
/* Smooth scrolling for the page */
html {
    scroll-behavior: smooth;
}

/* Custom scrollbar for the page */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    @apply bg-gray-100 dark:bg-gray-800;
}

::-webkit-scrollbar-thumb {
    @apply bg-gray-300 dark:bg-gray-600 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
    @apply bg-gray-400 dark:bg-gray-500;
}

/* Animation for the hero section */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hero-content {
    animation: fadeInUp 0.6s ease-out forwards;
}
</style>
