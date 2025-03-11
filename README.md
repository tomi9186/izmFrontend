# Frontend Developer Tečaj - React Aplikacija

Ovo je frontend aplikacija razvijena tijekom tečaja za program **Frontend Developer**. Aplikacija je izrađena pomoću **Create React App** i koristi **React Router**, **Bootstrap**, **FontAwesome**, te se povezuje s **WordPress API** za autentifikaciju i dohvaćanje podataka.

## Tehnologije i knjižnice test

- **React 19**
- **React Router v7**
- **Bootstrap 5** / **React Bootstrap**
- **FontAwesome ikone**
- **React Slick** za slider
- **WordPress REST API** + **JWT Authentication**

## Instalacija i pokretanje

### 1. Kloniranje repozitorija
```sh
git https://github.com/tomi9186/izmFrontend.git
```

### 2. Instalacija paketa
Koristi **npm** za instalaciju ovisnosti:
```sh
npm install
```

### 3. Pokretanje razvojnog servera
```sh
npm start
```
Aplikacija će biti dostupna na [http://localhost:3000/](http://localhost:3000/)

## Buildanje za produkciju
Za izradu produkcijske verzije aplikacije koristite:
```sh
npm run build
```
Ovo će generirati optimizirane statične datoteke unutar **build/** mape.

## Deploy
Buildanu verziju možete postaviti na bilo koji hosting koji podržava statične web stranice (**Vercel**, **Netlify**, **GitHub Pages**, ili putem **FTP-a** na server).
