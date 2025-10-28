import { Layout } from "@/components/Layout";
import { ContentCard } from "@/components/ContentCard";

const Wudu = () => {
  return (
    <Layout>
      <div className="space-y-8 animate-in fade-in duration-500">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">💧 ওজুর সম্পূর্ণ নিয়ম</h1>
          <p className="text-muted-foreground">Complete Guide to Wudu (Ablution)</p>
        </div>

        {/* Niyyah */}
        <ContentCard variant="ocean">
          <h2 className="text-2xl font-semibold mb-4 text-primary">১. নিয়ত (Intention)</h2>
          <p className="mb-4 text-foreground/90">
            মনে মনে সংকল্প করুন — "আমি নামাজের জন্য পবিত্রতা অর্জনের উদ্দেশ্যে ওজু করছি।"
          </p>
          <div className="bg-accent/50 rounded-lg p-4 space-y-2">
            <p className="arabic text-center">نَوَيْتُ الْوُضُوءَ لِرَفْعِ الحَدَثِ لِلّٰهِ تَعَالَى</p>
            <p className="text-center font-medium">
              নাওয়াইতু আল-উদূয়া লি রাফ'ইল হাদাসি লিল্লাহি তা'আলা।
            </p>
            <p className="text-sm text-muted-foreground text-center italic">
              নিয়ত মুখে বলা জরুরি নয়, মনে করলেই যথেষ্ট।
            </p>
          </div>
        </ContentCard>

        {/* Sunnah Steps */}
        <ContentCard>
          <h2 className="text-2xl font-semibold mb-4 text-primary">২. ওজুর সুন্নত ক্রম</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-4 font-semibold">ধাপ</th>
                  <th className="text-left py-3 px-4 font-semibold">কাজ</th>
                  <th className="text-left py-3 px-4 font-semibold">বিস্তারিত</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted/50">
                  <td className="py-3 px-4 font-medium">১</td>
                  <td className="py-3 px-4">বিসমিল্লাহ বলা</td>
                  <td className="py-3 px-4 arabic">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="py-3 px-4 font-medium">২</td>
                  <td className="py-3 px-4">হাত ধোয়া</td>
                  <td className="py-3 px-4">কবজি পর্যন্ত ৩ বার</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="py-3 px-4 font-medium">৩</td>
                  <td className="py-3 px-4">মুখ কুলি করা</td>
                  <td className="py-3 px-4">৩ বার</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="py-3 px-4 font-medium">৪</td>
                  <td className="py-3 px-4">নাকে পানি দেয়া</td>
                  <td className="py-3 px-4">৩ বার</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="py-3 px-4 font-medium">৫</td>
                  <td className="py-3 px-4">মুখ ধোয়া</td>
                  <td className="py-3 px-4">চিবুক থেকে কপাল পর্যন্ত ৩ বার</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="py-3 px-4 font-medium">৬</td>
                  <td className="py-3 px-4">হাত ধোয়া</td>
                  <td className="py-3 px-4">কনুই পর্যন্ত ৩ বার</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="py-3 px-4 font-medium">৭</td>
                  <td className="py-3 px-4">মাথা মাসহ করা</td>
                  <td className="py-3 px-4">একবার</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="py-3 px-4 font-medium">৮</td>
                  <td className="py-3 px-4">কানের মাসহ</td>
                  <td className="py-3 px-4">ভেজা আঙুল দিয়ে</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="py-3 px-4 font-medium">৯</td>
                  <td className="py-3 px-4">পা ধোয়া</td>
                  <td className="py-3 px-4">টাখনু পর্যন্ত ৩ বার</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ContentCard>

        {/* Fard */}
        <ContentCard variant="ocean">
          <h2 className="text-2xl font-semibold mb-4 text-primary">৩. ওজুর ফরজ কাজ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-primary">১</span>
                <div>
                  <h3 className="font-semibold mb-1">মুখ ধোয়া</h3>
                  <p className="text-sm text-muted-foreground">একবার (কপাল থেকে চিবুক পর্যন্ত)</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-primary">২</span>
                <div>
                  <h3 className="font-semibold mb-1">হাত ধোয়া</h3>
                  <p className="text-sm text-muted-foreground">কনুইসহ</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-primary">৩</span>
                <div>
                  <h3 className="font-semibold mb-1">মাথা মাসহ</h3>
                  <p className="text-sm text-muted-foreground">অন্তত এক-চতুর্থাংশ</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-primary">৪</span>
                <div>
                  <h3 className="font-semibold mb-1">পা ধোয়া</h3>
                  <p className="text-sm text-muted-foreground">টাখনু পর্যন্ত</p>
                </div>
              </div>
            </div>
          </div>
        </ContentCard>

        {/* Mustahab */}
        <ContentCard>
          <h2 className="text-2xl font-semibold mb-4 text-primary">৪. মুস্তাহাব কাজ</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>প্রতি অঙ্গ ৩ বার ধোয়া</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>ডান দিক আগে ধোয়া</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>পানি অপচয় না করা</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>কিবলামুখী হয়ে ওজু করা</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>শেষে দোয়া পড়া</span>
            </li>
          </ul>
        </ContentCard>

        {/* Dua after Wudu */}
        <ContentCard variant="gold">
          <h2 className="text-2xl font-semibold mb-4 text-primary">৫. ওজু শেষে দোয়া</h2>
          <div className="space-y-4">
            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="arabic text-center mb-3">
                أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ
              </p>
              <p className="text-center font-medium mb-2">
                আশহাদু আল্লা ইলা-হা ইল্লাল্লাহু, ওয়াহদাহু লা শারীকালাহ, ওয়া আশহাদু আন্না মুহাম্মাদান আবদুহু ওয়া রাসুলুহু।
              </p>
              <p className="text-sm text-muted-foreground text-center italic">
                "I bear witness that there is no god but Allah, alone without partner, and I bear witness that Muhammad is His servant and messenger."
              </p>
            </div>
          </div>
        </ContentCard>

        {/* Breakers */}
        <ContentCard>
          <h2 className="text-2xl font-semibold mb-4 text-primary">৬. ওজু ভঙ্গের কারণসমূহ</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
              <span className="text-destructive">✗</span>
              <span>প্রস্রাব-পায়খানা বা বাতাস নির্গমন</span>
            </div>
            <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
              <span className="text-destructive">✗</span>
              <span>গভীর ঘুম</span>
            </div>
            <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
              <span className="text-destructive">✗</span>
              <span>অচেতনতা বা নেশা</span>
            </div>
            <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
              <span className="text-destructive">✗</span>
              <span>বমি বা রক্ত গড়ানো</span>
            </div>
            <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
              <span className="text-destructive">✗</span>
              <span>পুঁজ বের হওয়া</span>
            </div>
          </div>
        </ContentCard>
      </div>
    </Layout>
  );
};

export default Wudu;
