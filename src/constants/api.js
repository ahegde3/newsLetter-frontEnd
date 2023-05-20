const isProd = true;
exports.BASE_URL = isProd
  ? "https://newsletter-collector-production.up.railway.app"
  : "http://localhost:8080";
