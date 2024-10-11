"use client";

import { useEffect, useState } from "react";
import { generateFakeData } from "./data";
// import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
// import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
// import { fetchFilteredInvoices } from '@/app/lib/data';
import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";

export default function BooksTable({ currentPage }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      //const results = await fetchBooks(currentPage);
      //console.log(results);
    })();
  }, []);
  useEffect(() => {
    setIsLoading(true);
    const getLineItems = async () => {
      const data = generateFakeData();
      setData(data);
      setIsLoading(false);
    };
    getLineItems();
  }, []);

  const columns = [
    { key: "book", name: "book", width: 100 },
    { key: "author", name: "author", width: 200 },
    { key: "image_url", name: "image_url", width: 200 },
    { key: "published", name: "published", width: 150 },
    { key: "status", name: "status", width: 100 },
  ];

  let handleClick = () => {
    console.log("click!!");
  };

  //  storage (variable, state (useeffect, ...), useref, context, local storage (cookie, app), db )
  return (
    <div className="text-xs p-1">
      <DataGrid columns={columns} rows={data} />
    </div>
  );
  //   return (
  //     <div className="mt-6 flow-root">
  //       <div className="inline-block min-w-full align-middle">
  //         <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
  //           <div className="md:hidden">
  //             {books?.map((book) => (
  //               <div
  //                 key={book.id}
  //                 className="mb-2 w-full rounded-md bg-white p-4"
  //               >
  //                 <div className="flex items-center justify-between border-b pb-4">
  //                   <div>
  //                     <div className="mb-2 flex items-center">
  //                       <Image
  //                         src={book.image_url}
  //                         className="mr-2 rounded-full"
  //                         width={28}
  //                         height={28}
  //                         alt={`${book.name}'s profile picture`}
  //                       />
  //                       <p>{book.name}</p>
  //                     </div>
  //                     <p className="text-sm text-gray-500">{book.author}</p>
  //                   </div>
  //                   <BookStatus status={book.status} />
  //                 </div>
  //                 <div className="flex w-full items-center justify-between pt-4">
  //                   <div>
  //                     <p>{formatDateToLocal(book.published)}</p>
  //                   </div>
  //                   {/* <div className="flex justify-end gap-2">
  //                     <UpdateInvoice id={invoice.id} />
  //                     <DeleteInvoice id={invoice.id} />
  //                   </div> */}
  //                 </div>
  //               </div>
  //             ))}
  //           </div>
  //           <table className="hidden min-w-full text-gray-900 md:table">
  //             <thead className="rounded-lg text-left text-sm font-normal">
  //               <tr>
  //                 <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
  //                   Customer
  //                 </th>
  //                 <th scope="col" className="px-3 py-5 font-medium">
  //                   Email
  //                 </th>
  //                 <th scope="col" className="px-3 py-5 font-medium">
  //                   Amount
  //                 </th>
  //                 <th scope="col" className="px-3 py-5 font-medium">
  //                   Date
  //                 </th>
  //                 <th scope="col" className="px-3 py-5 font-medium">
  //                   Status
  //                 </th>
  //                 <th scope="col" className="relative py-3 pl-6 pr-3">
  //                   <span className="sr-only">Edit</span>
  //                 </th>
  //               </tr>
  //             </thead>
  //             <tbody className="bg-white">
  //               {invoices?.map((invoice) => (
  //                 <tr
  //                   key={invoice.id}
  //                   className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
  //                 >
  //                   <td className="whitespace-nowrap py-3 pl-6 pr-3">
  //                     <div className="flex items-center gap-3">
  //                       <Image
  //                         src={invoice.image_url}
  //                         className="rounded-full"
  //                         width={28}
  //                         height={28}
  //                         alt={`${invoice.name}'s profile picture`}
  //                       />
  //                       <p>{invoice.name}</p>
  //                     </div>
  //                   </td>
  //                   <td className="whitespace-nowrap px-3 py-3">
  //                     {invoice.email}
  //                   </td>
  //                   <td className="whitespace-nowrap px-3 py-3">
  //                     {formatCurrency(invoice.amount)}
  //                   </td>
  //                   <td className="whitespace-nowrap px-3 py-3">
  //                     {formatDateToLocal(invoice.date)}
  //                   </td>
  //                   <td className="whitespace-nowrap px-3 py-3">
  //                     <InvoiceStatus status={invoice.status} />
  //                   </td>
  //                   <td className="whitespace-nowrap py-3 pl-6 pr-3">
  //                     <div className="flex justify-end gap-3">
  //                       <UpdateInvoice id={invoice.id} />
  //                       <DeleteInvoice id={invoice.id} />
  //                     </div>
  //                   </td>
  //                 </tr>
  //               ))}
  //             </tbody>
  //           </table>
  //         </div>
  //       </div>
  //     </div>
  //   );
}
