(function () {
  const LEMON_SQUEEZY_CHECKOUT_URL =
    "https://qlgmvision.lemonsqueezy.com/checkout/buy/REPLACE_WITH_VARIANT_ID";
  const FALLBACK_URL =
    "mailto:contact@qlgmvision.eu?subject=Abonnement%20QLGM%20Vision%20-%20offre%20lancement";

  const checkoutReady = !LEMON_SQUEEZY_CHECKOUT_URL.includes("REPLACE_WITH_VARIANT_ID");
  const targetUrl = checkoutReady ? LEMON_SQUEEZY_CHECKOUT_URL : FALLBACK_URL;

  document.querySelectorAll("[data-checkout-link]").forEach((link) => {
    link.setAttribute("href", targetUrl);

    if (checkoutReady) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
})();
