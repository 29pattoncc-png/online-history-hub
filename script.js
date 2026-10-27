const resources = [
  {
    title: "The Roman Empire: Government, Society, and Expansion",
    type: "Article",
    period: "27 BCE – 476 CE",
    description: "Explore how Rome grew from a republic into an empire and left a lasting mark on law, language, and life.",
    source: "Khan Academy",
    url: "https://www.khanacademy.org/humanities/world-history/ancient-medieval",
    tags: ["roman empire", "rome", "ancient", "republic", "law"],
  },
  {
    title: "The Renaissance: Art and Discovery",
    type: "Article",
    period: "14th–17th century",
    description: "Meet the artists, thinkers, and patrons who transformed European art and ideas.",
    source: "The Metropolitan Museum of Art",
    url: "https://www.metmuseum.org/essays",
    tags: ["renaissance", "art", "europe", "leonardo", "culture"],
  },
  {
    title: "The Cuban Missile Crisis, 1962",
    type: "Archival resource",
    period: "October 1962",
    description: "Declassified documents and recordings trace thirteen days that brought the Cold War to the brink.",
    source: "U.S. National Security Archive",
    url: "https://nsarchive.gwu.edu/briefing-book/cuba/2018-10-12/cuban-missile-crisis-briefing-book",
    tags: ["cold war", "cuba", "missile crisis", "kennedy", "documents"],
  },
  {
    title: "The March on Washington: A Day That Changed America",
    type: "Primary source",
    period: "August 28, 1963",
    description: "Photographs, recordings, and first-hand accounts from a defining moment in the Civil Rights Movement.",
    source: "National Archives",
    url: "https://www.archives.gov/research/african-americans/civil-rights",
    tags: ["civil rights", "march on washington", "martin luther king", "equality"],
  },
  {
    title: "The Industrial Revolution",
    type: "Article",
    period: "1760–1840",
    description: "Discover how new machines, factories, and ideas reshaped work and everyday life.",
    source: "The British Library",
    url: "https://www.bl.uk/georgian-britain/articles/the-industrial-revolution",
    tags: ["industrial revolution", "industry", "technology", "britain", "work"],
  },
  {
    title: "The Rosetta Stone",
    type: "Archival resource",
    period: "196 BCE",
    description: "See how a single inscribed stone unlocked the meaning of ancient Egyptian hieroglyphs.",
    source: "The British Museum",
    url: "https://www.britishmuseum.org/collection/object/Y_EA24",
    tags: ["ancient egypt", "egypt", "rosetta stone", "hieroglyphs", "artifact"],
  },
  {
    title: "D-Day: The Allied Invasion of Normandy",
    type: "Primary source",
    period: "June 6, 1944",
    description: "Read the messages, photographs, and oral histories surrounding the largest seaborne invasion in history.",
    source: "U.S. National Archives",
    url: "https://www.archives.gov/research/military/ww2/d-day",
    tags: ["world war ii", "wwii", "d-day", "normandy", "allies"],
  },
  {
    title: "The Declaration of the Rights of Man and Citizen",
    type: "Document",
    period: "1789",
    description: "Explore the revolutionary document that declared liberty and equality to be universal rights.",
    source: "The Avalon Project, Yale",
    url: "https://avalon.law.yale.edu/18th_century/rightsof.asp",
    tags: ["french revolution", "france", "rights", "revolution", "declaration"],
  },
  {
    title: "The Parthenon and Its Sculptures",
    type: "Article",
    period: "447–432 BCE",
    description: "A closer look at the temple at the heart of ancient Athens and the stories told in its sculpture.",
    source: "The British Museum",
    url: "https://www.britishmuseum.org/collection/galleries/greece-parthenon",
    tags: ["ancient greece", "athens", "parthenon", "architecture", "art"],
  },
  {
    title: "The Silk Roads: A New History of the World",
    type: "Academic paper",
    period: "2nd century BCE onward",
    description: "Investigate the networks that connected merchants, faiths, technologies, and cultures across Eurasia.",
    source: "UNESCO",
    url: "https://en.unesco.org/silkroad/",
    tags: ["silk road", "trade", "asia", "culture", "ancient"],
  },
  {
    title: "The Gettysburg Address",
    type: "Primary source",
    period: "November 19, 1863",
    description: "Read Lincoln's brief, enduring speech alongside manuscripts and context from the Civil War.",
    source: "Library of Congress",
    url: "https://www.loc.gov/exhibits/gettysburg-address/",
    tags: ["american civil war", "gettysburg", "lincoln", "united states", "speech"],
  },
  {
    title: "The Fall of the Berlin Wall",
    type: "News report",
    period: "November 9, 1989",
    description: "Revisit the extraordinary night when East and West Berliners came together at the wall.",
    source: "BBC News",
    url: "https://www.bbc.com/news/world-europe-50214162",
    tags: ["cold war", "berlin wall", "germany", "1989", "europe"],
  },
  {
    title: "The Great Pyramid of Giza",
    type: "Article",
    period: "c. 2560 BCE",
    description: "Explore the engineering, people, and beliefs behind one of the ancient world's great wonders.",
    source: "The Smithsonian",
    url: "https://www.si.edu/spotlight/ancient-egypt",
    tags: ["ancient egypt", "egypt", "pyramid", "giza", "pharaoh"],
  },
  {
    title: "The Universal Declaration of Human Rights",
    type: "Document",
    period: "December 10, 1948",
    description: "Read the landmark declaration adopted in the aftermath of World War II.",
    source: "United Nations",
    url: "https://www.un.org/en/about-us/universal-declaration-of-human-rights",
    tags: ["world war ii", "human rights", "united nations", "document", "1948"],
  },
  {
    title: "Women and the American Revolution",
    type: "Academic paper",
    period: "1765–1783",
    description: "Learn how women shaped political debate, supported armies, and built the new republic.",
    source: "National Park Service",
    url: "https://www.nps.gov/articles/000/women-in-the-american-revolution.htm",
    tags: ["american revolution", "women", "united states", "revolution", "equality"],
  },
  {
    title: "The Printing Press and the Reformation",
    type: "Article",
    period: "15th–16th century",
    description: "See how print helped ideas travel and transformed religion and learning across Europe.",
    source: "The British Library",
    url: "https://www.bl.uk/the-middle-ages/articles/the-gutenberg-bible",
    tags: ["renaissance", "printing press", "reformation", "europe", "books"],
  },
  {
    title: "The Emancipation Proclamation",
    type: "Document",
    period: "January 1, 1863",
    description: "Explore the text and historical context of Lincoln's proclamation during the American Civil War.",
    source: "U.S. National Archives",
    url: "https://www.archives.gov/exhibits/featured-documents/emancipation-proclamation",
    tags: ["civil rights", "emancipation", "civil war", "lincoln", "united states"],
  },
  {
    title: "The Plague and Public Health in Renaissance Europe",
    type: "News report",
    period: "14th–17th century",
    description: "How outbreaks of disease changed the way cities understood medicine, trade, and public life.",
    source: "History.com",
    url: "https://www.history.com/topics/middle-ages/black-death",
    tags: ["renaissance", "plague", "medicine", "europe", "public health"],
  },
  {
    title: "Hammurabi's Code: What Does It Really Tell Us?",
    type: "Archival resource",
    period: "c. 1754 BCE",
    description: "Examine one of the earliest surviving law codes and what it reveals about Babylonian society.",
    source: "The Louvre",
    url: "https://www.louvre.fr/en/explore/the-palace/the-code-of-hammurabi",
    tags: ["ancient mesopotamia", "babylon", "law", "ancient", "artifact"],
  },
  {
    title: "The Nuremberg Trials: A Record of Justice",
    type: "Archival resource",
    period: "1945–1946",
    description: "Discover courtroom records and testimony from the postwar trials of Nazi leaders.",
    source: "Harvard Law School Library",
    url: "https://nuremberg.law.harvard.edu/",
    tags: ["world war ii", "wwii", "nuremberg", "holocaust", "justice"],
  },
];

