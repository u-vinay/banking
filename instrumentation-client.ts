import * as Sentry from "@sentry/nextjs";
Sentry.init({
  dsn: "https://b44dc4e4ef1df2038c55f8319db84eee@o4510300992045056.ingest.de.sentry.io/4510300993683536",
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 1.0,
  // If the entire session is not sampled, use the below sample rate to sample
  // sessions when an error occurs.
  replaysOnErrorSampleRate: 1.0,
  integrations: [
    Sentry.replayIntegration({
      // Additional SDK configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;