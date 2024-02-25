import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = async (request: NextApiRequest, { params }: any) => {
  const { slug } = params;
  const post = await fetch(
    `https://cdn.contentful.com/spaces/02tn487ksjgh/environments/master/entries?access_token=RzwanEUZtGHP1LNwxMw0WLZQUFpv5oOqy4Ali32rP7M&fields.slug=${slug}&content_type=blogPost`,
    { cache: "no-store" }
  ).then((res) => res.json());
  return NextResponse.json(post.items[0].fields);
};
