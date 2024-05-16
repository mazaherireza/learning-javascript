// Redirect
// location.href = 'https://quera.org'

// Refresh
// location.href = location.href;

const route = {
  hash: location.hash,
  host: location.host,
  hostname: location.hostname,
  href: location.href,
  origin: location.origin,
  pathname: location.pathname,
  port: location.port,
  protocol: location.protocol,
  search: location.search,
};

console.table(route);

// hash: ""
// host: "quera.org"
// hostname: "quera.org"
// href: "https://quera.org/problemset?solved=partial&difficulty=EZ"
// origin: "https://quera.org"
// pathname: "/problemset"
// port: ""
// protocol: "https:"
// search: "?solved=partial&difficulty=EZ"
