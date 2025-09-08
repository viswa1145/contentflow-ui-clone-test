# TalentConnect360 - Integrations

## Lead Automation (Serverless)

A Netlify function at `/.netlify/functions/lead` receives demo requests and forwards them to:
- Contentstack Automation webhook (to fan out to Slack/CRM or trigger workflows)
- Slack Incoming Webhook (optional)
- CRM webhook (optional; generic JSON)

### Environment variables
Set these in your Netlify project (or local dev with netlify env):
- `AUTOMATION_WEBHOOK_URL` – Contentstack Automation webhook URL
- `SLACK_WEBHOOK_URL` – Slack Incoming Webhook URL (optional)
- `CRM_WEBHOOK_URL` – CRM endpoint URL (optional)

### Payload shape
The serverless function forwards the demo form fields along with metadata:
```
{
  firstName, lastName, email, company,
  companySize, industry, notes,
  industryType, role, // personalization
  page, // pathname
  _meta: { userAgent, referer, ts }
}
```

## Contentstack Assets
If your Contentstack delivers relative asset urls, set:
- `VITE_CONTENTSTACK_ASSET_BASE` – e.g. `https://images.contentstack.io/v3/assets/<stack_api_key>`
so the app can resolve them via `normalizeAssetUrl`.
