export type ShoppingItem = {
  shop: string;
  name: string;
  buyer: 'teacher' | 'student';
  url: string;
  price: number;
};

export const shoppingList: ShoppingItem[] = [
  {
    shop: 'Yahoo',
    name: '8x15x45mm リニアベアリング (x2)',
    buyer: 'student',
    url: 'https://store.shopping.yahoo.co.jp/soten/a24072700ux0265.html?sc_e=slga_fpla',
    price: 1008,
  },
  {
    shop: 'モノタロウ',
    name: '8x15x25mm リニアベアリング (x1)',
    buyer: 'teacher',
    url: 'https://www.monotaro.com/p/0360/7923/?t.q=%E3%83%AA%E3%83%8B%E3%82%A2%E3%83%99%E3%82%A2%E3%83%AA%E3%83%B3%E3%82%B0',
    price: 318,
  },
  {
    shop: 'Amazon',
    name: 'タイミングベルトとプーリー',
    buyer: 'teacher',
    url: 'https://www.amazon.co.jp/KeeYees-%E3%82%BF%E3%82%A4%E3%83%9F%E3%83%B3%E3%82%B0%E3%83%99%E3%83%AB%E3%83%88-%E6%AD%AF%E4%BB%98%E3%82%A2%E3%82%A4%E3%83%89%E3%83%A9%E3%83%BC-%E5%9B%BA%E5%AE%9A%E7%94%A8%E3%82%AF%E3%83%A9%E3%83%B3%E3%83%97-3D%E3%83%97%E3%83%AA%E3%83%B3%E3%82%BF%E3%83%91%E3%83%BC%E3%83%84/dp/B07SH7ZYTV/ref=sr_1_5?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=HFMHOMKH981T&dib=eyJ2IjoiMSJ9.Hm8x8X1yqqTO8rsvULQvo_MdevbnjaS0d2d4eKuwo47g36dX0K1gER6Zf8SZW57A3LYbp49XDonoQyt73kzKJv29h7Pm4GqsUJ4ly-8qfFpiHwZoc2lsAfxrWg2QMJuGfuquoQ_GZlMmb1p8Tibve5Lsa6R5EhklAJNp76JZp5T1npN9I3yh_dwuwloxoA9vHAQicBmnAGKZXxZgeJgn63B4ZSdLqsNhhLDuvtFmt-dVvZ6qD6dnrQ_73kq1bSlrYnmyhrWlG0iZ0Kixz2v2fh8RAe6yG8JnbJddavm3pOU._HULQ_KZSWhl_xcqMvF-R23D_AyALEH2fQLHa7A7Mf0&dib_tag=se&keywords=gt2+%E3%82%BF%E3%82%A4%E3%83%9F%E3%83%B3%E3%82%B0%E3%83%99%E3%83%AB%E3%83%88&qid=1759484109&sprefix=gt2+%E3%82%BF%E3%82%A4%E3%83%9F%E3%83%B3%E3%82%B0%E3%83%99%E3%83%AB%E3%83%88%2Caps%2C200&sr=8-5&xpid=uh-n_bzcb0mdh',
    price: 1820,
  },
  {
    shop: 'Amazon',
    name: 'コンタクトスイッチ',
    buyer: 'student',
    url: 'https://www.amazon.co.jp/%E3%83%AA%E3%83%9F%E3%83%83%E3%83%88%E3%82%B9%E3%82%A4%E3%83%83%E3%83%81-%E3%83%9E%E3%82%A4%E3%82%AF%E3%83%AD%E3%82%B9%E3%82%A4%E3%83%83%E3%83%81-20%E5%80%8B%E3%83%9F%E3%83%8B%E3%83%9E%E3%82%A4%E3%82%AF%E3%83%AD%E3%83%AA%E3%83%9F%E3%83%83%E3%83%88%E3%82%B9%E3%82%A4%E3%83%83%E3%83%81-125-250V-3D%E3%83%97%E3%83%AA%E3%83%B3%E3%82%BF/dp/B0DHRKVJWQ/ref=pd_sbs_d_sccl_2_2/358-2617570-1874633?pd_rd_w=bod7d&content-id=amzn1.sym.c0889d40-54df-4be4-b1c5-43522a3d0a92&pf_rd_p=c0889d40-54df-4be4-b1c5-43522a3d0a92&pf_rd_r=1EGFDTSAS3E3Q6PRSK3P&pd_rd_wg=3xKwN&pd_rd_r=97553dfd-1652-4441-a7b3-d41ae17ced5d&pd_rd_i=B0DHRKVJWQ&psc=1',
    price: 688,
  },
  {
    shop: 'Amazon',
    name: '8mmクロームスチールロッド 35cm x2',
    buyer: 'student',
    url: 'https://www.amazon.co.jp/8X150mm-8mm%E3%83%AA%E3%83%8B%E3%82%A2%E3%83%A2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%AD%E3%83%83%E3%83%89%E3%80%81%E3%83%AA%E3%83%8B%E3%82%A2%E3%83%99%E3%82%A2%E3%83%AA%E3%83%B3%E3%82%B0-%E3%80%81%E3%83%AA%E3%83%8B%E3%82%A2%E3%83%AD%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%99%E3%82%A2%E3%83%AA%E3%83%B3%E3%82%B0-3d%E3%83%97%E3%83%AA%E3%83%B3%E3%82%BF%E3%83%BC%E9%83%A8%E5%93%81%E3%80%81DIY%E3%80%81CNC%E9%83%A8%E5%93%81-%E3%80%81%E3%83%A1%E3%83%BC%E3%83%88%E3%83%AB%E6%B3%95%E3%81%AEh8%E5%85%AC%E5%B7%AE%E3%80%81%E9%AB%98%E7%A1%AC%E5%BA%A6%E3%80%81%E8%80%90%E6%91%A9%E8%80%97/dp/B08XYL4G5D/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dib=eyJ2IjoiMSJ9.AyLuN144yseTPXi63R02r7DFpqtZtumKhy5HvOgfbbD_ttEggoY08ERy64JAI8Miwd67XxUdXl9a8_qVgcZ99IdSLmJwnzzPzQ5QVkDJ20vjcpPFsi9NbBoPd058gxM-S6lvkklsYT97mg-gQdSYgrGLLgajUpA0oH1hvug7yMWOX3OSNDC7Q9DVn0jOJfsM8jPDSV56Y4kgYx6XbpLNfW80PhM5s_uzsUn2t4Yrc542Wi30GVzS-2pQEMD8Tzm-mQHjQENNaCAWnLP3jprubZRkpoeiE2dKWaTxdnk1wQ4.onjkNM26icJfqDDneSX2iX44hC6MxVg96JWNkZcoWsA&dib_tag=se&keywords=chrome+8mm+rod&qid=1759475996&s=industrial&sr=1-1&th=1',
    price: 883,
  },
  {
    shop: 'Amazon',
    name: '8mm 木丸棒',
    buyer: 'teacher',
    url: 'https://www.amazon.co.jp/%E3%82%A2%E3%83%BC%E3%83%86%E3%83%83%E3%82%AF-%E4%B8%B8%E6%A3%92-%CE%A68%C3%97450-5%E6%9C%AC%E7%B5%84-46569/dp/B0041NF2PK/ref=pd_sbs_d_sccl_2_13/356-9574604-4637517?pd_rd_w=nT9i8&content-id=amzn1.sym.c0889d40-54df-4be4-b1c5-43522a3d0a92&pf_rd_p=c0889d40-54df-4be4-b1c5-43522a3d0a92&pf_rd_r=DFNQW09S290KJ5V08SR0&pd_rd_wg=m6kmS&pd_rd_r=f2749683-c8ff-43e2-ba28-fa1a164f7bb5&pd_rd_i=B0041NF2PK&psc=1',
    price: 323,
  },
  {
    shop: 'Amazon',
    name: 'ブロック付き30cm長リニアレール MGN12H',
    buyer: 'teacher',
    url: 'https://www.amazon.co.jp/Akozon-%E3%83%AA%E3%83%8B%E3%82%A2%E3%82%AC%E3%82%A4%E3%83%89%E3%83%AC%E3%83%BC%E3%83%AB%E3%83%9F%E3%83%8B%E3%83%81%E3%83%A5%E3%82%A2%E3%83%AA%E3%83%8B%E3%82%A2%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%89%E3%83%AC%E3%83%BC%E3%83%AB%E3%82%AC%E3%82%A4%E3%83%89%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF250mm-300mm-400mm-500mm/dp/B07Y4NWB45/ref=sr_1_5?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=R7I7Z8JD5ER3&dib=eyJ2IjoiMSJ9.V2OdZ6jQk0YSq4UbbtIWuL1SlyTyXV1XmZ2W_-vMyQr-c1iwxnLeukinKUG8elchF5W_XN3KRtdJ_g9MdWsX4BBJGfZX9gdnD28dmtmHl2189xjbf2TZa6qwi7zmo9WQNqNOeTabDRfTeC_IYUJw8ymHeso9ohzcOwN3W266PCcFnajY3WDZhlcazDSCPbZtiF5tbCmKMnsEeGD_YFfmk28_HB1B8-dQGpN1kUhr-YbMaEdFjgfn-D2Z3eaqi3NJnZEkr5yG_OlZtaqxz3wteX6cCSSI3bixAMkv1tuApuY.0ZkwR7UbRYsavpRleWw1frI9ykIrFfbpHy3Nry0rME0&dib_tag=se&keywords=%E3%83%AA%E3%83%8B%E3%82%A2%E3%83%AC%E3%83%BC%E3%83%AB%2B300&qid=1759482924&s=industrial&sprefix=%E3%83%AA%E3%83%8B%E3%82%A2%E3%83%AC%E3%83%BC%E3%83%AB%2B300%2Cindustrial%2C308&sr=1-5&th=1',
    price: 1869,
  },
  {
    shop: 'Amazon',
    name: 'アイドラーホイール 内径3mm 6mmベルト用',
    buyer: 'student',
    url: 'https://www.amazon.co.jp/Saipor-%E3%82%BF%E3%82%A4%E3%83%9F%E3%83%B3%E3%82%B0%E3%83%99%E3%83%AB%E3%83%88%E3%83%97%E3%83%BC%E3%83%AA%E3%83%BC-3D%E3%83%97%E3%83%AA%E3%83%B3%E3%82%BF%E3%83%BC%E4%BA%A4%E6%8F%9B%E7%94%A8-%E3%82%BF%E3%82%A4%E3%83%9F%E3%83%B3%E3%82%B0%E3%83%99%E3%83%AB%E3%83%88%E3%81%AB%E9%81%A9%E7%94%A8-16%E6%AD%AF%E3%80%81%E5%86%85%E5%BE%843mm%E3%80%81%E5%B9%856mm%E3%80%81%E6%AD%AF%E3%81%AA%E3%81%97/dp/B086JPY1WH/ref=sr_1_3?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=2TWVEPIUTZFS6&dib=eyJ2IjoiMSJ9.YBoxkOG6ZEvUoxNA4YFVNsqoRBVUPD8CtEZBBZ-GbXbojfxovgrBa8LlON_W3ekFcRtMbFS7-Yg8WmuuD-_rQgrLj7ptNeqHpasnUpCsTtKLr4HChAL6oRiHb9DT-yFmjQXb40DqNWcxBb-cl-OXAvTlEuWENekkqIvz2siFYftTnDMeSyTRKQugaiEubjIEIHsMjE0RUs8061FO58O-rLHeR0XKHHN-PORRhNUV2w37SPHOMjrETAgAko7ynbvafoMaUnFLkH-rWZG4GaWJNwy5j1lLKyfNdq_phIeGoGg.CQLb6H8Ftl50f1YFCFQKs486Px-71LQYeixG7wZv9CM&dib_tag=se&keywords=%E3%83%97%E3%83%BC%E3%83%AA%E3%83%BC%2B3mm%2B6mm&qid=1759484757&sprefix=%E3%83%97%E3%83%BC%E3%83%AA%E3%83%BC%2B3mm%2B6mm%2Caps%2C182&sr=8-3&th=1',
    price: 959,
  },
  {
    shop: 'Amazon',
    name: 'Nema17ステッピングモータ(x4) + CNCシールド + A4988モータードライバ(x4)',
    buyer: 'teacher',
    url: 'https://www.amazon.co.jp/Nema17-%E3%82%B9%E3%83%86%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0-17HS4401S-A4988-%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC%E6%8B%A1%E5%BC%B5%E3%83%9C%E3%83%BC%E3%83%89/dp/B0D59RHVPY/ref=sr_1_8?dib=eyJ2IjoiMSJ9.gZ4KcAD86di1PEsmsm4QVbiYSI-3d2RdMe6wLFfiSWdDYA7JqmajQn_SFdQrns9vCXVM14bykgsL9SfQNolDw7zm8U2m8M1MCO4gTgdJTNoEZ6d6NzXV11TNEHDq4rWj-vjEKBN_cwhaejBk6Iu9ac98dEKfSQMftxaLBJbBOoIWCZK0dUMTsjl_TnvmhJDZFHeoxS-Q0ne8MtbWYJhkQpmIQNw2j4Xu3iQ5st0SUu_R4QvkWjGbmYle_cG1ykWs8gdXIjwshz25fCt1hMX4h14rG2_OTMhtwFKr_dgmqhg.netsRNRvH7F9pwq7V_gntQZUJYlKlz3JjbzYc07LLCU&dib_tag=se&geniuslink=true&keywords=nema+17+stepper+motor&qid=1759485098&sr=8-8',
    price: 5198,
  },
  {
    shop: 'Amazon',
    name: 'DC電源ジャックソケット メスコネクタ',
    buyer: 'student',
    url: 'https://www.amazon.co.jp/Jdeijfev-R-5%E5%80%8B5-5mmx2-1mm-%E9%9B%BB%E6%BA%90%E3%82%B8%E3%83%A3%E3%83%83%E3%82%AF%E3%82%BD%E3%82%B1%E3%83%83%E3%83%88%E3%83%A1%E3%82%B9%E3%83%91%E3%83%8D%E3%83%AB%E3%83%9E%E3%82%A6%E3%83%B3%E3%83%88%E3%82%B3%E3%83%8D%E3%82%AF%E3%82%BF/dp/B09X4YTPNK/ref=sr_1_22?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=384FTV3JSQ2LQ&dib=eyJ2IjoiMSJ9.dpk-qNblrJPlXLHN435KNPOnZrSrAep0MA2nYTME2ucVWp2AsI0tadaTp7HYjB7rIKMjXYAsfzjjbT54h2NlUh1EOEELyqcFkyBqcFI6mmWzef74rt2-A-5afY42HySRUIA8Yb0qqIsOdQ0KkcjnOwj1dvI_hC6u8EaGuYeg25cOfN0A2eygZnGkbDYEtqzRzcSUyE8Dlq9wufzQCKZWmVcgRRCarA7FmB7yCniL6mEZWe5gJSjCBpohUIw70LVUeyJcVqJC7VboFDBheVIkQ1R9ySpiDwoT27zjHNWaXNc.EcAXWXifrUZcTm1eWMaMvXfWBY307rHvIduxxbTTJ64&dib_tag=se&keywords=5.5mmx2.1mm+%E3%82%BD%E3%82%B1%E3%83%83%E3%83%88+%E3%83%A1%E3%82%B9&qid=1763020490&s=electronics&sprefix=5.5mmx2.1mm+%E3%82%BD%E3%82%B1%E3%83%83%E3%83%88+%E3%83%A1%E3%82%B9,electronics,195&sr=1-22',
    price: 366,
  },
  {
    shop: 'モノタロウ',
    name: '幅80mm ロールペーパー',
    buyer: 'teacher',
    url: 'https://www.monotaro.com/p/3136/2809/?t.q=%E3%83%AD%E3%83%BC%E3%83%AB%E3%83%9A%E3%83%BC%E3%83%91%E3%83%BC%E3%80%8080mm',
    price: 230,
  },
];

export default shoppingList;
