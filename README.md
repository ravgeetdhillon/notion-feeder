[![Release](https://github.com/ravgeetdhillon/notion-feeder/actions/workflows/release.yml/badge.svg)](https://github.com/ravgeetdhillon/notion-feeder/actions/workflows/release.yml)
[![Get Feed](https://github.com/ravgeetdhillon/notion-feeder/actions/workflows/main.yml/badge.svg)](https://github.com/ravgeetdhillon/notion-feeder/actions/workflows/main.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<a href="https://www.producthunt.com/posts/notion-feeder?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-notion-feeder" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=316289&theme=light" alt="Notion Feeder - Convert Notion to a Feed Reader | Product Hunt" style="width: 166px; height: 36px;" width="166" height="36" /></a>

---

If you love this product and value my time, consider [sending some love](https://paypal.me/ravgeetdhillon) to me. This will enable me to work on more projects like these in the future.

[![PayPal Donate Button](https://images.squarespace-cdn.com/content/v1/55f62c4ce4b02545cc6ee94f/1558204823259-CQ0YNKZEHP7W5LO64PBU/paypal-donate-button-1.PNG?format=300w)](https://paypal.me/ravgeetdhillon)

---

# Notion Feeder

A Node.js app for creating a Feed Reader in [Notion](https://notion.so).

![](/screenshots/working.gif)

## Features

Separate database for your feed sources and feed items.

![](/screenshots/image-1.png)

Add, enable and disable your feed sources.

![](/screenshots/image-2.png)

Feeds are sourced daily and stored in the **Reader** database. New feed items are marked with 🔥.

![](/screenshots/image-3.png)

Read a feed directly in Notion Page View.

![](/screenshots/image-4.png)

Different views of accessing Unread, Starred feed items.

![](/screenshots/image-5.png)

## Setup

1. Create a new [Notion Integration](https://www.notion.so/my-integrations) and copy the secret code which you'll use as `NOTION_API_TOKEN` in Step 4.

2. Duplicate this [template](https://ravsamhq.notion.site/Feeder-fa2aa54827fa42c2af1eb25c7a45a408) to your Notion workspace.

3. Once the template is available on your Notion Workspace, open the **Reader** database. Click the three-button page menu in the top right corner **...** _> Add connections_ and search the Notion integration you created in Step 1 and Click **Invite**. Do the same for the **Feeds** database.

4. Fork this GitHub repository and once forking is complete, go to your forked GitHub repository.

5. Enable the GitHub Actions by visiting the **Actions** tab and click "I understand my workflows, enable them".

6. Click on the **Get Feed** action in the left panel and then click "Enable workflow".

7. Go to _Settings > Secrets_. Add the following three secrets along with their values as **Repository secrets**.

   ```
   NOTION_API_TOKEN
   NOTION_READER_DATABASE_ID
   NOTION_FEEDS_DATABASE_ID
   ```

   > To find your database id, visit your database on Notion. You'll get a URL like this: https://www.notion.so/{workspace_name}/{database_id}?v={view_id}. For example, if your URL looks like this: https://www.notion.so/abc/xyz?v=123, then `xyz` is your database ID.

8. Delete the [release workflow file](.github/workflows/release.yml) as it is only required in the original repository.

9. That's it. Now every day, your feed will be updated at 12:30 UTC.

**Note**: You can change the time at which the script runs from [here](.github/workflows/main.yml#L5) and the frequency of running from [here](.github/workflows/main.yml#L15).

## Development

You are more than welcome to contribute to this project.

### Prerequisites

These things are required before setting up the project.

- Git
- Ubuntu 18.04 or 20.04
- Node.js [Read Guide](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)

### Setup

Follow these instructions to get the project up and running.

```bash
# clone the repo
$ git clone https://github.com/ravgeetdhillon/notion-feeder.git

# change directory
$ cd notion-feeder

# install dependencies
$ npm install

# enable webpack bundling
$ npm run watch
```

## Tech Stack

- [Node](https://nodejs.org/)
- [Notion API](https://developers.notion.com)

## Contributors

- [Ravgeet Dhillon](https://github.com/ravgeetdhillon)

## Extra

- You can request features and file bugs [here](https://github.com/ravgeetdhillon/notion-feeder/issues).
- In case you get stuck somewhere, feel free to contact me at my [email](mailto:ravgeetdhillon@gmail.com).
