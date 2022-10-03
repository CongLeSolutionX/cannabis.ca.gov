const config = require("../config/index.js");

/**
 * A "Data Directory File" - https://www.11ty.dev/docs/data-computed/
 *
 * Values will be available to the templates {{ value }}
 *
 * This file must be named {foldername}.11tydata.js
 * This file must be located in the content rendering folder, at the top level
 * It is automatically loaded in the 11th data cascade
 *
 * Localization notes:
 * * Markdown pages with frontmatter loaded will load the .md file first for that language.
 * * The site settings are organized by language
 * * If a language site configuration is not set, the default is English.
 * * Social media images sometimes contain text, and can also be localized.
 */
const getPageTitle = (article) => {
  if (article.page.fileSlug === "home") {
    return (
      article.title ||
      config.page_metadata[article.locale]?.site_name ||
      config.page_metadata.en.site_name
    );
  }

  const titleSiteName = `${config.page_metadata.en.site_name} | ${
    config.page_metadata[article.locale]?.site_name
  }`;

  return (
    article.title ||
    config.page_metadata[article.locale]?.site_name ||
    titleSiteName ||
    config.page_metadata.en.site_name
  );
};

/**
 * This is used to build a relative path for the 11ty folder system
 * @param {string} url
 * @returns
 */
const getAbsolutePath = (url) => {
  try {
    if (url !== undefined) {
      config.build.replace_urls.forEach((domain) => {
        url = url.replace(domain, "");
        return false;
      });

      if (url.indexOf("/") === 0) {
        url = `${config.build.static_site_url}${url}`;
        return url;
      }
    }
    // return new URL(url).pathname;
  } catch (error) {
    console.error("catch", url, error);
    return url;
  }
  return "";
};

/**
 *
 * @param {*} article
 * @returns
 */
const getTemplate = (article) => {
  let template = "page";

  template = article.data?.type; // page or post from WP

  if (article.data?.design_system_fields?.template) {
    template = article.data?.design_system_fields?.template
      .replace("template-", "")
      .replace("page-", ""); // Remove extra template- prefix that comes from some instances of WP. (The desired template values will be without the prefix.)

    if (template === "single-press-release") {
      return "press-release";
    }

    if (template === "single-event") {
      return "event";
    }

    if (template === "searchpage") {
      return "search";
    }

    if (template === "single") {
      return "single-column";
    }
  }

  return template;
};

const getOpenGraphImage = (article) => {
  const url =
    article.metadata?.open_graph_image_path ||
    config.page_metadata[article.locale]?.page_default_open_graph_image_url ||
    config.page_metadata.en.page_default_open_graph_image_url;
  return getAbsolutePath(url, "og url");
};

const mapWordPressToPageMeta = (article) => {
  return article;
};

const getPageMetadata = (articleRaw) => {
  let article = mapWordPressToPageMeta(articleRaw);
  article.locale = "en";

  const pageMetadata = {
    gov_name: config.page_metadata[article.locale]?.gov_name,

    gov_url: config.page_metadata[article.locale]?.gov_url,

    // Page permalink value.
    permalink: getAbsolutePath(article.permalink),

    // Open graph, canonical url, used by search engines.
    canonical_url: getAbsolutePath(article.permalink),

    // Site url, used in social media posts.
    site_url: getAbsolutePath(config.page_metadata.site_url),

    fav_icon: config.page_metadata[article.locale]?.favicon,

    page_icon: config.page_metadata[article.locale]?.page_icon,

    // Title for <title> HTML tag
    page_title: getPageTitle(article),

    // Page title for og tags
    open_graph_title:
      article.metadata?.open_graph_title ||
      article.title ||
      config.page_metadata[article.locale]?.site_name ||
      config.page_metadata.en.site_name,

    // Required tag for Twitter. Is same as open_graph_title.
    twitter_title:
      article.metadata?.open_graph_title ||
      article.title ||
      config.page_metadata[article.locale]?.site_name ||
      config.page_metadata.en.site_name,

    // General site name, used by social media SEO renderers.
    site_name:
      config.page_metadata[article.locale]?.site_name ||
      config.page_metadata.en.site_name,

    // General description for the whole site.
    site_description:
      config.page_metadata[article.locale]?.site_description ||
      config.page_metadata.en.site_description,

    // Description for page - uses frontmatter description or site configuration description
    page_description:
      article.description || config.page_metadata.en.site_default_description,

    // Social media description for open graph (og) tags. Uses front matter metadata, if different from page description.
    // - Defaults to site description when no other data is available.
    open_graph_description:
      article.metadata?.open_graph_description ||
      article.description ||
      config.page_metadata[article.locale]?.site_default_description ||
      config.page_metadata.en.site_default_description,

    // Value for twitter specific og tag. Is same as open_graph_description
    twitter_description:
      article.metadata?.open_graph_description ||
      article.description ||
      config.page_metadata.en.site_default_description,

    // Site keywords. Uses front matter data. If none are set, defaults to global keywords.
    keywords: article.keywords || config.page_metadata.en.keywords,

    // Alt text for social media image. Uses front matter metadata settings, localized default image alt text, or default image alt text.
    open_graph_image_alt:
      article.metadata?.open_graph_image_alt_text ||
      config.page_metadata[article.locale]?.page_default_open_graph_image_alt ||
      config.page_metadata.en.page_default_open_graph_image_alt,

    // Social media asset. Can be relative or absolute url. Uses frontmatter metadata settings, or localized default image, or default image.
    open_graph_image_url: getOpenGraphImage(article),

    open_graph_image_width:
      article.metadata?.open_graph_image_width ||
      config.page_metadata[article.locale]
        ?.page_default_open_graph_image_width ||
      config.page_metadata.en.page_default_open_graph_image_width,

    open_graph_image_height:
      article.metadata?.open_graph_image_height ||
      config.page_metadata[article.locale]
        ?.page_default_open_graph_image_height ||
      config.page_metadata.en.page_default_open_graph_image_height,
  };

  return pageMetadata;
};

module.exports = {
  eleventyComputed: {
    layout: (article) => getTemplate(article),
    page_metadata: (article) => getPageMetadata(article),
  },
};
