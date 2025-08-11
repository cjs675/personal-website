export async function load({ params }) {
    const postSlug = params.postSlug

    const [year, month, day, post] = postSlug.split("/")

    // Fetch the blog post data based on the slug
    const response = await fetch(`/api/blog/${year}/${month}/${day}/${post}`);
    if (!response.ok) {
        throw new Error("Post not found");
    }
    const postData = await response.json(); // Assuming the API returns JSON            
    return { post: postData };      
}

export const match = (postSlug: string) => {
    const [year, month, day, post] = postSlug.split("/");
    return /^\d{4}$/.test(year) && /^\d{2}$/.test(month) && /^\d{2}$/.test(day) && !!post;
};