const searchInput = document.querySelector("#history-search");
const searchForm = document.querySelector("#search-form");
const categoryFilter = document.querySelector("#category-filter");
const resourceGrid = document.querySelector("#resource-grid");
const resultsCount = document.querySelector("#results-count");
const emptyState = document.querySelector("#empty-state");
const discoveryStatus = document.querySelector("#discovery-status");
const loadMoreWrap = document.querySelector("#load-more-wrap");
const loadMoreButton = document.querySelector("#load-more");

const catalogPageSize = 12;
const encyclopediaPageSize = 10;
const researchPageSize = 10;
const openRepositoryPageSize = 10;
let debounceTimer;
let activeController;
let requestSequence = 0;
let remoteState = createRemoteState("");

function createRemoteState(query) {
  return {
    query,
    resources: [],
    loading: false,
    locPage: 0,
    locTotal: null,
    locHasMore: false,
    wikiOffset: 0,
    wikiTotal: null,
    wikiHasMore: false,
    wikipediaLetterSearch: false,
    openAlexPage: 0,
    openAlexTotal: null,
    openAlexHasMore: false,
    crossrefCursor: "*",
    crossrefTotal: null,
    crossrefHasMore: false,
    doajPage: 0,
    doajTotal: null,
    doajHasMore: false,
    zenodoPage: 0,
    zenodoTotal: null,
    zenodoHasMore: false,
    europePmcCursor: "*",
    europePmcTotal: null,
    europePmcHasMore: false,
    errors: [],
  };
}

