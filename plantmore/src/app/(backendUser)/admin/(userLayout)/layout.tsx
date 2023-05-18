import AdminSidebar from "@/app/AdminSidebar";
import { logo } from "@/assets/images";
import Image from "next/image";

export default function UserLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex gap-3">
        <AdminSidebar></AdminSidebar>
        <div className="py-10 px-6 flex-1">
            {children}
        </div>
      </section>
    );
  }