import React from "react";
import GenerateFormInput from "./GenerateFormInput";
import { Button } from "./ui/button";

const HeroSection = () => {
  type Suggestion = {
    label: string;
    text: string;
  };
  const suggesstionBtnText: Suggestion[] = [
    {
      label: "Job Application",
      text: "create a job application form that serves as one page solution form collecting essential",
    },
    {
      label: "Registraction Form",
      text: "Create a course registraction form suitable for any school and institution ",
    },
    {
      label: "fedback Form",
      text: "Create a client feedback form to gather valueable insights from any clients",
    },
  ];
  return (
    <section>
      <div className="relative">
        {/* Glow Effect in hero section */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-60 -z-10"></div>
        <div className="container mx-auto text-center relative">
          <h1 className="text-4xl font-bold">Build AI FORM effortlessly</h1>
          <p className="mt-4 text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            porro distinctio, provident accusamus tempore harum!
          </p>
        </div>
      </div>
      <GenerateFormInput />
      <div className="grid grid-cols-4 gap-3">
        {suggesstionBtnText.map((item: Suggestion, index: number) => (
          <Button key={index} variant={'outline'} className="rounded-full h-10 hover:bg-gradient-to-r from-blue-500 to-purple-500">{item.label}</Button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
