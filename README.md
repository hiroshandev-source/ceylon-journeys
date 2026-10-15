# Ceylon Journeys – Sri Lanka Tours Website

React + Vite tourism website for **Ceylon Journeys**, with no backend (frontend only).

---

## 🇬🇧 English Guide

### 1. Run the website
```bash
npm install
npm run dev
```
Open http://localhost:5173

Build for hosting (Netlify / Vercel / cPanel / GitHub Pages):
```bash
npm run build
```
Upload the `dist/` folder.

### 2. Change contact details
Edit **`src/config.js`**: phone numbers, WhatsApp number, **owner email**, address and social links.
> ⚠️ Replace `info@ceylonjourneys.com` with the real owner email.

### 3. How the inquiry form works
When a visitor fills **Full Name, Email, Phone and Destination** and clicks **Send Inquiry**:
1. **WhatsApp** opens with all the details, addressed to the owner (+94 78 348 0470). The visitor taps *Send*.
2. **Email** goes to the owner, and a confirmation copy goes to the customer (via EmailJS, set up below).
3. A success popup shows buttons to **send by SMS** to +94 78 348 0470, resend by WhatsApp, or send by email.

> Without a backend, a website cannot send WhatsApp or SMS messages silently. It opens the
> WhatsApp/SMS app with the message already written, and the visitor presses Send.

### 4. Set up automatic emails (EmailJS – free)
1. Create an account at https://www.emailjs.com
2. **Email Services → Add New Service** → choose Gmail and connect the owner’s Gmail. Copy the **Service ID**.
3. **Email Templates → Create New Template** (Owner template):
   - To Email: `{{to_email}}`
   - Reply To: `{{reply_to}}`
   - Subject: `New Tour Inquiry – {{destination}} – {{customer_name}}`
   - Content:
     ```
     Name: {{customer_name}}
     Email: {{customer_email}}
     Phone: {{customer_phone}}
     Destination: {{destination}}
     Travel date: {{travel_date}}
     Travellers: {{travelers}}
     Message: {{message}}
     ```
   Copy the **Template ID**.
4. Create a second template (Customer confirmation):
   - To Email: `{{to_email}}`
   - Reply To: `{{reply_to}}`
   - Subject: `Thank you for contacting {{business_name}}`
   - Content:
     ```
     Dear {{customer_name}},
     Thank you for your inquiry about {{destination}}. Our team will contact you shortly.
     Phone / WhatsApp: {{owner_phone}}
     – {{business_name}}
     ```
   Copy the **Template ID**.
5. **Account → General** → copy the **Public Key**.
6. Paste the 4 values into `EMAILJS` in `src/config.js`. Done ✅

Until EmailJS is set up, the form still works: WhatsApp and SMS work, and email opens the visitor's mail app.

### 5. Images
Photos are in `public/images/` (from Wikimedia Commons, CC BY-SA licence; credit is in the footer).
To use your own tour photos, replace a file and keep the same name.

---

## 🇱🇰 සිංහල මාර්ගෝපදේශය

### 1. වෙබ් අඩවිය ධාවනය කිරීම
```bash
npm install
npm run dev
```
බ්‍රව්සරයේ http://localhost:5173 විවෘත කරන්න.

Hosting සඳහා build කිරීමට:
```bash
npm run build
```
ඉන්පසු `dist/` ෆෝල්ඩරය upload කරන්න (Netlify / Vercel / cPanel).

### 2. සම්බන්ධතා විස්තර වෙනස් කිරීම
**`src/config.js`** ගොනුවේ දුරකථන අංක, WhatsApp අංකය, **හිමිකරුගේ email ලිපිනය**, ලිපිනය සහ social media links වෙනස් කරන්න.
> ⚠️ `info@ceylonjourneys.com` වෙනුවට හිමිකරුගේ සැබෑ email ලිපිනය යොදන්න.

