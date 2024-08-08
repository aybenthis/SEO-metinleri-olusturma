function convertToSentence(araba) {
  const { id, marka, model, yakit, vites, yas, fiyat } = araba;

  const uretimYili = 2024 - yas;
  const metin = `${uretimYili} yılında trafiğe çıkışlı ${marka.toUpperCase()} ${model} model arabanın ${vites.toLowerCase()} vitesi var ve ${yakit.toLowerCase()} ile çalışmaktadır. Güncel satış fiyatı ${fiyat} TL'dir.`;
  return metin;
}
