import { PrismaClient } from "./generated/prisma/index.js";

async function MainFunction() {
  const prisma = new PrismaClient();

  //^ FIND_MANY
  const findManyResult = await prisma.user.findMany();

  //^ FIND_UNIQUE
  // const findUniqueResult = await prisma.user.findUnique({
  //   where: {
  //     id: 30,
  //     full_name: "POURYA SOLEIMANI",
  //   },
  // });

  //* CREATE
  // const createResult = await prisma.user.create({
  //   data: {
  //     full_name: "ASHKAN HOSEINPOUR",
  //     age: 32,
  //     email: "ASHKAN@GMAIL.COM",
  //     job: "REAL__STATE",
  //     isAdmin: false,
  //   },
  // });

  //* CREATE_MANY
  // const createManyResult = await prisma.user.createManyAndReturn({
  //   data: [
  //     {
  //       full_name: "SHAHRIAR REYHANI",
  //       age: 32,
  //       email: "SHAHRIAR2@GMAIL.COM",
  //       job: "DEALER",
  //       isAdmin: false,
  //     },
  //     {
  //       full_name: "PARSA HOSEINI",
  //       age: 32,
  //       email: "PARSA3@GMAIL.COM",
  //       job: "SELLER",
  //       isAdmin: false,
  //     },
  //   ],
  // });

  // const createResult = await prisma.user.create({
  //   data: {
  //     full_name: "POURYA SOLEIMANI",
  //     age: 32,
  //     email: "POURYA@GMAIL.COM",
  //     job: "FULL_STACK_DEVELOPER",
  //     isAdmin: true,
  //   },
  // });

  //! DELETE
  // const deleteResult = await prisma.user.delete({
  //   where: {
  //     id: 33,
  //   },
  // });

  //! DELETE__MANY
  // const deleteManyResult = await prisma.user.deleteMany({
  //   where: {
  //     isAdmin: false,
  //   },
  // });

  //~ UPDATE
  const updateResult = await prisma.user.update({
    where: { id: 41 },
    data: { full_name: "AMIRHOSEIN PARSAFAR" },
  });

  //~ UPDATE__MANY
  const updateManyResult = await prisma.user.updateManyAndReturn({
    where: { isAdmin: false },
    data: { isAdmin: true },
  });

  if (updateManyResult) {
    console.log("RESULT", updateManyResult);
  } else {
    console.log("FAILED");
  }
}

// MainFunction();
