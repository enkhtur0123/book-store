import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "./ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <div className="h-screen flex flex-row items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="flex flex-3  w-3/4 justify-center items-center">
        <Image
          src="/book_img.png"
          width={200}
          height={200}
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
      <div className="flex flex-1 w-1/4 flex-col gap-4 text-s">
        <p className={`${lusitana.className} text-gray-800`}>
          <strong>Номын сангийн системд тавтай морилно уу.</strong>
          <div>Номын бүртгэл, Захиалга, Худалдаа</div>
        </p>
        <Link
          href="/pages"
          className="flex w-56 items-center text-xs gap-2 rounded-lg bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-400"
        >
          <span>Үндсэн хуудас луу очих</span> <ArrowRightIcon className="w-5" />
        </Link>
      </div>
    </div>
  );
}
