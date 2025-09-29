// Redirect
// location.href = 'https://quera.org'

// Refresh
// location.href = location.href;

const { hash, host, hostname, href, origin, pathname, port, protocol, search } =
  location;

const route = {
  hash,
  host,
  hostname,
  href,
  origin,
  pathname,
  port,
  protocol,
  search,
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
