/** @type {import('./$types').PageLoad} */

export async function load({ fetch, params }) {
    const url = `https://api.reddit.com/r/${params.slug}.json`;
    const res = await fetch(url);
    return {
      data: await res.json(),
    };
  }