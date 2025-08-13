# Astro Landing + n8n (Amplify)

## Quickstart
1. Clone repo ini atau salin struktur ke folder baru.
2. `cp .env.example .env` lalu set `PUBLIC_N8N_WEBHOOK_URL` ke webhook n8n kamu.
3. `npm install`
4. `npm run dev` → buka http://localhost:4321

## Deploy ke AWS Amplify (subdomain gratis)
1. Push ke GitHub (atau GitLab/Bitbucket).
2. Buka **AWS Amplify Console** → **Host web app** → **Connect app**.
3. Pilih repo & branch. Amplify gunakan `amplify.yml` ini otomatis.
4. Setelah build, situs live di `https://<project>.amplifyapp.com`.
5. Set **Environment variables** di Amplify: `PUBLIC_N8N_WEBHOOK_URL`.

## Catatan Produksi
- Tambahkan reCAPTCHA jika mulai pasang iklan.
- Pantau Billing (data transfer) walau Free Tier.
- Ganti copywriting, warna (Tailwind), dan logo di `/public`.
