"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { Clipboard, Github, Instagram } from "lucide-react";

export default function ContactsTable() {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      toast({
        title: "Zkopírováno",
        description: text + " zkopírováno do schránky",
      });
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="">Druh kontaktu</TableHead>
          <TableHead>Text</TableHead>
          <TableHead className="text-right">Akce</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="hover:bg-transparent">
          <TableCell className="font-medium">Email</TableCell>
          <TableCell>
            stencuk<span className="hidden">bot-protection-text</span>@proton
            <span className="hidden">bot-protection-text</span>.me
          </TableCell>
          <TableCell className="text-right">
            <Button
              className="hover:bg-gray-200 transition"
              onClick={() => copyToClipboard("stencuk@proton.me")}
              variant="secondary"
            >
              <Clipboard />
            </Button>
          </TableCell>
        </TableRow>
        <TableRow className="hover:bg-transparent">
          <TableCell className="font-medium">Instagram</TableCell>
          <TableCell>Alexandr Stenčuk</TableCell>
          <TableCell className="text-right">
            <Button
              asChild
              variant="secondary"
              className="hover:bg-gray-200 transition"
            >
              <Link
                href="https://www.instagram.com/alexandrstencuk/"
                className="hover:bg-gray-200 transition"
              >
                <Instagram width={24} height={24} />
              </Link>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow className="hover:bg-transparent">
          <TableCell className="font-medium">Github</TableCell>
          <TableCell>MrEpoch</TableCell>
          <TableCell className="text-right">
            <Button
              asChild
              variant="secondary"
              className="hover:bg-gray-200 transition"
            >
              <Link
                href="https://github.com/MrEpoch"
                className="hover:bg-gray-200 transition"
              >
                <Github width={24} height={24} />
              </Link>
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
