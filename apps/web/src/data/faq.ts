export type FaqItem = {
  id: string;
  q: { ro: string; ru: string };
  a: { ro: string; ru: string };
};

export const faqItems: FaqItem[] = [
  {
    id: "1",
    q: {
      ro: "Ce este un bazin SUP (Drop Stitch)?",
      ru: "Что такое SUP-бассейн (Drop Stitch)?",
    },
    a: {
      ro: "Este un bazin gonflabil premium cu tehnologie Drop Stitch: mii de fire nylon conectează pereții interiori, oferind rigiditate, rezistență la 500 kg pe bord și durată de viață de 8 ani.",
      ru: "Это премиальный надувной бассейн с технологией Drop Stitch: тысячи нейлоновых нитей соединяют внутренние стенки, обеспечивая жёсткость, нагрузку 500 кг на борт и срок службы 8 лет.",
    },
  },
  {
    id: "2",
    q: {
      ro: "Pot instala bazinul în pământ?",
      ru: "Можно ли закапывать бассейн в грунт?",
    },
    a: {
      ro: "Da, modelele IPOOLGO permit instalare parțială sau completă în sol, cu pregătirea corespunzătoare a fundației.",
      ru: "Да, модели IPOOLGO допускают частичную или полную установку в грунт при правильной подготовке основания.",
    },
  },
  {
    id: "3",
    q: {
      ro: "Ce accesorii pot adăuga?",
      ru: "Какие аксессуары можно добавить?",
    },
    a: {
      ro: "Pompă electrică, sistem de filtrare, scară (clasică sau gonflabilă), pompă de căldură, acoperiș gonflabil.",
      ru: "Электронасос, система фильтрации, лестница (обычная или надувная), тепловой насос, надувная крышка.",
    },
  },
  {
    id: "4",
    q: {
      ro: "Livrați în Moldova și România?",
      ru: "Доставляете в Молдову и Румынию?",
    },
    a: {
      ro: "Da, livrăm în toată Moldova și România. Contactați-ne pentru calculul costului și termenului.",
      ru: "Да, доставляем по всей Молдове и Румынии. Свяжитесь с нами для расчёта стоимости и сроков.",
    },
  },
  {
    id: "5",
    q: {
      ro: "De ce IPOOLGO este original?",
      ru: "Почему IPOOLGO — оригинал?",
    },
    a: {
      ro: "Producție sub control direct, echipament de fabrică propriu, certificate și garanție reală — spre deosebire de replicile de pe marketplace-uri.",
      ru: "Производство под прямым контролем, собственное заводское оборудование, сертификаты и реальная гарантия — в отличие от реплик с маркетплейсов.",
    },
  },
];
