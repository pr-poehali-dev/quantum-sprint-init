import ArcGalleryHero from "@/components/ArcGalleryHero";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/f09943c6-341a-4e4e-9890-6b9427a3301b/files/aadf52f6-1548-4138-bee4-03bdb424c060.jpg",
    "/freepik__the-style-is-3d-model-with-octane-render-volumetri__57555.png",
    "https://cdn.poehali.dev/projects/f09943c6-341a-4e4e-9890-6b9427a3301b/files/f71c33d1-92ab-4604-a69f-0282e72804f2.jpg",
    "/freepik__a-closeup-shot-features-a-glossy-purple-crossshape__48873.png",
    "https://cdn.poehali.dev/projects/f09943c6-341a-4e4e-9890-6b9427a3301b/files/950d8632-4f89-4f0c-9828-0716b56323ae.jpg",
    "/freepik__abstract-digital-art-featuring-a-series-of-horizon__489.png",
    "/VkvvhXlWo3hEBzcqwTpjd_aa4bf9ee998f4ec0b17a8bf16fe3e9e2.jpg",
    "/hyperrealistic_commercial_product_photography_of_luxury_chrome_sunglasses_on_male_model_extreme_chi_fanguv2w9zx489lcivwa_2.png",
    "/ultra-detailed_close-up_side_profile_of_a_dark-skinned_model_wearing_futuristic_chrome_wraparound_s_ps17q5ms2ptu5t6bdru6_2.png",
    "/eqirGoRIJPaIMgEUeliWpNxeFmI.jpg",
    "/abstract-blue-gradient.webp",
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
    </main>
  );
};

export default Index;