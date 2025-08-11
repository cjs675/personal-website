<script> 
  export let data;
  const { post } = data;
</script>

{#if post} 
  <article>
    <h1>{post.title}</h1>
    <p><em>{post.data}</em></p>
    <div>{@html post.content}</div>
  </article>
{:else}
  <p>Post not Found</p>
{/if}
