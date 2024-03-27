import React from "react";
import Generators from "@/components/Generators";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Opal Generator Elements | Opal - Opal Dashboard Template",
  description:
    "This is Opal Form Elements page for Opal - Opal Tailwind CSS Admin Dashboard Template",
};

const FormElementsPage = () => {
  return (
    <DefaultLayout>
      <Generators />
    </DefaultLayout>
  );
};

export default FormElementsPage;
