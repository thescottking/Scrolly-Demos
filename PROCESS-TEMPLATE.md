# Krista AI Business Process Demo Template

This template serves as a fill-in-the-blanks format for creating scrollytelling demos that showcase Krista AI-led business process workflows.

---

## METADATA SECTION

```yaml
---
process_name: "[Name of the business process being demonstrated]"
panel_title: "[Title that appears in the Krista mark header of each panel]"
description: "[One-sentence description of what this demo showcases]"
cta_url: "https://krista.ai/contact/"
cta_text: "Contact Us to Get Started"
---
```

**Instructions:**
- `process_name`: This appears in the page title and serves as the main identifier
- `panel_title`: Appears in the header of every panel (e.g., "Krista Inbound Document Processing")
- `description`: A concise summary of the business process workflow

---

## HERO SECTION

```
hero:
  label: "[A short statement about Krista's capability]"
  title: "[Main heading]"
  subtitle: "[Instructional text guiding the user to scroll]"
```

**Example from Inbound Document Processing demo:**
```
hero:
  label: "Krista executes end-to-end business processes as a unified, cognitive system."
  title: "How the Krista Document Process Works"
  subtitle: "Scroll down to explore each stage of the workflow. The panel on the right updates as you progress through each step."
```

**Instructions:**
- `label`: Establishes Krista's value proposition
- `title`: The main heading; should clearly describe what the demo shows
- `subtitle`: Calls the user to action (usually about scrolling to see the workflow)

---

## WORKFLOW STEPS 1–6

For each of the 6 main workflow steps, fill in the following structure. Repeat this block 6 times (one for each step).

### STEP [NUMBER] OF 6

```
step:
  step_number: [1-6]
  label: "STEP [NUMBER] OF 6"
  heading: "[The main heading for this step]"
  description: "[A comprehensive paragraph describing what happens in this step, why it matters, and what makes Krista's approach different]"

  panel:
    icon: "[icon-ask-krista-ai | icon-ask-system | icon-inform-person | icon-make-decision | icon-manage-information | icon-person-request]"
    chat_bubbles:
      - bubble_number: 1
        speaker: "agent"  # or "user"
        status: "[Optional status line, appears in bold/highlighted]"
        body: "[The main message text for this bubble]"
        visibility: "visible"  # First bubble is always visible

      - bubble_number: 2
        speaker: "agent"
        status: "[Status line]"
        body: "[Message text]"
        visibility: "hidden"  # Reveals on scroll

      - bubble_number: 3
        speaker: "agent"
        status: "[Status line]"
        body: "[Message text]"
        visibility: "hidden"

      - bubble_number: 4  # Optional
        speaker: "agent"
        status: "[Status line]"
        body: "[Message text]"
        visibility: "hidden"
```

**Instructions:**

- **step_number**: Integer from 1 to 6. Must be sequential.
- **heading**: A concise title for this step. Usually starts with "Krista [verb]..."
- **description**: The long-form paragraph (150–250 words). This is the main copy that appears in the left column. It should:
  - Explain what happens in this step
  - Emphasize Krista's unique capability or advantage
  - Contrast with competitors or manual processes where relevant
  - Set up the context for the chat bubbles in the panel

- **icon**: Choose ONE icon for the first bubble in each step's panel. Icons signify the type of action:
  - `icon-ask-krista-ai` — AI/ML analysis, classification, extraction, or decision-making
  - `icon-ask-system` — System queries, API calls, data retrieval, monitoring
  - `icon-inform-person` — Human escalation, notification, or request for judgment
  - `icon-make-decision` — Routing logic, conditional flows, or business rules evaluation
  - `icon-manage-information` — Data updates, ERP entry, database writes, or information updates
  - `icon-person-request` — User or stakeholder-initiated actions (less common in AI workflows)
  - `icon-end-conversation` — Final summary or conclusion (used only in step 7)

- **chat_bubbles**: An array of 2–4 bubbles per step. The first bubble is always visible and should include the icon. Subsequent bubbles are hidden and reveal as the user scrolls further down past that step.

- **speaker**: `"agent"` for Krista messages, `"user"` for incoming emails or user-initiated triggers. The first bubble in Step 1 is typically `"user"`.

