import { NextRequest, NextResponse } from "next/server";
import aws from "aws-sdk";
import crypto from "crypto";
import { promisify } from "util";
const randomBytes = promisify(crypto.randomBytes);

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

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const rawBytes = await randomBytes(16);
    const imageName = rawBytes.toString("hex");

    const params = {
      Bucket: bucketName,
      Key: imageName,
      Expires: 60,
    };

    const url = await s3.getSignedUrlPromise("putObject", params);
    return NextResponse.json({ url: url },{status:200});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred while generating the signed URL" },{status:500});
  }
}
