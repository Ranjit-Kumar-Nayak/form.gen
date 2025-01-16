import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PricingPlan, pricingPlan } from "@/lib/pricingPlan";
import { Badge } from "./ui/badge";
import { list } from "postcss";
const PricingPage = () => {
  return (
    <div>
      <div className="text-center mb-16">
        <h1
          className="font-extrabold text-3xl
        "
        >
          Plan and Pricing
        </h1>
        <p className="text-gray-600">Receive Unlimited credits when you pay earl ,and save your plan..</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2 sm:grid-cols-1 ">
        {pricingPlan.map((plan: PricingPlan, index: number) => (
          <Card
            key={index}
            className={` ${
              plan.level === "Enterprise"
                ? "bg-[#1C1C1C] text-white font-semibold"
                : null
            }w-[350px] flex flex-col justify-between`}
          >
            <CardHeader className="flex flex-row items-center gap-2">
              <CardTitle>{plan.level}</CardTitle>
              {plan.level === "Pro" && (
                <Badge className="rounded-full bg-orange-600 hover:bg-null">
                  Poplular🔥
                </Badge>
              )}
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.services.map((item: string, index: number) => (
                  <li key={index} className="flex items-center gap-1">
                    <span className="mr-2">✔️</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className={` w-full ${plan.services ? "text-black" : ""}`}
              >
                {" "}
                Get Started With {plan.level}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
