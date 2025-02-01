"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "@/i18n/routing";

export default function PaymentFailed() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-red-50 to-red-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: [-5, 5, -5, 5, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-full max-w-md border border-red-400 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-center text-2xl font-bold text-red-600">
                <XCircle className="mr-2" />
                Payment Failed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-center text-gray-600">
                Oops! Something went wrong with your payment. Please try again.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Link href={"/subscriptionPanel"} className="w-full">
                <Button className="w-full bg-red-600 text-white hover:bg-red-700">
                  Retry Payment
                </Button>
              </Link>

              <Link href="/home" className="w-full">
                <Button className="w-full">Return to Home</Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
