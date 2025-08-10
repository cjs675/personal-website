<script>
    import { page } from '$app/stores';
    
    // base button class (grey shadow)
    const baseBtnClass = "px-4 py-2 bg-gray-25 text-gray-700 dark:text-white rounded-br-lg border-2 border-black shadow-[4px_4px_0_0_gray] hover:bg-gray-200 active:translate-y-1 transition-all duration-150";

    // active button class (black shadow)
    const activeBtnClass = "shadow-[4px_4px_0_0_black]";


</script>

<nav class="navbar flex justify-center gap-x-4 my-8">

        <a href="/" class={`${baseBtnClass} {$page.url.pathname === '/' ? activeBtnClass : ''}`}>home</a>
        <a href="/about" class={`${baseBtnClass} {$page.url.pathname === '/about' ? activeBtnClass : ''}`}>about</a>
        <a href="/blog" class={`${baseBtnClass} {$page.url.pathname === '/blog' ? activeBtnClass : ''}`}>blog</a>
        <a href="/resources" class={`${baseBtnClass} {$page.url.pathname === '/resources' ? activeBtnClass : ''}`}>resources</a>

</nav>

<style> 
.navbar a {
    letter-spacing: 4px;
    font-family: "Lato", "Helvetica Neue", Arial, sans-serif;
}
</style>