import { Request, Response } from "express";
import { userService } from "../service";

//* 로그인
const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await userService.signIn(email, password);

  if (!result) {
    return res.status(400).json({ status: 400, message: "로그인 실패" });
  }
  return res.status(200).json({ status: 200, message: "로그인 성공", result });
};

//* 회원가입
const signUp = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) return res.status(400).json({ status: 400, message: "회원가입 실패" });

  const newUser = await userService.signUp(email, password, name);
  if (!newUser) {
    return res.status(400).json({ status: 400, message: "회원가입 실패" });
  }
  return res.status(201).json({ status: 201, message: "회원 가입 성공", newUser });
};

//* 유저 조회
const getUser = async (req: Request, res: Response) => {
  const data = await userService.getUser();

  if (!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }
  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

const updateUserProfileImage = async (req: Request, res: Response) => {
  if (!req.file) return res.status(400).json({ status: 400, message: "이미지 등록 실패" });

  const { userId } = req.params;
  if (!userId) return res.status(400).json({ status: 400, message: "이미지 등록 실패" });

  const fileData: Express.Multer.File = req.file;

  try {
    const data = await userService.updateUserProfileImage(+userId, fileData);
    return res.status(200).json({ status: 200, message: "이미지 업데이트 성공", data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: "서버 에러" });
  }
};

const userController = {
  signIn,
  signUp,
  getUser,
  updateUserProfileImage,
};

export default userController;
