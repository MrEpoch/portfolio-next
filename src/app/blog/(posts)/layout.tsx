export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative blog w-full min-h-screen py-16">
      <div className="max-w-screen-xl flex-col gap-8 flex mx-auto px-4 sm:px-6 lg:px-8 min-h-full">
        {children}
      </div>
    </div>
  );
}
