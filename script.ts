import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();
async function main() {
  const result = await prisma.user.create({
    data: {
      age: 32,
      email: "POURYA@GMAIL.COM",
      job: "DEVELOPER",
      full_name: "POURYA SOLEIMANI",
      isAdmin: true,
    },
  });
  console.log("MAIN FUNCTION RESULT =>", result);
}
main();
