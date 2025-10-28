import { Layout } from "@/components/Layout";
import { ContentCard } from "@/components/ContentCard";
import { Heart, Sparkles, Shield, Users } from "lucide-react";

const Benefits = () => {
  return (
    <Layout>
      <div className="space-y-8 animate-in fade-in duration-500">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">❤️ ওজু ও নামাজের উপকারিতা</h1>
          <p className="text-muted-foreground">Benefits and Virtues of Wudu and Salah</p>
        </div>

        <ContentCard variant="ocean">
          <h2 className="text-2xl font-semibold mb-4 text-primary">💧 ওজুর উপকারিতা</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3 p-4 bg-card rounded-lg border border-border">
              <div className="shrink-0">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">গুনাহ মাফ</h3>
                <p className="text-sm text-muted-foreground">
                  প্রতিটি অঙ্গ ধোয়ার সাথে সাথে গুনাহসমূহ ঝরে পড়ে। হাদিসে এসেছে যে, ওজু করলে ছোট গুনাহসমূহ ক্ষমা হয়ে যায়।
                </p>
              </div>
            </div>

            <div className="flex gap-3 p-4 bg-card rounded-lg border border-border">
              <div className="shrink-0">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Heart className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">মানসিক শান্তি</h3>
                <p className="text-sm text-muted-foreground">
                  ওজু করলে মন প্রশান্ত হয় এবং আল্লাহর নৈকট্য অনুভব হয়। মনের চাপ ও দুশ্চিন্তা কমে যায়।
                </p>
              </div>
            </div>

            <div className="flex gap-3 p-4 bg-card rounded-lg border border-border">
              <div className="shrink-0">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Shield className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">সুরক্ষা</h3>
                <p className="text-sm text-muted-foreground">
                  যে ব্যক্তি ওজু করে ঘুমায়, ফেরেশতারা তার জন্য ক্ষমা প্রার্থনা করতে থাকেন।
                </p>
              </div>
            </div>

            <div className="flex gap-3 p-4 bg-card rounded-lg border border-border">
              <div className="shrink-0">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Users className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">ফেরেশতাদের ভালোবাসা</h3>
                <p className="text-sm text-muted-foreground">
                  ওজুতে থাকা ব্যক্তিকে ফেরেশতারা ভালোবাসেন এবং তার জন্য দোয়া করেন।
                </p>
              </div>
            </div>
          </div>
        </ContentCard>

        <ContentCard>
          <h2 className="text-2xl font-semibold mb-4 text-primary">🕌 নামাজের উপকারিতা</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-lg mb-2">আধ্যাত্মিক উপকারিতা</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>নামাজ হলো আল্লাহর সাথে সরাসরি কথোপকথনের মাধ্যম</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>নামাজ ইমানকে মজবুত করে এবং তাকওয়া বৃদ্ধি করে</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>নামাজ বান্দাকে আল্লাহর নৈকট্য দান করে</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>নামাজ সকল ইবাদতের মধ্যে সর্বোত্তম</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-secondary pl-4">
              <h3 className="font-semibold text-lg mb-2">শারীরিক উপকারিতা</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>নামাজে বিভিন্ন অঙ্গের ব্যায়াম হয়</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>সিজদায় মস্তিষ্কে রক্ত সঞ্চালন বৃদ্ধি পায়</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>নিয়মিত নামাজ মেরুদণ্ড ও জয়েন্টের জন্য উপকারী</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>নামাজ মানসিক চাপ কমায় এবং শান্তি দেয়</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-accent-foreground pl-4">
              <h3 className="font-semibold text-lg mb-2">সামাজিক উপকারিতা</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent-foreground mt-1">✓</span>
                  <span>জামাতে নামাজ পড়লে সামাজিক বন্ধন মজবুত হয়</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-foreground mt-1">✓</span>
                  <span>নামাজ শৃঙ্খলা ও নিয়মানুবর্তিতা শেখায়</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-foreground mt-1">✓</span>
                  <span>নামাজ ভ্রাতৃত্ববোধ ও ঐক্য তৈরি করে</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-foreground mt-1">✓</span>
                  <span>নামাজ সকল প্রকার অশ্লীলতা ও খারাপ কাজ থেকে বিরত রাখে</span>
                </li>
              </ul>
            </div>
          </div>
        </ContentCard>

        <ContentCard variant="gold">
          <h2 className="text-2xl font-semibold mb-4 text-primary">📚 হাদিস থেকে</h2>
          
          <div className="space-y-4">
            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="text-foreground/90 mb-2 italic">
                "যে ব্যক্তি সুন্দরভাবে ওজু করে, তার শরীর থেকে তার গুনাহসমূহ বের হয়ে যায়, এমনকি তার নখের নিচ থেকেও।"
              </p>
              <p className="text-sm text-muted-foreground">— সহিহ মুসলিম</p>
            </div>

            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="text-foreground/90 mb-2 italic">
                "পাঁচ ওয়াক্ত নামাজ এবং এক জুমা থেকে আরেক জুমা পর্যন্ত তার মধ্যবর্তী সময়ের গুনাহের কাফফারা, যদি সে কবিরা গুনাহ থেকে বিরত থাকে।"
              </p>
              <p className="text-sm text-muted-foreground">— সহিহ মুসলিম</p>
            </div>

            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="text-foreground/90 mb-2 italic">
                "কিয়ামতের দিন সর্বপ্রথম বান্দার আমল থেকে যে বিষয়ে হিসাব নেওয়া হবে তা হলো নামাজ।"
              </p>
              <p className="text-sm text-muted-foreground">— সুনানে আবু দাউদ</p>
            </div>
          </div>
        </ContentCard>

        <ContentCard variant="ocean">
          <div className="flex gap-3">
            <div className="text-3xl shrink-0">🌟</div>
            <div>
              <h3 className="font-semibold text-lg mb-2">স্মরণীয়</h3>
              <p className="text-foreground/90">
                ওজু ও নামাজ শুধু ধর্মীয় বাধ্যবাধকতাই নয়, এগুলো আমাদের শারীরিক, মানসিক এবং আধ্যাত্মিক সুস্থতার জন্য অত্যন্ত উপকারী। 
                নিয়মিত ওজু ও পাঁচ ওয়াক্ত নামাজ আদায় করা আমাদের জীবনে শান্তি, শৃঙ্খলা এবং বরকত নিয়ে আসে।
              </p>
            </div>
          </div>
        </ContentCard>
      </div>
    </Layout>
  );
};

export default Benefits;
