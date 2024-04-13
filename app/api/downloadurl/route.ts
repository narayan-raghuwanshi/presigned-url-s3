import { NextRequest, NextResponse } from "next/server";
import aws from "aws-sdk";

const region = process.env.AWS_REGION;
const bucketName = process.env.AWS_BUCKET_NAME;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "v4",
});

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  if (body) {
    try {
      const params = {
        Bucket: bucketName,
        Key: body.fileId,
        Expires: 60,
      };

      const url = await s3.getSignedUrlPromise("getObject", params);
      return NextResponse.json({ url: url }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "An error occurred while generating the signed URL" },
        { status: 500 }
      );
    }
  }else{
    return NextResponse.json({ error: "Please send correct fileId" },{status:400})
  }
}
