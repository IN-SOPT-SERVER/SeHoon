import { PrismaClient } from "@prisma/client";
import fs from "fs";
import storage from "../config/s3Config";

const prisma = new PrismaClient();

const signUp = async (email: string, password: string, name: string) => {
  const alreadyUser = await prisma.user_Server.findUnique({
    where: {
      email,
    },
  });

  if (alreadyUser) return null;

  const user = await prisma.user_Server.create({
    data: {
      email,
      password,
      name,
    },
  });

  return user;
};

const signIn = async (email: string, password: string) => {
  const user = await prisma.user_Server.findFirst({
    where: {
      email,
    },
  });

  if (user?.password === password) return user;
  return false;
};

//* userId로 유저 조회
const getUser = async () => {
  const user = await prisma.user_Server.findUnique({
    where: {
      id: 1,
    },
  });

  return user;
};

const updateUserProfileImage = async (userId: number, fileData: Express.Multer.File) => {
  try {
    const fileContent: Buffer = fs.readFileSync(fileData.path);

    const params: {
      Bucket: string;
      Key: string;
      Body: Buffer;
      ContentType: string;
    } = {
      Bucket: process.env.BUCKET_NAME as string,
      Key: fileData.originalname,
      Body: fileContent,
      ContentType: "image/jpeg" || "image/png",
    };

    const result = await storage.upload(params).promise();

    const user = await prisma.user_Server.update({
      where: {
        id: userId,
      },
      data: {
        profileImage: result.Location,
      },
    });

    const data = {
      name: user.name,
      profileImageUrl: user.profileImage,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const userService = {
  signIn,
  signUp,
  getUser,
  updateUserProfileImage,
};

export default userService;
