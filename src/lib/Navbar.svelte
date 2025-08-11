<script lang="ts">
    import { page } from '$app/stores';

    const navItems = [
        { href: '/', label: 'home' },
        { href: '/about', label: 'about' },
        { href: '/blog', label: 'blog' },
        { href: '/resources', label: 'resources' }
    ];

    // base button styles with improved contrast
    const baseClass = `
        px-4 py-2 
        bg-black-25 text-white-700 
        dark:bg-white-800 dark:text-white 
        rounded-br-lg border-2 border-black 
        dark:border-white 
        hover:bg-gray-200 dark:hover:bg-gray-700 
        active:translate-y-1 
        transition-all duration-150
    `;

    function isActive(href: string, currentPath: string): boolean {
        return currentPath === href;
    }
</script>

<nav class="navbar flex justify-center gap-x-4 my-8">
    {#each navItems as { href, label }}
        <a
            href={href}
            class="{baseClass} {isActive(href, $page.url.pathname) 
                ? 'shadow-[4px_4px_0_0_black] dark:shadow-[4px_4px_0_0_white]' 
                : 'shadow-[4px_4px_0_0_gray] dark:shadow-[4px_4px_0_0_white]'}"
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