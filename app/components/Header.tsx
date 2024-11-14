"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

export default function Header() {
  return (
    <nav className="flex flex-row items-center justify-between p-6">
      <Image
        src="/boetto-logo.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "128px", height: "auto" }}
        alt=""
      />
      <div className="flex flex-row gap-4">
        <Link href="/empresa" className="cursor-pointer">
          <Button variant="link">Home</Button>
        </Link>
        <Button variant="link">Empresa</Button>
        <Button variant="link">Serviços</Button>
        <Button variant="link">Contato</Button>
        <Button variant="link">Área do cliente</Button>
      </div>
      <Link
        href="https://www.instagram.com/boetto_contabilidade/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <FaInstagram size={20} />
      </Link>
    </nav>
  );
}
