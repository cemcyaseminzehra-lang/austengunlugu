/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Book, Review } from '../types';

export const JANE_AUSTEN_BIO = {
  fullName: "Jane Austen",
  birthDate: "16 Aralık 1775",
  deathDate: "18 Temmuz 1817 (41 yaşında)",
  birthPlace: "Steventon, Hampshire, İngiltere",
  finalRestingPlace: "Winchester Katedrali, Hampshire",
  occupation: "Romancı, Dönem Eleştirmeni, Mektup Yazarı",
  era: "Geç Gürcü (Georgian) & Regency Dönemi",
  significance: "İngiliz edebiyatının realizm, ironi ve sosyal hiciv alanındaki en büyük ustalarından biri.",
  shortSummary: "Jane Austen, 18. yüzyıl sonu ve 19. yüzyıl başında İngiliz taşra soylularının (landed gentry) yaşamını, evlilik piyasasını, kadınların ekonomik bağımlılıklarını ve ahlaki erdemlerini benzersiz bir mizah ve keskinlikle kaleme almış dahi bir yazardır. Yaşadığı dönemde kitapları 'By a Lady' (Bir Hanımefendi Tarafından) mahlasıyla isimsiz yayımlanmış, gerçek dehası ölümünden sonra tüm dünyaca teslim edilmiştir.",
  lifeMilestones: [
    {
      period: "1775 – 1795",
      title: "Steventon'daki Çocukluk & Gençlik Dehası",
      description: "Hampshire'daki Steventon Papaz Evi'nde 8 kardeşin yedincisi olarak dünyaya geldi. Babası George Austen'ın 500 kitaptan oluşan devasa kütüphanesinde büyüdü. Aile arasında oynadıkları parodiler ve mektup-roman denemeleri (Juvenilia) erken yaşta dehasını parlatmıştır."
    },
    {
      period: "1796 – 1801",
      title: "'First Impressions' ve İlk Reddediliş",
      description: "20 yaşındayken Tom Lefroy ile yaşadığı buruk aşk hikayesi sonrasında ilk başyapıtlarını tasarladı. Gurur ve Önyargı'nın ilk hali olan 'First Impressions'ı babası yayıncı Thomas Cadell'e sundu ancak yayıncı zarfı açmayı dahi reddetti. Akıl ve Tutku'nun ilk hali 'Elinor and Marianne' de bu yıllarda şekillendi."
    },
    {
      period: "1801 – 1809",
      title: "Bath Sürgünü ve Sessiz Yıllar",
      description: "Babasının emekliliğiyle aile istemeden kaplıca şehri Bath'e taşındı. Jane şehri hiç sevmedi ve yaratıcı verimliliği kesintiye uğradı. 1805'te babasının ani ölümüyle Jane, annesi ve ablası Cassandra mali sıkıntılar içine düştü ve akrabalarının desteğine muhtaç kaldı."
    },
    {
      period: "1809 – 1817",
      title: "Chawton Cottage: Edebiyat Tarihinin Yeniden Yazılışı",
      description: "Zenginleşen ağabeyi Edward, onlara Chawton'da sevimli bir kır evi tahsis etti. Jane burada pencere kenarındaki küçük ceviz sehpasında gizlice yazdı; gıcırdayan kapı menteşesini birileri gelirse müsveddeleri saklayabilsin diye bilerek yağlatmamıştı. 6 büyük romanı burada son halini aldı ve yayımlandı."
    },
    {
      period: "1817 & Sonrası",
      title: "Erken Veda ve Winchester Katedrali",
      description: "Muhtemelen Addison hastalığı veya Hodgkin lenfoma sebebiyle 41 yaşında Winchester'da ablası Cassandra'nın kollarında vefat etti. İlk mezar taşında bir yazar olduğundan bile bahsedilmemişti; fakat bugün Winchester Katedrali'ndeki pirinç anıtı ve Chawton Müzesi dünyanın dört bir yanından gelen edebiyat aşıklarının mabedidir."
    }
  ],
  funFacts: [
    "Kitaplarının hiçbirinde 'Jane Austen' adı basılıyken geçmedi; ilk romanı 'By a Lady', sonrakiler ise 'Author of Sense and Sensibility' imzasıyla çıktı.",
    "Bir keresinde Harris Bigg-Wither adlı varlıklı bir beyefendinin evlilik teklifini akşam kabul etmiş, ancak sabaha kadar uyumayıp aşksız bir evlilik yapamayacağını anlayarak sabah 07:00'de teklifi geri çekmiştir.",
    "Piyano çalmayı çok severdi ve her sabah aile kahvaltısından önce düzenli olarak nota çalışırdı.",
    "Gıcırdayan oda kapısının tamir edilmesine izin vermezdi; çünkü o gıcırtı, odaya biri yaklaşırken müsveddelerini kumaş mendilinin altına saklaması için erken bir alarm görevi görüyordu.",
    "Ablası Cassandra ile arasındaki 3000'e yakın mektuptan sadece 160 kadarı günümüze ulaşabilmiştir; Cassandra, Jane'in keskin dilli yorumlarını ailenin itibarını korumak için ölümünden sonra yakmıştır."
  ],
  quotes: [
    {
      text: "There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature.",
      tr: "Gerçek dostlarım için yapamayacağım hiçbir şey yoktur. İnsanları yarım yamalak sevmek nedir bilmem, bu benim fıtratımda yok.",
      source: "Northanger Abbey"
    },
    {
      text: "I declare after all there is no enjoyment like reading! How much sooner one tires of any thing than of a book!",
      tr: "İtiraf etmeliyim ki okumak gibisi yok! İnsan bir kitaptan bıkana kadar başka her şeyden ne çabuk sıkılıyor!",
      source: "Pride and Prejudice"
    },
    {
      text: "There is no charm equal to tenderness of heart.",
      tr: "Hiçbir cazibe, kalbin şefkati ve inceliği kadar güçlü olamaz.",
      source: "Emma"
    },
    {
      text: "My idea of good company... is the company of clever, well-informed people, who have a great deal of conversation; that is what I call good company.",
      tr: "Benim iyi bir meclis anlayışım; zeki, görgülü ve anlatacak çok şeyi olan insanların sohbetidir; işte gerçek dost meclisi budur.",
      source: "Persuasion"
    }
  ]
};

