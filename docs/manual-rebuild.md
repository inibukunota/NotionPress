# Manual rebuild control

NotionPress includes a small CMS control page at `/admin/` for manually starting the GitHub Actions Notion sync workflow.

## How it works

```
Notion
  ↓
/admin/ → Cloudflare Pages Function
  ↓
GitHub Actions: Sync Notion CMS
  ↓
src/content/blog
  ↓
Git commit
  ↓
Cloudflare Pages build
```

The browser never receives the GitHub token. The Cloudflare Pages Function holds the token and calls GitHub's workflow-dispatch API.

## Required Cloudflare environment variables

Add these as production environment variables in Cloudflare Pages:

- `GITHUB_TOKEN`: a GitHub fine-grained token for `inibukunota/NotionPress` with permission to trigger Actions workflows.
- `REBUILD_KEY`: a private random key used by the CMS control page.

Do not put either value in `PUBLIC_*` variables or in the repository.

## GitHub token

Create a fine-grained GitHub token scoped only to `inibukunota/NotionPress`. Grant the minimum Actions permission required to dispatch the workflow.

The existing workflow remains responsible for Notion access through the existing GitHub Actions secrets:

- `NOTION_TOKEN`
- `NOTION_DATABASE_ID`

## Using the control

Open:

`https://your-domain.example/admin/`

Enter the `REBUILD_KEY`, then click **Sync & rebuild**.

The key is kept in the browser's session storage so it does not have to be entered repeatedly during the same browser session.

## Important behaviour

The button starts the existing `notion-sync.yml` workflow. It does not put Notion credentials in the browser.

If the Notion content has changed, the workflow commits the updated Markdown and that commit triggers the normal Cloudflare Pages deployment.

If there are no content changes, the current workflow exits without creating a commit, so no new Cloudflare Pages deployment is triggered.
