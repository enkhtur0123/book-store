import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "./ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-green-200 h-screen flex flex-row items-center justify-center">
      <div className="flex items-center">
        <Image
          src="/book_img.png"
          width={400}
          height={400}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
      <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-4/10 md:px-20">
        <p
          className={`${lusitana.className} text-xl text-gray-800 md:text-1xl md:leading-normal`}
        >
          <strong>Номын сангийн системд тавтай морилно уу.</strong>
          <br />
          Номын бүртгэл, Захиалга, Худалдаа
        </p>
        <Link
          href="/pages/home"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-normal text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Үндсэн хуудас луу очих</span>{" "}
          <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      </div>
    </div>
  );
}
