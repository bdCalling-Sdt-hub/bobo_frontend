"use client";

import { useEffect } from "react";

import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "@/i18n/routing";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/features/authSlice";

export default function PaymentSuccess() {
  const user = useSelector(selectUser);

  useEffect(() => {
    // Trigger confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-green-50 to-green-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center justify-center text-center text-2xl font-bold text-green-600">
              <CheckCircle className="mr-2" />
              Payment Successful!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-center text-gray-600">
              Thank you for your purchase. Your payment has been processed
              successfully.
            </p>
          </CardContent>
          <CardFooter>
            {user?.role === "3" ? (
              <Link href="/schoolHome" className="w-full">
                <Button className="w-full">Return to Home</Button>
              </Link>
            ) : (
              <Link href="/home" className="w-full">
                <Button className="w-full">Return to Home</Button>
              </Link>
            )}
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
