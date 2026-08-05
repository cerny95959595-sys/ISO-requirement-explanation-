(() => {
  'use strict';

  const DATA = window.ISO_ATLAS_DATA || {};
  const UI = {"en":{"appTitle":"ISO Requirements & Audit Atlas 2026","appSubtitle":"Requirements, explanations, quizzes and audit preparation","home":"Home","requirements":"Requirements","audit":"Audit","quiz":"Quiz","matrix":"Matrix","more":"More","language":"Language","theme":"Theme","system":"System","light":"Light","dark":"Dark","search":"Search requirement, topic or clause…","allStandards":"All standards","allChapters":"All chapters","allPriorities":"All priorities","high":"High","medium":"Medium","low":"Low","bookmarksOnly":"Bookmarks only","new2026Only":"2026 changes only","clearFilters":"Clear filters","requirement":"Requirement","explanation":"Practical explanation","evidence":"Typical evidence","pitfalls":"Common pitfalls","auditQuestions":"Audit questions","internalAudit":"Internal audit","customerAudit":"Customer audit","certificationAudit":"ISO / certification audit","open":"Open","close":"Close","save":"Save","saved":"Saved","bookmark":"Bookmark","removeBookmark":"Remove bookmark","copy":"Copy","copied":"Copied","print":"Print / PDF","share":"Share","details":"Details","officialStatus":"Official edition status","dataAsOf":"Data verified as of","transitionWatch":"Transition watch","nonNormative":"Non-normative readiness guidance","startAudit":"Create audit checklist","auditHistory":"Audit history","auditName":"Audit name / project","auditType":"Audit type","selectStandards":"Select standards","questionCount":"Question count","chapterScope":"Chapter scope","all":"All","generateAudit":"Generate audit","resume":"Resume","delete":"Delete","duplicate":"Duplicate","exportCsv":"Export CSV","exportJson":"Export JSON","completeAudit":"Complete audit","reopenAudit":"Reopen audit","status":"Status","created":"Created","updated":"Updated","completed":"Completed","openAudit":"Open audit","noAudits":"No audit checklists yet.","assessment":"Assessment","notAssessed":"Not assessed","conform":"Conform","ofi":"Opportunity for improvement","minor":"Minor nonconformity","major":"Major nonconformity","na":"Not applicable","objectiveEvidence":"Objective evidence / notes","finding":"Finding","action":"Corrective action / follow-up","owner":"Owner","dueDate":"Due date","auditProgress":"Assessment progress","findingsSummary":"Findings summary","viewRequirement":"View requirement","quizSetup":"Quiz setup","quizMode":"Quiz mode","intentMode":"Identify the requirement","evidenceMode":"Select suitable evidence","clauseMode":"Identify the clause","startQuiz":"Start quiz","nextQuestion":"Next question","finishQuiz":"Finish quiz","score":"Score","correct":"Correct","incorrect":"Incorrect","yourAnswer":"Your answer","correctAnswer":"Correct answer","tryAgain":"New quiz","quizHistory":"Quiz history","noQuizHistory":"No completed quizzes yet.","integratedMatrix":"Integrated management-system matrix","matrixHelp":"Compare related topics and clauses across the four standards.","topic":"Topic","clause":"Clause","glossary":"Glossary","sources":"Official sources","settings":"Settings & data","privacy":"Privacy and hosting","privacyText":"Audit records, notes and quiz progress are stored locally in this browser. They are not uploaded by this static app. If hosted on public GitHub Pages, the application files and built-in database are public; do not embed confidential company information in the repository.","exportBackup":"Export full backup","importBackup":"Import backup","resetData":"Reset local data","install":"Install on phone / PC","installText":"On iPhone: open in Safari → Share → Add to Home Screen. On supported desktop browsers use Install app. First online load enables offline use.","shareApp":"Share application","downloadDatabase":"Download database CSV","downloadAuditBank":"Download audit-question CSV","procedureLink":"Procedure link","templateLink":"Template link","evidenceLink":"Evidence / record link","linksHelp":"Optional links are stored only in this browser. Use an internal SharePoint URL for company-controlled documents.","saveLinks":"Save links","count":"records","results":"results","noResults":"No matching requirements.","mandatoryNotice":"Use licensed official ISO standards for normative interpretation and certification decisions.","current":"Current","transition":"Transition / publication watch","revision":"Revision watch","readiness":"Readiness","statsRequirements":"Clause-level records","statsAudit":"Audit questions","statsLanguages":"Languages","statsStandards":"Standards","quickActions":"Quick actions","browseRequirements":"Browse requirements","runQuiz":"Run knowledge test","prepareAudit":"Prepare an audit","lastActivities":"Recent activity","none":"None","filter":"Filter","back":"Back","confirmDelete":"Delete this item permanently?","confirmReset":"Delete all locally stored audits, progress, bookmarks and links?","invalidBackup":"The selected file is not a valid ISO Atlas backup.","backupImported":"Backup imported.","localOnly":"Local browser storage","offlineReady":"Offline-ready PWA","version":"Version","chapter":"Chapter","selectAtLeastOne":"Select at least one standard.","questionsAvailable":"questions available","sample":"Sample","auditObjective":"Audit objective","auditScope":"Scope / site / process","leadAuditor":"Lead auditor","auditee":"Auditee / contact","notes":"Notes","editSetup":"Audit information","backToAudits":"Back to audits","showOnlyOpen":"Show only unassessed/findings","expandAll":"Expand all","collapseAll":"Collapse all","standardsStatus":"Standards status for the 2026 planning horizon","yearEndNote":"Year-end planning note","yearEndText":"ISO 14001:2026 is already current. ISO 9001 Edition 6 is expected in 2026 but final requirements must be confirmed after official publication. ISO 45001 and ISO 50001 remain on their current 2018 editions with Amendment 1:2024 at the build date.","auditDisclaimer":"The checklist supports preparation and sampling; it does not replace auditor competence, audit planning or the licensed standard.","customerLensHelp":"Focuses on contractual, product/service, delivery, traceability, change and customer-specific controls.","internalLensHelp":"Focuses on process effectiveness, implementation, ownership, risk and internal follow-up.","certLensHelp":"Focuses on conformity, objective evidence, system effectiveness and certification readiness.","markAllNA":"Mark visible as N/A","unanswered":"Unanswered","answered":"Answered","download":"Download","officialLink":"Official ISO page","sourceNote":"Edition status is based on official ISO sources listed here.","showEnglish":"Show English reference","hideEnglish":"Hide English reference"},"cs":{"appTitle":"ISO Requirements & Audit Atlas 2026","appSubtitle":"Požadavky, vysvětlení, testy a příprava auditů","home":"Domů","requirements":"Požadavky","audit":"Audit","quiz":"Test","matrix":"Matice","more":"Více","language":"Jazyk","theme":"Vzhled","system":"Systémový","light":"Světlý","dark":"Tmavý","search":"Hledat požadavek, téma nebo článek…","allStandards":"Všechny normy","allChapters":"Všechny kapitoly","allPriorities":"Všechny priority","high":"Vysoká","medium":"Střední","low":"Nízká","bookmarksOnly":"Pouze záložky","new2026Only":"Pouze změny 2026","clearFilters":"Vymazat filtry","requirement":"Požadavek","explanation":"Praktické vysvětlení","evidence":"Typické důkazy","pitfalls":"Časté nedostatky","auditQuestions":"Auditní otázky","internalAudit":"Interní audit","customerAudit":"Zákaznický audit","certificationAudit":"ISO / certifikační audit","open":"Otevřít","close":"Zavřít","save":"Uložit","saved":"Uloženo","bookmark":"Přidat záložku","removeBookmark":"Odebrat záložku","copy":"Kopírovat","copied":"Zkopírováno","print":"Tisk / PDF","share":"Sdílet","details":"Detail","officialStatus":"Stav oficiálního vydání","dataAsOf":"Data ověřena k","transitionWatch":"Sledování přechodu","nonNormative":"Nenormativní doporučení k připravenosti","startAudit":"Vytvořit auditní checklist","auditHistory":"Historie auditů","auditName":"Název auditu / projektu","auditType":"Typ auditu","selectStandards":"Vyberte normy","questionCount":"Počet otázek","chapterScope":"Rozsah kapitol","all":"Vše","generateAudit":"Vygenerovat audit","resume":"Pokračovat","delete":"Smazat","duplicate":"Duplikovat","exportCsv":"Export CSV","exportJson":"Export JSON","completeAudit":"Dokončit audit","reopenAudit":"Znovu otevřít","status":"Stav","created":"Vytvořeno","updated":"Aktualizováno","completed":"Dokončeno","openAudit":"Otevřený audit","noAudits":"Zatím nebyl vytvořen žádný auditní checklist.","assessment":"Hodnocení","notAssessed":"Nehodnoceno","conform":"Shoda","ofi":"Příležitost ke zlepšení","minor":"Menší neshoda","major":"Závažná neshoda","na":"Není relevantní","objectiveEvidence":"Objektivní důkaz / poznámky","finding":"Zjištění","action":"Nápravné opatření / následný úkol","owner":"Vlastník","dueDate":"Termín","auditProgress":"Průběh hodnocení","findingsSummary":"Souhrn zjištění","viewRequirement":"Zobrazit požadavek","quizSetup":"Nastavení testu","quizMode":"Režim testu","intentMode":"Určit požadavek","evidenceMode":"Vybrat vhodný důkaz","clauseMode":"Určit článek","startQuiz":"Spustit test","nextQuestion":"Další otázka","finishQuiz":"Dokončit test","score":"Výsledek","correct":"Správně","incorrect":"Nesprávně","yourAnswer":"Vaše odpověď","correctAnswer":"Správná odpověď","tryAgain":"Nový test","quizHistory":"Historie testů","noQuizHistory":"Zatím nebyl dokončen žádný test.","integratedMatrix":"Matice integrovaného systému managementu","matrixHelp":"Porovnejte související témata a články napříč čtyřmi normami.","topic":"Téma","clause":"Článek","glossary":"Slovník","sources":"Oficiální zdroje","settings":"Nastavení a data","privacy":"Soukromí a hosting","privacyText":"Auditní záznamy, poznámky a výsledky testů se ukládají lokálně v tomto prohlížeči. Statická aplikace je nikam neodesílá. Při hostování na veřejném GitHub Pages jsou soubory aplikace a vestavěná databáze veřejné; nevkládejte do repozitáře důvěrné firemní informace.","exportBackup":"Exportovat úplnou zálohu","importBackup":"Importovat zálohu","resetData":"Vymazat lokální data","install":"Instalace do telefonu / PC","installText":"Na iPhonu: otevřete v Safari → Sdílet → Přidat na plochu. V podporovaném prohlížeči na PC použijte Instalovat aplikaci. První online načtení umožní následný offline provoz.","shareApp":"Sdílet aplikaci","downloadDatabase":"Stáhnout databázi CSV","downloadAuditBank":"Stáhnout CSV auditních otázek","procedureLink":"Odkaz na postup","templateLink":"Odkaz na šablonu","evidenceLink":"Odkaz na důkaz / záznam","linksHelp":"Volitelné odkazy se ukládají pouze v tomto prohlížeči. Pro řízené firemní dokumenty použijte interní SharePoint URL.","saveLinks":"Uložit odkazy","count":"záznamů","results":"výsledků","noResults":"Žádné odpovídající požadavky.","mandatoryNotice":"Pro normativní výklad a certifikační rozhodnutí používejte licencované oficiální normy ISO.","current":"Aktuální","transition":"Sledování přechodu / publikace","revision":"Sledování revize","readiness":"Připravenost","statsRequirements":"Záznamy na úrovni článků","statsAudit":"Auditní otázky","statsLanguages":"Jazyky","statsStandards":"Normy","quickActions":"Rychlé akce","browseRequirements":"Procházet požadavky","runQuiz":"Spustit znalostní test","prepareAudit":"Připravit audit","lastActivities":"Poslední aktivita","none":"Žádná","filter":"Filtr","back":"Zpět","confirmDelete":"Opravdu tuto položku trvale smazat?","confirmReset":"Opravdu smazat všechny lokálně uložené audity, výsledky, záložky a odkazy?","invalidBackup":"Vybraný soubor není platná záloha ISO Atlas.","backupImported":"Záloha byla importována.","localOnly":"Lokální úložiště prohlížeče","offlineReady":"Offline PWA","version":"Verze","chapter":"Kapitola","selectAtLeastOne":"Vyberte alespoň jednu normu.","questionsAvailable":"dostupných otázek","sample":"Vzorek","auditObjective":"Cíl auditu","auditScope":"Rozsah / závod / proces","leadAuditor":"Vedoucí auditor","auditee":"Auditovaný / kontakt","notes":"Poznámky","editSetup":"Informace o auditu","backToAudits":"Zpět na audity","showOnlyOpen":"Pouze nehodnocené / zjištění","expandAll":"Rozbalit vše","collapseAll":"Sbalit vše","standardsStatus":"Stav norem pro plánovací horizont 2026","yearEndNote":"Poznámka k plánování ke konci roku","yearEndText":"ISO 14001:2026 je již aktuální. ISO 9001, 6. vydání, se očekává v roce 2026, ale konečné požadavky musí být potvrzeny až po oficiální publikaci. ISO 45001 a ISO 50001 zůstávají k datu sestavení na aktuálních vydáních 2018 s dodatkem 1:2024.","auditDisclaimer":"Checklist podporuje přípravu a vzorkování; nenahrazuje kompetenci auditora, plán auditu ani licencovanou normu.","customerLensHelp":"Zaměření na smluvní požadavky, produkt/službu, dodávky, sledovatelnost, změny a specifické požadavky zákazníka.","internalLensHelp":"Zaměření na účinnost procesu, implementaci, odpovědnost, rizika a interní následná opatření.","certLensHelp":"Zaměření na shodu, objektivní důkazy, účinnost systému a připravenost k certifikaci.","markAllNA":"Označit viditelné jako N/A","unanswered":"Nezodpovězeno","answered":"Zodpovězeno","download":"Stáhnout","officialLink":"Oficiální stránka ISO","sourceNote":"Stav vydání vychází z níže uvedených oficiálních zdrojů ISO.","showEnglish":"Zobrazit anglickou referenci","hideEnglish":"Skrýt anglickou referenci"},"de":{"appTitle":"ISO Requirements & Audit Atlas 2026","appSubtitle":"Anforderungen, Erläuterungen, Tests und Auditvorbereitung","home":"Start","requirements":"Anforderungen","audit":"Audit","quiz":"Test","matrix":"Matrix","more":"Mehr","language":"Sprache","theme":"Design","system":"System","light":"Hell","dark":"Dunkel","search":"Anforderung, Thema oder Abschnitt suchen…","allStandards":"Alle Normen","allChapters":"Alle Kapitel","allPriorities":"Alle Prioritäten","high":"Hoch","medium":"Mittel","low":"Niedrig","bookmarksOnly":"Nur Lesezeichen","new2026Only":"Nur Änderungen 2026","clearFilters":"Filter löschen","requirement":"Anforderung","explanation":"Praktische Erläuterung","evidence":"Typische Nachweise","pitfalls":"Häufige Schwachstellen","auditQuestions":"Auditfragen","internalAudit":"Internes Audit","customerAudit":"Kundenaudit","certificationAudit":"ISO- / Zertifizierungsaudit","open":"Öffnen","close":"Schließen","save":"Speichern","saved":"Gespeichert","bookmark":"Lesezeichen setzen","removeBookmark":"Lesezeichen entfernen","copy":"Kopieren","copied":"Kopiert","print":"Drucken / PDF","share":"Teilen","details":"Details","officialStatus":"Status der offiziellen Ausgabe","dataAsOf":"Daten geprüft zum","transitionWatch":"Übergangsbeobachtung","nonNormative":"Nichtnormative Bereitschaftshinweise","startAudit":"Auditcheckliste erstellen","auditHistory":"Audithistorie","auditName":"Auditname / Projekt","auditType":"Auditart","selectStandards":"Normen auswählen","questionCount":"Anzahl Fragen","chapterScope":"Kapitelumfang","all":"Alle","generateAudit":"Audit erzeugen","resume":"Fortsetzen","delete":"Löschen","duplicate":"Duplizieren","exportCsv":"CSV exportieren","exportJson":"JSON exportieren","completeAudit":"Audit abschließen","reopenAudit":"Audit wieder öffnen","status":"Status","created":"Erstellt","updated":"Aktualisiert","completed":"Abgeschlossen","openAudit":"Offenes Audit","noAudits":"Noch keine Auditcheckliste vorhanden.","assessment":"Bewertung","notAssessed":"Nicht bewertet","conform":"Konform","ofi":"Verbesserungsmöglichkeit","minor":"Geringfügige Nichtkonformität","major":"Wesentliche Nichtkonformität","na":"Nicht anwendbar","objectiveEvidence":"Objektiver Nachweis / Notizen","finding":"Feststellung","action":"Korrekturmaßnahme / Nachverfolgung","owner":"Verantwortlicher","dueDate":"Fällig am","auditProgress":"Bewertungsfortschritt","findingsSummary":"Zusammenfassung der Feststellungen","viewRequirement":"Anforderung anzeigen","quizSetup":"Testeinstellungen","quizMode":"Testmodus","intentMode":"Anforderung erkennen","evidenceMode":"Geeigneten Nachweis auswählen","clauseMode":"Abschnitt erkennen","startQuiz":"Test starten","nextQuestion":"Nächste Frage","finishQuiz":"Test beenden","score":"Ergebnis","correct":"Richtig","incorrect":"Falsch","yourAnswer":"Ihre Antwort","correctAnswer":"Richtige Antwort","tryAgain":"Neuer Test","quizHistory":"Testhistorie","noQuizHistory":"Noch kein Test abgeschlossen.","integratedMatrix":"Matrix des integrierten Managementsystems","matrixHelp":"Verwandte Themen und Abschnitte der vier Normen vergleichen.","topic":"Thema","clause":"Abschnitt","glossary":"Glossar","sources":"Offizielle Quellen","settings":"Einstellungen & Daten","privacy":"Datenschutz und Hosting","privacyText":"Auditaufzeichnungen, Notizen und Testergebnisse werden lokal in diesem Browser gespeichert. Diese statische App lädt sie nicht hoch. Bei Hosting auf öffentlichen GitHub Pages sind App-Dateien und eingebaute Datenbank öffentlich; keine vertraulichen Unternehmensinformationen in das Repository einbetten.","exportBackup":"Vollständige Sicherung exportieren","importBackup":"Sicherung importieren","resetData":"Lokale Daten zurücksetzen","install":"Installation auf Telefon / PC","installText":"Auf dem iPhone: in Safari öffnen → Teilen → Zum Home-Bildschirm. In unterstützten Desktop-Browsern App installieren verwenden. Nach dem ersten Online-Laden ist Offline-Nutzung möglich.","shareApp":"Anwendung teilen","downloadDatabase":"Datenbank-CSV herunterladen","downloadAuditBank":"Auditfragen-CSV herunterladen","procedureLink":"Link zum Verfahren","templateLink":"Link zur Vorlage","evidenceLink":"Link zum Nachweis / Datensatz","linksHelp":"Optionale Links werden nur in diesem Browser gespeichert. Für gelenkte Unternehmensdokumente eine interne SharePoint-URL verwenden.","saveLinks":"Links speichern","count":"Datensätze","results":"Ergebnisse","noResults":"Keine passenden Anforderungen.","mandatoryNotice":"Für normative Auslegung und Zertifizierungsentscheidungen lizenzierte offizielle ISO-Normen verwenden.","current":"Aktuell","transition":"Übergangs- / Veröffentlichungsbeobachtung","revision":"Revisionsbeobachtung","readiness":"Bereitschaft","statsRequirements":"Datensätze auf Abschnittsebene","statsAudit":"Auditfragen","statsLanguages":"Sprachen","statsStandards":"Normen","quickActions":"Schnellaktionen","browseRequirements":"Anforderungen durchsuchen","runQuiz":"Wissenstest starten","prepareAudit":"Audit vorbereiten","lastActivities":"Letzte Aktivität","none":"Keine","filter":"Filter","back":"Zurück","confirmDelete":"Diesen Eintrag endgültig löschen?","confirmReset":"Alle lokal gespeicherten Audits, Ergebnisse, Lesezeichen und Links löschen?","invalidBackup":"Die ausgewählte Datei ist keine gültige ISO-Atlas-Sicherung.","backupImported":"Sicherung importiert.","localOnly":"Lokaler Browserspeicher","offlineReady":"Offline-PWA","version":"Version","chapter":"Kapitel","selectAtLeastOne":"Mindestens eine Norm auswählen.","questionsAvailable":"Fragen verfügbar","sample":"Stichprobe","auditObjective":"Auditziel","auditScope":"Umfang / Standort / Prozess","leadAuditor":"Leitender Auditor","auditee":"Auditierter / Kontakt","notes":"Notizen","editSetup":"Auditinformationen","backToAudits":"Zurück zu Audits","showOnlyOpen":"Nur unbewertete / Feststellungen","expandAll":"Alle öffnen","collapseAll":"Alle schließen","standardsStatus":"Normenstatus für den Planungshorizont 2026","yearEndNote":"Hinweis zur Jahresendplanung","yearEndText":"ISO 14001:2026 ist bereits aktuell. ISO 9001 Ausgabe 6 wird 2026 erwartet; endgültige Anforderungen sind jedoch erst nach offizieller Veröffentlichung zu bestätigen. ISO 45001 und ISO 50001 bleiben zum Erstellungsdatum auf ihren aktuellen Ausgaben 2018 mit Änderung 1:2024.","auditDisclaimer":"Die Checkliste unterstützt Vorbereitung und Stichproben; sie ersetzt weder Auditorenkompetenz noch Auditplanung oder die lizenzierte Norm.","customerLensHelp":"Fokus auf Vertrag, Produkt/Dienstleistung, Lieferung, Rückverfolgbarkeit, Änderungen und kundenspezifische Anforderungen.","internalLensHelp":"Fokus auf Prozesswirksamkeit, Umsetzung, Verantwortung, Risiken und interne Nachverfolgung.","certLensHelp":"Fokus auf Konformität, objektive Nachweise, Systemwirksamkeit und Zertifizierungsbereitschaft.","markAllNA":"Sichtbare als N/A markieren","unanswered":"Unbeantwortet","answered":"Beantwortet","download":"Herunterladen","officialLink":"Offizielle ISO-Seite","sourceNote":"Der Ausgabestatus basiert auf den unten aufgeführten offiziellen ISO-Quellen.","showEnglish":"Englische Referenz anzeigen","hideEnglish":"Englische Referenz ausblenden"}};
  const STORAGE_KEY = 'isoAuditAtlas.state.v2';
  const NAV = [
    ['home','⌂','home'], ['requirements','§','requirements'], ['audit','✓','audit'],
    ['quiz','?','quiz'], ['matrix','▦','matrix'], ['more','•••','more']
  ];
  const ASSESSMENTS = ['notAssessed','conform','ofi','minor','major','na'];
  const AUDIT_LENS = { internal:'internal', customer:'customer', certification:'certification' };
  const main = document.getElementById('mainContent');
  const sideNav = document.getElementById('sideNav');
  const bottomNav = document.getElementById('bottomNav');
  const pageTitle = document.getElementById('pageTitle');
  const pageSubtitle = document.getElementById('pageSubtitle');
  const langButton = document.getElementById('langButton');
  const themeButton = document.getElementById('themeButton');
  const modalRoot = document.getElementById('modalRoot');
  const toastEl = document.getElementById('toast');
  const importFile = document.getElementById('importFile');
  const sideVersion = document.getElementById('sideVersion');

  let toastTimer = null;
  let installPrompt = null;
  let currentView = 'home';
  let moreTab = 'glossary';
  let showEnglishReference = false;
  let reqFilters = { query:'', standard:'all', chapter:'all', priority:'all', bookmarks:false, new2026:false };
  let auditOpenOnly = false;
  let activeQuiz = null;

  function defaultState() {
    return {
      schema: 2,
      language: preferredLanguage(),
      theme: 'system',
      bookmarks: [],
      requirementLinks: {},
      audits: [],
      activeAuditId: null,
      quizHistory: [],
      lastView: 'home',
      recentActivity: [],
    };
  }

  function preferredLanguage() {
    const code = (navigator.language || 'cs').slice(0,2).toLowerCase();
    return ['en','cs','de'].includes(code) ? code : 'en';
  }

  function loadState() {
    const fallback = defaultState();
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      if (!parsed || typeof parsed !== 'object') return fallback;
      return {
        ...fallback,
        ...parsed,
        language: ['en','cs','de'].includes(parsed.language) ? parsed.language : fallback.language,
        theme: ['system','light','dark'].includes(parsed.theme) ? parsed.theme : 'system',
        bookmarks: uniqueStrings(parsed.bookmarks),
        requirementLinks: parsed.requirementLinks && typeof parsed.requirementLinks === 'object' ? parsed.requirementLinks : {},
        audits: Array.isArray(parsed.audits) ? parsed.audits : [],
        quizHistory: Array.isArray(parsed.quizHistory) ? parsed.quizHistory.slice(0,50) : [],
        recentActivity: Array.isArray(parsed.recentActivity) ? parsed.recentActivity.slice(0,20) : [],
      };
    } catch (error) {
      console.warn('Unable to load saved state', error);
      return fallback;
    }
  }

  let state = loadState();
  currentView = NAV.some(n => n[0] === state.lastView) ? state.lastView : 'home';

  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
    catch (error) { console.warn('Unable to save state', error); }
  }

  function uniqueStrings(value) {
    return Array.isArray(value) ? [...new Set(value.filter(v => typeof v === 'string'))] : [];
  }

  function t(key) { return (UI[state.language] && UI[state.language][key]) || UI.en[key] || key; }
  function l(value) {
    if (value == null) return '';
    if (typeof value === 'string') return value;
    return value[state.language] || value.en || value.cs || value.de || '';
  }
  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  }
  function attr(value) { return esc(value).replace(/`/g,'&#96;'); }
  function formatDate(value) {
    if (!value) return '—';
    try { return new Intl.DateTimeFormat(state.language, {dateStyle:'medium', timeStyle: value.includes('T') ? 'short' : undefined}).format(new Date(value)); }
    catch { return value; }
  }
  function formatNumber(value) { return new Intl.NumberFormat(state.language).format(Number(value) || 0); }
  function uid(prefix='id') { return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`; }
  function shuffle(array) {
    const out = [...array];
    for (let i=out.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [out[i],out[j]]=[out[j],out[i]]; }
    return out;
  }
  function stdColor(key) { return DATA.standards[key]?.color || '#2563eb'; }
  function getRequirement(id) { return DATA.requirements.find(r => r.id === id); }
  function getAuditQuestion(id) { return DATA.auditBank.find(q => q.id === id); }
  function standardName(key) { return DATA.standards[key]?.name || key; }
  function chapterName(ch) { return l(DATA.chapters[ch]) || ch; }
  function assessmentLabel(key) { return t(key); }
  function lensLabel(type) { return type === 'customer' ? t('customerAudit') : type === 'certification' ? t('certificationAudit') : t('internalAudit'); }

  function showToast(message) {
    clearTimeout(toastTimer);
    toastEl.textContent = message;
    toastEl.classList.add('show');
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2200);
  }

  function addActivity(type, label) {
    state.recentActivity.unshift({type, label, at:new Date().toISOString()});
    state.recentActivity = state.recentActivity.slice(0,20);
    saveState();
  }

  function applyTheme() {
    const dark = state.theme === 'dark' || (state.theme === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    themeButton.textContent = state.theme === 'light' ? '☀' : state.theme === 'dark' ? '☾' : '◐';
  }

  function updateChrome() {
    document.documentElement.lang = state.language;
    langButton.textContent = state.language === 'cs' ? 'CZ' : state.language.toUpperCase();
    sideVersion.textContent = `${t('version')} ${DATA.app.version} · ${DATA.app.dataAsOf}`;
    document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
    const navHtml = NAV.map(([view,icon,key]) => `<button class="nav-button ${currentView===view?'active':''}" data-view="${view}"><span class="nav-icon">${icon}</span><span>${esc(t(key))}</span></button>`).join('');
    sideNav.innerHTML = navHtml;
    bottomNav.innerHTML = navHtml;
    const pageKey = currentView;
    pageTitle.textContent = currentView === 'home' ? t('appTitle') : t(pageKey);
    pageSubtitle.textContent = currentView === 'home' ? t('appSubtitle') : t('appSubtitle');
  }

  function setView(view) {
    if (!NAV.some(n => n[0] === view)) view = 'home';
    currentView = view;
    state.lastView = view;
    state.activeAuditId = view === 'audit' ? state.activeAuditId : state.activeAuditId;
    saveState();
    document.body.classList.remove('menu-open');
    updateChrome();
    render();
    window.scrollTo({top:0, behavior:'smooth'});
  }

  function render() {
    updateChrome();
    const renders = { home:renderHome, requirements:renderRequirements, audit:renderAudit, quiz:renderQuiz, matrix:renderMatrix, more:renderMore };
    (renders[currentView] || renderHome)();
    main.focus({preventScroll:true});
  }

  function statusLabel(status) {
    if (status === 'current') return t('current');
    if (status === 'transition') return t('transition');
    return t('revision');
  }

  function renderHome() {
    const stats = DATA.stats || {};
    const standards = Object.entries(DATA.standards).map(([key,std]) => `
      <article class="card standard-card" style="--std-color:${std.color}">
        <div class="requirement-meta"><span class="standard-pill" style="--std-color:${std.color}">${std.name}</span><span class="badge ${std.status==='current'?'low':'medium'}">${esc(statusLabel(std.status))}</span></div>
        <h3>${esc(std.edition)}</h3>
        <div class="edition">${esc(l(std.system))}</div>
        <p class="small-text">${esc(l(std.status_text))}</p>
        <div class="button-row"><button class="button small" data-action="filter-standard" data-standard="${key}">${esc(t('browseRequirements'))}</button><a class="button small ghost" href="${attr(std.official_url)}" target="_blank" rel="noopener">${esc(t('officialLink'))}</a></div>
      </article>`).join('');
    const activities = state.recentActivity.length ? state.recentActivity.slice(0,5).map(a => `<div class="history-item"><div><strong>${esc(a.label)}</strong><div class="muted small-text">${esc(formatDate(a.at))}</div></div><span class="badge">${esc(a.type)}</span></div>`).join('') : `<div class="empty-state">${esc(t('none'))}</div>`;
    main.innerHTML = `
      <section class="card hero">
        <span class="badge">${esc(t('dataAsOf'))}: ${esc(DATA.app.dataAsOf)}</span>
        <h2>${esc(t('appTitle'))}</h2>
        <p>${esc(t('appSubtitle'))}. ${esc(l(DATA.app.copyrightNotice))}</p>
        <div class="hero-actions">
          <button class="button primary" data-view="requirements">§ ${esc(t('browseRequirements'))}</button>
          <button class="button" data-view="audit">✓ ${esc(t('prepareAudit'))}</button>
          <button class="button" data-view="quiz">? ${esc(t('runQuiz'))}</button>
        </div>
      </section>
      <div class="grid grid-4" style="margin-top:16px">
        <article class="card stat"><strong>${formatNumber(stats.requirements)}</strong><span>${esc(t('statsRequirements'))}</span></article>
        <article class="card stat"><strong>${formatNumber(stats.auditQuestions)}</strong><span>${esc(t('statsAudit'))}</span></article>
        <article class="card stat"><strong>${formatNumber(stats.standards)}</strong><span>${esc(t('statsStandards'))}</span></article>
        <article class="card stat"><strong>${formatNumber(stats.languages)}</strong><span>${esc(t('statsLanguages'))}</span></article>
      </div>
      <div class="section-head" style="margin-top:24px"><div><h2>${esc(t('standardsStatus'))}</h2><p>${esc(t('officialStatus'))}</p></div></div>
      <section class="grid grid-4">${standards}</section>
      <section class="card notice warning" style="margin-top:18px"><strong>${esc(t('yearEndNote'))}</strong><br>${esc(t('yearEndText'))}</section>
      <section class="grid grid-2" style="margin-top:18px">
        <article class="card"><h2>${esc(t('quickActions'))}</h2><div class="grid">
          <button class="button secondary" data-view="requirements">§ ${esc(t('browseRequirements'))}</button>
          <button class="button secondary" data-view="audit">✓ ${esc(t('startAudit'))}</button>
          <button class="button secondary" data-view="quiz">? ${esc(t('runQuiz'))}</button>
          <button class="button secondary" data-view="matrix">▦ ${esc(t('integratedMatrix'))}</button>
        </div></article>
        <article class="card"><h2>${esc(t('lastActivities'))}</h2>${activities}</article>
      </section>
      <section class="card notice danger" style="margin-top:18px"><strong>${esc(t('mandatoryNotice'))}</strong></section>`;
  }

  function filteredRequirements() {
    const q = reqFilters.query.trim().toLocaleLowerCase(state.language);
    return DATA.requirements.filter(r => {
      if (reqFilters.standard !== 'all' && r.standardKey !== reqFilters.standard) return false;
      if (reqFilters.chapter !== 'all' && r.chapter !== reqFilters.chapter) return false;
      if (reqFilters.priority !== 'all' && r.priority !== reqFilters.priority) return false;
      if (reqFilters.bookmarks && !state.bookmarks.includes(r.id)) return false;
      if (reqFilters.new2026 && !r.new2026) return false;
      if (!q) return true;
      const haystack = [r.standard,r.edition,r.clause,r.topic,l(r.title),l(r.requirement),l(r.explanation),...(r.tags||[])].join(' ').toLocaleLowerCase(state.language);
      return haystack.includes(q);
    });
  }

  function renderRequirements() {
    const rows = filteredRequirements();
    const cards = rows.map(r => {
      const bookmarked = state.bookmarks.includes(r.id);
      return `<article class="card requirement-card">
        <div>
          <div class="requirement-meta">
            <span class="standard-pill" style="--std-color:${stdColor(r.standardKey)}">${esc(r.standard)}</span>
            <span class="badge">${esc(r.clause)}</span>
            <span class="badge ${r.priority}">${esc(t(r.priority))}</span>
            ${r.new2026?`<span class="badge new">2026</span>`:''}
          </div>
          <h3>${esc(l(r.title))}</h3>
          <p>${esc(l(r.requirement))}</p>
        </div>
        <div class="card-actions">
          <button class="round-button ${bookmarked?'active':''}" data-action="toggle-bookmark" data-id="${r.id}" title="${esc(bookmarked?t('removeBookmark'):t('bookmark'))}">★</button>
          <button class="button small" data-action="open-requirement" data-id="${r.id}">${esc(t('details'))}</button>
        </div>
      </article>`;
    }).join('');
    main.innerHTML = `
      <div class="section-head"><div><h2>${esc(t('requirements'))}</h2><p>${formatNumber(rows.length)} ${esc(t('results'))} · ${formatNumber(DATA.requirements.length)} ${esc(t('count'))}</p></div><a class="button small" href="requirements-database.csv" download>${esc(t('downloadDatabase'))}</a></div>
      <section class="card flat">
        <div class="filters">
          <input id="reqSearch" type="text" value="${attr(reqFilters.query)}" placeholder="${attr(t('search'))}">
          <select id="reqStandard"><option value="all">${esc(t('allStandards'))}</option>${Object.entries(DATA.standards).map(([k,s])=>`<option value="${k}" ${reqFilters.standard===k?'selected':''}>${s.name}</option>`).join('')}</select>
          <select id="reqChapter"><option value="all">${esc(t('allChapters'))}</option>${Object.keys(DATA.chapters).map(ch=>`<option value="${ch}" ${reqFilters.chapter===ch?'selected':''}>${ch} — ${esc(chapterName(ch))}</option>`).join('')}</select>
          <select id="reqPriority"><option value="all">${esc(t('allPriorities'))}</option>${['high','medium','low'].map(p=>`<option value="${p}" ${reqFilters.priority===p?'selected':''}>${esc(t(p))}</option>`).join('')}</select>
        </div>
        <div class="check-row">
          <label class="check"><input id="reqBookmarks" type="checkbox" ${reqFilters.bookmarks?'checked':''}> ${esc(t('bookmarksOnly'))}</label>
          <label class="check"><input id="reqNew2026" type="checkbox" ${reqFilters.new2026?'checked':''}> ${esc(t('new2026Only'))}</label>
          <button class="button small ghost" data-action="clear-requirement-filters">${esc(t('clearFilters'))}</button>
        </div>
      </section>
      <div class="pagination-note">${formatNumber(rows.length)} ${esc(t('results'))}</div>
      <section class="requirement-list">${cards || `<div class="card empty-state">${esc(t('noResults'))}</div>`}</section>`;
  }

  function requirementDetailHtml(r) {
    const links = state.requirementLinks[r.id] || {};
    const auditCols = ['customer','internal','certification'].map(lens => `
      <div class="audit-lens"><h4>${esc(lensLabel(lens))}</h4><ol>${r.audit[lens][state.language].map(q=>`<li>${esc(q)}</li>`).join('')}</ol></div>`).join('');
    const enReference = state.language !== 'en' ? `<div class="detail-section"><button class="button small ghost" data-action="toggle-english-reference">${esc(t(showEnglishReference?'hideEnglish':'showEnglish'))}</button>${showEnglishReference?`<div class="notice" style="margin-top:9px"><strong>English reference</strong><p>${esc(r.requirement.en)}</p><p>${esc(r.explanation.en)}</p></div>`:''}</div>` : '';
    return `
      <div class="detail-section"><h3>${esc(t('requirement'))}</h3><p>${esc(l(r.requirement))}</p></div>
      <div class="detail-section"><h3>${esc(t('explanation'))}</h3><p>${esc(l(r.explanation))}</p></div>
      ${enReference}
      <div class="grid grid-2">
        <div class="detail-section"><h3>${esc(t('evidence'))}</h3><ul>${r.evidence[state.language].map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
        <div class="detail-section"><h3>${esc(t('pitfalls'))}</h3><ul>${r.pitfalls[state.language].map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
      </div>
      <div class="detail-section"><h3>${esc(t('auditQuestions'))}</h3><div class="audit-lenses">${auditCols}</div></div>
      <div class="detail-section card flat"><h3>${esc(t('procedureLink'))} / ${esc(t('templateLink'))} / ${esc(t('evidenceLink'))}</h3><p class="muted small-text">${esc(t('linksHelp'))}</p>
        <div class="link-grid">
          <label class="field"><span>${esc(t('procedureLink'))}</span><input type="url" id="linkProcedure" value="${attr(links.procedure||'')}" placeholder="https://…"></label>
          <label class="field"><span>${esc(t('templateLink'))}</span><input type="url" id="linkTemplate" value="${attr(links.template||'')}" placeholder="https://…"></label>
          <label class="field"><span>${esc(t('evidenceLink'))}</span><input type="url" id="linkEvidence" value="${attr(links.evidence||'')}" placeholder="https://…"></label>
        </div><div class="button-row"><button class="button primary small" data-action="save-requirement-links" data-id="${r.id}">${esc(t('saveLinks'))}</button>${Object.values(links).filter(Boolean).map(url=>`<a class="button small" href="${attr(url)}" target="_blank" rel="noopener">↗</a>`).join('')}</div>
      </div>`;
  }

  function openRequirement(id) {
    const r = getRequirement(id); if (!r) return;
    showEnglishReference = false;
    modalRoot.innerHTML = `<div class="modal-wrap" data-action="close-modal"><article class="modal" role="dialog" aria-modal="true" aria-labelledby="reqTitle" data-modal-panel>
      <header class="modal-head"><div><div class="requirement-meta"><span class="standard-pill" style="--std-color:${stdColor(r.standardKey)}">${esc(r.standard)}</span><span class="badge">${esc(r.clause)}</span><span class="badge ${r.priority}">${esc(t(r.priority))}</span>${r.new2026?'<span class="badge new">2026</span>':''}</div><h2 id="reqTitle">${esc(l(r.title))}</h2></div><button class="icon-button" data-action="close-modal">×</button></header>
      <div class="modal-body" data-requirement-detail="${r.id}">${requirementDetailHtml(r)}
        <div class="button-row"><button class="button" data-action="copy-requirement" data-id="${r.id}">${esc(t('copy'))}</button><button class="button" data-action="print-requirement" data-id="${r.id}">${esc(t('print'))}</button><a class="button" href="${attr(DATA.standards[r.standardKey].official_url)}" target="_blank" rel="noopener">${esc(t('officialLink'))}</a></div>
        <div class="notice danger" style="margin-top:18px">${esc(t('mandatoryNotice'))}</div>
      </div></article></div>`;
  }

  function toggleBookmark(id) {
    state.bookmarks = state.bookmarks.includes(id) ? state.bookmarks.filter(x=>x!==id) : [...state.bookmarks,id];
    saveState();
    if (modalRoot.innerHTML) openRequirement(id); else renderRequirements();
  }

  function renderAudit() {
    const active = state.audits.find(a => a.id === state.activeAuditId);
    if (active) renderActiveAudit(active); else renderAuditDashboard();
  }

  function renderAuditDashboard() {
    const history = [...state.audits].sort((a,b)=>String(b.updatedAt).localeCompare(String(a.updatedAt))).map(a => {
      const done = a.items.filter(i=>i.assessment!=='notAssessed').length;
      const findings = a.items.filter(i=>['ofi','minor','major'].includes(i.assessment)).length;
      return `<div class="history-item"><div><strong>${esc(a.name)}</strong><div class="muted small-text">${esc(lensLabel(a.type))} · ${esc(a.standards.map(standardName).join(', '))} · ${done}/${a.items.length} · ${findings} ${esc(t('findingsSummary').toLowerCase())}</div><div class="muted small-text">${esc(t('updated'))}: ${esc(formatDate(a.updatedAt))}</div></div><div class="button-row"><button class="button small" data-action="open-audit" data-id="${a.id}">${esc(t('resume'))}</button><button class="button small ghost" data-action="duplicate-audit" data-id="${a.id}">${esc(t('duplicate'))}</button><button class="button small danger" data-action="delete-audit" data-id="${a.id}">${esc(t('delete'))}</button></div></div>`;
    }).join('');
    main.innerHTML = `
      <div class="section-head"><div><h2>${esc(t('startAudit'))}</h2><p>${esc(t('auditDisclaimer'))}</p></div></div>
      <section class="card"><div class="setup-grid">
        <label class="field"><span>${esc(t('auditName'))}</span><input id="auditName" type="text" placeholder="${attr(t('auditName'))}"></label>
        <label class="field"><span>${esc(t('auditType'))}</span><select id="auditType"><option value="internal">${esc(t('internalAudit'))}</option><option value="customer">${esc(t('customerAudit'))}</option><option value="certification">${esc(t('certificationAudit'))}</option></select></label>
        <label class="field"><span>${esc(t('auditObjective'))}</span><input id="auditObjective" type="text"></label>
        <label class="field"><span>${esc(t('auditScope'))}</span><input id="auditScope" type="text"></label>
        <label class="field"><span>${esc(t('leadAuditor'))}</span><input id="auditLead" type="text"></label>
        <label class="field"><span>${esc(t('auditee'))}</span><input id="auditAuditee" type="text"></label>
        <div class="wide"><span class="muted small-text"><strong>${esc(t('selectStandards'))}</strong></span><div class="standard-checks" style="margin-top:7px">${Object.entries(DATA.standards).map(([k,s])=>`<label class="standard-check"><input type="checkbox" name="auditStandard" value="${k}" checked><span><strong>${s.name}</strong><small class="muted" style="display:block">${esc(s.edition)}</small></span></label>`).join('')}</div></div>
        <label class="field"><span>${esc(t('chapterScope'))}</span><select id="auditChapter"><option value="all">${esc(t('allChapters'))}</option>${Object.keys(DATA.chapters).map(ch=>`<option value="${ch}">${ch} — ${esc(chapterName(ch))}</option>`).join('')}</select></label>
        <label class="field"><span>${esc(t('questionCount'))}</span><select id="auditCount">${[10,20,30,50,100].map(n=>`<option value="${n}" ${n===30?'selected':''}>${n}</option>`).join('')}<option value="all">${esc(t('all'))}</option></select></label>
        <div class="wide notice" id="auditLensHelp">${esc(t('internalLensHelp'))}</div>
      </div><div class="button-row"><button class="button primary" data-action="generate-audit">${esc(t('generateAudit'))}</button></div></section>
      <div class="section-head" style="margin-top:24px"><div><h2>${esc(t('auditHistory'))}</h2><p>${formatNumber(state.audits.length)} ${esc(t('count'))}</p></div></div>
      <section class="card">${history || `<div class="empty-state">${esc(t('noAudits'))}</div>`}</section>`;
  }

  function generateAuditFromForm() {
    const standards = [...document.querySelectorAll('input[name="auditStandard"]:checked')].map(el=>el.value);
    if (!standards.length) return showToast(t('selectAtLeastOne'));
    const type = document.getElementById('auditType').value;
    const chapter = document.getElementById('auditChapter').value;
    const rawCount = document.getElementById('auditCount').value;
    let candidates = DATA.auditBank.filter(q => q.lens === AUDIT_LENS[type] && standards.includes(q.standardKey) && (chapter==='all'||q.chapter===chapter));
    const byReq = new Map();
    shuffle(candidates).forEach(q => { if (!byReq.has(q.requirementId)) byReq.set(q.requirementId,q); });
    const unique = shuffle([...byReq.values()]);
    const remaining = shuffle(candidates.filter(q => !unique.some(u=>u.id===q.id)));
    candidates = [...unique,...remaining];
    const count = rawCount === 'all' ? candidates.length : Math.min(Number(rawCount),candidates.length);
    const selected = candidates.slice(0,count);
    const now = new Date().toISOString();
    const audit = {
      id: uid('audit'),
      name: document.getElementById('auditName').value.trim() || `${lensLabel(type)} ${new Date().toLocaleDateString(state.language)}`,
      type, standards, chapter,
      objective: document.getElementById('auditObjective').value.trim(), scope: document.getElementById('auditScope').value.trim(),
      lead: document.getElementById('auditLead').value.trim(), auditee: document.getElementById('auditAuditee').value.trim(),
      createdAt: now, updatedAt: now, completedAt: null,
      items: selected.map(q => ({ id:uid('item'), questionId:q.id, assessment:'notAssessed', evidence:'', finding:'', action:'', owner:'', due:'' }))
    };
    state.audits.push(audit); state.activeAuditId = audit.id; saveState(); addActivity(t('audit'), audit.name); renderAudit();
  }

  function auditCounts(audit) {
    const counts = Object.fromEntries(ASSESSMENTS.map(k=>[k,0]));
    audit.items.forEach(i => counts[i.assessment] = (counts[i.assessment]||0)+1);
    return counts;
  }

  function renderActiveAudit(audit) {
    const counts = auditCounts(audit);
    const assessed = audit.items.length - counts.notAssessed;
    const pct = audit.items.length ? Math.round(assessed/audit.items.length*100) : 0;
    const items = audit.items.map((item,index) => {
      const q = getAuditQuestion(item.questionId); if (!q) return '';
      if (auditOpenOnly && !['notAssessed','ofi','minor','major'].includes(item.assessment)) return '';
      const r = getRequirement(q.requirementId);
      const assessmentButtons = ASSESSMENTS.map(key=>`<button class="assessment-option ${item.assessment===key?'active':''}" data-action="set-assessment" data-audit="${audit.id}" data-item="${item.id}" data-value="${key}">${esc(assessmentLabel(key))}</button>`).join('');
      return `<details class="card audit-question" data-audit-detail ${item.assessment!=='notAssessed'?'':'open'}>
        <summary><span class="question-index">${index+1}</span><div class="question-main"><div class="requirement-meta"><span class="standard-pill" style="--std-color:${stdColor(q.standardKey)}">${esc(q.standard)}</span><span class="badge">${esc(q.clause)}</span></div><h3>${esc(l(q.title))}</h3><p>${esc(l(q.question))}</p></div><span class="assessment-chip assessment-${item.assessment}">${esc(assessmentLabel(item.assessment))}</span></summary>
        <div class="audit-question-body"><div class="assessment-options">${assessmentButtons}</div>
          <div class="audit-fields">
            <label class="field wide"><span>${esc(t('objectiveEvidence'))}</span><textarea data-audit-field="evidence" data-audit="${audit.id}" data-item="${item.id}">${esc(item.evidence)}</textarea></label>
            <label class="field wide"><span>${esc(t('finding'))}</span><textarea data-audit-field="finding" data-audit="${audit.id}" data-item="${item.id}">${esc(item.finding)}</textarea></label>
            <label class="field wide"><span>${esc(t('action'))}</span><textarea data-audit-field="action" data-audit="${audit.id}" data-item="${item.id}">${esc(item.action)}</textarea></label>
            <label class="field"><span>${esc(t('owner'))}</span><input type="text" data-audit-field="owner" data-audit="${audit.id}" data-item="${item.id}" value="${attr(item.owner)}"></label>
            <label class="field"><span>${esc(t('dueDate'))}</span><input type="date" data-audit-field="due" data-audit="${audit.id}" data-item="${item.id}" value="${attr(item.due)}"></label>
          </div><div class="button-row"><button class="button small ghost" data-action="open-requirement" data-id="${q.requirementId}">${esc(t('viewRequirement'))}</button></div>
        </div></details>`;
    }).join('');
    main.innerHTML = `
      <section class="card"><div class="audit-header"><div><button class="button small ghost" data-action="back-audits">← ${esc(t('backToAudits'))}</button><h2 style="margin:12px 0 5px">${esc(audit.name)}</h2><div class="muted">${esc(lensLabel(audit.type))} · ${esc(audit.standards.map(standardName).join(', '))} · ${esc(t('created'))} ${esc(formatDate(audit.createdAt))}</div></div><span class="badge ${audit.completedAt?'low':'medium'}">${esc(audit.completedAt?t('completed'):t('openAudit'))}</span></div>
        <hr><div class="setup-grid"><label class="field"><span>${esc(t('auditObjective'))}</span><input type="text" data-audit-meta="objective" data-audit="${audit.id}" value="${attr(audit.objective||'')}"></label><label class="field"><span>${esc(t('auditScope'))}</span><input type="text" data-audit-meta="scope" data-audit="${audit.id}" value="${attr(audit.scope||'')}"></label><label class="field"><span>${esc(t('leadAuditor'))}</span><input type="text" data-audit-meta="lead" data-audit="${audit.id}" value="${attr(audit.lead||'')}"></label><label class="field"><span>${esc(t('auditee'))}</span><input type="text" data-audit-meta="auditee" data-audit="${audit.id}" value="${attr(audit.auditee||'')}"></label></div>
        <hr><div><div class="quiz-progress"><span>${esc(t('auditProgress'))}</span><strong>${assessed}/${audit.items.length} (${pct}%)</strong></div><div class="progress"><span style="width:${pct}%"></span></div><div class="summary-pills">${ASSESSMENTS.map(k=>`<span class="badge ${k==='major'?'high':k==='conform'?'low':k==='ofi'?'medium':''}">${esc(assessmentLabel(k))}: ${counts[k]}</span>`).join('')}</div></div>
      </section>
      <div class="audit-toolbar"><label class="check"><input id="auditOpenOnly" type="checkbox" ${auditOpenOnly?'checked':''}> ${esc(t('showOnlyOpen'))}</label><button class="button small" data-action="expand-audit">${esc(t('expandAll'))}</button><button class="button small" data-action="collapse-audit">${esc(t('collapseAll'))}</button><button class="button small" data-action="export-audit-csv" data-id="${audit.id}">${esc(t('exportCsv'))}</button><button class="button small" data-action="export-audit-json" data-id="${audit.id}">${esc(t('exportJson'))}</button><button class="button small" data-action="print-audit" data-id="${audit.id}">${esc(t('print'))}</button><button class="button small ${audit.completedAt?'':'primary'}" data-action="toggle-audit-complete" data-id="${audit.id}">${esc(audit.completedAt?t('reopenAudit'):t('completeAudit'))}</button></div>
      <section class="grid">${items || `<div class="card empty-state">${esc(t('noResults'))}</div>`}</section>
      <section class="notice danger" style="margin-top:16px">${esc(t('auditDisclaimer'))}</section>`;
  }

  function findAuditItem(auditId,itemId) {
    const audit = state.audits.find(a=>a.id===auditId); if (!audit) return {};
    return {audit,item:audit.items.find(i=>i.id===itemId)};
  }

  function updateAuditTimestamp(audit) { audit.updatedAt = new Date().toISOString(); saveState(); }

  function duplicateAudit(id) {
    const source = state.audits.find(a=>a.id===id); if (!source) return;
    const now = new Date().toISOString();
    const clone = JSON.parse(JSON.stringify(source));
    clone.id=uid('audit'); clone.name=`${source.name} — copy`; clone.createdAt=now; clone.updatedAt=now; clone.completedAt=null;
    clone.items.forEach(i=>{i.id=uid('item');i.assessment='notAssessed';i.evidence='';i.finding='';i.action='';i.owner='';i.due='';});
    state.audits.push(clone); state.activeAuditId=clone.id; saveState(); renderAudit();
  }

  function downloadBlob(filename,content,type='text/plain;charset=utf-8') {
    const blob = new Blob([content],{type}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=filename; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),1000);
  }

  function csvCell(value) { return `"${String(value??'').replace(/"/g,'""')}"`; }

  function exportAuditCsv(id) {
    const audit=state.audits.find(a=>a.id===id); if(!audit)return;
    const headers=[t('sample'),t('auditType'),t('standard'),t('clause'),t('auditQuestions'),t('assessment'),t('objectiveEvidence'),t('finding'),t('action'),t('owner'),t('dueDate')];
    const rows=audit.items.map((i,n)=>{const q=getAuditQuestion(i.questionId)||{};return [n+1,lensLabel(audit.type),q.standard||'',q.clause||'',l(q.question),assessmentLabel(i.assessment),i.evidence,i.finding,i.action,i.owner,i.due];});
    const csv='\ufeff'+[headers,...rows].map(row=>row.map(csvCell).join(';')).join('\r\n');
    downloadBlob(`${safeFilename(audit.name)}.csv`,csv,'text/csv;charset=utf-8');
  }
  function exportAuditJson(id) { const audit=state.audits.find(a=>a.id===id); if(audit) downloadBlob(`${safeFilename(audit.name)}.json`,JSON.stringify({app:DATA.app,audit},null,2),'application/json'); }
  function safeFilename(value) { return String(value||'audit').replace(/[^\p{L}\p{N}._-]+/gu,'_').slice(0,80); }

  function printAudit(id) {
    const audit=state.audits.find(a=>a.id===id); if(!audit)return;
    const counts=auditCounts(audit);
    const rows=audit.items.map((i,n)=>{const q=getAuditQuestion(i.questionId)||{};return `<tr><td>${n+1}</td><td>${esc(q.standard||'')} ${esc(q.clause||'')}</td><td>${esc(l(q.question))}</td><td>${esc(assessmentLabel(i.assessment))}</td><td>${esc(i.evidence)}</td><td>${esc(i.finding)}</td><td>${esc(i.action)}<br>${esc(i.owner)} ${esc(i.due)}</td></tr>`;}).join('');
    openPrintWindow(`${audit.name}`,`<h1>${esc(audit.name)}</h1><p>${esc(lensLabel(audit.type))} · ${esc(audit.standards.map(standardName).join(', '))}</p><p><b>${esc(t('auditObjective'))}:</b> ${esc(audit.objective)}<br><b>${esc(t('auditScope'))}:</b> ${esc(audit.scope)}<br><b>${esc(t('leadAuditor'))}:</b> ${esc(audit.lead)}<br><b>${esc(t('auditee'))}:</b> ${esc(audit.auditee)}</p><p>${ASSESSMENTS.map(k=>`${esc(assessmentLabel(k))}: ${counts[k]}`).join(' · ')}</p><table><thead><tr><th>#</th><th>${esc(t('clause'))}</th><th>${esc(t('auditQuestions'))}</th><th>${esc(t('assessment'))}</th><th>${esc(t('objectiveEvidence'))}</th><th>${esc(t('finding'))}</th><th>${esc(t('action'))}</th></tr></thead><tbody>${rows}</tbody></table><p><small>${esc(t('auditDisclaimer'))} ${esc(t('mandatoryNotice'))}</small></p>`);
  }

  function openPrintWindow(title,body) {
    const win=window.open('','_blank'); if(!win) return showToast(t('print'));
    win.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${esc(title)}</title><style>body{font-family:Arial,sans-serif;margin:24px;color:#111}h1{font-size:24px}table{border-collapse:collapse;width:100%;font-size:10px}th,td{border:1px solid #aaa;padding:6px;vertical-align:top}th{background:#eee;text-align:left}p{line-height:1.5}@page{size:A4 landscape;margin:10mm}</style></head><body>${body}<script>setTimeout(()=>window.print(),250)<\/script></body></html>`); win.document.close();
  }

  function renderQuiz() {
    if (!activeQuiz) return renderQuizSetup();
    if (activeQuiz.finished) return renderQuizResult();
    renderQuizQuestion();
  }

  function renderQuizSetup() {
    const history=state.quizHistory.slice(0,8).map(h=>`<div class="history-item"><div><strong>${h.score}/${h.total} (${Math.round(h.score/h.total*100)}%)</strong><div class="muted small-text">${esc(h.mode)} · ${esc(h.standards.map(standardName).join(', '))} · ${esc(formatDate(h.at))}</div></div></div>`).join('');
    main.innerHTML=`<div class="section-head"><div><h2>${esc(t('quizSetup'))}</h2><p>${esc(t('appSubtitle'))}</p></div></div>
      <section class="card"><div class="setup-grid"><div class="wide"><span class="muted small-text"><strong>${esc(t('selectStandards'))}</strong></span><div class="standard-checks" style="margin-top:7px">${Object.entries(DATA.standards).map(([k,s])=>`<label class="standard-check"><input type="checkbox" name="quizStandard" value="${k}" checked><span><strong>${s.name}</strong><small class="muted" style="display:block">${esc(s.edition)}</small></span></label>`).join('')}</div></div><label class="field"><span>${esc(t('quizMode'))}</span><select id="quizMode"><option value="intent">${esc(t('intentMode'))}</option><option value="evidence">${esc(t('evidenceMode'))}</option><option value="clause">${esc(t('clauseMode'))}</option></select></label><label class="field"><span>${esc(t('questionCount'))}</span><select id="quizCount">${[5,10,15,20,30,50].map(n=>`<option value="${n}" ${n===10?'selected':''}>${n}</option>`).join('')}</select></label></div><div class="button-row"><button class="button primary" data-action="start-quiz">${esc(t('startQuiz'))}</button></div></section>
      <div class="section-head" style="margin-top:24px"><div><h2>${esc(t('quizHistory'))}</h2></div></div><section class="card">${history||`<div class="empty-state">${esc(t('noQuizHistory'))}</div>`}</section>`;
  }

  function buildQuizQuestion(record,mode,pool) {
    let prompt='',correct='',distractors=[];
    const other=shuffle(pool.filter(r=>r.id!==record.id));
    if(mode==='intent') {
      prompt=`${record.standard} ${record.clause} — ${l(record.title)}`;
      correct=l(record.requirement);
      distractors=other.map(r=>l(r.requirement));
    } else if(mode==='evidence') {
      prompt=`${t('evidence')}: ${record.standard} ${record.clause} — ${l(record.title)}`;
      correct=record.evidence[state.language][0];
      distractors=other.map(r=>r.evidence[state.language][0]);
    } else {
      prompt=l(record.requirement);
      correct=`${record.standard} ${record.clause} — ${l(record.title)}`;
      distractors=other.map(r=>`${r.standard} ${r.clause} — ${l(r.title)}`);
    }
    const distinct=[...new Set(distractors.filter(x=>x&&x!==correct))].slice(0,3);
    while(distinct.length<3) distinct.push(`${t('none')} ${distinct.length+1}`);
    const options=shuffle([correct,...distinct]);
    return {recordId:record.id,prompt,options,answer:options.indexOf(correct),selected:null};
  }

  function startQuiz() {
    const standards=[...document.querySelectorAll('input[name="quizStandard"]:checked')].map(el=>el.value);
    if(!standards.length)return showToast(t('selectAtLeastOne'));
    const mode=document.getElementById('quizMode').value; const count=Number(document.getElementById('quizCount').value);
    const pool=DATA.requirements.filter(r=>standards.includes(r.standardKey)); const selected=shuffle(pool).slice(0,Math.min(count,pool.length));
    activeQuiz={mode,standards,questions:selected.map(r=>buildQuizQuestion(r,mode,pool)),index:0,score:0,answered:false,finished:false,startedAt:new Date().toISOString()};
    renderQuiz();
  }

  function renderQuizQuestion() {
    const q=activeQuiz.questions[activeQuiz.index]; const r=getRequirement(q.recordId); const total=activeQuiz.questions.length;
    const options=q.options.map((opt,i)=>{let cls='';if(q.selected!==null){if(i===q.answer)cls='correct';else if(i===q.selected)cls='incorrect';}return `<button class="quiz-option ${cls}" data-action="answer-quiz" data-index="${i}" ${q.selected!==null?'disabled':''}><span class="option-letter">${String.fromCharCode(65+i)}</span><span>${esc(opt)}</span></button>`;}).join('');
    const feedback=q.selected===null?'':`<div class="feedback ${q.selected===q.answer?'good':'bad'}"><strong>${esc(t(q.selected===q.answer?'correct':'incorrect'))}</strong><p><b>${esc(t('correctAnswer'))}:</b> ${esc(q.options[q.answer])}</p><p>${esc(l(r.explanation))}</p><button class="button small ghost" data-action="open-requirement" data-id="${r.id}">${esc(t('viewRequirement'))}</button></div>`;
    main.innerHTML=`<section class="card quiz-question"><div class="quiz-progress"><span>${activeQuiz.index+1}/${total}</span><span>${esc(t('score'))}: ${activeQuiz.score}</span></div><div class="progress"><span style="width:${Math.round((activeQuiz.index+(q.selected!==null?1:0))/total*100)}%"></span></div><div class="requirement-meta" style="margin-top:18px"><span class="standard-pill" style="--std-color:${stdColor(r.standardKey)}">${esc(r.standard)}</span><span class="badge">${esc(activeQuiz.mode)}</span></div><h2>${esc(q.prompt)}</h2><div class="option-list">${options}</div>${feedback}${q.selected!==null?`<div class="button-row"><button class="button primary" data-action="next-quiz">${esc(activeQuiz.index===total-1?t('finishQuiz'):t('nextQuestion'))}</button></div>`:''}</section>`;
  }

  function answerQuiz(index) {
    const q=activeQuiz?.questions[activeQuiz.index]; if(!q||q.selected!==null)return;
    q.selected=index; if(index===q.answer)activeQuiz.score++; renderQuizQuestion();
  }

  function nextQuiz() {
    if(activeQuiz.index<activeQuiz.questions.length-1){activeQuiz.index++;renderQuizQuestion();return;}
    activeQuiz.finished=true;
    const item={at:new Date().toISOString(),mode:activeQuiz.mode,standards:activeQuiz.standards,score:activeQuiz.score,total:activeQuiz.questions.length};
    state.quizHistory.unshift(item);state.quizHistory=state.quizHistory.slice(0,50);saveState();addActivity(t('quiz'),`${item.score}/${item.total}`);renderQuizResult();
  }

  function renderQuizResult() {
    const total=activeQuiz.questions.length; const pct=Math.round(activeQuiz.score/total*100);
    main.innerHTML=`<section class="card hero quiz-question"><span class="badge">${esc(t('completed'))}</span><h2>${esc(t('score'))}: ${activeQuiz.score}/${total}</h2><p>${pct}%</p><div class="hero-actions"><button class="button primary" data-action="new-quiz">${esc(t('tryAgain'))}</button><button class="button" data-view="requirements">${esc(t('browseRequirements'))}</button></div></section>`;
  }

  function renderMatrix() {
    const topics=[...new Set(DATA.requirements.map(r=>r.topic))].sort();
    const rows=topics.map(topic=>{
      const related=DATA.requirements.filter(r=>r.topic===topic); const label=l(related[0]?.title)||topic;
      const cells=['9001','14001','45001','50001'].map(key=>{const recs=related.filter(r=>r.standardKey===key);return `<td>${recs.length?`<div class="matrix-cell">${recs.map(r=>`<button class="matrix-link" data-action="open-requirement" data-id="${r.id}">${esc(r.clause)} — ${esc(l(r.title))}</button>`).join('')}</div>`:'—'}</td>`;}).join('');
      return `<tr><td><strong>${esc(label)}</strong><div class="muted small-text">${esc(topic)}</div></td>${cells}</tr>`;
    }).join('');
    main.innerHTML=`<div class="section-head"><div><h2>${esc(t('integratedMatrix'))}</h2><p>${esc(t('matrixHelp'))}</p></div></div><div class="matrix-wrap"><table><thead><tr><th>${esc(t('topic'))}</th>${['9001','14001','45001','50001'].map(k=>`<th>${DATA.standards[k].name}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div>`;
  }

  function renderMore() {
    const tabs=[['glossary',t('glossary')],['sources',t('sources')],['transition',t('transitionWatch')],['settings',t('settings')]];
    main.innerHTML=`<div class="tabs">${tabs.map(([id,label])=>`<button class="tab ${moreTab===id?'active':''}" data-action="more-tab" data-tab="${id}">${esc(label)}</button>`).join('')}</div><div id="moreBody">${renderMoreBody()}</div>`;
  }

  function renderMoreBody() {
    if(moreTab==='sources') return renderSources();
    if(moreTab==='transition') return renderTransition();
    if(moreTab==='settings') return renderSettings();
    return renderGlossary();
  }

  function renderGlossary() {
    return `<div class="section-head"><div><h2>${esc(t('glossary'))}</h2><p>${formatNumber(DATA.glossary.length)} ${esc(t('count'))}</p></div></div><section class="glossary-grid">${DATA.glossary.map(g=>`<article class="card glossary-item"><h3>${esc(g.term)}</h3><p>${esc(l(g.definition))}</p></article>`).join('')}</section>`;
  }

  function renderSources() {
    return `<section class="card"><h2>${esc(t('sources'))}</h2><p>${esc(t('sourceNote'))}</p>${DATA.sources.map(s=>`<div class="source-item"><div class="requirement-meta"><span class="standard-pill" style="--std-color:${stdColor(s.standardKey)}">${esc(standardName(s.standardKey))}</span></div><strong>${esc(s.title)}</strong><p>${esc(l(s.note))}</p><a class="button small" href="${attr(s.url)}" target="_blank" rel="noopener">${esc(t('officialLink'))} ↗</a></div>`).join('')}<div class="notice danger" style="margin-top:15px">${esc(t('mandatoryNotice'))}</div></section>`;
  }

  function renderTransition() {
    return `<div class="section-head"><div><h2>${esc(t('transitionWatch'))}</h2><p>${esc(t('nonNormative'))}</p></div></div><section class="grid grid-2">${DATA.transitionWatch.map(w=>`<article class="card standard-card" style="--std-color:${stdColor(w.standardKey)}"><div class="requirement-meta"><span class="standard-pill" style="--std-color:${stdColor(w.standardKey)}">${esc(standardName(w.standardKey))}</span><span class="badge medium">${esc(t('readiness'))}</span></div><h3>${esc(l(w.title))}</h3><p><strong>${esc(l(w.status))}</strong></p><div class="notice warning">${esc(l(w.warning))}</div><ul>${w.items[state.language].map(x=>`<li>${esc(x)}</li>`).join('')}</ul><a class="button small" href="${attr(w.officialUrl)}" target="_blank" rel="noopener">${esc(t('officialLink'))}</a></article>`).join('')}</section>`;
  }

  function renderSettings() {
    return `<section class="grid grid-2"><article class="card"><h2>${esc(t('settings'))}</h2><div class="setup-grid"><label class="field"><span>${esc(t('language'))}</span><select id="settingLanguage">${[['cs','Čeština'],['en','English'],['de','Deutsch']].map(([k,n])=>`<option value="${k}" ${state.language===k?'selected':''}>${n}</option>`).join('')}</select></label><label class="field"><span>${esc(t('theme'))}</span><select id="settingTheme">${['system','light','dark'].map(k=>`<option value="${k}" ${state.theme===k?'selected':''}>${esc(t(k))}</option>`).join('')}</select></label></div><div class="button-row"><button class="button" data-action="export-backup">${esc(t('exportBackup'))}</button><button class="button" data-action="import-backup">${esc(t('importBackup'))}</button><button class="button danger" data-action="reset-data">${esc(t('resetData'))}</button></div></article>
      <article class="card"><h2>${esc(t('install'))}</h2><p>${esc(t('installText'))}</p><div class="button-row"><button class="button primary" data-action="install-app">${esc(t('install'))}</button><button class="button" data-action="share-app">${esc(t('shareApp'))}</button></div><p class="muted small-text">${esc(t('offlineReady'))} · ${esc(t('localOnly'))}</p></article>
      <article class="card"><h2>${esc(t('download'))}</h2><div class="grid"><a class="button secondary" href="requirements-database.csv" download>${esc(t('downloadDatabase'))}</a><a class="button secondary" href="audit-question-bank.csv" download>${esc(t('downloadAuditBank'))}</a><a class="button secondary" href="requirements-data.json" download>JSON</a></div></article>
      <article class="card"><h2>${esc(t('privacy'))}</h2><p>${esc(t('privacyText'))}</p><div class="notice danger">${esc(t('mandatoryNotice'))}</div></article></section>`;
  }

  function copyRequirement(id) {
    const r=getRequirement(id); if(!r)return;
    const text=`${r.standard} ${r.edition} | ${r.clause} ${l(r.title)}\n\n${t('requirement')}: ${l(r.requirement)}\n\n${t('explanation')}: ${l(r.explanation)}\n\n${t('mandatoryNotice')}`;
    navigator.clipboard?.writeText(text).then(()=>showToast(t('copied'))).catch(()=>showToast(t('copy')));
  }
  function printRequirement(id) { const r=getRequirement(id); if(r) openPrintWindow(`${r.standard} ${r.clause}`,`<h1>${esc(r.standard)} ${esc(r.clause)} — ${esc(l(r.title))}</h1><h2>${esc(t('requirement'))}</h2><p>${esc(l(r.requirement))}</p><h2>${esc(t('explanation'))}</h2><p>${esc(l(r.explanation))}</p><h2>${esc(t('evidence'))}</h2><ul>${r.evidence[state.language].map(x=>`<li>${esc(x)}</li>`).join('')}</ul><h2>${esc(t('pitfalls'))}</h2><ul>${r.pitfalls[state.language].map(x=>`<li>${esc(x)}</li>`).join('')}</ul><p><small>${esc(t('mandatoryNotice'))}</small></p>`); }

  function exportBackup() { downloadBlob(`ISO_Audit_Atlas_Backup_${new Date().toISOString().slice(0,10)}.json`,JSON.stringify({type:'ISO_AUDIT_ATLAS_BACKUP',version:2,exportedAt:new Date().toISOString(),state},null,2),'application/json'); }

  function importBackupFile(file) {
    const reader=new FileReader(); reader.onload=()=>{try{const parsed=JSON.parse(reader.result);if(parsed.type!=='ISO_AUDIT_ATLAS_BACKUP'||!parsed.state)throw new Error('invalid');localStorage.setItem(STORAGE_KEY,JSON.stringify(parsed.state));state=loadState();applyTheme();showToast(t('backupImported'));setView('home');}catch{showToast(t('invalidBackup'));}};reader.readAsText(file);
  }

  async function shareApp() {
    const data={title:t('appTitle'),text:t('appSubtitle'),url:location.href.split('#')[0]};
    try { if(navigator.share) await navigator.share(data); else { await navigator.clipboard.writeText(data.url); showToast(t('copied')); } } catch {}
  }

  function installApp() {
    if(installPrompt){installPrompt.prompt();installPrompt.userChoice.finally(()=>installPrompt=null);}
    else showToast(t('installText'));
  }

  function safeUrl(value) {
    const v=String(value||'').trim(); if(!v)return ''; try{const u=new URL(v);return ['http:','https:'].includes(u.protocol)?u.href:'';}catch{return '';}
  }

  function updateMoreBody() { const el=document.getElementById('moreBody'); if(el)el.innerHTML=renderMoreBody(); }

  document.addEventListener('click', event => {
    const viewButton=event.target.closest('[data-view]'); if(viewButton){setView(viewButton.dataset.view);return;}
    const el=event.target.closest('[data-action]'); if(!el)return;
    const action=el.dataset.action;
    if(action==='go-home')setView('home');
    else if(action==='toggle-menu')document.body.classList.toggle('menu-open');
    else if(action==='close-menu')document.body.classList.remove('menu-open');
    else if(action==='cycle-language'){const order=['cs','en','de'];state.language=order[(order.indexOf(state.language)+1)%order.length];saveState();render();}
    else if(action==='cycle-theme'){const order=['system','light','dark'];state.theme=order[(order.indexOf(state.theme)+1)%order.length];saveState();applyTheme();render();}
    else if(action==='filter-standard'){reqFilters.standard=el.dataset.standard;setView('requirements');}
    else if(action==='clear-requirement-filters'){reqFilters={query:'',standard:'all',chapter:'all',priority:'all',bookmarks:false,new2026:false};renderRequirements();}
    else if(action==='open-requirement')openRequirement(el.dataset.id);
    else if(action==='toggle-bookmark')toggleBookmark(el.dataset.id);
    else if(action==='close-modal' && (!event.target.closest('[data-modal-panel]') || event.target===el))modalRoot.innerHTML='';
    else if(action==='copy-requirement')copyRequirement(el.dataset.id);
    else if(action==='print-requirement')printRequirement(el.dataset.id);
    else if(action==='toggle-english-reference'){showEnglishReference=!showEnglishReference;const box=document.querySelector('[data-requirement-detail]');if(box){const r=getRequirement(box.dataset.requirementDetail);box.innerHTML=requirementDetailHtml(r)+`<div class="button-row"><button class="button" data-action="copy-requirement" data-id="${r.id}">${esc(t('copy'))}</button><button class="button" data-action="print-requirement" data-id="${r.id}">${esc(t('print'))}</button></div>`;}}
    else if(action==='save-requirement-links'){state.requirementLinks[el.dataset.id]={procedure:safeUrl(document.getElementById('linkProcedure').value),template:safeUrl(document.getElementById('linkTemplate').value),evidence:safeUrl(document.getElementById('linkEvidence').value)};saveState();showToast(t('saved'));openRequirement(el.dataset.id);}
    else if(action==='generate-audit')generateAuditFromForm();
    else if(action==='open-audit'){state.activeAuditId=el.dataset.id;saveState();renderAudit();}
    else if(action==='back-audits'){state.activeAuditId=null;saveState();renderAudit();}
    else if(action==='delete-audit'){if(confirm(t('confirmDelete'))){state.audits=state.audits.filter(a=>a.id!==el.dataset.id);if(state.activeAuditId===el.dataset.id)state.activeAuditId=null;saveState();renderAudit();}}
    else if(action==='duplicate-audit')duplicateAudit(el.dataset.id);
    else if(action==='set-assessment'){const {audit,item}=findAuditItem(el.dataset.audit,el.dataset.item);if(audit&&item){item.assessment=el.dataset.value;updateAuditTimestamp(audit);renderActiveAudit(audit);}}
    else if(action==='expand-audit')document.querySelectorAll('[data-audit-detail]').forEach(d=>d.open=true);
    else if(action==='collapse-audit')document.querySelectorAll('[data-audit-detail]').forEach(d=>d.open=false);
    else if(action==='export-audit-csv')exportAuditCsv(el.dataset.id);
    else if(action==='export-audit-json')exportAuditJson(el.dataset.id);
    else if(action==='print-audit')printAudit(el.dataset.id);
    else if(action==='toggle-audit-complete'){const a=state.audits.find(x=>x.id===el.dataset.id);if(a){a.completedAt=a.completedAt?null:new Date().toISOString();updateAuditTimestamp(a);renderActiveAudit(a);}}
    else if(action==='start-quiz')startQuiz();
    else if(action==='answer-quiz')answerQuiz(Number(el.dataset.index));
    else if(action==='next-quiz')nextQuiz();
    else if(action==='new-quiz'){activeQuiz=null;renderQuiz();}
    else if(action==='more-tab'){moreTab=el.dataset.tab;renderMore();}
    else if(action==='export-backup')exportBackup();
    else if(action==='import-backup')importFile.click();
    else if(action==='reset-data'){if(confirm(t('confirmReset'))){localStorage.removeItem(STORAGE_KEY);state=defaultState();activeQuiz=null;saveState();applyTheme();setView('home');}}
    else if(action==='share-app')shareApp();
    else if(action==='install-app')installApp();
  });

  document.addEventListener('input', event => {
    const el=event.target;
    if(el.id==='reqSearch'){reqFilters.query=el.value;renderRequirements();document.getElementById('reqSearch')?.focus();}
    if(el.dataset.auditField){const {audit,item}=findAuditItem(el.dataset.audit,el.dataset.item);if(audit&&item){item[el.dataset.auditField]=el.value;updateAuditTimestamp(audit);}}
    if(el.dataset.auditMeta){const audit=state.audits.find(a=>a.id===el.dataset.audit);if(audit){audit[el.dataset.auditMeta]=el.value;updateAuditTimestamp(audit);}}
  });

  document.addEventListener('change', event => {
    const el=event.target;
    if(el.id==='reqStandard'){reqFilters.standard=el.value;renderRequirements();}
    else if(el.id==='reqChapter'){reqFilters.chapter=el.value;renderRequirements();}
    else if(el.id==='reqPriority'){reqFilters.priority=el.value;renderRequirements();}
    else if(el.id==='reqBookmarks'){reqFilters.bookmarks=el.checked;renderRequirements();}
    else if(el.id==='reqNew2026'){reqFilters.new2026=el.checked;renderRequirements();}
    else if(el.id==='auditType'){document.getElementById('auditLensHelp').textContent=t(el.value==='customer'?'customerLensHelp':el.value==='certification'?'certLensHelp':'internalLensHelp');}
    else if(el.id==='auditOpenOnly'){auditOpenOnly=el.checked;renderAudit();}
    else if(el.id==='settingLanguage'){state.language=el.value;saveState();render();}
    else if(el.id==='settingTheme'){state.theme=el.value;saveState();applyTheme();render();}
  });

  importFile.addEventListener('change',()=>{const file=importFile.files?.[0];if(file)importBackupFile(file);importFile.value='';});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){modalRoot.innerHTML='';document.body.classList.remove('menu-open');}});
  window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;});
  if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./sw.js').catch(error=>console.warn('Service worker registration failed',error));
  matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change',()=>{if(state.theme==='system')applyTheme();});

  applyTheme();
  render();
})();
