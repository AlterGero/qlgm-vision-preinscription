# QLGM Vision landing page

Static marketing site for `qlgmvision.eu`.

## Lemon Squeezy checkout

All purchase buttons are wired in `checkout.js`.

Replace:

```js
https://qlgmvision.lemonsqueezy.com/checkout/buy/REPLACE_WITH_VARIANT_ID
```

with the real Lemon Squeezy hosted checkout link for the launch subscription variant.

Expected format:

```text
https://[STORE].lemonsqueezy.com/checkout/buy/[VARIANT_ID]
```

Until the variant is configured, the buttons fall back to `mailto:contact@qlgmvision.eu`.

## Manual verification

Open `index.html` in a browser and check:

- the primary CTA is visible without scrolling on desktop and mobile;
- every pricing CTA opens Lemon Squeezy once the variant ID is configured;
- the launch price is `15 EUR/mois` and the standard price is `24,99 EUR/mois apres 6 mois`;
- the feature table remains readable on mobile.
