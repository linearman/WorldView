export async function onRequestGet() {
  const upstream = "https://opensky-network.org/api/states/all";

  try {
    const resp = await fetch(upstream, {
      cf: {
        cacheTtl: 10,
        cacheEverything: true
      }
    });

    const body = await resp.text();

    return new Response(body, {
      status: resp.status,
      headers: {
        "content-type": resp.headers.get("content-type") || "application/json",
        "cache-control": "public, max-age=10",
        "access-control-allow-origin": "*"
      }
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: "upstream fetch failed",
        detail: String(err)
      }),
      {
        status: 502,
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*"
        }
      }
    );
  }
}