function firstText(value) {
  const text = Array.isArray(value) ? value.find(Boolean) : value;
  return typeof text === "string" ? text.replace(/<[^>]*>/g, "").trim() : "";
}

function normalizeText(value) {
  return value.trim().toLocaleLowerCase();
}

function matchesSearch(resource, query) {
  const searchableText = [
    resource.title,
    resource.type,
    resource.period,
    resource.description,
    resource.source,
    ...resource.tags,
  ].join(" ").toLocaleLowerCase();
  return !query || searchableText.includes(query);
}

function createResourceCard(resource) {
  const card = document.createElement("article");
  card.className = "resource-card";

  const topline = document.createElement("div");
  topline.className = "card-topline";
  const badge = document.createElement("span");
  badge.className = "type-badge";
  badge.textContent = resource.type;
  const period = document.createElement("span");
  period.className = "card-period";
  period.textContent = resource.period;
  topline.append(badge, period);

  const title = document.createElement("h3");
  title.textContent = resource.title;
  const description = document.createElement("p");
  description.textContent = resource.description;

  const footer = document.createElement("div");
  footer.className = "card-footer";
  const source = document.createElement("span");
  source.className = "card-source";
  source.textContent = resource.source;
  const link = document.createElement("a");
  link.className = "card-link";
  link.href = resource.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `Explore ${resource.title} at ${resource.source}`);
  link.append(document.createTextNode("Explore "));
  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  link.append(arrow);
  footer.append(source, link);
  card.append(topline, title, description, footer);
  return card;
}