export const AUSTEN_BOOKS: Book[] = [
  {
    id: "sense-and-sensibility",
    title: "Sense and Sensibility",
    turkishTitle: "Akıl ve Tutku",
    publicationYear: 1811,
    writtenYears: "1795 – 1811",
    coverColor: {
      bg: "#E8EFEA", // Sage tint
      border: "#A5B8A8",
      accent: "#385641",
      spine: "#2B4333",
      text: "#1D3224",
      badge: "#D3E2D6",
      foil: "#C49A45"
    },
    synopsis: "Dashwood kardeşlerin hikayesi: Mantığın ve ölçülülüğün simgesi Elinor ile tutkulu, romantik ve duygularını dizginleyemeyen Marianne. Babalarının ölümüyle mirastan mahrum kalan ve mütevazı bir kır kulübesine sığınan kardeşler; Edward Ferrars, John Willoughby ve Albay Brandon arasında sevginin, sadakatin ve cemiyet kurallarının çetin sınavlarından geçer.",
    historicalBackstory: "Jane Austen bu romanı önce mektuplar halinde 'Elinor and Marianne' adıyla yazdı. 1811'de Thomas Egerton tarafından basılması için Jane, masrafları kendi üstlendi (commission). Eğer kitap satmasaydı zararı kendisi ödeyecekti. Ancak ilk 1000 adetlik baskı 2 yıl dolmadan tükendi ve Jane'e hayatının ilk edebi kazancı olan 140 Sterlin'i kazandırdı. Bu kazanç ona bağımsız bir yazar olma cesaretini verdi.",
    publishingTrivia: [
      "Kapakta yazar olarak 'By a Lady' (Bir Hanımefendi Tarafından) yazmaktaydı.",
      "Kral George IV'ün eşi Prenses Charlotte bu romanı büyük bir hayranlıkla okumuş ve arkadaşlarına mektuplarında övmüştür.",
      "Eser, dönemin aşırı duygusal 'duyarlılık' edebiyatı akımına karşı zekice bir hiciv ve gerçekçilik manifestosudur."
    ],
    famousQuote: "It isn't what we say or think that defines us, but what we do.",
    quoteSpeaker: "Elinor Dashwood",
    keyCharacters: ["Elinor Dashwood", "Marianne Dashwood", "Edward Ferrars", "Albay Brandon", "John Willoughby"],
    themes: ["Mantık ve Duygu Dengesi", "Kadınların Ekonomik Güvencesizliği", "Toplumsal Sahtelikler"],
    pageCount: 380,
    initialCopies: "1,000 Adet",
    originalPublisher: "Thomas Egerton, Whitehall",
    authorBylines: "By a Lady",
    adaptationNote: "1995 Emma Thompson & Ang Lee uyarlaması ve 2008 BBC mini dizisi büyük beğeni toplamıştır.",
    caricatureId: "dashwood_sisters"
  },
  {
    id: "pride-and-prejudice",
    title: "Pride and Prejudice",
    turkishTitle: "Gurur ve Önyargı",
    publicationYear: 1813,
    writtenYears: "1796 – 1812",
    coverColor: {
      bg: "#E8EFF7", // Wedgwood blue tint
      border: "#9AB5D1",
      accent: "#26486B",
      spine: "#193552",
      text: "#12263C",
      badge: "#CFDFEE",
      foil: "#D4AF37" // Hugh Thomson peacock gold
    },
    synopsis: "Dünya edebiyatının en sevilen romantik komedisi. Zeki, neşeli ve hazırcevap Elizabeth Bennet ile gururlu, soylu ve mesafeli Fitzwilliam Darcy'nin karşılaşması. İlk izlenimlerin, sınıf kibirinin, ailevi komedilerin ve yanlış anlamaların arasından doğan, edebiyat tarihinin en kusursuz aşk ve karakter dönüşümü anlatısı.",
    historicalBackstory: "Jane bu romanı 21 yaşındayken 'First Impressions' (İlk İzlenimler) adıyla kaleme aldı. Babası eseri Londra'nın ünlü yayıncısı Cadell'e teklif ettiğinde reddedildi. Müsvedde 15 yıl boyunca bir çekmecede bekledi! 1812'de Akıl ve Tutku'nun başarısının ardından Jane metni tamamen yeniden işledi, gereksiz kısımları ayıkladı ve yayıncı Egerton'a telif haklarını 110 Sterline sattı. Roman yayımlandığı anda Londra sosyetesinde fırtına kopardı.",
    publishingTrivia: [
      "Jane Austen ablası Cassandra'ya yazdığı mektupta Elizabeth Bennet için: 'Şimdiye kadar basılmış en sevimli yaratık olduğunu düşünüyorum; ona tahammül edemeyenleri nasıl hoş karşılarım bilemiyorum' demiştir.",
      "Ünlü '1894 Peacock Edition' kapağındaki tavuskuşu illüstrasyonu (Hugh Thomson), tüm zamanların en ikonik kitap tasarımı kabul edilir.",
      "Açılış cümlesi ('Servet sahibi bekar bir erkeğin mutlaka bir eş arayışında olduğu evrensel olarak kabul edilmiş bir gerçektir'), edebiyat tarihinin en ünlü ilk cümlesidir."
    ],
    famousQuote: "I could easily forgive his pride, if he had not mortified mine.",
    quoteSpeaker: "Elizabeth Bennet",
    keyCharacters: ["Elizabeth Bennet", "Fitzwilliam Darcy", "Jane Bennet", "Charles Bingley", "Mr. Bennet", "Mr. Collins"],
    themes: ["İlk İzlenimlerin Yanıltıcılığı", "Sınıf Kibri ve Gurur", "Bağımsız Kadın İradesi"],
    pageCount: 432,
    initialCopies: "1,500 Adet",
    originalPublisher: "Thomas Egerton, Military Library",
    authorBylines: "By the Author of Sense and Sensibility",
    adaptationNote: "1995 Colin Firth'li BBC mini dizisi ve 2005 Keira Knightley filmi kültleşmiştir.",
    caricatureId: "elizabeth_darcy"
  },
  {
    id: "mansfield-park",
    title: "Mansfield Park",
    turkishTitle: "Mansfield Parkı",
    publicationYear: 1814,
    writtenYears: "1811 – 1813",
    coverColor: {
      bg: "#F7F0E6", // Warm amber parchment
      border: "#D1BFA5",
      accent: "#6C4B2E",
      spine: "#4F341C",
      text: "#36210F",
      badge: "#EBE0CF",
      foil: "#C2934D"
    },
    synopsis: "Yoksul Portsmouth ailesinden alınarak zengin teyzesi ve amcası Sir Thomas Bertram'ın görkemli malikanesi Mansfield Park'a getirilen utangaç, ahlaki açıdan sağlam Fanny Price'ın öyküsü. Bertram ailesinin şımarık çocukları, Londra'dan gelen büyüleyici ama sinsi Crawford kardeşler ve bir köşk tiyatrosu hazırlığı sırasında yaşanan ahlaki çözülmeler.",
    historicalBackstory: "Jane Austen'ın en karmaşık, ahlaki derinliği en yüksek ve aynı zamanda en tartışmalı romanıdır. Austen bu eseri doğrudan Chawton Cottage'da en verimli çağında yazdı. Kitabın ilk baskısı 6 ay içinde tükendi ve Austen'a diğer kitaplarından daha fazla para kazandırdı. Eserde dönemin kölelik ticaretine ve İngiliz imparatorluk zenginliğinin karanlık yüzüne (Antigua şeker tarlaları) dair cesur göndermeler yer alır.",
    publishingTrivia: [
      "Jane Austen, ailesinin ve arkadaşlarının bu kitaba dair görüşlerini tek tek not ettiği 'Opinions of Mansfield Park' adlı özel bir defter tutmuştur.",
      "Fanny Price, Austen'ın diğer neşeli kahramanlarının aksine sessiz, içe dönük ve prensiplerinden asla taviz vermeyen bir kahramandır.",
      "Romanda sahnelenen 'Lovers' Vows' adlı cüretkar tiyatro oyunu, 19. yüzyıl İngiltere'sinde gençlerin ahlaki sınırları üzerine büyük tartışma yaratmıştır."
    ],
    famousQuote: "We have all a better guide in ourselves, if we would attend to it, than any other person can be.",
    quoteSpeaker: "Fanny Price",
    keyCharacters: ["Fanny Price", "Edmund Bertram", "Mary Crawford", "Henry Crawford", "Sir Thomas Bertram"],
    themes: ["Ahlaki Pusula ve Dürüstlük", "Aile İçi Sınıf Ayrımı", "Şehir Yozlaşması vs Kır Masumiyeti"],
    pageCount: 460,
    initialCopies: "1,250 Adet",
    originalPublisher: "Thomas Egerton, London",
    authorBylines: "By the Author of Sense and Sensibility and Pride and Prejudice",
    adaptationNote: "1999 Patricia Rozema filmi ve 2007 Billie Piper'lı ITV uyarlaması mevcuttur.",
    caricatureId: "fanny_price"
  },
  {
    id: "emma",
    title: "Emma",
    turkishTitle: "Emma",
    publicationYear: 1816,
    writtenYears: "1814 – 1815",
    coverColor: {
      bg: "#F9ECEF", // Dusty rosewater
      border: "#DDAEBA",
      accent: "#7E3A4D",
      spine: "#5A2333",
      text: "#3F1521",
      badge: "#F1D4DB",
      foil: "#DAA520"
    },
    synopsis: "'Güzel, zeki ve zengin' Emma Woodhouse, hayatında hiçbir derdi olmayan ve asla evlenmemeye yemin etmiş genç bir hanımefendidir. En büyük eğlencesi komşularının aşk hayatlarına çöpçatanlık yapmaktır. Ancak saf arkadaşı Harriet Smith'i yanlış yönlendirmesi ve kibirli tahminleri sonucu ardı ardına skandallara yol açar. Onu tek eleştirebilen kişi ise sadık aile dostu Mr. George Knightley'dir.",
    historicalBackstory: "Jane Austen bu kitaba başlarken meşhur cümlesini kurmuştu: 'Benden başka kimsenin pek sevmeyeceği bir kadın kahraman yaratacağım.' Emma kusurlu, kibirli ama özünde iyi niyetli bir karakterdir. Roman, veliaht prens Regent (daha sonra Kral IV. George) tarafından öyle beğenilmiştir ki, kütüphanecisi aracılığıyla Austen'a eseri veliaht prense ithaf etmesi rica edilmiş, Austen da nezaket kuralları gereği ithaf sayfasına prensin adını eklemiştir.",
    publishingTrivia: [
      "Kitabın yayıncısı bu kez İngiltere'nin en prestijli yayıncısı John Murray idi (Lord Byron ve Walter Scott'ın da yayıncısı).",
      "Roman aynı anda hem kusursuz bir komedi hem de edebiyat tarihinin ilk 'gizem kurgusu' (Jane Fairfax ve Frank Churchill'in gizli nişanı) olarak incelenir.",
      "Modern gençlik klasiği 'Clueless' (1995) filmi doğrudan Emma'nın 90'lar Beverly Hills uyarlamasıdır."
    ],
    famousQuote: "I always deserve the best treatment because I never put up with any other.",
    quoteSpeaker: "Emma Woodhouse",
    keyCharacters: ["Emma Woodhouse", "Mr. George Knightley", "Harriet Smith", "Jane Fairfax", "Frank Churchill", "Mr. Woodhouse"],
    themes: ["Öz-Farkındalık ve Olgunlaşma", "Çöpçatanlığın Tehlikeleri", "Sosyal Körlük"],
    pageCount: 474,
    initialCopies: "2,000 Adet",
    originalPublisher: "John Murray, Albemarle Street",
    authorBylines: "By the Author of Pride and Prejudice",
    adaptationNote: "1996 Gwyneth Paltrow, 2009 Romola Garai BBC mini dizisi ve 2020 Anya Taylor-Joy başyapıtı.",
    caricatureId: "emma_woodhouse"
  },
  {
    id: "northanger-abbey",
    title: "Northanger Abbey",
    turkishTitle: "Northanger Manastırı",
    publicationYear: 1818,
    writtenYears: "1798 – 1803 (Ölümünden sonra basıldı)",
    coverColor: {
      bg: "#F2EDF6", // Muted wisteria / lavender grey
      border: "#B7A8C9",
      accent: "#4A3B63",
      spine: "#332647",
      text: "#221634",
      badge: "#DDD4E8",
      foil: "#CBA135"
    },
    synopsis: "Gotik korku romanlarına ve gizemli şatolara bayılan 17 yaşındaki masum Catherine Morland'in öyküsü. Bath sosyetesinde zeki ve alaycı Henry Tilney ile tanışır ve ailesinin davetiyle Northanger Manastırı'na gider. Catherine, hayal gücünün etkisiyle bu eski manastırda karanlık cinayetler, kilitli sandıklar ve korkunç sırlar olduğuna inanmaya başlar.",
    historicalBackstory: "Austen'ın yazdığı ilk tamamlanmış romandır (1803'te 'Susan' adıyla Benjamin Crosby adlı yayıncıya 10 Sterline satılmıştı). Fakat Crosby kitabı hiçbir zaman basmadı ve yıllarca çekmecede kilitli tuttu! Jane Austen takma isimle yayıncıya mektup yazıp kitabı basmasını ya da müsveddeyi geri vermesini istedi. Yayıncı 10 sterlini geri vermezse basmayacağını söyleyerek tehdit etti. Kardeşi Henry ancak 1816'da yayıncıya haber vermeden 10 sterlini ödeyip hakları geri aldı. Jane'in vefatından 5 ay sonra yayımlandı.",
    publishingTrivia: [
      "Dönemin meşhur Ann Radcliffe gotik romanlarıyla (The Mysteries of Udolpho) zekice alay eden olağanüstü bir parodidir.",
      "Jane Austen kitabın içinde bizzat roman türünü savunur; romancıların kendi meslektaşlarını küçümsemesini eleştirir.",
      "Romanın baş kahramanı Catherine Morland, edebiyat tarihinin ilk 'anti-kahraman' genç kız tasvirlerinden biridir."
    ],
    famousQuote: "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
    quoteSpeaker: "Henry Tilney",
    keyCharacters: ["Catherine Morland", "Henry Tilney", "Eleanor Tilney", "Isabella Thorpe", "General Tilney"],
    themes: ["Gotik Hayal Gücü vs Gerçek Hayat", "Edebi Kardeşlik & Roman Savunusu", "Masumiyetin Uyanışı"],
    pageCount: 260,
    initialCopies: "1,750 Adet (Persuasion ile birlikte 4 cilt)",
    originalPublisher: "John Murray, London",
    authorBylines: "By the Author of Sense and Sensibility, Pride and Prejudice, &c.",
    adaptationNote: "2007 Felicity Jones & JJ Feild uyarlaması genç ve taze enerjisiyle çok sevilmiştir.",
    caricatureId: "catherine_tilney"
  },
  {
    id: "persuasion",
    title: "Persuasion",
    turkishTitle: "İkna",
    publicationYear: 1818,
    writtenYears: "1815 – 1816 (Son eseri)",
    coverColor: {
      bg: "#E8F3F1", // Nautical seafoam mist
      border: "#9BC2BC",
      accent: "#24534F",
      spine: "#163835",
      text: "#0F2826",
      badge: "#CFE4E1",
      foil: "#C49A45"
    },
    synopsis: "Jane Austen'ın en olgun, en hüzünlü ve en derin başyapıtı. 19 yaşındayken fakir bir deniz subayı olan Frederick Wentworth'e aşık olan Anne Elliot, züppe ailesi ve akıl hocası Lady Russell tarafından evlenmemeye 'ikna' edilmiştir. Sekiz yıl sonra Wentworth zengin ve saygın bir Donanma Kaptanı olarak geri döner. Anne ise solgunlaşmış, ailesi tarafından ihmal edilen 27 yaşında bir kadındır. İki kalbin küllenmiş sanılan aşkı, Bath salonlarında yeniden alevlenir.",
    historicalBackstory: "Jane Austen bu romanı amansız hastalığının pençesindeyken, gücünün tükendiği son aylarında kaleme aldı. Kitabın orijinal final sahnesinden memnun kalmayıp ölümünden kısa süre önce meşhur 'Wentworth'ün Mektubu' sahnesini yeniden yazmıştır. Kaptanın mektubu ('You pierce my soul. I am half agony, half hope...'), edebiyat tarihinin tartışmasız en romantik mektubu kabul edilir. Eser, Jane'in vefatından sonra kardeşi Henry Austen'ın yazdığı dokunaklı 'Biyografik Not' ile birlikte basılmıştır.",
    publishingTrivia: [
      "Kitabın 'Persuasion' (İkna) adını muhtemelen Jane'in kendisi değil, ölümünden sonra eseri yayına hazırlayan kardeşi Henry Austen vermiştir; Jane çalışma aşamasında kitaba 'The Elliots' diyordu.",
      "Jane Austen bu eserde ilk kez soylu aristokratları kof ve asalak, deniz subaylarını ise hakiki centilmenler olarak resmetmiştir.",
      "Kaptan Wentworth'ün mektubu günümüzde Londra British Library'de özel korumada sergilenmektedir."
    ],
    famousQuote: "You pierce my soul. I am half agony, half hope... Tell me not that I am too late, that such precious feelings are gone for ever.",
    quoteSpeaker: "Kaptan Frederick Wentworth",
    keyCharacters: ["Anne Elliot", "Kaptan Frederick Wentworth", "Sir Walter Elliot", "Lady Russell", "William Elliot"],
    themes: ["İkinci Şanslar ve Kalıcı Sadakat", "Sosyal Sınıfların Değişimi", "Sessiz Direnç ve İçsel Olgunluk"],
    pageCount: 280,
    initialCopies: "1,750 Adet (Northanger Abbey ile birlikte)",
    originalPublisher: "John Murray, London",
    authorBylines: "By the Author of Sense and Sensibility, Pride and Prejudice, &c.",
    adaptationNote: "1995 Amanda Root & Ciarán Hinds filmi ve 2007 Sally Hawkins BBC uyarlaması klasik sayılır.",
    caricatureId: "anne_wentworth"
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: "rev-1",
    bookId: "pride-and-prejudice",
    userName: "Zehra (Edebiyat Öğrencisi)",
    userAvatar: "elizabeth_darcy",
    rating: 5,
    comment: "Edebiyat tarihinin en kusursuz düşmanlıktan aşka (enemies-to-lovers) kurgusu! Elizabeth'in keskin zekası ve Darcy'nin Pemberley'deki dönüşümü her okuyuşumda içimi titretiyor. Vize ödevim için hazırladığım bu projede bir numaraya koymasaydım kendimi affetmezdim.",
    date: "14 Ekim 2026",
    likes: 42
  },
  {
    id: "rev-2",
    bookId: "pride-and-prejudice",
    userName: "Lord Byron Hayranı",
    userAvatar: "regency_dandy",
    rating: 4.5,
    comment: "Mr. Collins'in akşam yemeğinde patatesleri övdüğü sahne komedinin zirvesidir. Austen sadece aşk değil, inanılmaz bir taşra hicvi yazıyor.",
    date: "20 Eylül 2026",
    likes: 19
  },
  {
    id: "rev-3",
    bookId: "persuasion",
    userName: "Selin B.",
    userAvatar: "anne_wentworth",
    rating: 5,
    comment: "Gençken Pride and Prejudice favorimken, yaş aldıkça Persuasion kalbimin mutlak sahibi oldu. Kaptan Wentworth'ün o mektubu ('Ruhumu delip geçiyorsun. Yarı keder, yarı umut içindeyim')... Ağlamadan okuyabilen var mı gerçekten?",
    date: "2 Ekim 2026",
    likes: 38
  },
  {
    id: "rev-4",
    bookId: "emma",
    userName: "Mert K.",
    userAvatar: "regency_cat",
    rating: 4.5,
    comment: "Emma bazen çok sinir bozucu olabiliyor ama işte Austen'ın dehası burada. Kusursuz bir prenses yerine hata yapan, burnu sürtülen ama yüreği temiz bir kadını anlatıyor. Box Hill sahnesindeki pişmanlığı çok sahiciydi.",
    date: "18 Eylül 2026",
    likes: 14
  },
  {
    id: "rev-5",
    bookId: "sense-and-sensibility",
    userName: "Ayşe Gül",
    userAvatar: "dashwood_sisters",
    rating: 4,
    comment: "Elinor'un Marianne uğruna kendi kalbindeki fırtınayı sessizce taşıması fedakarlığın tanımıdır. Albay Brandon ise sessiz suların en asil beyefendisi.",
    date: "25 Ağustos 2026",
    likes: 21
  },
  {
    id: "rev-6",
    bookId: "northanger-abbey",
    userName: "Canan D.",
    userAvatar: "catherine_tilney",
    rating: 4.5,
    comment: "Karanlık gotik romanlarla dalga geçen o kadar tatlı bir parodi ki! Henry Tilney kadınların kumaş ve muslin merakı hakkında ahkam keserken kahkahalar attım.",
    date: "5 Temmuz 2026",
    likes: 17
  },
  {
    id: "rev-7",
    bookId: "mansfield-park",
    userName: "Emre T.",
    userAvatar: "mr_collins",
    rating: 3.5,
    comment: "Fanny Price'a alışmak zaman alıyor, ama Mansfield Park'ın ahlaki derinliği ve Antigua şeker plantasyonları göndermesi Jane Austen'ın çağına ne denli duyarlı olduğunu ispatlıyor.",
    date: "11 Haziran 2026",
    likes: 9
  }
];

