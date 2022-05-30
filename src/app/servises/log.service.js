import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'


function init(){
  Sentry.init({
    dsn: "https://03dc4ca9844943d99aa4f1110b146b29@o1265623.ingest.sentry.io/6449722",
    integrations: [new BrowserTracing()],
    
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}
function log(error){
  Sentry.captureException(error)
}

const logger = {
  init,
  log
}
export default logger