<script>
    export let data;
    let subreddit = data.data.data.children[0].data.subreddit;
</script>

<main>
    <nav>
        <h2>
            <a href="https://www.reddit.com/r/{data.data.data.children[0].data.subreddit}">
                {subreddit}
            </a>
        </h2>
    </nav>
    {#each data.data.data.children as post} 
        {#if ['jpg','png','gif'].includes(post.data.url.slice(-3))}
            <div class="post post_with_image">
                <a href="https://www.reddit.com/{post.data.permalink}">
                   <p class="post_text">
                    {@html post.data.title}
                   </p>
                </a>
                <img src={post.data.url} alt={post.data.title}/>
                <div class="stats">
                    <strong>Votes : </strong> {post.data.ups >= 1000 ? post.data.ups/1000 + "k" : post.data.ups} &nbsp; &nbsp;&nbsp; &nbsp;
                    <strong>Comments : </strong> {post.data.num_comments}
                </div>                
            </div>
        {:else}
            <div class="post post_no_image">                

                <a href="https://www.reddit.com/{post.data.permalink}">
                   <p class="post_text">
                    {@html post.data.title}
                   </p>
                </a>
                <div class="stats">
                    <strong>Votes : </strong> {post.data.ups >= 1000 ? post.data.ups/1000 + "k" : post.data.ups} &nbsp; &nbsp;&nbsp; &nbsp;
                    <strong>Comments : </strong> {post.data.num_comments}
                </div>                
            </div>
        {/if}
    {/each}
</main>


<style>
    * {
      box-sizing:border-box;
      margin:0;
      padding:0;
    }
    nav {
        width:100vw;
        height:80px;
        background-color:#34a8ff;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.post img {
        width:100%;
        height:100%;
        max-width:600px;
        max-height: 450px;
    }
    .post_text {
        font-size:1.5em;
        font-family: Arial, Helvetica, sans-serif;
    }
    .post {
        background-color: white;
        box-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        padding:10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .post_with_image {
        width:750px;
        height:650px;
        border-radius: 15px;
    }
    .post_no_image {
        width:750px;
        height:200px;
        border-radius: 15px;
    }

    nav a {
      color:white;
    }
    main {
        width:100vw;
        background-color:lightgray;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:10px;
    }
    .stats {
        opacity: 0.5;
        padding-top:20px;
    }
</style>
