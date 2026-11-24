# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Töri24

A weboldal statikus Astro buildje a `dist/` könyvtárba kerül. A Töri24 öt oldala a `src/pages/tori24/` alatt van. A támogatási és adatvédelmi e-mail-cím, illetve az áruházi linkek a `src/data/tori24.ts` fájlban módosíthatók. A Google Playen közzétett támogatási címet használjuk alapértelmezésként. Az alkalmazásikon és a képernyőképek a Töri24 Google Play-adatlapjáról származnak, a weboldal helyben szolgálja ki őket.

Éles kiadás előtt

1. Erősítsd meg az alkalmazás adatkezelőjének és üzemeltetőjének hivatalos adatait, a fogyasztói panaszkezelés és az érintetti kérelmek elérhetőségét. Töltsd ki a két jogi tervezet TODO-mezőit, és határozd meg a hatálybalépés dátumát.
2. Ellenőrizd mindkét mobilos kiadás alkalmazásforrását és éles konfigurációját. Szükséges az SDK-k és adatfolyamok leltára, az AdMob és az UMP beállításai (beleértve a kiskorúakat és a hozzájárulás visszavonását), a RevenueCat mezői és beállításai, az áruházi tranzakciók, a szolgáltatói szerepek, az adattovábbítások, célonként a jogalap és megőrzési idő, valamint a joggyakorlás és törlés menete. Ellenőrizd az opcionális analitikát, hibajelentést, a háttérrendszert és a fiókokat is, és igazítsd az áruházi adatvédelmi nyilatkozatokat a tényleges működéshez.
3. Ellenőrizd iOS-en és Androidon a reklámmentesítés, a visszaállítás és az UMP adatvédelmi menüpont pontos helyét és működését. A weboldal útmutatója ezeket kiadási verziónként kezeli. A vásárlási jóváhagyás az aktuális árat az alkalmazásban mutatja.
4. A `public/app-ads.txt` fájlhoz add hozzá az AdMob-fiókból kimásolt hivatalos authorized seller sort. Más alkalmazások érvényes sorait őrizd meg. A kiinduló fájl csak megjegyzést tartalmaz, így a hitelesítés a hivatalos sor hozzáadása után végezhető el.
5. A Play Console áruházi kapcsolattartási adatai között webhelyként, az App Store Connectben marketing URL-ként add meg a `https://bagemedia.hu/tori24` címet. Az adatvédelmi URL a `/tori24/privacy`, a támogatási URL a `/tori24/support` legyen a bagemedia.hu domainen. Az AdMob az áruházi adatlap fejlesztői webhelyének domainjéből állapítja meg, hol keresse a gyökérszintű `/app-ads.txt` fájlt.
6. A telepítés után ellenőrizd az öt Töri24-oldalt, a régi projekt-URL átirányítását, a sitemapet és a robots.txt-t. Az alábbi parancs közvetlen, átirányítás nélküli, `200` válaszának fejléce `text/plain; charset=utf-8`, a törzsében pedig a tényleges AdMob-sornak kell megjelennie. Ezután indítsd el az ellenőrzést az AdMob felületén.

```sh
curl -i https://bagemedia.hu/app-ads.txt
```

A Cloudflare Pages konfigurációját a `public/_headers` és `public/_redirects` fájlok adják meg. A statikus HTML-oldalak követik a meglévő perjeles Cloudflare URL-konvenciót. Helyi ellenőrzéshez az `npm run build` és az `npm run preview` parancs használható.

[AdMob útmutató](https://support.google.com/admob/answer/9363762) · [Google UMP Flutter útmutató](https://developers.google.com/admob/flutter/privacy) · [RevenueCat vásárlás-visszaállítás](https://www.revenuecat.com/docs/getting-started/restoring-purchases)