function updateDiscoveryStatus(query) {
  const hasQuery = query.length >= 1 && remoteState.query === query;
  discoveryStatus.hidden = !hasQuery;
  discoveryStatus.removeAttribute("data-error");

  if (!hasQuery) {
    return;
  }

  if (remoteState.loading) {
    discoveryStatus.textContent = "Searching library, scholarly, open-access, and repository indexes…";
    return;
  }

  const totals = [];
  if (remoteState.locTotal !== null) {
    totals.push(`Library of Congress: ${remoteState.locTotal.toLocaleString()} records`);
  }
  if (remoteState.wikiTotal !== null) {
    totals.push(`Wikipedia: about ${remoteState.wikiTotal.toLocaleString()} articles`);
  }
  if (remoteState.openAlexTotal !== null) {
    totals.push(`OpenAlex: ${remoteState.openAlexTotal.toLocaleString()} scholarly works`);
  }
  if (remoteState.crossrefTotal !== null) {
    totals.push(`Crossref: ${remoteState.crossrefTotal.toLocaleString()} publications`);
  }
  if (remoteState.doajTotal !== null) {
    totals.push(`DOAJ: ${remoteState.doajTotal.toLocaleString()} open-access articles`);
  }
  if (remoteState.zenodoTotal !== null) {
    totals.push(`Zenodo: ${remoteState.zenodoTotal.toLocaleString()} repository records`);
  }
  if (remoteState.europePmcTotal !== null) {
    totals.push(`Europe PMC: ${remoteState.europePmcTotal.toLocaleString()} biomedical records`);
  }

  const loaded = remoteState.resources.length;
  const summary = totals.length ? `${totals.join(" · ")}. ` : "";
  const moreAvailable = remoteState.locHasMore ||
    remoteState.wikiHasMore ||
    remoteState.openAlexHasMore ||
    remoteState.crossrefHasMore ||
    remoteState.doajHasMore ||
    remoteState.zenodoHasMore ||
    remoteState.europePmcHasMore;
  const continuation = moreAvailable
    ? ` ${loaded.toLocaleString()} loaded so far; load more to keep exploring.`
    : ` ${loaded.toLocaleString()} matching records loaded.`;
  const failure = remoteState.errors.length
    ? ` ${remoteState.errors.join(", ")} could not be reached; showing results from the indexes that responded.`
    : "";
  discoveryStatus.textContent = `${summary}${continuation}${failure}`;
  if (remoteState.errors.length) {
    discoveryStatus.dataset.error = "true";
  }
}

function renderResources() {
  const query = normalizeText(searchInput.value);
  const category = categoryFilter.value;
  const curatedResources = resources.filter((resource) => matchesSearch(resource, query));
  const curatedTitles = new Set(curatedResources.map((resource) => normalizeText(resource.title)));
  const remoteResources = query.length >= 1 && remoteState.query === query
    ? remoteState.resources.filter((resource) => !curatedTitles.has(normalizeText(resource.title)))
    : [];
  const filteredResources = [...curatedResources, ...remoteResources].filter((resource) =>
    category === "all" || resource.type === category
  );

  resourceGrid.replaceChildren();
  filteredResources.forEach((resource) => resourceGrid.append(createResourceCard(resource)));

  const hasFilters = Boolean(query) || category !== "all";
  resultsCount.textContent = hasFilters
    ? `${filteredResources.length.toLocaleString()} ${filteredResources.length === 1 ? "resource" : "resources"} shown`
    : "A few good places to begin";
  updateDiscoveryStatus(query);
  emptyState.hidden = filteredResources.length > 0 || remoteState.loading;
  resourceGrid.hidden = filteredResources.length === 0;
  loadMoreWrap.hidden = !(
    query.length >= 1 &&
    remoteState.query === query &&
    (remoteState.locHasMore ||
      remoteState.wikiHasMore ||
      remoteState.openAlexHasMore ||
      remoteState.crossrefHasMore ||
      remoteState.doajHasMore ||
      remoteState.zenodoHasMore ||
      remoteState.europePmcHasMore)
  );
  loadMoreButton.disabled = remoteState.loading;
  loadMoreButton.textContent = remoteState.loading ? "Loading records…" : "Load more records ↓";
}

async function fetchJson(url, signal) {
  const requestController = new AbortController();
  const timeoutId = setTimeout(() => requestController.abort(), 8000);
  const abortRequest = () => requestController.abort();
  signal.addEventListener("abort", abortRequest, { once: true });

  try {
    const response = await fetch(url, { signal: requestController.signal });
    if (!response.ok) {
      throw new Error(`Catalog request failed (${response.status})`);
    }
    return await response.json();
  } finally {
    clearTimeout(timeoutId);
    signal.removeEventListener("abort", abortRequest);
  }
}

