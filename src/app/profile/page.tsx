import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import ProfileInfo from "@/components/Auth0/ProfileInfo";

export const metadata: Metadata = {
  title: "Opal Profile | Opal - Opal Dashboard Template",
  description:
    "This is Opal Profile page for Opal - Opal Tailwind CSS Admin Dashboard Template",
};

const Profile = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-242.5">
        <Breadcrumb pageName="Profile" />
        <ProfileInfo />
      </div>
    </DefaultLayout>
  );
};

export default Profile;
