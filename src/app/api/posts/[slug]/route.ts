import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const space_id = process.env.CONTENTFUL_SPACE_ID;
const access_token = process.env.CONTENTFUL_ACCESS_TOKEN;

export const GET = async (request: NextApiRequest, { params }: any) => {
  const { slug } = params;
  const post = await fetch(
    `https://cdn.contentful.com/spaces/${space_id}/environments/master/entries?access_token=${access_token}&fields.slug=${slug}&content_type=blogPost`,
    { cache: "no-store" }
  ).then((res) => res.json());
  
  const postResponse = post.items[0].fields;

  postResponse.body = await Promise.all(postResponse.body.content.map(async (entry: any, index: number) => {
    if(entry.nodeType === "embedded-entry-block") {
      entry.content = (await fetch(
        `https://cdn.contentful.com//spaces/${space_id}/environments/master/entries/${entry.data.target.sys.id}?access_token=${access_token}&content_type=code`,
        { cache: "no-store" }
      ).then((res) => res.json())).fields.code;
    }
    return entry;
  }));

  return NextResponse.json(postResponse);
};
