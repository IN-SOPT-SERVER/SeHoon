const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//* userId로 유저 조회
const getUserById = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};

const userService = {
  getUserById,
};

export default userService;
