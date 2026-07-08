/* ================================================================
   SERVICES FILE — edit this file to add / change / remove services
   ================================================================
   The site has service CATEGORIES, each with service ITEMS inside.

   TO ADD A NEW ITEM inside an existing category:
     copy one { name: "...", desc: "..." } line and edit it.

   TO ADD A WHOLE NEW CATEGORY:
     copy one whole block from  {  to  },  (title / short / items)
     and paste it above the closing  ];  at the bottom.

   "short" is the one-line summary shown on the Home page card.
   Keep text between quotes. Don't remove commas, braces or brackets.
   ================================================================ */

const SERVICES = [

  {
    title: "Accounting & Compliance Services",
    short: "Project-based support, offshore & onshore BPO, backlog management.",
    items: [
      { name: "Project-Based Support Services", desc: "Flexible engagement models for short-term or specialised accounting tasks, system clean-ups, and backlog management." },
      { name: "Offshore Business Process Outsourcing (BPO)", desc: "Cost-effective offshore accounting services for global companies." },
      { name: "Onshore Business Process Outsourcing (BPO)", desc: "Dedicated domestic support for bookkeeping, AP/AR, reconciliations, compliance tracking, and reporting." }
    ]
  },

  {
    title: "Automation & Excel-Based Tools",
    short: "Excel automation, GST reconciliation tools, cloud accounting for SMEs.",
    items: [
      { name: "Excel Automation Tools", desc: "Automation tools for professionals and enterprises." },
      { name: "Automated GST Reconciliation Tool", desc: "Fast, accurate GST reconciliation with automated matching." },
      { name: "Cloud-Based Accounting & Billing Software", desc: "For SMEs and start-ups." },
      { name: "Professional Training", desc: "Excel, automation and AI training for finance teams." }
    ]
  },

  {
    title: "Payroll Processing & Employment Law Services",
    short: "Monthly payroll, EPF/ESIC/TDS compliance, labour law advisory.",
    items: [
      { name: "Client Set-up & Employee Onboarding", desc: "Structured onboarding of entities and employees onto payroll." },
      { name: "Monthly Payroll Processing", desc: "End-to-end monthly payroll runs with payslips and reports." },
      { name: "Payroll-Related Compliance", desc: "EPF, ESIC, TDS, labour welfare fund, and professional tax." },
      { name: "Specialised Services", desc: "Full & final settlements, compensation benchmarking, audit support." },
      { name: "Employment Law Services", desc: "Shops & Establishments Act, labour laws, compliance reviews." }
    ]
  },

  {
    title: "Tax Advisory & Compliance",
    short: "Direct tax, international tax, transfer pricing, and GST end-to-end.",
    items: [
      { name: "Domestic Direct Tax", desc: "Return filing, tax planning, representations, assessments, TDS compliance." },
      { name: "International Tax", desc: "Cross-border transactions, DTAA advisory, expatriate taxation." },
      { name: "Transfer Pricing", desc: "TP documentation, benchmarking, litigation support." },
      { name: "Indirect Tax (GST)", desc: "Registration, monthly/annual returns, reconciliations, advisory on classification & rates, audit support, refund applications." }
    ]
  },

  {
    title: "Corporate Secretarial Services",
    short: "Incorporation, ROC filings, statutory registers, event-based compliance.",
    items: [
      { name: "Company Incorporation", desc: "End-to-end incorporation of companies and LLPs." },
      { name: "Annual ROC Filings", desc: "Timely annual filings with the Registrar of Companies." },
      { name: "Board & Statutory Documentation", desc: "Board meeting documentation, statutory registers, resolutions, and minutes." },
      { name: "Corporate Restructuring & Event-Based Compliance", desc: "Advice on restructuring and compliances triggered by corporate events." }
    ]
  },

  {
    title: "Internal Audit & Due Diligence",
    short: "Risk-based audits, IFC design, fraud risk assessment, M&A diligence.",
    items: [
      { name: "Internal Audit", desc: "Risk-based audits, process improvements, operational reviews." },
      { name: "Internal Controls", desc: "IFC design and evaluation, fraud risk assessments." },
      { name: "Regulatory Compliance Management", desc: "Structured tracking and management of regulatory obligations." },
      { name: "Due Diligence", desc: "Financial, tax and operational diligence for M&A, funding, and investor evaluations." }
    ]
  },

  {
    title: "HNI Accounts & Tax Advisory",
    short: "Accounting and tax management for high-net-worth individuals.",
    items: [
      { name: "Engagement Start-up", desc: "Structured onboarding of personal finances and entities." },
      { name: "Accounting Management", desc: "Ongoing books and records for HNI portfolios." },
      { name: "Tax Management & Compliance", desc: "Planning, filings and compliance for high-net-worth individuals." }
    ]
  },

  {
    title: "Startup Consultancy Services",
    short: "Registrations, MIS & FP&A, valuations, investor documentation.",
    items: [
      { name: "Registrations", desc: "GST, MSME, Startup India, LLP, and Private Limited registrations." },
      { name: "Accounting & Compliances", desc: "Books, filings and ongoing compliance for startups." },
      { name: "MIS, FP&A & Cashflow Management", desc: "Founder-ready dashboards, budgets and cashflow control." },
      { name: "Valuation Services", desc: "Business and instrument valuations." },
      { name: "Investor Documentation & Cap-Table Management", desc: "Data rooms, investor documents, and cap-table upkeep." }
    ]
  }

];