async function loadCatalogs(query, append = false) {
  if (activeController) {
    activeController.abort();
  }
  activeController = new AbortController();
  const { signal } = activeController;
  const sequence = ++requestSequence;
  const locPage = append ? remoteState.locPage + 1 : 1;
  const wikiOffset = append ? remoteState.wikiOffset : 0;
  const requestLoc = (query.length >= 2 && !append) || remoteState.locHasMore;
  const requestWikipedia = !append || remoteState.wikiHasMore;
  const requestOpenAlex = (query.length >= 2 && !append) || remoteState.openAlexHasMore;
  const requestCrossref = (query.length >= 2 && !append) || remoteState.crossrefHasMore;
  const requestDoaj = !append || remoteState.doajHasMore;
  const requestZenodo = !append || remoteState.zenodoHasMore;
  const requestEuropePmc = (!append || remoteState.europePmcHasMore) && query.length >= 2;
  const europePmcCursor = append ? remoteState.europePmcCursor : "*";
  const openAlexPage = append ? remoteState.openAlexPage + 1 : 1;
  const doajPage = append ? remoteState.doajPage + 1 : 1;
  const zenodoPage = append ? remoteState.zenodoPage + 1 : 1;

  remoteState.loading = true;
  remoteState.errors = [];
  renderResources();

  const requests = [];
  if (requestLoc) {
    const locUrl = new URL("https://www.loc.gov/search/");
    locUrl.searchParams.set("q", query);
    locUrl.searchParams.set("fo", "json");
    locUrl.searchParams.set("c", String(catalogPageSize));
    locUrl.searchParams.set("sp", String(locPage));
    requests.push({
      source: "Library of Congress",
      promise: fetchJson(locUrl, signal),
    });
  }
  if (requestWikipedia) {
    const wikiUrl = new URL("https://en.wikipedia.org/w/api.php");
    wikiUrl.searchParams.set("action", "query");
    wikiUrl.searchParams.set("list", "search");
    wikiUrl.searchParams.set("srsearch", query);
    wikiUrl.searchParams.set("srnamespace", "0");
    wikiUrl.searchParams.set("srlimit", String(encyclopediaPageSize));
    wikiUrl.searchParams.set("sroffset", String(wikiOffset));
    wikiUrl.searchParams.set("srinfo", "totalhits");
    wikiUrl.searchParams.set("format", "json");
    wikiUrl.searchParams.set("origin", "*");
    requests.push({
      source: "Wikipedia",
      promise: fetchJson(wikiUrl, signal),
    });
  }
  if (requestOpenAlex) {
    const openAlexUrl = new URL("https://api.openalex.org/works");
    openAlexUrl.searchParams.set("search", query);
    openAlexUrl.searchParams.set("per-page", String(researchPageSize));
    openAlexUrl.searchParams.set("page", String(openAlexPage));
    openAlexUrl.searchParams.set("sort", "relevance_score:desc");
    requests.push({
      source: "OpenAlex",
      promise: fetchJson(openAlexUrl, signal),
    });
  }
  if (requestCrossref) {
    const crossrefUrl = new URL("https://api.crossref.org/works");
    crossrefUrl.searchParams.set("query.bibliographic", query);
    crossrefUrl.searchParams.set("rows", String(researchPageSize));
    crossrefUrl.searchParams.set("cursor", append ? remoteState.crossrefCursor : "*");
    requests.push({
      source: "Crossref",
      promise: fetchJson(crossrefUrl, signal),
    });
  }
  if (requestDoaj) {
    const doajUrl = new URL(`https://doaj.org/api/search/articles/${encodeURIComponent(query)}`);
    doajUrl.searchParams.set("page", String(doajPage));
    doajUrl.searchParams.set("pageSize", String(openRepositoryPageSize));
    requests.push({
      source: "DOAJ",
      promise: fetchJson(doajUrl, signal),
    });
  }
  if (requestZenodo) {
    const zenodoUrl = new URL("https://zenodo.org/api/records/");
    zenodoUrl.searchParams.set("q", query);
    zenodoUrl.searchParams.set("size", String(openRepositoryPageSize));
    zenodoUrl.searchParams.set("page", String(zenodoPage));
    requests.push({
      source: "Zenodo",
      promise: fetchJson(zenodoUrl, signal),
    });
  }
  if (requestEuropePmc) {
    const europePmcUrl = new URL("https://www.ebi.ac.uk/europepmc/webservices/rest/search");
    europePmcUrl.searchParams.set("query", query);
    europePmcUrl.searchParams.set("format", "json");
    europePmcUrl.searchParams.set("pageSize", String(researchPageSize));
    europePmcUrl.searchParams.set("cursorMark", europePmcCursor);
    europePmcUrl.searchParams.set("resultType", "core");
    requests.push({
      source: "Europe PMC",
      promise: fetchJson(europePmcUrl, signal),
    });
  }

  const outcomes = await Promise.allSettled(requests.map((request) => request.promise));
  if (sequence !== requestSequence || signal.aborted) {
    return;
  }

  outcomes.forEach((outcome, index) => {
    const source = requests[index].source;
    if (outcome.status === "rejected") {
      remoteState.errors.push(source);
      return;
    }

    const data = outcome.value;
    if (source === "Library of Congress") {
      const results = Array.isArray(data.results) ? data.results : [];
      remoteState.resources.push(...results.map((item) => {
        const subjects = Array.isArray(item.subject) ? item.subject.slice(0, 3).join(", ") : "";
        const description = firstText(item.description) ||
          (subjects ? `Catalog subjects: ${subjects}.` : "Open this catalog record to explore available descriptions and materials.");
        return {
          title: firstText(item.title) || "Untitled Library of Congress record",
          type: "Archival resource",
          period: firstText(item.date) || firstText(item.dates) || "Library of Congress collection",
          description,
          source: "Library of Congress",
          url: firstText(item.url) || firstText(item.id),
          tags: Array.isArray(item.subject) ? item.subject : [],
        };
      }).filter((item) => item.url.startsWith("https://")));
      remoteState.locPage = locPage;
      remoteState.locTotal = Number(data.pagination?.total) || 0;
      remoteState.locHasMore = remoteState.locPage * catalogPageSize < remoteState.locTotal;
    } else     if (source === "Wikipedia") {
      const pages = (data.query?.search || []).map((item, index) => ({
          title: item.title,
          index: index + 1,
          extract: firstText(item.snippet),
          fullurl: `https://en.wikipedia.org/wiki/${encodeURIComponent(item.title.replace(/ /g, "_"))}`,
        }));
      remoteState.resources.push(...pages.map((item) => ({
        title: item.title,
        type: "Article",
        period: "Encyclopedia article",
        description: item.extract || "Open this article to explore the topic in more detail.",
        source: "Wikipedia",
        url: item.fullurl || `https://en.wikipedia.org/wiki/${encodeURIComponent(item.title.replace(/ /g, "_"))}`,
        tags: [],
      })));
      const nextOffset = Number(data.continue?.sroffset);
      remoteState.wikiOffset = Number.isFinite(nextOffset) && nextOffset > wikiOffset
        ? nextOffset
        : wikiOffset + pages.length;
      const totalHits = data.query?.searchinfo?.totalhits;
      remoteState.wikiTotal = Number.isFinite(Number(totalHits)) ? Number(totalHits) : null;
      remoteState.wikiHasMore = Number.isFinite(nextOffset) && nextOffset > wikiOffset;
    }

    if (source === "OpenAlex") {
      const works = Array.isArray(data.results) ? data.results : [];
      remoteState.resources.push(...works.map((work) => {
        const abstract = work.abstract_inverted_index
          ? Object.entries(work.abstract_inverted_index)
            .flatMap(([word, positions]) => positions.map((position) => [position, word]))
            .sort((left, right) => left[0] - right[0])
            .map((entry) => entry[1])
            .join(" ")
          : "";
        const accessUrl = work.open_access?.oa_url ||
          work.best_oa_location?.pdf_url ||
          work.best_oa_location?.landing_page_url ||
          work.primary_location?.landing_page_url ||
          work.doi ||
          work.id;
        const location = work.primary_location?.source?.display_name;
        return {
          title: firstText(work.title) || "Untitled scholarly work",
          type: "Academic paper",
          period: work.publication_year ? String(work.publication_year) : "Scholarly work",
          description: firstText(abstract) ||
            (work.open_access?.is_oa
              ? "Open-access scholarly work. Follow the source link to read the full text."
              : "Scholarly work indexed by OpenAlex. Follow the source link for availability and access details."),
          source: location ? `OpenAlex · ${location}` : "OpenAlex scholarly index",
          url: typeof accessUrl === "string" && accessUrl.startsWith("https://")
            ? accessUrl
            : work.id,
          tags: [work.type, work.primary_topic?.display_name].filter(Boolean),
        };
      }).filter((item) => item.url.startsWith("https://")));
      remoteState.openAlexTotal = Number(data.meta?.count) || 0;
      remoteState.openAlexPage = openAlexPage;
      remoteState.openAlexHasMore = openAlexPage * researchPageSize < remoteState.openAlexTotal &&
        works.length === researchPageSize;
    }

    if (source === "Crossref") {
      const message = data.message || {};
      const items = Array.isArray(message.items) ? message.items : [];
      remoteState.resources.push(...items.map((item) => {
        const authorNames = Array.isArray(item.author)
          ? item.author.slice(0, 3).map((author) =>
            [author.given, author.family].filter(Boolean).join(" ")
          ).filter(Boolean).join(", ")
          : "";
        const abstract = firstText(item.abstract);
        const doiUrl = typeof item.DOI === "string"
          ? `https://doi.org/${encodeURIComponent(item.DOI)}`
          : "";
        const publicationDate = item.published?.["date-parts"]?.[0]?.[0];
        return {
          title: firstText(item.title) || "Untitled scholarly publication",
          type: "Academic paper",
          period: publicationDate ? String(publicationDate) : "Scholarly publication",
          description: abstract || (authorNames
            ? `By ${authorNames}. Publisher metadata indexed by Crossref.`
            : "Scholarly publication metadata indexed by Crossref. Follow the source link for access details."),
          source: firstText(item["container-title"]) || "Crossref scholarly index",
          url: firstText(item.URL) || doiUrl,
          tags: [item.type, ...(Array.isArray(item.subject) ? item.subject.slice(0, 4) : [])].filter(Boolean),
        };
      }).filter((item) => item.url.startsWith("https://")));
      remoteState.crossrefTotal = Number(message["total-results"]) || 0;
      remoteState.crossrefCursor = message["next-cursor"] || "";
      remoteState.crossrefHasMore = Boolean(remoteState.crossrefCursor) && items.length === researchPageSize;
    }

    if (source === "DOAJ") {
      const results = Array.isArray(data.results) ? data.results : [];
      remoteState.resources.push(...results.map((result) => {
        const article = result.bibjson || {};
        const links = Array.isArray(article.link) ? article.link : [];
        const fullText = links.find((link) => link.type === "fulltext")?.url;
        const doi = Array.isArray(article.identifier)
          ? article.identifier.find((identifier) => identifier.type === "doi")?.id
          : "";
        const authors = Array.isArray(article.author)
          ? article.author.slice(0, 3).map((author) => author.name).filter(Boolean).join(", ")
          : "";
        return {
          title: firstText(article.title) || "Untitled open-access article",
          type: "Open-access article",
          period: firstText(article.year) || "Open-access publication",
          description: firstText(article.abstract) ||
            (authors ? `By ${authors}. Published in ${firstText(article.journal?.title) || "an open-access journal"}.` :
              `Open-access journal article indexed by DOAJ${article.journal?.title ? ` in ${article.journal.title}` : ""}.`),
          source: firstText(article.journal?.title) || "DOAJ open-access index",
          url: firstText(fullText) || firstText(doi),
          tags: Array.isArray(article.subject) ? article.subject.map((subject) => subject.term).filter(Boolean) : [],
        };
      }).filter((item) => item.url.startsWith("https://")));
      remoteState.doajPage = doajPage;
      remoteState.doajTotal = Number(data.total) || 0;
      remoteState.doajHasMore = doajPage * openRepositoryPageSize < remoteState.doajTotal &&
        results.length === openRepositoryPageSize;
    }

    if (source === "Zenodo") {
      const hits = Array.isArray(data.hits?.hits) ? data.hits.hits : [];
      remoteState.resources.push(...hits.map((record) => {
        const metadata = record.metadata || {};
        const creators = Array.isArray(metadata.creators)
          ? metadata.creators.slice(0, 3).map((creator) => creator.name).filter(Boolean).join(", ")
          : "";
        return {
          title: firstText(metadata.title || record.title) || "Untitled repository record",
          type: "Repository record",
          period: firstText(metadata.publication_date) || "Research repository",
          description: firstText(metadata.description) ||
            (creators ? `Created by ${creators}. Open this repository record for files and metadata.` :
              "Research record from the Zenodo repository. Open for files and metadata."),
          source: "Zenodo research repository",
          url: firstText(record.links?.html) || firstText(record.doi_url) || firstText(record.links?.self_html),
          tags: Array.isArray(metadata.keywords) ? metadata.keywords : [],
        };
      }).filter((item) => item.url.startsWith("https://")));
      remoteState.zenodoPage = zenodoPage;
      remoteState.zenodoTotal = Number(data.hits?.total) || 0;
      remoteState.zenodoHasMore = zenodoPage * openRepositoryPageSize < remoteState.zenodoTotal &&
        hits.length === openRepositoryPageSize;
    }

    if (source === "Europe PMC") {
      const results = Array.isArray(data.resultList?.result) ? data.resultList.result : [];
      remoteState.resources.push(...results.map((item) => {
        const fullTextLinks = item.fullTextUrlList?.fullTextUrl;
        const fullTextUrl = Array.isArray(fullTextLinks)
          ? fullTextLinks.find((link) => link.documentStyle === "pdf")?.url || fullTextLinks[0]?.url
          : "";
        const articleUrl = item.pmid
          ? `https://europepmc.org/article/MED/${encodeURIComponent(item.pmid)}`
          : item.pmcid
            ? `https://europepmc.org/articles/${encodeURIComponent(item.pmcid)}`
            : `https://europepmc.org/search?query=${encodeURIComponent(item.title || query)}`;
        return {
          title: firstText(item.title) || "Untitled biomedical research article",
          type: "Academic paper",
          period: firstText(item.firstPublicationDate) || firstText(item.pubYear) || "Biomedical research",
          description: firstText(item.abstractText) ||
            `${firstText(item.authorString) ? `By ${item.authorString}. ` : ""}${item.isOpenAccess === "Y" ? "Open-access article." : "Article record."} Indexed by Europe PMC.`,
          source: firstText(item.journalTitle) || "Europe PMC",
          url: firstText(fullTextUrl) || articleUrl,
          tags: [item.pubType, item.source].filter(Boolean),
        };
      }).filter((item) => item.url.startsWith("https://")));
      remoteState.europePmcTotal = Number(data.hitCount) || 0;
      remoteState.europePmcCursor = data.nextCursorMark || "";
      remoteState.europePmcHasMore = Boolean(remoteState.europePmcCursor) &&
        remoteState.europePmcCursor !== europePmcCursor &&
        results.length === researchPageSize;
    }
  });

  remoteState.loading = false;
  renderResources();
}

