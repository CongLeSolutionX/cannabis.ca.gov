# cannabis.ca.gov
development for cannabis site

more details on <a href="https://github.com/cagov/cannabis.ca.gov/wiki">wiki</a>

## Todo

This repo is under active development as we create a headless version of the cannabis WordPress site.

### Code organization goals

- All the components currently in src/components should be refined, promoted to the cagov/design-system repo, then those folders should be deleted from this repository and the npm packages should be installed to provide the features.
- The build system dependencies should also be externalized so 11ty and all its dependencies can be accessed via npx locally and in github action steps for builds in our pipelines

Files which will remain in this repo:

- /wordpress content is written here by our publishing service from the WordPress API. This will continue to happen. These files will not be manually modified in this repo.
- /templates contains the headless versions of page templates, that code will continue to be managed manually in this repo. The data in the templates should be generated by the WordPress API data: the contents of the menus is already pulled from the API for example.

#### Some files used only in WordPress:

This repo contains files used by the WordPress site like:

- src/css/colorscheme-cannabisv1.0.7.min.css
- manual-cawebv1.0.1.css


The whole src/js/wordpress directory for the bundle of components used in WordPress authoring and public site

The following command is used to generate the bundle files used by the production WordPress monolith sites;

```
npm run wordpress-bundle
```

This generates a hashed filename in the src/js/wordpress/generated directory.


The npm script in this package.json references multiple commands which point to specific rollup config files which reference the modules included.

When content in this repository is modified it gets deployed to headles.cannabis.ca.gov so the new hashed filename can be referenced in the WordPress monolith custom JS textarea we modify in the theme config in the wordpress admin. Since we are using hashed filenames we can revert easily to the prior filename.

