<script lang="ts">
	import '../app.css';
    import { ModeWatcher } from "mode-watcher"; 
    import ThemeToggle from '$lib/ThemeToggle.svelte'; 
    import Navbar from '$lib/Navbar.svelte';
</script>

<ModeWatcher themeColors={{ dark: "#181a1b", light: "#FAF9F6" }} /> 

<header style="display: flex; justify-content: flex-end; padding: 1rem;">
    <ThemeToggle />
</header>
<Navbar />
<slot />
