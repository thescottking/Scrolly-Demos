# Krista Scrollytelling Demos

Interactive scrollytelling demos that walk viewers through how [Krista](https://krista.ai) automates enterprise business processes. Each demo uses a scroll-driven layout with step-by-step narrative on the left and an animated chat-style panel on the right, progressively revealing how Krista handles each stage of a workflow.

## Live Demos

- **[Inbound Document Processing](https://thescottking.github.io/Scrolly-Demos/Inbound%20Document%20Processing/)** — How Krista processes invoices and documents arriving via email, from inbox monitoring through ML classification, data extraction, human-in-the-loop verification, and ERP updates.

- **[Email Read and Respond](https://thescottking.github.io/Scrolly-Demos/Email%20read%20and%20respond/)** — How the Krista Email Response Agent monitors inboxes, detects intent with native ML, retrieves enterprise data, and sends governed responses.

## How It Works

Each demo is a self-contained folder with three files:

- **index.html** — The content: hero section, scrolly steps (left column), and chat bubble panels (right column) with Krista workflow icons.
- **styles.css** — Design tokens, layout, and responsive styles. Uses IBM Plex Sans to match [krista.ai](https://krista.ai) branding.
- **script.js** — Scroll-based step activation using IntersectionObserver with progressive chat bubble reveal as the user scrolls through each step.

The scrollytelling pattern uses a two-column layout: the left column contains narrative steps that fade in as they enter the viewport, while the right column holds a sticky panel that swaps content to match the active step. Chat bubbles within each panel appear progressively to simulate a live conversation between the user and Krista.

## Key Differentiators Highlighted

The demos emphasize Krista's **3 Cs** framework:

- **Complete** — Durable state management, constructed memory, and full audit trails across the entire workflow lifecycle.
- **Cognitive** — Native ML classifiers trained on your business documents, not generic GenAI, delivering confidence-scored extraction and intent detection.
- **Careful** — Governed human-in-the-loop verification, Draft/Test/Live lifecycle enforcement, and compliance-ready audit logging.

## Tech Stack

Built with vanilla HTML, CSS, and JavaScript. No build tools or frameworks required. Typography is served via Google Fonts (IBM Plex Sans and IBM Plex Mono).

## Local Development

Open any `index.html` file directly in a browser, or serve locally:

```bash
cd "Inbound Document Processing"
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
