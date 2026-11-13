import fs from "node:fs/promises";
import path from "node:path";

const token=process.env.NOTION_TOKEN; const databaseId=process.env.NOTION_DATABASE_ID;
if(!token||!databaseId) throw new Error("NOTION_TOKEN and NOTION_DATABASE_ID are required.");

const api="https://api.notion.com/v1";
async function notion(url,options={}){const r=await fetch(api+url,{...options,headers:{"Authorization":`Bearer ${token}`,"Notion-Version":"2022-06-28","Content-Type":"application/json",...(options.headers||{})}}); if(!r.ok) throw new Error(`Notion API ${r.status}: ${await r.text()}`); return r.json();}
async function allChildren(id){let out=[],cursor;do{const q=cursor?`?start_cursor=${cursor}`:"";const d=await notion(`/blocks/${id}/children${q}`);out.push(...d.results);cursor=d.next_cursor;}while(cursor);return out;}
const rich=(v=[])=>v.map(x=>x.plain_text||"").join("");
const prop=(p,n)=>p[n];
function textProp(p){return p?.title?.[0]?rich(p.title):p?.rich_text?.length?rich(p.rich_text):p?.select?.name||p?.status?.name||"";}
function dateProp(p){return p?.date?.start||null;}
function listProp(p){return p?.multi_select?.map(x=>x.name)||[];}
function slugify(v){return v.toLowerCase().trim().replace(/['"]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");}
function inline(items=[]){return items.map(x=>{let s=x.plain_text||"";const a=x.annotations||{};if(a.code)s=`\`${s}\``;else if(a.bold)s=`**${s}**`;else if(a.italic)s=`*${s}*`;if(x.href)s=`[${s}](${x.href})`;return s;}).join("");}
function blockToMd(b){const d=b[b.type]; if(!d)return ""; if(b.type==="paragraph")return inline(d.rich_text); if(/^heading_[123]$/.test(b.type))return "#".repeat(Number(b.type.slice(-1)))+" "+inline(d.rich_text); if(b.type==="bulleted_list_item")return "- "+inline(d.rich_text); if(b.type==="numbered_list_item")return "1. "+inline(d.rich_text); if(b.type==="quote")return "> "+inline(d.rich_text); if(b.type==="code")return `\`\`\`\${d.language||""}\n${inline(d.rich_text)}\n\`\`\`\`; if(b.type==="divider")return "---"; if(b.type==="image"){const u=d.type==="file"?d.file.url:d.external?.url;return u?`![${d.caption?.length?inline(d.caption):""}](${u})`:"";} if(b.type==="bookmark")return d.url?d.url:""; return "";}
async function main(){const db=await notion(`/databases/${databaseId}`); const props=db.properties; let pages=[],cursor; do{const body=cursor?{start_cursor:cursor}:{};const d=await notion(`/databases/${databaseId}/query`,{method:"POST",body:JSON.stringify(body)});pages.push(...d.results);cursor=d.next_cursor;}while(cursor);
const dir=path.resolve("src/content/blog"); await fs.rm(dir,{recursive:true,force:true}); await fs.mkdir(dir,{recursive:true});
for(const page of pages){const p=page.properties; const status=(p.Status?.status?.name||p.Status?.select?.name||"draft").toLowerCase(); const title=textProp(p.Title||p.Name||{}); const description=textProp(p.Excerpt||p.Description||{}); const slug=textProp(p.Slug||{})||slugify(title); const published=dateProp(p["Published Date"]||p.Published||{}); const author=p.Author?.people?.[0]?.name||textProp(p.Author||{})||"Author"; const category=textProp(p.Category||{})||"Uncategorized"; const tags=listProp(p.Tags||{}); const blocks=await allChildren(page.id); const firstImage=blocks.find(b=>b.type==="image"); const hero=firstImage?.image?.type==="file"?firstImage.image.file.url:firstImage?.image?.external?.url; const body=blocks.map(b=>b===firstImage?"":blockToMd(b)).filter(Boolean).join("\n\n");
const fm=[`title: ${JSON.stringify(title)}`,`description: ${JSON.stringify(description||title)}`,`slug: ${JSON.stringify(slug)}`,`status: ${JSON.stringify(status)}`,`publishedDate: ${JSON.stringify(published||new Date().toISOString())}`,`author: ${JSON.stringify(author)}`,`category: ${JSON.stringify(category)}`,`tags: ${JSON.stringify(tags)}`,...(hero?[`heroImage: ${JSON.stringify(hero)}`]:[])].join("\n");
await fs.writeFile(path.join(dir,slug+".md"),`---\n${fm}\n---\n\n${body}\n`);}
console.log(`Synced ${pages.length} Notion pages.`);}
main().catch(e=>{console.error(e);process.exit(1);});