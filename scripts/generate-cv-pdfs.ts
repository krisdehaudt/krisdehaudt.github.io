import fs from "node:fs";
import path from "node:path";

import puppeteer from "puppeteer-core";
import type { Browser, LaunchOptions } from "puppeteer-core";

import { data, genericData, Language } from "../src/data/data.ts";

type LanguageValue = (typeof Language)[keyof typeof Language];

function escapeHtml(value: string): string {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll("\"", "&quot;")
        .replaceAll("'", "&#39;");
}

function outputPathFor(language: LanguageValue): string {
    const publicPath = genericData.contact.cvPaths[language];
    const relativePath = publicPath.startsWith("/") ? publicPath.slice(1) : publicPath;
    return path.resolve("public", relativePath);
}

function launchArgs(): string[] {
    const args = [
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--no-first-run",
        "--no-default-browser-check"
    ];

    if (process.platform === "linux") {
        args.push("--no-sandbox");
    }

    return args;
}

async function tryLaunch(options: LaunchOptions): Promise<Browser | null> {
    try {
        return await puppeteer.launch(options);
    } catch {
        return null;
    }
}

async function launchBrowser(): Promise<Browser> {
    const args = launchArgs();

     const browser = await tryLaunch({
            channel: "chrome",
            headless: true,
            args
        });

        return browser!;
}

function bulletList(items: string[], className = ""): string {
    return items.map((item) => `<li class="${className}">${escapeHtml(item)}</li>`).join("");
}

function chipList(items: string[]): string {
    return items
        .map((item) => `<span class="chip">${escapeHtml(item)}</span>`)
        .join("");
}

