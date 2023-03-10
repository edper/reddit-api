<script>
    export let data;
</script>

<main>
    <h2>Choose a Subreddit</h2>
    {#each data.data.data.children as post}
        <div class="post">
            <a href="getapi/{post.data.subreddit}">
                {post.data.subreddit}
            </a>
        </div>
    {/each}
</main>

<style>
    main {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .post {
        background-color:lightgray;
        width:100vw;
        color:blue;
        width:350px;
        padding:15px;
        margin-bottom:8px;
        text-align: center;
    }
</style>
