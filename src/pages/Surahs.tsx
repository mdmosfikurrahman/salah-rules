import { Layout } from "@/components/Layout";
import { ContentCard } from "@/components/ContentCard";

const Surahs = () => {
    const salahPlan = [
        { salah: "ফজর", rakaat: "১", surah: "الكوثر", surahEn: "Al-Kawthar", number: "108", ayah: "3" },
        { salah: "ফজর", rakaat: "২", surah: "الإخلاص", surahEn: "Al-Ikhlas", number: "112", ayah: "4" },
        { salah: "যোহর", rakaat: "১", surah: "الفلق", surahEn: "Al-Falaq", number: "113", ayah: "5" },
        { salah: "যোহর", rakaat: "২", surah: "الناس", surahEn: "An-Nas", number: "114", ayah: "6" },
        { salah: "আসর", rakaat: "১", surah: "النصر", surahEn: "An-Nasr", number: "110", ayah: "3" },
        { salah: "আসর", rakaat: "২", surah: "قريش", surahEn: "Quraysh", number: "106", ayah: "4" },
        { salah: "আসর", rakaat: "৩", surah: "الماعون", surahEn: "Al-Ma'un", number: "107", ayah: "7" },
        { salah: "আসর", rakaat: "৪", surah: "الفيل", surahEn: "Al-Fil", number: "105", ayah: "5" },
        { salah: "মাগরিব", rakaat: "১", surah: "الزلزلة", surahEn: "Az-Zalzalah", number: "99", ayah: "8" },
        { salah: "মাগরিব", rakaat: "২", surah: "التكاثر", surahEn: "At-Takathur", number: "102", ayah: "8" },
        { salah: "মাগরিব", rakaat: "৩", surah: "القارعة", surahEn: "Al-Qari'ah", number: "101", ayah: "11" },
        { salah: "এশা", rakaat: "১", surah: "الهمزة", surahEn: "Al-Humazah", number: "104", ayah: "9" },
        { salah: "এশা", rakaat: "২", surah: "البينة", surahEn: "Al-Bayyinah", number: "98", ayah: "8" },
        { salah: "এশা", rakaat: "৩", surah: "القدر", surahEn: "Al-Qadr", number: "97", ayah: "5" },
        { salah: "এশা", rakaat: "৪", surah: "العاديات", surahEn: "Al-'Adiyat", number: "100", ayah: "11" },
    ];

    const groupedSalah = salahPlan.reduce((acc, item) => {
        if (!acc[item.salah]) acc[item.salah] = [];
        acc[item.salah].push(item);
        return acc;
    }, {} as Record<string, typeof salahPlan>);

    return (
        <Layout>
            <div className="space-y-8 animate-in fade-in duration-500">
                <div className="space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary">📖 নামাজের সূরা পরিকল্পনা</h1>
                    <p className="text-muted-foreground">Surah Plan for Daily Prayers</p>
                </div>

                <ContentCard variant="ocean">
                    <h2 className="text-xl font-semibold mb-3">পরিকল্পনা সম্পর্কে</h2>
                    <p className="text-foreground/90 mb-3">
                        এই পরিকল্পনাটি ছোট সূরাগুলো দিয়ে তৈরি করা হয়েছে যা সহজে মুখস্থ করা যায়। আপনি সূরা ফাতিহার পর
                        এই সূরাগুলো পড়তে পারেন। প্রতিটি নামাজের জন্য আলাদা সূরা নির্ধারণ করা হয়েছে।
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                        This plan uses short surahs that are easy to memorize. You can recite these after Surah Al-Fatihah.
                    </p>
                </ContentCard>

                <div className="space-y-6">
                    {Object.entries(groupedSalah).map(([salahName, surahs]) => (
                        <ContentCard key={salahName}>
                            <h2 className="text-2xl font-bold text-primary mb-4 pb-3 border-b border-border">
                                {salahName} নামাজ
                                <span className="text-base font-normal text-muted-foreground ml-2">
                  ({surahs.length} রাকআত)
                </span>
                            </h2>

                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="border-b-2 border-border">
                                        <th className="text-left py-3 px-4 font-semibold">রাকআত</th>
                                        <th className="text-left py-3 px-4 font-semibold">সূরা (Arabic)</th>
                                        <th className="text-left py-3 px-4 font-semibold">English Name</th>
                                        <th className="text-center py-3 px-4 font-semibold">সূরা #</th>
                                        <th className="text-center py-3 px-4 font-semibold">আয়াত</th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                    {surahs.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-muted/50">
                                            <td className="py-3 px-4 font-medium">{item.rakaat}</td>
                                            <td className="py-3 px-4 arabic text-xl">{item.surah}</td>
                                            <td className="py-3 px-4">{item.surahEn}</td>
                                            <td className="py-3 px-4 text-center">
                                                <a
                                                    href={`https://quran.com/${item.number}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block px-2 py-1 bg-primary/10 text-primary rounded hover:bg-primary/20 transition"
                                                >
                                                    {item.number}
                                                </a>
                                            </td>
                                            <td className="py-3 px-4 text-center text-muted-foreground">
                                                {item.ayah}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </ContentCard>
                    ))}
                </div>

                <ContentCard variant="gold">
                    <div className="flex gap-3">
                        <div className="text-2xl shrink-0">📝</div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">মনে রাখুন</h3>
                            <ul className="space-y-2 text-sm text-foreground/90">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary shrink-0">•</span>
                                    <span>প্রতি রাকআতে সূরা ফাতিহা পড়া ফরজ। এর পরে অন্য যেকোনো সূরা পড়তে পারেন।</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary shrink-0">•</span>
                                    <span>এই পরিকল্পনা একটি সাজেশন মাত্র। আপনি যেকোনো সূরা পড়তে পারেন।</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary shrink-0">•</span>
                                    <span>ছোট সূরাগুলো মুখস্থ করা শুরু করুন এবং ধীরে ধীরে বড় সূরার দিকে যান।</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary shrink-0">•</span>
                                    <span>সূরা পড়ার সময় তারতিল (সুন্দর ও ধীর গতিতে) বজায় রাখুন।</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ContentCard>
            </div>
        </Layout>
    );
};

export default Surahs;