function startSearch(query) {
  clearTimeout(debounceTimer);
  if (activeController) {
    activeController.abort();
  }
  requestSequence += 1;
  const normalizedQuery = normalizeText(query);
  if (normalizedQuery.length < 1) {
    remoteState = createRemoteState(normalizedQuery);
    renderResources();
    if (normalizedQuery.length === 1) {
      discoveryStatus.hidden = false;
      discoveryStatus.textContent = "Type at least two characters to search the public collections.";
    }
    return;
  }

  remoteState = createRemoteState(normalizedQuery);
  remoteState.loading = true;
  renderResources();
  debounceTimer = setTimeout(() => loadCatalogs(normalizedQuery), 300);
}

function loadMoreRecords() {
  if (!remoteState.loading && remoteState.query) {
    loadCatalogs(remoteState.query, true);
  }
}

searchInput.addEventListener("input", () => startSearch(searchInput.value));
categoryFilter.addEventListener("change", renderResources);
loadMoreButton.addEventListener("click", loadMoreRecords);
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#explore").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll("[data-query]").forEach((button) => {
  button.addEventListener("click", () => {
    searchInput.value = button.dataset.query;
    categoryFilter.value = "all";
    startSearch(searchInput.value);
    document.querySelector("#explore").scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelector("#clear-search").addEventListener("click", () => {
  searchInput.value = "";
  categoryFilter.value = "all";
  startSearch("");
  searchInput.focus();
});

renderResources();
