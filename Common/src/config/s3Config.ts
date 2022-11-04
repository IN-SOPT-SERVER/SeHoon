import AWS from "aws-sdk";

const storage: AWS.S3 = new AWS.S3({
  accessKeyId: process.env.s3AccessKey,
  secretAccessKey: process.env.s3SecretKey,
  region: "ap-northeast-2",
});

export default storage;
