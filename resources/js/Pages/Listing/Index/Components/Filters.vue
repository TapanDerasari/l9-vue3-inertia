<template>
    <form @submit.prevent="filter" class="filters-container">
        <div class="filters-grid">
            <!-- Price Range -->
            <div class="filter-group">
                <label class="filter-label">Price Range</label>
                <div class="range-inputs">
                    <div class="input-with-prefix">
                        <span class="input-prefix">$</span>
                        <input 
                            v-model.number="filterForm.priceFrom" 
                            type="number" 
                            min="0"
                            placeholder="Min" 
                            class="filter-input"
                        />
                    </div>
                    <div class="range-separator">-</div>
                    <div class="input-with-prefix">
                        <span class="input-prefix">$</span>
                        <input 
                            v-model.number="filterForm.priceTo" 
                            type="number" 
                            min="0"
                            placeholder="Max" 
                            class="filter-input"
                        />
                    </div>
                </div>
            </div>

            <!-- Beds -->
            <div class="filter-group">
                <label class="filter-label">Beds</label>
                <select 
                    v-model.number="filterForm.beds" 
                    class="filter-select"
                >
                    <option :value="null">Any</option>
                    <option v-for="n in 5" :key="n" :value="n">{{ n }} {{ n > 1 ? 'Beds' : 'Bed' }}</option>
                    <option :value="6">6+ Beds</option>
                </select>
            </div>

            <!-- Baths -->
            <div class="filter-group">
                <label class="filter-label">Baths</label>
                <select 
                    v-model.number="filterForm.baths" 
                    class="filter-select"
                >
                    <option :value="null">Any</option>
                    <option v-for="n in 5" :key="n" :value="n">{{ n }} {{ n > 1 ? 'Baths' : 'Bath' }}</option>
                    <option :value="6">6+ Baths</option>
                </select>
            </div>

            <!-- Area -->
            <div class="filter-group">
                <label class="filter-label">Area (sq ft)</label>
                <div class="range-inputs">
                    <input 
                        v-model.number="filterForm.areaFrom" 
                        type="number" 
                        min="0"
                        placeholder="Min" 
                        class="filter-input"
                    />
                    <div class="range-separator">-</div>
                    <input 
                        v-model.number="filterForm.areaTo" 
                        type="number" 
                        min="0"
                        placeholder="Max" 
                        class="filter-input"
                    />
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="filter-actions">
                <button type="submit" class="filter-button filter-button-primary">
                    <svg class="filter-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    Apply
                </button>
                <button 
                    type="button" 
                    @click="clear" 
                    class="filter-button filter-button-secondary"
                >
                    <svg class="filter-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Clear
                </button>
            </div>
        </div>
    </form>
</template>
<script setup>
import {useForm} from '@inertiajs/inertia-vue3'

const props = defineProps({
    filters: Object,
})

const filterForm = useForm({
    priceFrom: props.filters.priceFrom ?? null,
    priceTo: props.filters.priceTo ?? null,
    beds: props.filters.beds ?? null,
    baths: props.filters.baths ?? null,
    areaFrom: props.filters.areaFrom ?? null,
    areaTo: props.filters.areaTo ?? null,
})

const filter = () => {
    filterForm.get(
        route('listing.index'),
        {
            preserveState: true,
            preserveScroll: true,
        },
    )
}

const clear = () => {
    filterForm.priceFrom = null
    filterForm.priceTo = null
    filterForm.beds = null
    filterForm.baths = null
    filterForm.areaFrom = null
    filterForm.areaTo = null
    filter()
}
</script>

<style scoped>
.filters-container {
    @apply mb-8 mt-6;
}

.filters-grid {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-end;
}

.filter-group {
    @apply flex flex-col space-y-1;
}

.filter-label {
    @apply text-xs font-medium text-gray-600 dark:text-gray-300 mb-1;
}

.range-inputs {
    @apply flex items-center space-x-2;
}

.input-with-prefix {
    @apply relative flex-1;
}

.input-prefix {
    @apply absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none;
}

.range-separator {
    @apply text-gray-400 text-sm;
}

.filter-input,
.filter-select {
    @apply w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md shadow-sm 
           focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 
           dark:bg-gray-700 dark:text-white dark:placeholder-gray-400
           transition duration-150 ease-in-out;
    min-height: 40px;
}

.filter-input {
    @apply pl-8;
}

.filter-select {
    @apply appearance-none bg-white dark:bg-gray-700 pr-8;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
}

.filter-actions {
    @apply flex items-end space-x-2 md:col-span-2 lg:col-span-1;
}

.filter-button {
    @apply inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-in-out
           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
    height: 40px;
}

.filter-button-primary {
    @apply bg-indigo-600 text-white hover:bg-indigo-700;
}

.filter-button-secondary {
    @apply bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600;
}

.filter-icon {
    @apply h-4 w-4 mr-2;
}

/* Remove number input arrows */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type='number'] {
    -moz-appearance: textfield;
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
    .filter-select {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    }
}
</style>
