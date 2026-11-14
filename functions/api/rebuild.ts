interface Env {
  GITHUB_TOKEN: string;
  REBUILD_KEY: string;
}

export const onRequestPost = async ({
  request,
  env,
}: {
  request: Request;
  env: Env;
}) => {
  const origin = request.headers.get("Origin");
  const expectedOrigin = new URL(request.url).origin;

  if (origin && origin !== expectedOrigin) {
    return new Response(JSON.stringify({ error: "Invalid origin." }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  const key = request.headers.get("X-Rebuild-Key");

  if (!key || !env.REBUILD_KEY || key !== env.REBUILD_KEY) {
    return new Response(JSON.stringify({ error: "Invalid rebuild key." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!env.GITHUB_TOKEN) {
    return new Response(JSON.stringify({ error: "GitHub token is not configured." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const response = await fetch(
    "https://api.github.com/repos/inibukunota/NotionPress/actions/workflows/notion-sync.yml/dispatches",
    {
      method: "POST",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "NotionPress-CMS",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ref: "main" }),
    },
  );

  if (!response.ok) {
    const details = await response.text();

    return new Response(
      JSON.stringify({
        error: "GitHub rejected the workflow dispatch.",
        details,
      }),
      {
        status: 502,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  return new Response(
    JSON.stringify({
      ok: true,
      message: "Notion sync workflow started.",
    }),
    {
      status: 202,
      headers: { "Content-Type": "application/json" },
    },
  );
};
