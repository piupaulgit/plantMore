export default function AdminLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode;
  }) {
    return (
      <main>
        <div className="h-[5px] bg-lime-600"></div>
        {children}
      </main>
    );
  }