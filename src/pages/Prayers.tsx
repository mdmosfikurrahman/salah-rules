import { Layout } from "@/components/Layout";
import { ContentCard } from "@/components/ContentCard";

const Prayers = () => {
  const duas = [
    {
      title: "রুকুর দোয়া",
      titleEn: "Dua in Ruku",
      arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
      transliteration: "সুবহানা রব্বিয়াল আযীম।",
      translation: "Glory be to my Lord, the Most Great.",
      repeat: "৩ বার (3 times)"
    },
    {
      title: "রুকু থেকে উঠার পর",
      titleEn: "After Rising from Ruku",
      arabic: "سَمِعَ اللّٰهُ لِمَنْ حَمِدَهُ\nرَبَّنَا لَكَ الْحَمْدُ",
      transliteration: "সামিআল্লাহু লিমান হামিদাহ, রাব্বানা লাকাল হামদ।",
      translation: "Allah hears those who praise Him. Our Lord, praise be to You.",
    },
    {
      title: "সিজদা",
      titleEn: "Dua in Sujud (Prostration)",
      arabic: "سُبْحَانَ رَبِّيَ الأَعْلَى",
      transliteration: "সুবহানা রব্বিয়াল আ'লা।",
      translation: "Glory be to my Lord, the Most High.",
      repeat: "৩ বার (3 times)"
    },
    {
      title: "অতিরিক্ত সিজদার দোয়া",
      titleEn: "Additional Dua in Sujud",
      arabic: "اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَعَافِنِي، وَارْزُقْنِي",
      transliteration: "আল্লাহুম্মাগফির লি, ওয়ারহামনি, ওয়াহদিনি, ওয়া'আফিনি, ওয়ারজুকনি।",
      translation: "O Allah, forgive me, have mercy on me, guide me, grant me health, and provide for me.",
    },
    {
      title: "তাশাহুদ (বৈঠক)",
      titleEn: "Tashahhud (Sitting)",
      arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
      transliteration: "আত্তাহিয়্যাতু লিল্লাহি ওয়াস সালাওয়াতু ওয়াত তয়্যিবাত। আসসালামু আলাইকা আইয়ুহান নাবিয়ু ওয়া রহমাতুল্লাহি ওয়া বারাকাতুহ। আসসালামু আলাইনা ওয়া আলা ইবাদিল্লাহিস সালিহীন। আশহাদু আল্লা ইলাহা ইল্লাল্লাহু ওয়া আশহাদু আন্না মুহাম্মাদান আবদুহু ওয়া রাসুলুহ।",
      translation: "All compliments, prayers and pure words are due to Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and messenger.",
    },
    {
      title: "দরূদ শরীফ",
      titleEn: "Durood Shareef (Salawat)",
      arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
      transliteration: "আল্লাহুম্মা সাল্লি আলা মুহাম্মাদিও ওয়া আলা আলি মুহাম্মাদিন কামা সাল্লাইতা আলা ইব্রাহিমা ওয়া আলা আলি ইব্রাহিমা ইন্নাকা হামিদুম মাজিদ। আল্লাহুম্মা বারিক আলা মুহাম্মাদিও ওয়া আলা আলি মুহাম্মাদিন কামা বারাক্তা আলা ইব্রাহিমা ওয়া আলা আলি ইব্রাহিমা ইন্নাকা হামিদুম মাজিদ।",
      translation: "O Allah, send prayers upon Muhammad and the family of Muhammad, as You sent prayers upon Ibrahim and the family of Ibrahim. Verily, You are Praiseworthy and Glorious. O Allah, send blessings upon Muhammad and the family of Muhammad, as You sent blessings upon Ibrahim and the family of Ibrahim. Verily, You are Praiseworthy and Glorious.",
    },
    {
      title: "দরূদের পর দোয়া",
      titleEn: "Dua after Durood",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَمِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
      transliteration: "আল্লাহুম্মা ইন্নি আউযুবিকা মিন আযাবি জাহান্নাম, ওয়া মিন আযাবিল কবর, ওয়া মিন ফিতনাতিল মাহইয়া ওয়াল মামাত, ওয়া মিন শাররি ফিতনাতিল মাসিহিদ দজ্জাল।",
      translation: "O Allah, I seek refuge in You from the punishment of Hell, from the punishment of the grave, from the trials of life and death, and from the evil of the trial of the False Messiah.",
    },
    {
      title: "ব্যক্তিগত দোয়া",
      titleEn: "Personal Dua",
      arabic: "اللَّهُمَّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِأَهْلِ بَيْتِي وَلِلْمُسْلِمِينَ",
      transliteration: "আল্লাহুম্মাগফির লি, ওয়া লি ওয়ালিদাইয়া, ওয়া লি আহলি বাইতি, ওয়া লিল মুসলিমীন।",
      translation: "O Allah, forgive me, my parents, my family, and the Muslims.",
    },
    {
      title: "শেষ দোয়া",
      titleEn: "Final Dua",
      arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً، وَفِي الآخِرَةِ حَسَنَةً، وَقِنَا عَذَابَ النَّارِ",
      transliteration: "রাব্বানা আতিনা ফিদ্দুনিয়া হাসানাহ, ওয়া ফিল আখিরাতি হাসানাহ, ওয়া ক্বিনা আযাবান নার।",
      translation: "Our Lord, give us good in this world and good in the Hereafter, and save us from the punishment of the Fire.",
    },
    {
      title: "সালাম (Tasleem)",
      titleEn: "Salam (Ending Prayer)",
      arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰهِ",
      transliteration: "আসসালামু আলাইকম ওয়া রহমাতুল্লাহ।",
      translation: "Peace be upon you and the mercy of Allah.",
      note: "ডান দিকে ও বাম দিকে (Turn right and left)"
    },
  ];

  return (
    <Layout>
      <div className="space-y-8 animate-in fade-in duration-500">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">🤲 নামাজের দোয়াসমূহ</h1>
          <p className="text-muted-foreground">Prayer Duas with Arabic, Transliteration & Translation</p>
        </div>

        <ContentCard variant="ocean">
          <p className="text-foreground/90">
            নামাজের বিভিন্ন অবস্থানে পড়ার জন্য গুরুত্বপূর্ণ দোয়াসমূহ। প্রতিটি দোয়া আরবি, বাংলা উচ্চারণ এবং 
            অর্থসহ দেওয়া হয়েছে। এগুলো শিখে নিয়মিত পড়ুন।
          </p>
        </ContentCard>

        <div className="space-y-6">
          {duas.map((dua, index) => (
            <ContentCard key={index} className="space-y-4">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-1">{dua.title}</h2>
                <p className="text-sm text-muted-foreground italic">{dua.titleEn}</p>
                {dua.repeat && (
                  <span className="inline-block mt-1 px-2 py-1 bg-secondary/20 text-secondary-foreground text-xs rounded">
                    {dua.repeat}
                  </span>
                )}
              </div>

              <div className="bg-accent/50 rounded-lg p-4 space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">আরবি (Arabic):</p>
                  <p className="arabic text-center whitespace-pre-line">{dua.arabic}</p>
                </div>

                <div className="border-t border-border pt-3">
                  <p className="text-xs text-muted-foreground mb-2">উচ্চারণ (Transliteration):</p>
                  <p className="font-medium text-center">{dua.transliteration}</p>
                </div>

                <div className="border-t border-border pt-3">
                  <p className="text-xs text-muted-foreground mb-2">অর্থ (Translation):</p>
                  <p className="text-sm text-foreground/80 text-center italic">{dua.translation}</p>
                </div>

                {dua.note && (
                  <div className="border-t border-border pt-3">
                    <p className="text-xs text-muted-foreground text-center">📌 {dua.note}</p>
                  </div>
                )}
              </div>
            </ContentCard>
          ))}
        </div>

        <ContentCard variant="gold">
          <div className="flex gap-3">
            <div className="text-2xl shrink-0">💡</div>
            <div>
              <h3 className="font-semibold text-lg mb-2">টিপস</h3>
              <ul className="space-y-1 text-sm text-foreground/90">
                <li>• প্রতিটি দোয়া ধীরে ধীরে এবং মনোযোগ সহকারে পড়ুন</li>
                <li>• উচ্চারণ শুদ্ধভাবে শিখতে অভিজ্ঞ ব্যক্তিদের কাছে থেকে শিখুন</li>
                <li>• নিয়মিত অনুশীলন করুন</li>
                <li>• দোয়াগুলোর অর্থ বুঝে পড়ার চেষ্টা করুন</li>
              </ul>
            </div>
          </div>
        </ContentCard>
      </div>
    </Layout>
  );
};

export default Prayers;
