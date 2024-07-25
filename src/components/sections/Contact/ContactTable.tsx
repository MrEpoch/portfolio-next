"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import Image from "next/image";
import { Clipboard, Github, Instagram, Twitter, X } from "lucide-react";

export default function ContactsTable() {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      toast({
        title: "Copied",
        description: text + " copied to clipboard",
      });
    }
  };

  return (
    <Table role="contact-table">
      <TableHeader role="contact-table-header">
        <TableRow
          className="hover:bg-transparent"
          role="contact-table-row-header"
        >
          <TableHead className="">Druh kontaktu</TableHead>
          <TableHead>Text</TableHead>
          <TableHead className="text-right">Akce</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="hover:bg-transparent" role="contact-table-row-1">
          <TableCell className="font-medium">Email</TableCell>
          <TableCell>stencuk@proton.me</TableCell>
          <TableCell className="text-right">
            <Button
              className="hover:bg-gray-200 transition"
              onClick={() => copyToClipboard("stencuk@proton.me")}
              variant="secondary"
            >
              <Clipboard role="image-item" />
            </Button>
          </TableCell>
        </TableRow>
        <TableRow className="hover:bg-transparent" role="contact-table-row-3">
          <TableCell className="font-medium">Instagram</TableCell>
          <TableCell>@projekt</TableCell>
          <TableCell className="text-right">
            <Button
              asChild
              variant="secondary"
              className="hover:bg-gray-200 transition"
            >
              <Link
                href="https://www.instagram.com/alexandrstencuk"
                className="hover:bg-gray-200 transition"
              >
                <Instagram width={24} height={24} />
              </Link>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow className="hover:bg-transparent" role="contact-table-row-3">
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