export const REGENCY_AVATARS = [
  { id: "elizabeth_darcy", name: "Elizabeth Bennet", desc: "Zeki, özgür ruhlu & hazırcevap", role: "Kahraman" },
  { id: "mr_darcy", name: "Fitzwilliam Darcy", desc: "Gururlu, Pemberley lordu", role: "Centilmen" },
  { id: "emma_woodhouse", name: "Emma Woodhouse", desc: "Çöpçatan, zengin & bağımsız", role: "Hanımefendi" },
  { id: "anne_wentworth", name: "Anne Elliot", desc: "Sadık, zarif & içten", role: "Düşünür" },
  { id: "catherine_tilney", name: "Catherine Morland", desc: "Gotik meraklısı, masum", role: "Kitap Kurdu" },
  { id: "dashwood_sisters", name: "Elinor Dashwood", desc: "Aklın ve ölçünün sesi", role: "Büyük Abla" },
  { id: "mr_collins", name: "Mr. Collins", desc: "Lady Catherine hayranı din adamı", role: "Komedik" },
  { id: "regency_dandy", name: "Regency Dandy", desc: "Kravat bağlama ustası sosyete beyefendisi", role: "Moda İkonu" },
  { id: "regency_cat", name: "Düşes Kedi", desc: "İpek fiyonklu Regency kedisi", role: "Sevimli Maskot" },
  { id: "jane_author", name: "Jane Austen", desc: "Küçük ceviz masasında bir yazar", role: "Usta Romancı" }
];
