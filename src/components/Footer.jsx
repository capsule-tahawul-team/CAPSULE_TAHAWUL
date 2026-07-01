const QUICK_LINKS = [
  "الرئيسية",
  "من نحن",
  "البرامج",
  "الأسئلة الشائعة",
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <h2 className="mb-4 text-2xl font-bold">
              كبسولة تحول
            </h2>

            <p className="leading-7 text-white/70">
              منصة تعليمية وتدريبية تهدف إلى تمكين الشباب
              من المهارات التقنية والعملية من خلال البرامج
              والمعسكرات والمشاريع التطبيقية.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">
              روابط سريعة
            </h3>

            <ul className="space-y-3 text-white/70">
              {QUICK_LINKS.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">
              تواصل معنا
            </h3>

            <ul className="space-y-3 text-white/70">
              <li>capsuletahawul@gmail.com</li>
              <li>المملكة العربية السعودية</li>
            </ul>
          </div>

        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/60">
          © 2026 كبسولة تحول. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}