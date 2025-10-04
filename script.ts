import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();
async function main() {
  const result = await prisma.user.create({
    data: {
      age: 32,
      email: "ALI2@GMAIL.COM",
      job: "DEVELOPER",
      full_name: "ALI MOHAMMADi",
      isAdmin: false,
    },
  });
  console.log("MAIN FUNCTION RESULT ==>", result);
}
main();
