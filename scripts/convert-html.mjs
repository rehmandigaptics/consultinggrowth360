import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");
const src = path.join(root, "consultinggrowth360-v2");
const outDir = path.join(root, "consultinggrowth360");

const pages = {
  "index.html": {
    route: "/",
    title: "ConsultingGrowth360 — Build a Practice That Moves Forward",
    desc: "Premium growth systems, brand strategy, lead generation, and automation for independent consultants and consulting firms across the United States.",
  },
  "about.html": {
    route: "/about",
    title: "About — ConsultingGrowth360",
    desc: "ConsultingGrowth360 helps independent consultants and advisory firms turn expertise into a clearer, more connected practice.",
  },
  "services.html": {
    route: "/services",
    title: "Services — ConsultingGrowth360",
    desc: "Brand, digital, lead generation, CRM, n8n automation, and GoHighLevel — six capabilities planned as one growth system for consultants.",
  },
  "approach.html": {
    route: "/approach",
    title: "Our Approach — ConsultingGrowth360",
    desc: "Discover, Design, Activate, Optimize — a practical method for building a connected consulting practice.",
  },
  "industries.html": {
    route: "/industries",
    title: "Who We Help — ConsultingGrowth360",
    desc: "Growth systems for business, marketing, healthcare, finance, technology, and education consultants across the United States.",
  },
  "contact.html": {
    route: "/contact",
    title: "Contact — ConsultingGrowth360",
    desc: "Start a growth conversation with ConsultingGrowth360. Tell us about your consulting practice and where you want it to go.",
  },
  "brand-positioning.html": {
    route: "/brand-positioning",
    title: "Brand & Positioning — ConsultingGrowth360",
    desc: "Positioning for consultants who are tired of sounding interchangeable. Narrative, offer architecture, and a message system the market can repeat.",
  },
  "digital-experience.html": {
    route: "/digital-experience",
    title: "Web & Digital Experience — ConsultingGrowth360",
    desc: "Premium, conversion-minded websites for consultants. Structure, narrative, and a clear path from attention to a serious conversation.",
  },
  "lead-generation.html": {
    route: "/lead-generation",
    title: "Lead Generation — ConsultingGrowth360",
    desc: "Demand systems for consultants: campaigns, content, and funnels that create better-fit conversations instead of noise.",
  },
  "crm-automation.html": {
    route: "/crm-automation",
    title: "CRM & Automation — ConsultingGrowth360",
    desc: "Pipelines, follow-up, and connected tools for consultants so good opportunities are not left to memory.",
  },
  "n8n-automation.html": {
    route: "/n8n-automation",
    title: "n8n Automation — ConsultingGrowth360",
    desc: "Custom n8n automation for consulting practices: workflows that connect your CRM, forms, calendars, and tools without brittle manual work.",
  },
  "gohighlevel.html": {
    route: "/gohighlevel",
    title: "GoHighLevel Services — ConsultingGrowth360",
    desc: "GoHighLevel setup and optimization for consultants: pipelines, funnels, calendars, SMS and email follow-up, and a CRM your practice will actually use.",
  },
};

function styleToJsx(style) {
  const obj = {};
  for (const part of style.split(";")) {
    const i = part.indexOf(":");
    if (i < 0) continue;
    let k = part.slice(0, i).trim();
    const v = part.slice(i + 1).trim();
    if (!k || !v) continue;
    k = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    obj[k] = v;
  }
  const entries = Object.entries(obj).map(([k, v]) => `${k}: ${JSON.stringify(v)}`);
  return `{{ ${entries.join(", ")} }}`;
}

function htmlToJsx(html) {
  let s = html.replace(/\r\n/g, "\n");
  s = s.replace(
    /<(img|input|br|hr|meta|link|source|area|col|embed|track|wbr)(\s[^>]*?)?\s*\/?>/gi,
    (m, tag, attrs = "") => {
      if (/\/>$/.test(m.trim())) return m;
      return `<${tag}${attrs} />`;
    },
  );
  s = s.replace(/\sclass=/g, " className=");
  s = s.replace(/\sfor=/g, " htmlFor=");
  s = s.replace(/\sstyle="([^"]*)"/g, (_, st) => ` style=${styleToJsx(st)}`);
  s = s.replace(/href="index\.html#([^"]+)"/g, 'href="/#$1"');
  s = s.replace(/href="index\.html"/g, 'href="/"');
  s = s.replace(/href="([a-z0-9-]+)\.html(#[^"]*)?"/g, "href=\"/$1$2\"");
  s = s.replace(/src="assets\//g, 'src="/assets/');
  s = s.replace(/fetchpriority=/g, "fetchPriority=");
  s = s.replace(/<!--[\s\S]*?-->/g, "");
  return s;
}

for (const [file, meta] of Object.entries(pages)) {
  const raw = fs.readFileSync(path.join(src, file), "utf8");
  const mainMatch = raw.match(/<main[\s\S]*?<\/main>/i);
  if (!mainMatch) {
    console.error("no main", file);
    continue;
  }

  let main = htmlToJsx(mainMatch[0]);
  const formRe = /<form id="contactForm">[\s\S]*?<\/form>/;
  const formMatch = main.match(formRe);
  let needsForm = false;
  let showInterest = false;
  if (formMatch) {
    needsForm = true;
    showInterest = formMatch[0].includes('name="interest"');
    main = main.replace(
      formRe,
      showInterest ? "<ContactForm showInterest />" : "<ContactForm />",
    );
    main = main.replace(/\s*<p id="formNotice" role="status"><\/p>/g, "");
  }

  const dir =
    file === "index.html"
      ? path.join(outDir, "app")
      : path.join(outDir, "app", meta.route.slice(1));
  fs.mkdirSync(dir, { recursive: true });

  const imports = ["import type { Metadata } from 'next';"];
  if (needsForm) imports.push("import { ContactForm } from '@/components/ContactForm';");

  const pageContent = `${imports.join("\n")}

export const metadata: Metadata = {
  title: ${JSON.stringify(meta.title)},
  description: ${JSON.stringify(meta.desc)},
};

export default function Page() {
  return (
    <>
${main}
    </>
  );
}
`;

  fs.writeFileSync(path.join(dir, "page.tsx"), pageContent);
  console.log("wrote", meta.route, needsForm ? `(form interest=${showInterest})` : "");
}

console.log("done");
