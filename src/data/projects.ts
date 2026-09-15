export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  category: 'client' | 'apps' | 'web';
  status: 'Live' | 'Beta' | 'In progress' | 'Coming soon';
  platforms: string[];
  techTags: string[];
  coverImage?: string;
  externalLinks?: {
    website?: string;
    appStore?: string;
    googlePlay?: string;
  };
  downloads?: {
    appStore?: string;
    googlePlay?: string;
  };
  caseStudy?: {
    summary: string;
    problem: string;
    solutionBullets: string[];
    role: string;
    stack: string[];
    results: string;
    privacyNote?: string;
    screenshots?: string[];
  };
}

export const projects: Project[] = [
  // ── CLIENT / ÜZLETI RENDSZEREK ──
  {

  slug: 'mobil-allatorvosi-erp',
  title: 'Mobil állatorvosi praxis rendszer (ERP/CRM)',
  shortDescription: 'Papír és Excel helyett közös rendszer: mobil rögzítés + keresés + offline szinkron + admin.',
  category: 'client',
  status: 'Live', // ha inkább óvatos lennél: 'Beta' (de 1 éve használják, 15k munkamenet -> simán lehet Live)
  platforms: ['Android', 'iOS', 'Windows'],
  techTags: ['Flutter', 'Firebase', 'SQLite', 'Python'],
  coverImage: '/images/projects/mobil-allatorvosi-erp.webp',
  caseStudy: {
    summary:
      'Egy megrendelői igényekre szabott rendszer, ami kiváltotta a papír- és Excel-alapú munkarögzítést. A terepen dolgozó állatorvosok mobilon rögzítenek, a háttérben pedig offline módban is működik és később automatikusan szinkronizál.',
    problem:
      'A praxis korábban papíron és több külön Excelben vezette az elvégzett munkákat. Ez rengeteg plusz adminisztrációt, hibalehetőséget és csúszást okozott, az adatok pedig szét voltak szórva, ezért a visszakeresés és az egységes nyilvántartás nehézkes volt.',
    solutionBullets: [
      'Mobil app Androidra és iOS-re: munkamenetek rögzítése egyenként vagy tömbben',
      'Keresés kórelőzményekben, tulajdonosokban, lovakban és lovardákban',
      'Útvonaltervezés a helyszínekhez',
      'Offline használat + automatikus szinkron, amikor van kapcsolat',
      'Árkalkuláció és javaslat a rögzített munkák/gyógyszerek alapján',
      'Figyelmeztetések hiányzó vagy ellentmondásos adatoknál',
      'Fotók feltöltése és csatolása a munkamenethez',
      'Windowsos admin alkalmazás: munkamenetek letöltése, szerkesztése/törlése; tulajdonos/ló/lovarda törzsadatok kezelése',
      'Raktár modul (tesztelés alatt): kivételek rögzítése és készletek követése',
    ],
    role:
      'A rendszert egyedüli fejlesztőként készítettem megrendelői igények alapján. A bevezetés fokozatosan történt, a fejlesztések és a kisebb kényelmi/javító frissítések pedig az állatorvosok és adminisztrátorok visszajelzései alapján készülnek.',
    stack: [
      'Flutter (Android / iOS + Windows kliens)',
      'SQLite (helyi adattárolás offline módban)',
      'Firebase / Firestore (felhő + szinkron)',
      'Cloud Functions (szerver oldali logika)',
      'Firebase Auth (felhasználókezelés)',
    ],
    results:
      'Az elmúlt 1 év használata során 15 000 munkamenet került rögzítésre. A rendszer a napi munkát egységesítette, csökkentette a papír/Excel miatti plusz adminisztrációt és a hibalehetőségeket. A felhő oldali költség az offline szinkronizálás miatt is nagyságrendileg pár száz forint volt egy év alatt.',
    privacyNote: 'A képernyőképek anonimizáltak az ügyféladatok védelme miatt.',
    // Fontos: itt jobb, ha valódi fájlútvonalak vannak (ha a komponensed <img src={...}>-t vár).
    // Ha nálad jelenleg címkeként használod, hagyhatod szövegnek – de általában src-nek kell.
    screenshots: [
      '/images/projects/mobil-allatorvosi-erp/01.webp',
      '/images/projects/mobil-allatorvosi-erp/02.webp',
      '/images/projects/mobil-allatorvosi-erp/03.webp',
      '/images/projects/mobil-allatorvosi-erp/04.webp',
      '/images/projects/mobil-allatorvosi-erp/05.webp',
      '/images/projects/mobil-allatorvosi-erp/06.webp',
    ],
  },
},

  // ── SAJÁT APPOK ──
  {
    slug: 'tori24',
    title: 'töri24 – történelem érettségi felkészítő app',
    shortDescription: '1000+ kérdés, kvíz mód, térkép mód, emelt/közép, vázlatok témakörökre bontva.',
    category: 'apps',
    status: 'Live',
    platforms: ['Android', 'iOS'],
    techTags: ['Flutter'],
    coverImage: '/images/projects/tori24.png',
    externalLinks: {
      appStore: 'APP_STORE_LINK',
      googlePlay: 'GOOGLE_PLAY_LINK',
    },
    downloads: {
      appStore: '500+',
      googlePlay: '1000+',
    },
    caseStudy: {
      summary:
        'Mobil alkalmazás, amely segíti a középiskolásokat a történelem érettségire való felkészülésben – strukturált kérdésbankkal, interaktív kvíz módokkal és tömör vázlatokkal.',
      problem:
        'A történelem érettségire való felkészülés során a diákok nehezen rendszerezik az anyagot. A tankönyvek terjedelmesek, a jegyzetelés időigényes, és nehéz felmérni, hol tartanak a felkészülésben. Hiányzott egy mobilra optimalizált, játékos tanulóeszköz.',
      solutionBullets: [
        '1000+ kérdés közép és emelt szintre, témakörökre bontva',
        'Kvíz mód: véletlenszerű vagy tematikus tesztek azonnali kiértékeléssel',
        'Térkép mód: interaktív történelmi térképes feladatok',
        'Vázlatok: tömör, áttekinthető összefoglalók minden témakörhöz',
        'Haladás nyomon követése és statisztikák',
        'Offline működés – nincs szükség internetre a tanuláshoz',
      ],
      role: 'Egyedüli fejlesztőként terveztem és valósítottam meg a teljes alkalmazást: a kérdésbank összeállításától a UX tervezésen és implementáción át a store publishingig.',
      stack: [
        'Flutter (cross-platform mobil)',
        'Dart',
        'SQLite (helyi adattárolás)',
        'Material Design 3',
      ],
      results:
        'Az alkalmazás elérhető az App Store-ban és a Google Play-en. Pozitív visszajelzések a felhasználóktól, különösen a kvíz mód és a vázlatok tekintetében. A rendszeres frissítések új kérdésekkel és funkciókkal bővítik az appot.',
    },
  },
  {
    slug: 'courseforge',
    title: 'CourseForge – díjugrató pályatervező app',
    shortDescription: 'Mobil app díjugrató pályák gyors, pontos megtervezéséhez, egyenesen telefonról.',
    category: 'apps',
    status: 'Beta',
    platforms: ['Web', 'Android', 'iOS'],
    techTags: ['Flutter', 'Dart', 'Web'],
    coverImage: '/images/projects/courseforge.png',
    externalLinks: {
      website: 'https://courseforge.hu',
    },
    caseStudy: {
      summary: 'Mobil alkalmazás díjugrató pályák tervezéséhez – valós méretarányos pályarajzzal, akadályok elhelyezésével és exportálással, hozzá tartozó bemutatkozó weboldallal.',
      problem: 'A pályatervezés papíron vagy általános rajzolóprogramokban lassú és pontatlan: nehéz visszamérni a távolságokat, a vonalvezetést és megosztani a kész pályát a csapattal.',
      solutionBullets: [
        'Valós méretarányos aréna és pálya beállítása',
        'Akadályok egyszerű mozgatása, forgatása, pozicionálása',
        'Vizuális távolság- és vonalvezetés-mérés',
        'Export PDF-be vagy képfájlba, megosztáshoz',
        'Nincs szükség regisztrációra – a pályák helyben, a telefonon tárolódnak',
      ],
      role: 'Egyedüli fejlesztőként dolgozom az alkalmazáson és a hozzá tartozó bemutatkozó weboldalon: koncepció, dizájn, fejlesztés.',
      stack: [
        'Flutter (mobil)',
        'Dart',
      ],
      results: 'Az alkalmazás jelenleg zárt béta tesztelés alatt áll, hamarosan érkezik az App Store-ba és a Google Play-re. A bemutatkozó weboldal (courseforge.hu) élesben elérhető.',
    },
  },

  // ── WEBOLDALAK ──
{
  slug: 'polequi-hu',
  title: 'polequi.hu – céges weboldal',
  shortDescription: 'WordPress alapú céges weboldal szolgáltatásoldalakkal, csapatbemutatóval, cikkekkel és időpontfoglalással.',
  category: 'web',
  status: 'Live',
  platforms: ['Web'],
  techTags: ['WordPress', 'HTML / CSS'],
  coverImage: '/images/projects/polequi-hu.webp',
  externalLinks: {
    website: 'https://polequi.hu',
  },
  caseStudy: {
    summary:
      'A Polequi számára készült WordPress alapú céges weboldal, amely egy helyen mutatja be a szolgáltatásokat, a csapatot, a cikkeket és a kapcsolatfelvételi lehetőségeket.',
    problem:
      'A cél egy olyan online jelenlét kialakítása volt, ahol a praxis szolgáltatásai, munkatársai és aktuális tartalmai átláthatóan megjelennek, és a látogatók könnyen eljutnak a kapcsolatfelvételig vagy az időpontfoglalásig.',
    solutionBullets: [
      'Főoldal szolgáltatásblokkokkal és gyors áttekintéssel',
      'Külön szolgáltatások oldal a részletes bemutatáshoz',
      '„Rólunk” / csapatbemutató oldal munkatársi profilokkal',
      '„Újság” oldal cikkekhez és szakmai tartalmakhoz',
      'Kapcsolat oldal elérhetőségekkel és munkatársi listával',
      'Külön kisállatrendelő oldal időpontfoglalási lehetőséggel',
      'Mobilbarát, könnyen frissíthető WordPress felépítés',
    ],
    role:
      'A weboldal felépítését és kialakítását én készítettem a megrendelő igényei alapján: a struktúrától és oldalfelépítéstől kezdve a tartalmi oldalak és a megjelenés összerakásáig.',
    stack: ['WordPress', 'HTML / CSS'],
    results:
      'Az oldal élőben működik, és egy helyre szervezi a praxis online megjelenését: szolgáltatások, csapat, cikkek, kapcsolat és rendelői időpontfoglalás.',
  },
},
  {
    slug: 'equarion-hu',
    title: 'equarion.hu – lovarda weboldal',
    shortDescription: 'Lovasoktatás, táborok és tereplovaglás bemutatása a Pilis szívében – galériával és kapcsolatfelvétellel.',
    category: 'web',
    status: 'Live',
    platforms: ['Web'],
    techTags: ['Astro', 'HTML/CSS', 'Responsive'],
    coverImage: '/images/projects/equarion-hu.png',
    externalLinks: {
      website: 'https://equarion.hu',
    },
    caseStudy: {
      summary: 'Bemutatkozó weboldal az Equarion lovarda számára – lovasoktatás, táborok és tereplovaglás bemutatásával, galériával és kapcsolatfelvételi lehetőséggel.',
      problem: 'A lovardának szüksége volt egy szép, egyszerű weboldalra, amelyen bemutathatja a lovait, a táborait és a helyszínt, illetve ahol az érdeklődők könnyen felvehetik velük a kapcsolatot.',
      solutionBullets: [
        'Vizuálisan gazdag főoldal nagy, hangulatos képekkel és egyértelmű call-to-action gombokkal (Táboraink, Kapcsolat)',
        'Lovaink oldal a farmon élő lovak bemutatásával',
        'Táborok oldal a nyári lovastáborok részletes ismertetésével',
        'Rólunk oldal a lovarda és a csapat bemutatásával',
        'Galéria szekció a helyszínről és a foglalkozásokról',
        'Kapcsolat oldal elérhetőségekkel',
        'Angol nyelvű oldalváltó a külföldi érdeklődőknek',
        'Mobilbarát, gyors betöltésű, letisztult felépítés',
      ],
      role: 'Teljes weboldal tervezés és fejlesztés.',
      stack: ['Astro', 'HTML / CSS', 'Cloudflare Pages'],
      results: 'Az oldal élesben elérhető az equarion.hu címen.',
    },
  },
];

// ── HELPERS ──

export type Category = Project['category'];

export const categoryLabels: Record<Category, string> = {
  client: 'Ügyfél / üzleti rendszerek',
  apps: 'Saját appok',
  web: 'Weboldalak',
};

export const categoryOrder: Category[] = ['client', 'apps', 'web'];

export function getProjectsByCategory(cat: Category): Project[] {
  return projects.filter((p) => p.category === cat);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function statusColor(status: Project['status']): string {
  switch (status) {
    case 'Live': return '#16a34a';
    case 'Beta': return '#ca8a04';
    case 'In progress': return '#2563eb';
    case 'Coming soon': return '#888888';
  }
}
