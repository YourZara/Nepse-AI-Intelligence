<div align="center">

# 📈 NEPSE-AI-Intelligence

### *Central index of all NEPSE engineering work — ingestion, storage, analysis, and visualization — across three accounts.*

<br/>

[![Live Flagship](https://img.shields.io/badge/Live_Flagship-floorsheet.vercel.app-00E676?style=for-the-badge&logo=vercel&logoColor=white)](https://floorsheet.vercel.app)
[![Coverage](https://img.shields.io/badge/Repository_Index-12_Repos_·_3_Accounts-2088FF?style=for-the-badge)](#repository-index)
[![Engineered By](https://img.shields.io/badge/Engineered_By-Jagdish_Sah-3776AB?style=for-the-badge)](https://github.com/jagdishsah126)

</div>

---

## What This Repo Is

An **index, not a codebase**. Every NEPSE project lives in its own repository, spread across three GitHub accounts — this README is the map between them: what each repo is for, and how they connect into one end-to-end system.

| Account | Role in the NEPSE effort |
|---|---|
| [@jagdishsah126](https://github.com/jagdishsah126) | Production releases and the flagship live deployment |
| [@Jagdishsah](https://github.com/Jagdishsah) | Analysis, notebooks, and personal ledger tooling |
| [@DayaSah](https://github.com/DayaSah) | R&D sources, storage backends, and dashboards |

All three are authored and maintained by **Jagdish Sah**; development is agent-assisted via [YourZara](https://github.com/YourZara).

---

## Live Deployments

| Deployment | Repository | What it serves |
|---|---|---|
| **[floorsheet.vercel.app](https://floorsheet.vercel.app)** | [jagdishsah126/Floorsheet_Data](https://github.com/jagdishsah126/Floorsheet_Data) · [DayaSah/Floorsheet_cockroachlabs](https://github.com/DayaSah/Floorsheet_cockroachlabs) | The main NEPSE floorsheet intelligence terminal |
| **[floorshet-visual.vercel.app](https://floorshet-visual.vercel.app)** | [DayaSah/Floorshet_Visual_By_retotal](https://github.com/DayaSah/Floorshet_Visual_By_retotal) | Full analytics dashboard — Smart Money Index, broker rankings, 2.6M+ transaction explorer, guide library |
| **[mongodb-liart-iota.vercel.app](https://mongodb-liart-iota.vercel.app)** | [DayaSah/mongodb](https://github.com/DayaSah/mongodb) | Read-only REST API over the MongoDB trades store (`StockHoldingByTMS`) |
| **[nepse-floorsheet-archive-Visual (Pages)](https://jagdishsah126.github.io/nepse-floorsheet-archive-Visual/)** | [jagdishsah126/nepse-floorsheet-archive-Visual](https://github.com/jagdishsah126/nepse-floorsheet-archive-Visual) | Static visualization of the archived floorsheet CSVs |

---

## The Pipeline

```
NEPSE daily floorsheets & market data
────────────────────────────────────────────────────────────
INGEST      nepse-floorsheet-archive        → full daily floorsheet scraped to version-controlled CSVs (GitHub Actions)
│
STORE       Floorsheet_cockroachlabs        → CockroachDB distributed backend (R&D source of the flagship)
│           mongodb                         → read-only serverless API (MongoDB · StockHoldingByTMS)
│           My_Nepse_Diary                  → personal transaction diary (Supabase)
│
ANALYZE     Nepse_Data                      → multi-API market analysis
│           Google_Colab                    → notebook-based analysis
│           Copy-Paste                      → market + TMS data experiments
│           TMS_Ledger                      → personal TMS ledger + stock analytics (Elliot Wave, ULHC)
│           TMS_Ledger_By_ChatGpt_Codex     → its enterprise restructure (signals, risk, predictor, terminal UI)
│
VISUALIZE   Floorsheet_Data (live app)      → floorsheet.vercel.app
│           nepse-floorsheet-archive-Visual → GitHub Pages gallery
            Floorshet_Visual_By_retotal     → floorshet-visual.vercel.app
```

---

## Repository Index

### @jagdishsah126 — Production

| Repository | Meant for |
|---|---|
| [**Floorsheet_Data**](https://github.com/jagdishsah126/Floorsheet_Data) | **Flagship.** The NEPSE Floorsheet Intelligence Suite — distributed ingestion, multi-day broker flow, and a fully reconciled data-integrity engine. Live at [floorsheet.vercel.app](https://floorsheet.vercel.app); production release of the DayaSah source repo below. *(Python)* |
| [**nepse-floorsheet-archive**](https://github.com/jagdishsah126/nepse-floorsheet-archive) | Autonomous data pipeline that scrapes the complete daily NEPSE transaction floorsheet and commits it to version-controlled CSV archives, run on a GitHub Actions schedule. *(Python)* |
| [**nepse-floorsheet-archive-Visual**](https://github.com/jagdishsah126/nepse-floorsheet-archive-Visual) | Visualization layer over the archive's data; renders on [GitHub Pages](https://jagdishsah126.github.io/nepse-floorsheet-archive-Visual/). *(JavaScript)* |

### @Jagdishsah — Ledgers & Analysis

| Repository | Meant for |
|---|---|
| [**TMS_Ledger**](https://github.com/Jagdishsah/TMS_Ledger) | Personal ledger of every money movement in his NEPSE TMS (broker trading system) — holdings and transaction master CSVs plus stock analytics (Elliot Wave, ULHC, visual analysis). *(Python)* |
| [**TMS_Ledger_By_ChatGpt_Codex**](https://github.com/Jagdishsah/TMS_Ledger_By_ChatGpt_Codex) | TMS_Ledger restructured into a strict enterprise layout — the **NEPSE Unified Intelligence Terminal** with market predictor, signals, risk, transactions, and a terminal UI. *(Python)* |
| [**Google_Colab**](https://github.com/Jagdishsah/Google_Colab) | NEPSE data analysis carried out in Google Colab notebooks. *(Python)* |
| [**Copy-Paste**](https://github.com/Jagdishsah/Copy-Paste) | Market-data and TMS-data analysis experiments — the scratchpad that shaped the ledger workflows. *(Python)* |

### @DayaSah — R&D & Infrastructure

| Repository | Meant for |
|---|---|
| [**Floorsheet_cockroachlabs**](https://github.com/DayaSah/Floorsheet_cockroachlabs) | **Primary R&D source codebase** of the flagship suite — ingestion into distributed CockroachDB storage. Documented as the source of [jagdishsah126/Floorsheet_Data](https://github.com/jagdishsah126/Floorsheet_Data). *(Python)* |
| [**Floorshet_Visual_By_retotal**](https://github.com/DayaSah/Floorshet_Visual_By_retotal) | Production analytics dashboard over floorsheet data — Smart Money Index, day-wise broker holdings across all 101 brokers, 2.6M+ transaction explorer with whale-order filters, and a complete guide library. Live at [floorshet-visual.vercel.app](https://floorshet-visual.vercel.app). *(React 19 · Vite · Tailwind · Recharts · CockroachDB serverless)* |
| [**Nepse_Data**](https://github.com/DayaSah/Nepse_Data) | Analysis of NEPSE data through various public APIs. *(Python)* |
| [**My_Nepse_Diary**](https://github.com/DayaSah/My_Nepse_Diary) | Personal record of all NEPSE transactions and market activity, backed by Supabase. *(Python)* |
| [**mongodb**](https://github.com/DayaSah/mongodb) | Read-only Vercel serverless REST API over a MongoDB store of TMS holdings (`StockHoldingByTMS`), queryable by stock, broker, and date range. Live at [mongodb-liart-iota.vercel.app](https://mongodb-liart-iota.vercel.app). *(JavaScript)* |

---

## Vision & Objectives

Direction of the umbrella effort, as the repos currently work toward:

1. **Smart-money detection** — identify institutional accumulation and distribution across all broker houses.
2. **Floorsheet microstructure** — order slicing, internal crossings, and volume-weighted average price (VWAP) from raw transaction data.
3. **Resilient storage** — distributed, fault-tolerant backends (CockroachDB, MongoDB, Supabase) with reconciliation guarantees.
4. **Automated insight** — scheduled alerting and dossiers for abnormal transaction spikes, block trades, and portfolio audits.

---

## Start Here

1. Open the live terminal → <https://floorsheet.vercel.app>
2. Read the flagship architecture → [jagdishsah126/Floorsheet_Data](https://github.com/jagdishsah126/Floorsheet_Data)
3. Deep dive into analysis techniques → the [Floorshet Visual guide library](https://github.com/DayaSah/Floorshet_Visual_By_retotal/blob/main/Guide/README.md)

---

<div align="center">

*Engineered by Jagdish Sah across @jagdishsah126 · @Jagdishsah · @DayaSah — with agent-assisted development via [YourZara](https://github.com/YourZara).*

</div>
