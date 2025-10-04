import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();
async function main() {
  const result = await prisma.user.create({
    data: {
      full_name: "POURYA SOLEIMANI",
      age: 32,
      email: "POUYRYA@GMAIL.COM",
      job: "FULL STACK DEVELOPER",
    },
  });
  console.log("MAIN FUCNTION");
}

main();
