"use client";

// import Pagination from "@/app/ui/invoices/pagination";
// import Search from "@/app/ui/search";
// import Table from "@/app/ui/invoices/table";
//import { CreateInvoice } from "@/app/ui/invoices/buttons";
//import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
//import { fetchInvoicesPages } from "@/app/lib/data";
import { Metadata } from "next";
import BooksTable from "./table";

export default function Page({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  //const totalPages = await fetchInvoicesPages(query);

  return <BooksTable currentPage={currentPage} />;
}
