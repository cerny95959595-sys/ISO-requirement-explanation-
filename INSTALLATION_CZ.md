# Instalace ISO Atlas Professional 2026

Verze aplikace: **3.0.0**  
Stav databáze: **2026-08-05**

## 1. Nahrání do vytvořeného GitHub repozitáře

Pro tento projekt je připraven repozitář:

```text
ISO-requirement-explanation-
```

1. Stáhněte soubor `ISO_Atlas_Professional_2026_GitHub_Pages.zip`.
2. Na PC klikněte na ZIP pravým tlačítkem a vyberte **Extrahovat vše**.
3. Otevřete rozbalenou složku. Musíte v ní přímo vidět například:

```text
index.html
app.js
ui-pro.js
data.js
styles.css
manifest.webmanifest
sw.js
requirements-data.json
requirements-database.csv
audit-question-bank.csv
icons/
```

4. V prázdném GitHub repozitáři klikněte na modrý odkaz **uploading an existing file**.
5. V rozbalené složce označte celý obsah pomocí `Ctrl + A`.
6. Přetáhněte označené soubory do uploadovacího pole GitHubu.
7. Před potvrzením ověřte, že GitHub ukazuje například `index.html`, nikoli `ISO_Atlas_Professional_2026/index.html`.
8. Do popisu změny zadejte například:

```text
Deploy ISO Atlas Professional 3.0.0
```

9. Klikněte na **Commit changes**.

## 2. Aktivace GitHub Pages

1. Otevřete **Settings** repozitáře.
2. V levém menu klikněte na **Pages**.
3. V části **Build and deployment** nastavte:

```text
Source: Deploy from a branch
Branch: main
Folder: /(root)
```

4. Klikněte na **Save**.
5. Vyčkejte přibližně 1–3 minuty na dokončení nasazení.

Při současném názvu repozitáře bude adresa pravděpodobně:

```text
https://cerny95959595-sys.github.io/ISO-requirement-explanation-/
```

Pokud se název repozitáře změní, změní se odpovídajícím způsobem i poslední část adresy.

## 3. Instalace na iPhone

1. Otevřete zveřejněnou adresu v aplikaci **Safari**.
2. Počkejte, až se aplikace kompletně načte.
3. Klepněte na ikonu **Sdílet**.
4. Vyberte **Přidat na plochu**.
5. Potvrďte název **ISO Atlas Pro** a klepněte na **Přidat**.
6. Aplikaci dále spouštějte přes ikonu na ploše.

Po prvním kompletním online načtení může aplikace pracovat offline. Oficiální zdrojové odkazy samozřejmě vyžadují připojení k internetu.

## 4. Instalace na Windows nebo Mac

Aplikaci lze používat přímo v prohlížeči. V podporovaném prohlížeči je možné použít také volbu **Instalovat aplikaci / Install app** v adresním řádku nebo v nabídce prohlížeče.

## 5. Sdílení s kolegy

Kolegům stačí poslat zveřejněnou adresu. GitHub účet nepotřebují. Každý uživatel však pracuje se samostatnými lokálními daty ve svém prohlížeči:

- audity se mezi uživateli nesynchronizují;
- uživatelé nevidí automaticky výsledky ostatních;
- přechod na jiný telefon nebo PC vyžaduje export a import zálohy;
- při vymazání dat prohlížeče může dojít ke ztrátě neexportovaných záznamů.

## 6. Aktualizace aplikace

1. Před větší aktualizací proveďte v aplikaci export zálohy.
2. Nahrajte do repozitáře všechny soubory nové verze a povolte jejich přepsání.
3. Potvrďte nový commit.
4. Po dokončení GitHub Pages aplikaci na iPhonu úplně zavřete a znovu otevřete.
5. Pokud se zobrazí upozornění na novou verzi, potvrďte obnovení.

## 7. Veřejnost a důvěrnost

Tento GitHub repozitář a jeho GitHub Pages jsou veřejné. Veřejné jsou zdrojové soubory aplikace a vestavěná vzdělávací databáze. Auditní poznámky zadané při používání se standardně ukládají pouze lokálně v prohlížeči, nikoli do repozitáře.

Do veřejného repozitáře nevkládejte:

- interní postupy a neveřejné SharePoint soubory;
- zákaznické nebo dodavatelské informace;
- reklamace, auditní zprávy, FMEA nebo personální údaje;
- hesla, tokeny, API klíče nebo přístupové údaje.

Pro řízené firemní používání s přihlášením, společnými audity, oprávněními a centrálním reportingem je vhodné nasazení na SharePoint/Azure nebo interní infrastrukturu.

## 8. Platnost obsahu

Aplikace používá vlastní parafráze a původní auditní otázky. Není náhradou licencovaných normativních dokumentů. Před vystavením zjištění nebo rozhodnutím o shodě ověřte kritérium podle oficiální aktuální normy, dodatků, SI/FAQ, legislativy a zákaznických specifických požadavků.
