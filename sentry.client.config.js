import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b44dc4e4ef1df2038c55f8319db84eee@o4510300992045056.ingest.de.sentry.io/4510300993683536",
 tracesSampleRate: 0.0,
  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.0, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 0.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});