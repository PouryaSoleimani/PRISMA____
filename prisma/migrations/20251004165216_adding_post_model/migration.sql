-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT DEFAULT 'UNKNOWN AUTHOR',

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
