import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const space_id = process.env.CONTENTFUL_SPACE_ID;
const access_token = process.env.CONTENTFUL_ACCESS_TOKEN;

export const GET = async (request: NextApiRequest, { params }: any) => {
  const { id } = params;
  const code = await fetch(
    `https://cdn.contentful.com//spaces/${space_id}/environments/master/entries/${id}?access_token=${access_token}&content_type=code`,
    { cache: "no-store" }
  ).then((res) => res.json());
  return NextResponse.json(code.fields.code);
};
