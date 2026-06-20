-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "RoleEnum" AS ENUM ('CLIENT', 'DRIVER', 'VENDOR', 'ADMIN');

-- CreateEnum
CREATE TYPE "StatusEnum" AS ENUM ('ACTIVE', 'PENDING', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('CONFIRMED', 'PREPARING', 'PICKED_UP', 'ON_WAY', 'DELIVERED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "DriverStatus" AS ENUM ('ONLINE', 'OFFLINE', 'BUSY');

-- CreateEnum
CREATE TYPE "ReconStatus" AS ENUM ('OK', 'DISPUTE', 'RESOLVED');

-- CreateEnum
CREATE TYPE "ApprovalEnum" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "DispatchStatus" AS ENUM ('PENDING', 'ACCEPTED', 'EXPIRED', 'REASSIGNED');

-- CreateEnum
CREATE TYPE "DocType" AS ENUM ('ID_CARD', 'DRIVER_LICENSE', 'VEHICLE_REGISTRATION');

-- CreateEnum
CREATE TYPE "DocStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "NotifType" AS ENUM ('ORDER_CONFIRMED', 'ORDER_PREPARING', 'DRIVER_ASSIGNED', 'ON_WAY', 'ORDER_DELIVERED', 'CASH_DISCREPANCY', 'ACCOUNT_UPDATE');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" "RoleEnum" NOT NULL,
    "status" "StatusEnum" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "userId" UUID NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Driver" (
    "userId" UUID NOT NULL,
    "vehicleInfo" TEXT,
    "status" "DriverStatus" NOT NULL,
    "currentLat" DOUBLE PRECISION,
    "currentLng" DOUBLE PRECISION,
    "totalEarningsMinor" INTEGER NOT NULL DEFAULT 0,
    "totalEarningsCurrency" TEXT NOT NULL DEFAULT 'USD',
    "cashCollectedMinor" INTEGER NOT NULL DEFAULT 0,
    "cashCollectedCurrency" TEXT NOT NULL DEFAULT 'USD',
    "idDocUrl" TEXT,
    "licenseDocUrl" TEXT,
    "vehicleDocUrl" TEXT,
    "approvalStatus" "ApprovalEnum" NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Vendor" (
    "userId" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "isOpen" BOOLEAN NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "deliveryRadius" DOUBLE PRECISION NOT NULL,
    "commissionRate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Admin" (
    "userId" UUID NOT NULL,
    "department" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" UUID NOT NULL,
    "clientId" UUID NOT NULL,
    "label" TEXT NOT NULL,
    "fullAddress" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "isDefault" BOOLEAN NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" UUID NOT NULL,
    "clientId" UUID NOT NULL,
    "vendorId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CartItem" (
    "id" UUID NOT NULL,
    "cartId" UUID NOT NULL,
    "menuItemId" UUID NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPriceMinor" INTEGER NOT NULL,
    "unitPriceCurrency" TEXT NOT NULL,
    "selectedOptions" JSONB NOT NULL,

    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" UUID NOT NULL,
    "clientId" UUID NOT NULL,
    "vendorId" UUID NOT NULL,
    "driverId" UUID,
    "status" "OrderStatus" NOT NULL,
    "paymentType" TEXT NOT NULL DEFAULT 'CASH',
    "subtotalMinor" INTEGER NOT NULL,
    "subtotalCurrency" TEXT NOT NULL,
    "deliveryFeeMinor" INTEGER NOT NULL,
    "deliveryFeeCurrency" TEXT NOT NULL,
    "serviceFeeMinor" INTEGER NOT NULL,
    "serviceFeeCurrency" TEXT NOT NULL,
    "taxMinor" INTEGER NOT NULL,
    "taxCurrency" TEXT NOT NULL,
    "tipMinor" INTEGER NOT NULL,
    "tipCurrency" TEXT NOT NULL,
    "totalMinor" INTEGER NOT NULL,
    "totalCurrency" TEXT NOT NULL,
    "deliveryAddressSnapshot" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "confirmedAt" TIMESTAMP(3),
    "pickedUpAt" TIMESTAMP(3),
    "deliveredAt" TIMESTAMP(3),

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" UUID NOT NULL,
    "orderId" UUID NOT NULL,
    "menuItemId" UUID NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPriceMinor" INTEGER NOT NULL,
    "unitPriceCurrency" TEXT NOT NULL,
    "selectedOptions" JSONB NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenuItem" (
    "id" UUID NOT NULL,
    "vendorId" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "priceMinor" INTEGER NOT NULL,
    "priceCurrency" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "imageUrl" TEXT,
    "isAvailable" BOOLEAN NOT NULL,
    "options" JSONB NOT NULL,

    CONSTRAINT "MenuItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dispatch" (
    "id" UUID NOT NULL,
    "orderId" UUID NOT NULL,
    "assignedDriverId" UUID,
    "offeredAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "status" "DispatchStatus" NOT NULL,

    CONSTRAINT "Dispatch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DispatchLog" (
    "id" UUID NOT NULL,
    "dispatchId" UUID NOT NULL,
    "orderId" UUID NOT NULL,
    "driverId" UUID NOT NULL,
    "offeredAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "status" "DispatchStatus" NOT NULL,

    CONSTRAINT "DispatchLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" UUID NOT NULL,
    "orderId" UUID NOT NULL,
    "clientId" UUID NOT NULL,
    "foodRating" INTEGER NOT NULL,
    "driverRating" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CashReconciliation" (
    "id" UUID NOT NULL,
    "driverId" UUID NOT NULL,
    "orderId" UUID NOT NULL,
    "expectedAmountMinor" INTEGER NOT NULL,
    "expectedAmountCurrency" TEXT NOT NULL,
    "collectedAmountMinor" INTEGER NOT NULL,
    "collectedAmountCurrency" TEXT NOT NULL,
    "discrepancyMinor" INTEGER NOT NULL,
    "discrepancyCurrency" TEXT NOT NULL,
    "status" "ReconStatus" NOT NULL,
    "resolvedBy" UUID,

    CONSTRAINT "CashReconciliation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "type" "NotifType" NOT NULL,
    "message" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "targetRole" "RoleEnum" NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Cart_clientId_key" ON "Cart"("clientId");

-- CreateIndex
CREATE UNIQUE INDEX "Rating_orderId_key" ON "Rating"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "CashReconciliation_orderId_key" ON "CashReconciliation"("orderId");

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vendor" ADD CONSTRAINT "Vendor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_menuItemId_fkey" FOREIGN KEY ("menuItemId") REFERENCES "MenuItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_menuItemId_fkey" FOREIGN KEY ("menuItemId") REFERENCES "MenuItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuItem" ADD CONSTRAINT "MenuItem_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dispatch" ADD CONSTRAINT "Dispatch_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DispatchLog" ADD CONSTRAINT "DispatchLog_dispatchId_fkey" FOREIGN KEY ("dispatchId") REFERENCES "Dispatch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DispatchLog" ADD CONSTRAINT "DispatchLog_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CashReconciliation" ADD CONSTRAINT "CashReconciliation_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CashReconciliation" ADD CONSTRAINT "CashReconciliation_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CashReconciliation" ADD CONSTRAINT "CashReconciliation_resolvedBy_fkey" FOREIGN KEY ("resolvedBy") REFERENCES "Admin"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
