<script lang="ts"> 
 import Footer from '$lib/Footer.svelte';
</script> 


<h1>Public Module Development</h1> 
<p>

</p>
<Footer />
<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;1,100;1,200;1,300&family=Lato:ital,wght@0,100;0,300;1,100;1,300&display=swap');

    h1 {
        font-size: 3.2em;
        margin-bottom: 1em;
        letter-spacing: 2px; /* Adds to the sleek look */
        font-family: "Lato", "Helvetica Neue", Arial, sans-serif;
        line-height: 1.6;
        max-width: 800px;
        margin: 0; /* Remove auto centering */
        padding: 50px 20px 20px 40px; /* Remove left padding to truly hug left */
        font-style: italic;
        font-weight: 200; 
        text-align: left; 
        white-space: nowrap /* prevent wrapping */ 
    } 
    hr { 
        display: block;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        margin-left: 100px;
        margin-right: auto;
        border-style: inset;
        border-width: 1px;
        width: 70%;
    } 
    
        /* responsive adjustments made for mobile */
    @media (max-width: 600px) {
        h1 {
            font-size: 1.5em;               /* downsize font */
            padding: 30px 10px 10px 10px;   /* reduce padding */
            max-width: 100vw;               /* use full viewport width */
            overflow-x: auto;               /* allow horizontal scroll if needed */ 
            font-weight: 300;
        }
        hr {
            margin-left: 0;
            width: 90%;
        }
    } 
</style>

