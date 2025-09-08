import type { Handler } from "@netlify/functions";

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const body = JSON.parse(event.body || "{}");

    const automationUrl = process.env.AUTOMATION_WEBHOOK_URL;
    const slackWebhook = process.env.SLACK_WEBHOOK_URL;
    const crmWebhook = process.env.CRM_WEBHOOK_URL;

    // Compose payload with metadata
    const payload = {
      ...body,
      _meta: {
        userAgent: event.headers["user-agent"],
        referer: event.headers["referer"],
        ts: new Date().toISOString(),
      },
    };

    const responses: any[] = [];

    // Fire-and-forget helpers
    const postJson = async (url?: string, data?: unknown) => {
      if (!url) return null;
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        });
        return { url, ok: res.ok, status: res.status };
      } catch (e) {
        return { url, ok: false, error: (e as Error).message };
      }
    };

    // 1) Contentstack Automation
    if (automationUrl) {
      responses.push(await postJson(automationUrl, payload));
    }

    // 2) Slack notification (basic formatting)
    if (slackWebhook) {
      const text = `New Demo Lead\nName: ${body.firstName || ""} ${body.lastName || ""}\nEmail: ${body.email || ""}\nCompany: ${body.company || ""}\nIndustry: ${body.industryType || "-"}\nRole: ${body.role || "-"}`;
      responses.push(
        await postJson(slackWebhook, {
          text,
        })
      );
    }

    // 3) CRM sync (generic webhook)
    if (crmWebhook) {
      responses.push(await postJson(crmWebhook, payload));
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, forwarded: responses }),
      headers: { "content-type": "application/json" },
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ ok: false, error: (err as Error).message }),
      headers: { "content-type": "application/json" },
    };
  }
};

export { handler };
