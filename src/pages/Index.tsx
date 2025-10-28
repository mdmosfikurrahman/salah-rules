import { Layout } from "@/components/Layout";
import { ContentCard } from "@/components/ContentCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Book, Droplets, Heart, MessageSquare } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8 animate-in fade-in duration-500">
        {/* Hero Section */}
        <section className="text-center space-y-4 py-8">
          <div className="inline-block">
            <span className="text-6xl md:text-7xl animate-pulse">💧</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
            ওজু ও নামাজের সম্পূর্ণ গাইড
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            ইসলামিক প্রার্থনার জন্য সম্পূর্ণ নির্দেশিকা - বাংলা ও আরবিতে
          </p>
          <p className="text-base text-muted-foreground">
            Complete Islamic Prayer Guide in Bengali & Arabic
          </p>
        </section>

        {/* Introduction */}
        <ContentCard variant="ocean">
          <h2 className="text-2xl font-semibold mb-3 text-primary">ওজু কী এবং কেন প্রয়োজন?</h2>
          <p className="text-foreground/90 leading-relaxed">
            <strong>ওজু</strong> অর্থ পবিত্রতা বা পরিচ্ছন্নতা। ওজু ইসলামের একটি গুরুত্বপূর্ণ ইবাদত। 
            নামাজ, কুরআন স্পর্শ, তাওয়াফসহ বিভিন্ন ইবাদতের জন্য ওজু করা অপরিহার্য। 
            ওজু শুধু শারীরিক পবিত্রতাই নয়, আধ্যাত্মিক পরিশুদ্ধতারও একটি মাধ্যম।
          </p>
          <p className="text-sm text-muted-foreground mt-3 italic">
            Wudu (ablution) is an essential act of purification in Islam, required before prayers and other acts of worship.
          </p>
        </ContentCard>

        {/* Quick Navigation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/wudu" className="group">
            <ContentCard className="h-full transition-transform hover:scale-105 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Droplets className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg">ওজুর নিয়ম</h3>
                <p className="text-sm text-muted-foreground">
                  ফরজ, সুন্নত ও মুস্তাহাব কাজসমূহ
                </p>
              </div>
            </ContentCard>
          </Link>

          <Link to="/prayers" className="group">
            <ContentCard className="h-full transition-transform hover:scale-105 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg">নামাজের দোয়া</h3>
                <p className="text-sm text-muted-foreground">
                  রুকু, সিজদা ও অন্যান্য দোয়া
                </p>
              </div>
            </ContentCard>
          </Link>

          <Link to="/surahs" className="group">
            <ContentCard className="h-full transition-transform hover:scale-105 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Book className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg">সূরা পরিকল্পনা</h3>
                <p className="text-sm text-muted-foreground">
                  প্রতিটি নামাজের জন্য সূরা
                </p>
              </div>
            </ContentCard>
          </Link>

          <Link to="/benefits" className="group">
            <ContentCard className="h-full transition-transform hover:scale-105 cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg">উপকারিতা</h3>
                <p className="text-sm text-muted-foreground">
                  ওজু ও নামাজের ফজিলত
                </p>
              </div>
            </ContentCard>
          </Link>
        </div>

        {/* Important Note */}
        <ContentCard variant="gold">
          <div className="flex gap-3">
            <div className="text-2xl shrink-0">📌</div>
            <div>
              <h3 className="font-semibold text-lg mb-2">গুরুত্বপূর্ণ তথ্য</h3>
              <p className="text-foreground/90">
                এই গাইডে ওজু ও নামাজ সম্পর্কিত সকল প্রয়োজনীয় তথ্য বাংলা ও আরবি ভাষায় দেওয়া হয়েছে। 
                প্রতিটি বিভাগে উচ্চারণ এবং অনুবাদ সহ বিস্তারিত ব্যাখ্যা রয়েছে।
              </p>
            </div>
          </div>
        </ContentCard>
      </div>
    </Layout>
  );
};

export default Index;
