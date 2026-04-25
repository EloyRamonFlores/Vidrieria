# Cliente: Vidriería del Centro

## 🎯 Stack
- **n8n**: Workflows (WhatsApp Receiver, Eva agent, tools)
- **Evolution API**: WhatsApp integration
- **PostgreSQL + pgvector**: Database + RAG
- **React 18 + Tailwind 4**: Landing page
- **OpenAI GPT-4o**: Eva agent

## ✅ Status

### Web Landing Page
- ✅ Landing page completa (15 componentes)
- ✅ Paleta teal/esmeralda + amber (premium glass aesthetic)
- ✅ 25+ imagenes Unsplash (glass/mirror/installation themed)
- ✅ Responsive (mobile, tablet, desktop)
- ✅ SEO optimizado (LocalBusiness schema)
- ✅ Build: 0 errors TypeScript
- ✅ Deployed on Vercel

### Componentes Creados
1. **Navbar** — teal logo, nav links, WhatsApp CTA
2. **Hero** — "Vidrio de calidad para cada espacio" + carousel + floating cards
3. **Stats** — +1,000 m², 8+ años, +200 proyectos, 98% satisfacción
4. **Brands** → **Tipos de Vidrio** (8 glass types: Templado, Laminado, Espejo, etc.)
5. **Services** — 6 glass services (Corte, Cancel, Espejos, Ventanas, Templado, Decorativo)
6. **Gallery** — 6 premium glass installation projects
7. **HowItWorks** — 3 pasos (Cotiza → Fabricamos → Instalamos)
8. **Testimonials** — Roberto, Laura, Fernando (glass customer reviews)
9. **Team** — "Artesanos del vidrio con experiencia"
10. **FolioTracker** — Consulta tu Pedido (VD-2026-NNNN prefix)
11. **CtaSection** — "¿Listo para tu proyecto de vidrio?"
12. **GoogleMap** — Embedded Tijuana location
13. **Footer** — 3-col layout with hours, contact, Koku branding
14. **WhatsAppButton** — Floating green WA button
15. **ChatWidget** — Floating Eva chatbot (teal header, responds to glass inquiries)

### Data Estructures
- **images.ts** — All Unsplash glass-themed photos centralized
- **glassTypes.tsx** — 8 glass types (replaces brandLogos)
- **folio.ts** — Types: `recibido | en_corte | en_templado | listo | instalado`
- **sheets.ts** — Mock data with 3 demo folios (VD-2026-0001/0002/0003)

### Config
- **.env.example** — VITE_BUSINESS_NAME="Vidrieria del Centro", WhatsApp, etc.
- **index.html** — SEO metadata, structured data for glass services
- **index.css** — Teal palette (`#f0fdfa` bg, gradient teal→amber)
- **package.json** — `"name": "koku-vidrieria"`, scripts working

## 🎨 Design Highlights
- **Color scheme:** Teal-50 (#f0fdfa) body, teal-600 primary, amber-500 accent
- **Typography:** Plus Jakarta Sans (400-800 weights)
- **Animations:** Scroll-reveal, float, fade-up, scale-in (prefers-reduced-motion respected)
- **Grid layout:** Mobile-first responsive (1 col → 2 → 3 columns)
- **Glassmorphism:** Dark glass cards with blur effect (hero floating cards)
- **Icons:** Handcrafted SVGs (no external icon library)

## 📱 URLs
- **Git:** monorepo `packages/clients/vidrieria/web/`

## ⏭️ Next Steps (Optional)
1. **WhatsApp Integration:**
   - Create Evolution API instance in EasyPanel (`vidrieria-bot`)
   - Configure webhook → n8n Receiver workflow
   - Set up WhatsApp Business number

2. **n8n Workflows:**
   - Create vidrieria-specific Eva agent (RAG, tools)
   - WhatsApp Receiver (webhook → Eva → Evolution API)
   - Follow-up scheduler (24hr reminders)
   - Admin notifier (owner alerts)

3. **Database:**
   - Load RAG documents (vidrio services KB)
   - Create folio tracking sheet (Google Sheets)
   - Setup interaction logging (PostgreSQL)

4. **Customization:**
   - Add owner's actual phone number (VITE_WHATSAPP_PHONE)
   - Update address/hours in Footer
   - Replace placeholder images with client's real photos
   - Configure n8n chat webhook (VITE_N8N_CHAT_URL)

## 📋 Checklist
- [x] Landing page structure (15 components)
- [x] Teal color palette applied
- [x] Unsplash images integrated (glass-themed)
- [x] TypeScript build (0 errors)
- [x] Responsive design tested
- [x] SEO metadata added
- [x] Deployed to Vercel
- [ ] WhatsApp Business setup
- [ ] n8n workflows created
- [ ] RAG documents loaded
- [ ] Production database configured
