export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-light bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-6">
        <a
          href="/"
          className="font-logo-ar text-2xl font-bold text-primary"
        >
          كبسولة تحول
        </a>
      </div>
    </header>
  );
}