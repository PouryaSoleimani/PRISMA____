import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();
async function main() {
  //* CREATE
  // const createResult = await prisma.user.create({})

  // const result = await prisma.user.createMany({
  //   data: [
  //     {
  //       full_name: "SAEED MOHAMMADi",
  //       age: 32,
  //       email: "saeed3asda2@GMAIL.COM",
  //       job: "DESIGNER",
  //       isAdmin: false,
  //     },
  //     {
  //       full_name: "MAMAD YOUSEFI",
  //       age: 23,
  //       email: "mamad@GMAIL.COM",
  //       job: "DESIGNER",
  //       isAdmin: false,
  //     },
  //     {
  //       full_name: "ASHKAN HOSEINI",
  //       age: 32,
  //       email: "ashkan@GMAIL.COM",
  //       job: "REAL__STATE",
  //       isAdmin: false,
  //     },
  //     {
  //       full_name: "PARSA HOSEINI",
  //       age: 27,
  //       email: "parsa@GMAIL.COM",
  //       job: "SELLER",
  //       isAdmin: false,
  //     },
  //     {
  //       full_name: "HAMED MOUSAVI",
  //       age: 27,
  //       email: "hamed@GMAIL.COM",
  //       job: "DEVELOPER",
  //       isAdmin: false,
  //     },
  //     {
  //       full_name: "POURYA SOLEIMANI",
  //       age: 32,
  //       email: "pourya@GMAIL.COM",
  //       job: "DEVELOPER",
  //       isAdmin: true,
  //     },
  //   ],
  // });

  //^ FIND_MANY

  //^ FIND
  const findAllResult = await prisma.user.findMany({
    select: { full_name: true, job: true },
    take: 10,
    skip: 1,
    orderBy: { age: "asc" },
  });

  // const findFirstResult = await prisma.user.findFirst()

  // const findResultMany = await prisma.user.findMany({
  //   where: {
  //     full_name: "POURYA SOLEIMANI",
  //   },
  //   take: 3,
  //   skip: 1,
  //   orderBy: {
  //     age: "asc",
  //   },
  // });

  // const findUniqueResult = await prisma.user.findUnique({
  //   where: {
  //     id: 7,
  //   },
  //   select: { full_name: true, age: true },
  // });

  // ~ UPDATE
  // const updateResult = await prisma.user.update({
  //   where: { id: 3 },
  //   data: {
  //     full_name: "POURYA SOLEIMANI",
  //   },
  // });

  //~ UPDATE MANY
  // const updatedManyResult = await prisma.user.updateMany({
  //   where: { full_name: "SAEED MOHAMMADi" },
  //   data: { full_name: "POURYA SOLEIMANI" },
  // });

  // ! DELETE
  // const deleteResult = await prisma.user.delete({
  //   where: {
  //     id: 4,
  //   },
  // });

  // ! DELETE__MANY
  // const deleteManyResult = await prisma.user.deleteMany({
  //   where: {
  //     id: 4,
  //   },
  // });

  console.log("FIND RESULT MANY ==>", findAllResult);
}
main();