function renderHtml(language: LanguageValue): string {
    const siteData = data[language];
    const roles = siteData.experience.roles.slice(0, 3);
    const skills = siteData.skills.groups.flatMap((group) => group.items).slice(0, 16);
    const websiteUrl = `${genericData.profile.baseUrl}/${language}`;
    const labels = language === Language.NL
        ? {
            location: "Locatie",
            profile: "Profiel",
            strengths: "Sterktes",
            experience: "Ervaring",
            skills: "Kerntechnologieën",
            education: "Opleiding",
            details: "Meer detail op de website",
            detailsBody: "Uitgebreide projectbeschrijvingen, architectuurcontext en eerdere opdrachten staan op de website.",
            pageTitle: "CV"
        }
        : {
            location: "Location",
            profile: "Profile",
            strengths: "Strengths",
            experience: "Experience",
            skills: "Core technologies",
            education: "Education",
            details: "More detail on the website",
            detailsBody: "Detailed project write-ups, architecture context, and previous engagements are available on the website.",
            pageTitle: "CV"
        };

    const headline = escapeHtml(siteData.hero.title);
    const summary = escapeHtml(siteData.seo.description);
    const strengths = bulletList(siteData.valueProps.slice(0, 4), "tight");
    const roleMarkup = roles.map((role) => `
        <article class="role">
            <div class="role-head">
                <div>
                    <h3>${escapeHtml(role.title)}</h3>
                    <p class="company">${escapeHtml(role.company)}</p>
                </div>
                <p class="period">${escapeHtml(role.period)}</p>
            </div>
            <p class="summary">${escapeHtml(role.summary)}</p>
            <ul>${bulletList(role.highlights.slice(0, 2), "tight")}</ul>
        </article>
    `).join("");

    const educationMarkup = siteData.education.items.slice(0, 2).map((item) => `
        <div class="edu-item">
            <p class="edu-title">${escapeHtml(item.title)}</p>
            <p>${escapeHtml(item.school)}</p>
            <p class="muted">${escapeHtml(item.period)}</p>
        </div>
    `).join("");

    return `<!doctype html>
<html lang="${language}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(genericData.profile.name)} | ${labels.pageTitle}</title>
    <style>
        @page {
            size: A4;
            margin: 10mm;
        }

        :root {
            color-scheme: light;
        }

        * {
            box-sizing: border-box;
        }

        html,
        body {
            margin: 0;
            padding: 0;
            background: #fff;
            color: #0f172a;
            font-family: "Avenir Next", "Segoe UI", Arial, sans-serif;
        }

        body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
        }

        .page {
            width: 190mm;
            min-height: 277mm;
            margin: 0 auto;
            padding: 0;
        }

        .hero {
            display: grid;
            grid-template-columns: 1.35fr 0.85fr;
            gap: 16px;
            padding: 18px 20px;
            border-radius: 18px;
            background: linear-gradient(135deg, #0f172a 0%, #1d4f91 100%);
            color: #fff;
        }

        .eyebrow {
            margin: 0 0 6px;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: #cfe4ff;
        }

        h1 {
            margin: 0;
            font-size: 28px;
            line-height: 1.05;
        }

        .hero-role {
            margin: 4px 0 0;
            font-size: 17px;
            color: #e2ecff;
        }

        .hero-summary {
            margin: 10px 0 0;
            font-size: 12.5px;
            line-height: 1.5;
            color: #eef5ff;
        }

        .contact {
            padding: 14px 16px;
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.10);
            font-size: 12px;
            line-height: 1.45;
        }

        .contact p {
            margin: 0 0 5px;
        }

        .contact p:last-child {
            margin-bottom: 0;
        }

        .content {
            display: grid;
            grid-template-columns: 0.92fr 1.08fr;
            gap: 14px;
            margin-top: 12px;
        }

        .stack {
            display: grid;
            gap: 12px;
        }

        .card {
            border: 1px solid #dbe3ee;
            border-radius: 16px;
            padding: 14px 16px;
            break-inside: avoid;
        }

        .card.alt {
            background: #f8fafc;
        }

        .section-title {
            margin: 0 0 8px;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: #1d4f91;
        }

        p,
        li {
            font-size: 11.5px;
            line-height: 1.45;
        }

        p {
            margin: 0;
        }

        ul {
            margin: 8px 0 0 16px;
            padding: 0;
        }

        li.tight + li.tight {
            margin-top: 4px;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 8px;
        }

        .chip {
            padding: 4px 8px;
            border-radius: 999px;
            background: #eef2f7;
            font-size: 10.5px;
            font-weight: 600;
            color: #334155;
        }

        .role + .role {
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid #e2e8f0;
        }

        .role-head {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            align-items: flex-start;
        }

        .role h3,
        .edu-title {
            margin: 0;
            font-size: 12px;
            font-weight: 700;
            color: #0f172a;
        }

        .company {
            margin-top: 2px;
            color: #1d4f91;
            font-weight: 600;
        }

        .period,
        .muted {
            color: #64748b;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .summary {
            margin-top: 5px;
        }

        .edu-item + .edu-item {
            margin-top: 8px;
        }

        .site-link {
            margin-top: 8px;
            font-size: 13px;
            font-weight: 700;
            color: #1d4f91;
            word-break: break-all;
        }
    </style>
</head>
<body>
    <main class="page">
        <section class="hero">
            <div>
                <p class="eyebrow">${escapeHtml(siteData.hero.eyebrow)}</p>
                <h1>${escapeHtml(genericData.profile.name)}</h1>
                <p class="hero-role">${headline}</p>
                <p class="hero-summary">${escapeHtml(siteData.hero.subtitle)}</p>
            </div>
            <div class="contact">
                <p>${escapeHtml(genericData.contact.email)}</p>
                <p>${escapeHtml(genericData.contact.phone)}</p>
                <p>${escapeHtml(genericData.contact.linkedinLabel)}</p>
                <p><strong>${labels.location}:</strong> ${escapeHtml(genericData.profile.location)}</p>
                <p><strong>Website:</strong> ${escapeHtml(genericData.profile.baseUrl)}</p>
            </div>
        </section>

        <section class="content">
            <div class="stack">
                <section class="card">
                    <h2 class="section-title">${labels.profile}</h2>
                    <p>${summary}</p>
                </section>

                <section class="card">
                    <h2 class="section-title">${labels.strengths}</h2>
                    <ul>${strengths}</ul>
                </section>

                <section class="card">
                    <h2 class="section-title">${labels.skills}</h2>
                    <div class="chips">${chipList(skills)}</div>
                </section>

                <section class="card">
                    <h2 class="section-title">${labels.education}</h2>
                    ${educationMarkup}
                </section>
            </div>

            <div class="stack">
                <section class="card">
                    <h2 class="section-title">${labels.experience}</h2>
                    ${roleMarkup}
                </section>

                <section class="card alt">
                    <h2 class="section-title">${labels.details}</h2>
                    <p>${labels.detailsBody}</p>
                    <p class="site-link">${escapeHtml(websiteUrl)}</p>
                </section>
            </div>
        </section>
    </main>
</body>
</html>`;
}

async function renderPdf(language: LanguageValue, outputPath: string): Promise<void> {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });

    const browser = await launchBrowser();

    try {
        const page = await browser.newPage();
        await page.setViewport({ width: 1440, height: 2048, deviceScaleFactor: 1 });
        await page.setContent(renderHtml(language), {
            waitUntil: "domcontentloaded"
        });
        await page.emulateMediaType("print");

        await page.pdf({
            path: outputPath,
            format: "A4",
            printBackground: true,
            preferCSSPageSize: true,
            margin: {
                top: "0",
                right: "0",
                bottom: "0",
                left: "0"
            }
        });
    } finally {
        await browser.close();
    }
}

async function main(): Promise<void> {
    for (const language of Object.values(Language)) {
        await renderPdf(language, outputPathFor(language));
    }

    const generatedFiles = Object.values(Language)
        .map((language) => genericData.contact.cvPaths[language])
        .join(" and ");

    console.log(`Generated ${generatedFiles}`);
}

main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
});
