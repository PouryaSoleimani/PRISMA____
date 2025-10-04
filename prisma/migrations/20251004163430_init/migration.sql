-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL DEFAULT 'UNKNOWN USER',
    "age" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "job" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
