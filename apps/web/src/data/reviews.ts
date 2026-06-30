export type Review = {
  id: string;
  date: string;
  author: string;
  text: { ro: string; ru: string };
};

export const reviews: Review[] = [
  {
    id: "1",
    date: "2025-06-05",
    author: "Pavel",
    text: {
      ro: "Respect tuturor angajaților ipoolgoo! Am cumpărat un bazin rotund 4×4, adâncime 1,5 m. Calitate excelentă! Pentru familie — exact ce trebuie! Recomand pompa de căldură și filtrul obligatoriu!",
      ru: "Всем сотрудникам ipoolgoo большой респект! Приобрели бассейн 4×4 круглый, глубина 1,5 м! Бассейн качественный! Для семьи — то, что надо! Советую тепловой насос и фильтр обязательно!",
    },
  },
  {
    id: "2",
    date: "2025-06-05",
    author: "Natalia",
    text: {
      ro: "Bazinul este magnific. Foarte confortabil să comunici cu echipa înainte și după achiziție. Arată stilat, calitatea materialului e super.",
      ru: "Бассейн великолепный. Очень комфортно общаться с командой до и после покупки. Бассейн стильно смотрится, качество материала супер.",
    },
  },
  {
    id: "3",
    date: "2025-05-15",
    author: "Artemie",
    text: {
      ro: "Am cumpărat bazin 5×1,5 m. Toată familia e fericită! Copiii sar de pe bord — bordul e foarte rezistent. Livrare rapidă direct la casă.",
      ru: "Купили бассейн 5×1,5 м. Вся семья очень рада! Дети ныряют с борта — борт прочный. Быстрая доставка прямо на дачу.",
    },
  },
  {
    id: "4",
    date: "2025-04-29",
    author: "Dmitri",
    text: {
      ro: "Mulțumim pentru ofertă! Toată familia e mulțumită! Un sezon întreg — ca nou! Ne pregătim pentru al doilea.",
      ru: "Спасибо за предложение! Вся семья довольна! Сезон откупались — как новый! Готовимся ко второму!",
    },
  },
  {
    id: "5",
    date: "2025-04-17",
    author: "Natalia S.",
    text: {
      ro: "Bazinul e pur și simplu COSMOS, arată superb la casa noastră. Totul rapid și operativ!",
      ru: "Бассейн просто КОСМОС, смотрится шикарно на даче. Всё чётко, быстро, оперативно!",
    },
  },
  {
    id: "6",
    date: "2025-06-10",
    author: "Nikolai",
    text: {
      ro: "Toți se uită la acest bazin feeric, copiii abia așteaptă să sară! 👍",
      ru: "Все ходят, на этот фееричный бассейн смотрят, детям уже не терпится занырнуть 👍",
    },
  },
];
