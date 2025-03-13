"use client";

import Image from "next/image";

import { Container } from "./container";

import CompanyLogotype from "@/public/images/logos/logotype-horizontal.png";

export function Footer() {
  return (
    <footer className="bg-[#002f69] py-12">
      <Container>
        <div className="flex flex-col gap-y-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col items-center">
            <span className="sr-only">EC Solutions and Enterprise</span>
            <Image
              className="h-16 w-auto object-cover"
              src={CompanyLogotype}
              alt="EC Solutions and Enterprise"
            />
          </div>

          <p className="text-center text-pretty text-gray-300">
            &copy; 2024 EC Solutions and Enterprise. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
