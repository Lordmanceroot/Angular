import { Product } from "../models/product.model";

export const products: Product[] = [
  {
    id: 1,
    image: "https://www.wishbytech.com/wp-content/uploads/2021/06/SMARTPHONE-SAMSUNG-A52-SM-A525DS-AWSOME-BLACK-3-600x600.png",
    name: "Samsung A52 (4/128gb) черный/ Night Black",
    price: 25840,
    params: {
      display: "Дисплей: Super AMOLED 6,5″, 1080×2400, 20:9, 407 ppi",
      battery: "Аккумулятор: 4500 мА·ч",
      camera: "Камера: 64 Мп + 12 Мп (широкоугольная) + 5 Мп (макро) + 5 Мп, видео 4К@30 fps",
      memory: "Оперативная память: (RAM) 4 ГБ, внутренняя память: 128 ГБ"
    }
  },
  {
    id: 2,
    image: "https://miodessa.com/wp-content/uploads/2021/03/poco_f3_12-600x600.jpg",
    name: "Xiaomi POCO F3 (8/256gb) черный/ Night Black",
    price: 31990,
    params: {
      display: "Дисплей: IPS, 6,67 дюймов, разрешение FHD+, частота обновления 120 Гц, частота опроса сенсорного слоя 240\n" +
        "          Гц, защитное стекло Gorilla Glass 6",
      battery: "Батарея: 5160 мАч, поддержка быстрой зарядки мощностью 33 Вт",
      camera: "Камеры: основной сенсор — 48 МП, сверхширокоугольный — 8 МП, макро — 2 МП, датчик глубины снимка — 2 МП, селфи-камера — 20 МП",
      memory: "Память: 8 ГБ ОЗУ и 256 ГБ файловое хранилище (UFS 3.1)"
    }
  },
  {
    id: 3,
    image: "https://specs-tech.com/wp-content/uploads/2020/03/Huawei-P40-Pro-Premium.jpg",
    name: "Huawei P40 PRO (8/256gb) белый/ Night White",
    price: 69990,
    params: {
      display: "Дисплей: OLED 6,58″, 2640×1200, 20:9, 441 ppi",
      battery: "Аккумулятор: 4200 мА·ч, быстрая зарядка 40 Вт, беспроводная/обратная зарядка",
      camera: "Камера: 50 Мп, f/1,9 + 12 Мп, f/3,4 + 40 Мп, f/1,8 + TOF 3D, видео 2160p@60 fps",
      memory: "Оперативная память: (RAM) 8 ГБ, внутренняя память: 256 ГБ"
    }
  },
  {
    id: 4,
    image: "https://www.ixbt.com/img/n1/news/2020/5/1/gsmarena_002.jpg",
    name: "Vivo v19 (8/256gb) белый/ Night White",
    price: 21700,
    params: {
      display: "Дисплей: 6,44\", 2400×1080, Super AMOLED",
      battery: "Батарея: 4500 мАч, быстрая зарядка 18 Вт",
      camera: "Камера: 48 Мп, f/1,8 + 8 Мп, f/2,2 + 2 Мп, f/2,4 + 2 Мп, f/2,4 (основная), 32 Мп, f/2,45 (фронтальная)",
      memory: "Память: 8 ГБ оперативной, 128 ГБ постоянной"
    }
  }
]
