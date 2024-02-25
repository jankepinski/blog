import { NextRequest, NextResponse } from "next/server";

const space_id = process.env.CONTENTFUL_SPACE_ID;
const access_token = process.env.CONTENTFUL_ACCESS_TOKEN;

export const GET = async (request: NextRequest) => {
  const entries = await fetch(`https://cdn.contentful.com/spaces/${space_id}/environments/master/entries?access_token=${access_token}`, {cache: "no-store"}).then(res => res.json())
  console.log(entries.items)
  const posts = entries.items.map((entry: any) => {
    return {
      title: entry.fields.title,
      subtitle: entry.fields.subtitle,
      description: entry.fields.description,
      slug: entry.fields.slug,
    }
  })
  return NextResponse.json(posts);
};
