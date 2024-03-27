import React from "react";
import Generators from "@/components/Generators";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Generator Elements | Opal - Next.js Dashboard Template",
  description:
    "This is Next.js Form Elements page for Opal - Next.js Tailwind CSS Admin Dashboard Template",
};

const FormElementsPage = () => {
  return (
    <DefaultLayout>
      <Generators />
    </DefaultLayout>
  );
};

export default FormElementsPage;
