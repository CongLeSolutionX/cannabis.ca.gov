// Main build file for the JavaScript static site generation bundle.
import "@cagov/ds-site-navigation";

import "@cagov/ds-page-navigation";
import "@cagov/ds-link-grid";

// Design system components
import "@cagov/ds-accordion";
import "@cagov/ds-back-to-top";

import "../components/ds-page-feedback/src/index.js"; // For drafting microcopy update.
// import '@cagov/ds-link-icon/src/index.js';
import "@cagov/ds-page-alert";
// import '@cagov/ds-dropdown-menu';
// import "@cagov/ds-page-feedback";
// import '@cagov/ds-page-feedback/src/index.js';
// import '@cagov/ds-statewide-header/src/index.js';
// import '@cagov/ds-google-translate';

// Site modifications
import { controlPages } from "./pagination.js";

import "./analytics/google-analytics.js";
import setupAnalytics from "./analytics/setup-analytics.js";

// Custom components
// Cannabis local ordinances: where-cannabis-business-is-legal-in-california
import "../components/charts/cannabis-local-ordinances/build/bundle.js";

window.onload = (event) => {
  setupAnalytics();
};

controlPages(); // Update pagination behavior
