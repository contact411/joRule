/**
 * Site identity — single source for the brand + external URLs + install
 * command. The colour/font/style direction (and the name itself) is
 * provisional; changing the brand identity = editing THIS file only.
 * (Body copy that mentions the brand mid-sentence stays verbatim copy —
 * a rename ships with a copy pass, per copy.md being canonical.)
 */

export const BRAND = 'jaRules'

export const SITE_URL = 'https://jarule.dev'

export const SITE_DOMAIN = 'jarule.dev'

export const REPO_URL = 'https://github.com/contact411/joRule'

export const INSTALL_URL = 'https://raw.githubusercontent.com/contact411/joRule/main/install.sh'

export const INSTALL_COMMAND = `curl -fsSL ${INSTALL_URL} | bash`

export const DEFAULT_TITLE = `${BRAND} · AI rules your agents actually follow`

export const DEFAULT_DESCRIPTION =
  'A versioned repo of AI rules and prompts for Cursor, Claude Code, Cline, and Roo. One command installs everything.'