- **status**: A bold, highlighted line that appears above the bubble body. Examples: "Monitoring inbox and shared drives...", "Classification result:", "Waiting for human verification..."

- **body**: The actual message content. Can include:
  - Plain text
  - Line breaks (use `<br>` in HTML)
  - Inline HTML formatting (`<strong>`, `<em>`)
  - Data fields (names, IDs, percentages, etc.)

- **visibility**: `"visible"` for the first bubble, `"hidden"` for all subsequent bubbles in that panel.

---

## STEP 7: CONTACT US (Call to Action)

```
step:
  step_number: 7
  label: "Contact Us"
  heading: "[A heading that invites action, e.g., 'Get Started with Krista']"
  description: "[A summary paragraph that ties the workflow together and emphasizes Krista's end-to-end capability]"

  panel:
    icon: "icon-end-conversation"
    chat_bubbles:
      - bubble_number: 1
        speaker: "agent"
        status: "[Optional]"
        body: "[A final summary statement]"
        visibility: "visible"

      - bubble_number: 2
        speaker: "agent"
        status: "[Optional]"
        body: "[Additional value proposition or summary]"
        visibility: "hidden"

      - bubble_number: 3
        speaker: "agent"
        status: "[Optional]"
        body: "[Call to action text, describing what building this manually would require]"
        visibility: "hidden"

    cta_button:
      url: "[Link, typically https://krista.ai/contact/]"
      text: "[Button text, e.g., 'Contact Us to Get Started']"
      color: "[Hex color, typically #4FD7ED for Krista cyan]"

    closing_message: "[Optional message below the button, reinforcing the CTA]"
```

**Instructions:**
- Step 7 is always the final step and uses the `icon-end-conversation` icon.
- The first bubble is typically a strong summary statement.
- Subsequent bubbles should reinforce the value of Krista's unified approach.
- The CTA button is mandatory and should link to the contact form.
- The `closing_message` is optional but reinforces the call to action.

---

## FOOTER SECTION

```
footer:
  text: "[A short closing statement, e.g., 'That's the full [process name] workflow. Simple, fast, and thorough.']"
```

**Instructions:**
- This appears at the very bottom of the page after scrolling past all steps.
- Keep it brief (one sentence) and reinforce the simplicity or completeness of the workflow.

---

---

# EXAMPLE: INBOUND DOCUMENT PROCESSING DEMO

This is a completed example using the template structure above. Use this as a reference when filling in your own process.

```yaml
---
process_name: "Inbound Document Processing"
panel_title: "Krista Inbound Document Processing"
description: "A complete walkthrough of how Krista classifies, extracts, validates, matches, and processes inbound invoices end-to-end."
cta_url: "https://krista.ai/contact/"
cta_text: "Contact Us to Get Started"
---
```

## Hero Section

```
hero:
  label: "Krista executes end-to-end business processes as a unified, cognitive system."
  title: "How the Krista Document Process Works"
  subtitle: "Scroll down to explore each stage of the workflow. The panel on the right updates as you progress through each step."
```

## Step 1 of 6: Monitor Content Streams and Inboxes

```
step:
  step_number: 1
  label: "STEP 1 OF 6"
  heading: "Krista Monitors Content Streams and Inboxes"
  description: "Krista continuously monitors shared email inboxes, content repositories, and shared drives. When a new document arrives, she reads the subject line, body text, and attachments to ensure no business context is lost. Unlike task automation tools that fire and forget, Krista maintains durable state across long-running processes. She remembers where each document is in the workflow, what data has been collected, and who needs to act next, even if a process takes days to complete."

  panel:
    icon: "icon-ask-system"
    chat_bubbles:
      - bubble_number: 1
        speaker: "user"
        status: null
        body: "New email in ap@yourcompany.com<br>From: billing@acme-supplier.com<br>Subject: Invoice #INV-2024-7891 Attached<br>1 attachment: invoice_7891.pdf"
        visibility: "visible"

      - bubble_number: 2
        speaker: "agent"
        status: "Monitoring inbox and shared drives..."
        body: "New message with attachment detected. Reading subject, body, and metadata."
        visibility: "hidden"

      - bubble_number: 3
        speaker: "agent"
        status: "Step 1 complete."
        body: "Document received. Moving to classification."
        visibility: "hidden"
```

