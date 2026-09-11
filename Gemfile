source "https://rubygems.org"

# Built by the GitHub Actions workflow in .github/workflows/deploy.yml, which
# runs exactly this bundle — so a local `bundle exec jekyll serve` reproduces
# production instead of drifting from it.
#
# (GitHub Pages' older "classic" build ignores this file and uses its own
# pinned Jekyll 3.10. The site is written to build correctly either way: it
# uses no plugins at all. robots.txt, sitemap.xml, llms.txt and
# site.webmanifest are plain Liquid templates in the repo root.)
gem "jekyll", "~> 4.4"

# Ruby 3.4 moved these out of the standard library.
gem "csv"
gem "base64"
gem "bigdecimal"
gem "logger"
gem "ostruct"

# Local preview server.
gem "webrick", "~> 1.9"

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo-data"
end
