<script lang="ts">
    import { page } from '$app/stores';
    import { ModeWatcher } from "mode-watcher"; 


    // navigation items - easier to maintain & extend 
    const navItems = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/blog', label: 'blog' },
    { href: '/resources', label: 'resources' }
  ];

  // base button styles 

  const baseClass = "px-4 py-2 bg-gray-25 text-gray-700 dark:text-white rounded-br-lg border-2 border-black hover:bg-gray-200 active:translate-y-1 transition-all duration-150";

  // function to determine if link is active 
  function isActive(href: string, currentPath: string): boolean {
    return currentPath === href;
  }

    // Function to get inverted colors
    function getButtonClasses(isActive: boolean, mode: string) {
        // Invert text and shadow colors based on mode
        if (mode === 'dark') {
            return `bg-gray-900 text-white border-white ${isActive ? 'shadow-[4px_4px_0_0_white]' : 'shadow-[4px_4px_0_0_gray]'}`
        } else {
            return `bg-gray-25 text-black border-black ${isActive ? 'shadow-[4px_4px_0_0_black]' : 'shadow-[4px_4px_0_0_gray]'}`
        }
    }
</script>

<nav class="navbar flex justify-center gap-x-4 my-8">
    {#each navItems as { href, label }}        
        <a
            {href}
            class="{baseClass} {isActive(href, $page.url.pathname) ? 'shadow-[4px_4px_0_0_black]' : 'shadow-[4px_4px_0_0_gray]'}"
        >
            {label}
        </a>
    {/each}
</nav>

<style>
    .navbar a {
        letter-spacing: 4px;
        font-family: "Lato", "Helvetica Neue", Arial, sans-serif;
    }
</style>