**Key elements:**
- Bubble 1 simulates an incoming email (the user trigger)
- Bubble 2 shows Krista's immediate action (reading the document)
- Bubble 3 confirms completion and transition to the next step
- Icon is `icon-ask-system` because this step involves monitoring inboxes/systems

## Step 2 of 6: Classify Documents via Native ML

```
step:
  step_number: 2
  label: "STEP 2 OF 6"
  heading: "Krista Classifies Documents via Native ML"
  description: "GenAI generates text. Krista generates outcomes. Rather than relying on generic LLM prompts that guess at document types, Krista builds native machine learning classifiers trained directly on your business data. These purpose-built models learn to recognize invoices, quotes, and credit memos with your terminology and formatting. Unlike competitors who stuff spaghetti code into prompts, Krista's proprietary models mature from 50% to over 90% accuracy within weeks and get smarter with every interaction through continuous learning."

  panel:
    icon: "icon-ask-krista-ai"
    chat_bubbles:
      - bubble_number: 1
        speaker: "agent"
        status: "Analyzing attachment: invoice_7891.pdf"
        body: "Running native ML classifier trained on your business documents."
        visibility: "visible"

      - bubble_number: 2
        speaker: "agent"
        status: "Classification result:"
        body: "Document type: Invoice<br>Sub-type: Vendor Purchase Invoice<br>Confidence: 96%"
        visibility: "hidden"

      - bubble_number: 3
        speaker: "agent"
        status: "Step 2 complete."
        body: "Document classified. Proceeding to data extraction."
        visibility: "hidden"
```

**Key elements:**
- Icon is `icon-ask-krista-ai` because this involves ML analysis and classification
- Bubble 2 shows the classification output with a confidence score
- The description emphasizes native ML, not generic LLM prompts

## Step 3 of 6: Extract and Validate Actionable Data

```
step:
  step_number: 3
  label: "STEP 3 OF 6"
  heading: "Krista Extracts and Validates Actionable Data"
  description: "Krista converts attachments into readable text and extracts key data points like supplier names, line items, and total amounts. She validates every extraction through confidence scoring, quantifying her certainty on each data point rather than forcing you to trust the output 100% or check it 100%. When accuracy is paramount, Krista limits responses strictly to your documents and business rules. If a data point cannot be verified, she flags it rather than filling gaps with hallucinated information."

  panel:
    icon: "icon-ask-krista-ai"
    chat_bubbles:
      - bubble_number: 1
        speaker: "agent"
        status: "Extracting key data points..."
        body: "Supplier: Acme Industrial Supply<br>Invoice #: INV-2024-7891<br>Line items: 3 detected<br>Total: $14,750.00"
        visibility: "visible"

      - bubble_number: 2
        speaker: "agent"
        status: "Confidence scoring..."
        body: "Supplier name: 99% | Line items: 97% | Total: 99%<br>Overall data integrity: 98%"
        visibility: "hidden"

      - bubble_number: 3
        speaker: "agent"
        status: "Step 3 complete."
        body: "All data extracted and validated. Proceeding to verification."
        visibility: "hidden"
```

**Key elements:**
- Icon is `icon-ask-krista-ai` for data extraction and ML-driven validation
- Bubble 2 explicitly shows confidence scores for each field
- The description emphasizes avoiding hallucination and respecting data boundaries

## Step 4 of 6: Governed Human Verification

```
step:
  step_number: 4
  label: "STEP 4 OF 6"
  heading: "Krista Orchestrates Governed Human Verification"
  description: "When Krista identifies an anomaly or low-confidence data point, she intelligently escalates the task using her native user database and role-based access controls. Unlike headless automation tools with no concept of your org chart, Krista dynamically routes exceptions to the correct expert by role, not a hardcoded email address. She provides full context, quantifies her uncertainty, and pauses the workflow without losing state, ensuring human judgment remains in control while the system continues to learn from every decision."

  panel:
    icon: "icon-inform-person"
    chat_bubbles:
      - bubble_number: 1
        speaker: "agent"
        status: "Anomaly detected"
        body: "Line item #2 unit price ($4,250) differs from catalog ($3,950).<br><strong>Flagged. Initiating governed escalation.</strong>"
        visibility: "visible"

      - bubble_number: 2
        speaker: "agent"
        status: "Routing to AP Manager (Vendor Pricing)..."
        body: "Providing: original PDF, extracted data, flagged discrepancy, supplier history."
        visibility: "hidden"

      - bubble_number: 3
        speaker: "agent"
        status: "Waiting for human verification..."
        body: "Krista paused. Human judgment in control."
        visibility: "hidden"

      - bubble_number: 4
        speaker: "agent"
        status: "Step 4 complete."
        body: "Expert confirmed: new contract rate is valid. Proceeding."
        visibility: "hidden"
```

