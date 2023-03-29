# JavaScript Temelleri

## İleri JavaScript

## Array Metodları ve Callback'ler
*DİKKAT*: Lütfen LIVE server extension'ını VS Code'a kurunuz': https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

## Amaçlar

- Array Metodları - `.forEach()` `.map()` `.reduce()` `.filter()` kullanın ve pratik edin
- Callback'ler - bir fonksiyonu diğer bir fonksiyona parametre olarak göndermeyi pratik edin

  
## Giriş

Yazılımcılar olarak çalıştığmız projelerde sıkça JSON verilerini serverlar ile iletişimde, verileri özetlemede, imajları sayfamıza almada ve daha bir çok işte kullanırız. Bu tarz yapıları ne erkenden öğrenmek bize çok fayda sağlayacak.

Bu projede 1930-2014 arasında oynana Dünya Kupası verilerini kullanacağız.

Verilen veri seti (`index.js`nin ilk satırında yükleniyor) 1930 sonrası oynanan tüm FIFA FDünya Kupası maçlarının raporunu içeriyor. Her bir raporda birçok başlık altında bilgiler var: `Year`,`Stage`, `Stadium`,  `Home Team Name`,`Home Team Goals`, `Away Team Name`, ve `Away Team Goals`. 

Bugünkü amacınız elinzideki veri setini kullanarak ilgi çekici istatistikler elde etmek.

### Commits

Görevleri yaptıkça commit etmeyi unutmayınız.

### Örnek Data

```js
  {
      "Year": 1930,
      "Datetime": "13 Jul 1930 - 15:00",
      "Stage": "Group 1",
      "Stadium": "Pocitos",
      "City": "Montevideo",
      "Home Team Name": "France",
      "Home Team Goals": 4,
      "Away Team Goals": 1,
      "Away Team Name": "Mexico",
      "Win conditions": "",
      "Attendance": 4444,
      "Half-time Home Goals": 3,
      "Half-time Away Goals": 0,
      "Referee": "LOMBARDI Domingo (URU)",
      "Assistant 1": "CRISTOPHE Henry (BEL)",
      "Assistant 2": "REGO Gilberto (BRA)",
      "RoundID": 201,
      "MatchID": 1096,
      "Home Team Initials": "FRA",
      "Away Team Initials": "MEX"
    },
```

## Talimatlar

### Görev 1: Proje Kurulumu

VSCode ve Komut Satırını Kullanma:

1. Bu repo'yu fork'layın
2. Frok'ladığınız repo'yu bilgisayarınızda clone'layın
3. LÜTFEN BRANCH OLUŞTURMAYINIZ! Bu projede main branch'ine push'layacaksın
4. Repo'nuzun olduğu klasöre gidin (`cd REPO_ADI`)
5. Vs code'da terminali açın ve `npm install` yazın ve çalıştırın
6. Sonra `npm run test` yazın ve çalıştırın
7. Projenizi tamamladıktan sonra `push` yaparak githuba aktarın


### Görev 2: Yapılması gerekenler

`index.js` dosyasını bulun ve verilen görevleri tamamlayın.

### Test Etme & Debug Yapma

Projenizin içinde "split terminal"i tıklayarak ikinci bir terminal ekranı açın.

Açılan ikinci terminalde `npm start` yazıp çalıştırın.

Bir terminal ekranında testleri çalıştırırken bir diğerinde ise debug yapabileceksin. Kodlarınızda güncelleme yaptıkça ilerlemeyi kontrol için `console.log`u kullanın.

### Görev 3: Zorlayıcı Görevler

Görevleri bitirdikten sonra `stretch.js` isimli bir dosya oluşturunuz ve array metodlarını orada pratik ediniz.

Aşağıdaki görevleri yapmayı deneyebilirsiniz.

- [x] Ülke kısaltmalarını parametre olarak alan ve dünya kupasında yer alma sayılarını dönünen bir fonksiyon yaratabilirsiniz.
- [x] 'Finaller' veri setinde beraberlikleri de hesaba katabilirsiniz.
- [x] Ülke kısaltmalarını parametre olarak alan ve dünya kupasında attıkları gol sayılarını(1930 sonrası) dönen bir fonksiyon yaratabilirsiniz.

## Merak Edilenler

**Projede kullandığımız veriler nereden geliyor?**

Kullandığınız veriler aslında `fifa.js` dosyasında. Bu verileri kullanabilmek için `index.js` dosyasında JavaScript'in import fonskiyonunu kullanıyoruz. İlk satırda şunu yazmalı:  `import { fifaData } from "fifa.js"`. Bu sayede tüm veriyi fifaData olarak isimlendirdiğimiz bir object'in içine kaydettik. `index.js` console log ile bu datayı yazdırmayı deneyebilirsiniz: `console.log(fifaData)`.

**Beraberliklerde ne yapacağız?**

Bazı durumlarda kazanan penaltı atışları ile belli oluyor. Görevleri yaparken bunları şimdilik gözardı edebilirsiniz. Zorlayıcı görev olarak "Win conditions" key'ini kullanarak kazanan takımı elde edebilirsiniz. Örneğin 1986 yılındaki skor 1-1 bitmiş Fransa penaltılar ile 3-4 kazanmıştı.

```
Win conditions": "France win on penalties (3 - 4)",
````

## Faydalı Kaynaklar

[What the Heck is a Callback?](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

[Working with JSON in JavaScript](https://www.ma-no.org/en/programming/javascript/working-with-json-in-javascript)


## Proje Teslim Etme Adımları

Verilen görevi tamamladıktan sonra [Workintech Platformu](https://app.workintech.com.tr)'nda (app.workintech.com.tr) `Sprint 2>Gün 2`'nin sonuna eklenmiş olan "` Görev: Sprint 2'nin 2. Gün projesini buraya yükle`" içeriğini açıp. GitHub hesabınızda oluşturduğunuz repo'nun adresini buraya ekleyiniz. 


