<template>
    <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <!-- Logo -->
                    <div class="flex-shrink-0 flex items-center">
                        <Link :href="route('listing.index')" class="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            PropertyFair
                        </Link>
                    </div>
                    <!-- Right Side / Auth Controls -->
                    <div class="flex items-center space-x-4">
                        <template v-if="user">
                            <Link 
                                :href="route('notification.index')" 
                                class="relative p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                <span v-if="notificationCount" class="absolute top-0 right-0 h-5 w-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center transform translate-x-1 -translate-y-1">
                                    {{ notificationCount }}
                                </span>
                            </Link>
                            
                            <Link 
                                :href="route('realtor.listing.create')" 
                                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                </svg>
                                New Listing
                            </Link>
                            
                            <ProfileDropdown :user="user" />
                        </template>
                        
                        <template v-else>
                            <Link 
                                :href="route('user-account.create')" 
                                class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                            >
                                Register
                            </Link>
                            <Link 
                                :href="route('login')" 
                                class="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                            >
                                Sign In
                            </Link>
                        </template>
                    </div>
                </div>
            </div>
        </header>

        <main class="flex-grow">
            <!-- Flash Message -->
            <div v-if="flashSuccess" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div class="rounded-md bg-green-50 dark:bg-green-900/50 p-4 border border-green-200 dark:border-green-800">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm font-medium text-green-800 dark:text-green-200">
                                {{ flashSuccess }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Page Content -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <slot></slot>
            </div>
        </main>

        <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <p class="text-center text-sm text-gray-500 dark:text-gray-400">
                    &copy; {{ new Date().getFullYear() }} PropertyFair. All rights reserved.
                </p>
            </div>
        </footer>
    </div>
</template>

<script setup>
import ProfileDropdown from '@/Components/ProfileDropdown.vue'
import { computed, onMounted, ref } from 'vue'
import { Link, usePage } from '@inertiajs/inertia-vue3'

const page = usePage()
const flashSuccess = computed(() => page.props.value.flash?.success)
const user = computed(() => page.props.value.user)
const notificationCount = computed(() => user.value ? Math.min(user.value.notificationCount || 0, 9) : 0)

// Add smooth scroll behavior for anchor links
const handleSmoothScroll = (e) => {
    if (e.target.hash && document.querySelector(e.target.hash)) {
        e.preventDefault()
        document.querySelector(e.target.hash).scrollIntoView({
            behavior: 'smooth'
        })
    }
}

onMounted(() => {
    // Add smooth scroll behavior for all anchor links
    document.addEventListener('click', handleSmoothScroll, { passive: true })
    
    return () => {
        document.removeEventListener('click', handleSmoothScroll)
    }
})
</script>

<style scoped>
/* Add smooth scrolling to the entire app */
html {
    scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
}

.dark ::-webkit-scrollbar-track {
    background: #1f2937;
}

::-webkit-scrollbar-thumb {
    background: #c7d2fe;
    border-radius: 4px;
}

.dark ::-webkit-scrollbar-thumb {
    background: #4f46e5;
}

::-webkit-scrollbar-thumb:hover {
    background: #a5b4fc;
}

.dark ::-webkit-scrollbar-thumb:hover {
    background: #4338ca;
}
</style>