**Key elements:**
- Icon is `icon-inform-person` because human escalation and judgment are central to this step
- Bubble 1 detects and flags an anomaly
- Bubble 2 emphasizes role-based routing (not hardcoded email)
- Bubble 3 highlights durable state (process paused without losing context)
- Bubble 4 shows resolution via human decision
- The description contrasts Krista's governance model with "headless automation"

## Step 5 of 6: Three-Way Matching and Audits

```
step:
  step_number: 5
  label: "STEP 5 OF 6"
  heading: "Krista Performs Three-Way Matching and Audits"
  description: "Krista retrieves related purchase orders from your accounting systems using her unified platform architecture, where every agent shares connections, memory, and context. She performs a three-way match between the invoice, PO, and goods receipt, enforcing your specific business rules to flag discrepancies. Krista's native anomaly detection learns what 'normal' looks like for your business. When a vendor price spikes or a discount exceeds the norm, she flags it immediately. This is business logic that generic GenAI simply cannot perform."

  panel:
    icon: "icon-ask-system"
    chat_bubbles:
      - bubble_number: 1
        speaker: "agent"
        status: "Retrieving PO from accounting systems..."
        body: "Matching PO found: PO-2024-3344"
        visibility: "visible"

      - bubble_number: 2
        speaker: "agent"
        status: "Three-way match..."
        body: "Invoice INV-2024-7891 / PO PO-2024-3344 / GR GR-8821<br>Line items: 3/3 matched | Amounts: 0.2% variance"
        visibility: "hidden"

      - bubble_number: 3
        speaker: "agent"
        status: "Business rules check..."
        body: "Duplicate: PASSED | Net 30: confirmed | Under $25K: auto-approved | Fraud: none"
        visibility: "hidden"

      - bubble_number: 4
        speaker: "agent"
        status: "Step 5 complete."
        body: "Three-way match verified. Ready for system entry."
        visibility: "hidden"
```

**Key elements:**
- Icon is `icon-ask-system` because this involves querying external systems (ERP, accounting)
- Bubble 1 shows system integration in action
- Bubbles 2 and 3 demonstrate matching logic and business rule enforcement
- The description emphasizes anomaly detection and business-rule intelligence

## Step 6 of 6: Execute Actions and Update Systems

```
step:
  step_number: 6
  label: "STEP 6 OF 6"
  heading: "Krista Executes Actions and Updates Systems"
  description: "Once validated, Krista automatically maps vendor IDs and cost centers to enter data into your ERP or accounting system. She logs every action as a permanent audit trail with full confidence scores, ensuring your systems of record stay accurate and compliant. Krista enforces a strict Draft, Test, Live lifecycle, so workflows are validated in a safe environment before touching live operations. Every resolved case feeds back into the platform's constructed memory, making the entire enterprise smarter."

  panel:
    icon: "icon-manage-information"
    chat_bubbles:
      - bubble_number: 1
        speaker: "agent"
        status: "Mapping to ERP..."
        body: "Vendor ID: V-00482 | Cost center: CC-3100 | GL: 5200"
        visibility: "visible"

      - bubble_number: 2
        speaker: "agent"
        status: "Posting to accounts payable..."
        body: "AP voucher created in SAP. Payment scheduled: April 14, 2026."
        visibility: "hidden"

      - bubble_number: 3
        speaker: "agent"
        status: "Audit trail logged."
        body: "Receipt, classification, verification, match, and ERP entry recorded."
        visibility: "hidden"

      - bubble_number: 4
        speaker: "agent"
        status: "Step 6 complete."
        body: "Systems updated. Audit secured. Ready for next document."
        visibility: "hidden"
```

