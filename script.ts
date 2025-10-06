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
  // const updateResult = await prisma.user.update({
  //   where: { id: 41 },
  //   data: { full_name: "AMIRHOSEIN PARSAFAR" },
  // });

  //~ UPDATE__MANY
  // const updateManyResult = await prisma.user.updateManyAndReturn({
  //   where: { isAdmin: false },
  //   data: { isAdmin: true },
  // });

  // const PostCreateResult = await prisma.post.create({
  //   data: {
  //     title: "POST 1",
  //     author: "POURYA SOLEIMANI",
  //     userId: 1,
  //   },
  // });

  // const PostCreateResult = await prisma.post.deleteMany({});

  // const findManyUserResult = await prisma.post.findMany({
  //   include: {
  //     user: true,
  //   },
  // });

  // const userResult = await prisma.user.create({
  //   data: {
  //     full_name: "MOHAMMAD YOUSEFI",
  //     age: 24,
  //     email: "MAMAD@GMAIL.COM",
  //     job: "GENERAL__ARTIST",
  //     isAdmin: true,
  //     Post: {
  //       create: { title: " MOHAMMAD POST ", author: "MOHAMMAD Y" },
  //     },
  //   },
  // });

  const result = await prisma.post.create({
    data: {
      title: "POST 3",
      body: "LOREM LOREM LOREM",
      userId: 1,
    },
  });

  //^ INCLUDE
  // const result = await prisma.post.findMany({ include: { user: true } });
  // console.log("RESULT ===> ", result);
}

// MainFunction();