### 3. Inquiry form එක ක්‍රියා කරන ආකාරය
පාරිභෝගිකයා **නම, Email, දුරකථන අංකය සහ ගමනාන්තය** පුරවා **Send Inquiry** ඔබූ විට:
1. සියලු විස්තර සහිතව හිමිකරුගේ අංකයට (+94 78 348 0470) **WhatsApp** විවෘත වේ. පාරිභෝගිකයා *Send* ඔබයි.
2. හිමිකරුට **Email** එකක් ද, පාරිභෝගිකයාට තහවුරු කිරීමේ email එකක් ද යැවේ (EmailJS හරහා).
3. ඉන්පසු +94 78 348 0470 අංකයට **SMS** ලෙස යැවීමට බොත්තමක් පෙන්වයි.

> Backend එකක් නොමැතිව WhatsApp / SMS ස්වයංක්‍රීයව යැවිය නොහැක. පණිවිඩය සකස් කර
> WhatsApp / SMS app එක විවෘත වන අතර පාරිභෝගිකයා Send ඔබිය යුතුය.

### 4. ස්වයංක්‍රීය Email සැකසීම (EmailJS – නොමිලේ)
1. https://www.emailjs.com හි ගිණුමක් සාදන්න.
2. **Email Services → Add New Service** → Gmail තෝරා හිමිකරුගේ Gmail සම්බන්ධ කරන්න. **Service ID** පිටපත් කරන්න.
3. **Email Templates → Create New Template** – හිමිකරු සඳහා template එකක් සාදන්න (ඉහත English කොටසේ ඇති අන්තර්ගතය භාවිත කරන්න). **Template ID** පිටපත් කරන්න.
4. පාරිභෝගිකයා සඳහා දෙවන template එක සාදන්න. **Template ID** පිටපත් කරන්න.
5. **Account → General** → **Public Key** පිටපත් කරන්න.
6. මෙම අගයන් 4 `src/config.js` හි `EMAILJS` කොටසට ඇතුළත් කරන්න. ✅

EmailJS සකසන තුරු ද form එක ක්‍රියා කරයි: WhatsApp සහ SMS වැඩ කරන අතර, email සඳහා පාරිභෝගිකයාගේ mail app එක විවෘත වේ.

### 5. ඡායාරූප
ඡායාරූප `public/images/` ෆෝල්ඩරයේ ඇත. ඔබේම ඡායාරූප යෙදීමට, එම නමින්ම ගොනුව ප්‍රතිස්ථාපනය කරන්න.

### 6. Google search (SEO) සහ deploy කිරීම

Site URL: **https://ceylonjourneys.world**

දැනටමත් project එකට එක් කර ඇති දේ:
- `public/robots.txt`: Google එකට site එක crawl කිරීමට ඉඩ දෙයි, sitemap එක පෙන්වයි.
- `public/sitemap.xml`: site එකේ pages ලැයිස්තුව. අලුත් pages එකතු කළොත්, ඒ එක එකට `<url>` block එකක් එකතු කර `<lastmod>` දිනය update කරන්න.
- `index.html`: `canonical` link එක සහ full URL සහිත Open Graph tags. මේ නිසා Facebook සහ WhatsApp share කරන විට image එක නිවැරදිව පෙන්වයි.

**Deploy කරන්න:**
```powershell
git add .
git commit -m "Add robots.txt, sitemap.xml, canonical and OG tags"
git push
```

Deploy වුණාට පස්සේ මේ දෙක browser එකේ open වෙනවාද බලන්න:
- https://ceylonjourneys.world/robots.txt
- https://ceylonjourneys.world/sitemap.xml

**Sitemap submit කර indexing request කරන්න (Google Search Console):**
1. Search Console → **Sitemaps** → `sitemap.xml` type කර **Submit** ඔබන්න.
2. උඩ search bar එකේ `https://ceylonjourneys.world/` paste කර **Request indexing** click කරන්න.

**Index වෙලාද check කරන්න.** Google එකේ මේක search කරන්න:
```
site:ceylonjourneys.world
```
අලුත් site එකකට සාමාන්‍යයෙන් දවස් කිහිපයක සිට සති 1–2 ක් යනවා.

**Facebook share preview එක check කරන්න:** https://developers.facebook.com/tools/debug/ හි site URL එක දමා **Scrape Again** ඔබන්න.