**Key elements:**
- Icon is `icon-manage-information` because this step writes data to systems of record
- Bubble 1 shows the data mapping
- Bubble 2 confirms posting to the live system
- Bubble 3 emphasizes compliance and audit trails
- The description highlights the Draft, Test, Live lifecycle and continuous learning

## Step 7: Contact Us

```
step:
  step_number: 7
  label: "Contact Us"
  heading: "Get Started with Krista"
  description: "That's the full Krista document processing workflow in action. From durable state management to native ML classification, confidence-scored extraction, governed human-in-the-loop verification, and autonomous system updates, Krista replaces agent sprawl with a unified cognitive system that is Complete in its execution, Cognitive in its intelligence, and Careful in its operation."

  panel:
    icon: "icon-end-conversation"
    chat_bubbles:
      - bubble_number: 1
        speaker: "agent"
        status: null
        body: "<strong>That's the full Krista document processing workflow.</strong>"
        visibility: "visible"

      - bubble_number: 2
        speaker: "agent"
        status: null
        body: "Invoices classified, extracted, validated, matched, and entered into your ERP automatically, accurately, and with a full audit trail."
        visibility: "hidden"

      - bubble_number: 3
        speaker: "agent"
        status: null
        body: "Building this yourself requires custom ML, enterprise OCR, governed escalation, three-way matching, ERP integrations, and permanent audit trails. Most teams never finish it."
        visibility: "hidden"

    cta_button:
      url: "https://krista.ai/contact/"
      text: "Contact Us to Get Started"
      color: "#4FD7ED"

    closing_message: "Let's talk about how Krista can transform your document processing today."
```

**Key elements:**
- Icon is always `icon-end-conversation` for the final step
- Bubble 1 provides a strong closing statement
- Bubble 2 summarizes the end-to-end capability
- Bubble 3 emphasizes the difficulty of building this manually
- The CTA button is prominent and links to the contact form
- The closing message reinforces the call to action

## Footer

```
footer:
  text: "That's the full document processing workflow. Simple, fast, and thorough."
```

---

## Quick Reference: Icon Selection Guide

| Icon | Use Case | Example Steps |
|------|----------|----------------|
| `icon-ask-krista-ai` | AI/ML analysis, classification, extraction, reasoning, anomaly detection | Classification, Data Extraction |
| `icon-ask-system` | System queries, data retrieval, API calls, monitoring inboxes/databases | Monitor Inboxes, Retrieve PO, Query Systems |
| `icon-inform-person` | Human escalation, notification, request for judgment or verification | Human Verification, Exception Handling |
| `icon-make-decision` | Routing logic, conditional flows, business rule evaluation, decision trees | Decision routing, approval routing |
| `icon-manage-information` | Data writes, ERP entry, database updates, system-of-record modifications | System Updates, ERP Entry |
| `icon-person-request` | User-initiated actions, stakeholder requests (less common in AI-led workflows) | User feedback, manual override |
| `icon-end-conversation` | Final summary, closing message, CTA (Step 7 only) | Contact Us |

---

## Tips for Filling in the Template

1. **Keep descriptions focused:** Each step description should emphasize one key capability or differentiator. Avoid trying to say everything at once.

2. **Show progression in chat bubbles:** The first bubble should present the problem or action; subsequent bubbles show the results and next steps.

3. **Use confidence scores and business metrics:** When showing data extraction or validation, include percentages, counts, or business-rule results to make outputs concrete.

4. **Emphasize Krista's unique approach:** Contrast with competitors or manual processes (e.g., "Unlike task automation tools that fire and forget..." or "Unlike generic LLM prompts...").

5. **Maintain consistency in tone:** Descriptions should sound like marketing copy that balances technical depth with accessibility.

6. **Test the scroll experience:** Each step's description and accompanying panel should work together to tell a cohesive story as the user scrolls.

7. **Icon selection:** Choose the icon that best represents the primary action in that step. If a step involves multiple actions, pick the most important one.

8. **Call to Action:** Step 7 should always tie everything together and offer a clear next step. The CTA button is mandatory.

---

**Version:** 1.0
**Last Updated:** April 2026
**Template Author:** Krista AI Demo Team
