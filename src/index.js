import getNewFeedItems from './feed';
import {
  getExistingPages,
  addFeedItemToNotion,
  deleteOldUnreadItemsFromNotion,
} from './notion';
import htmlToNotionBlocks from './parser';

async function index() {
  const feedItems = await getNewFeedItems();
  const existingPages = await getExistingPages(feedItems);

  for (let i = 0; i < feedItems.length; i++) {
    const item = feedItems[i];

    const existingEntries = existingPages.find(
      (page) => page.properties.Link.url === item.link
    );

    const isNewEntry = existingEntries === undefined;

    const notionItem = {
      title: item.title,
      link: item.link,
      content: htmlToNotionBlocks(item.content),
      feed: item.feed,
      pubDate: item.pubDate,
      creator: item['dc:creator'],
    };

    if (isNewEntry) {
      await addFeedItemToNotion(notionItem);
    }
  }

  await deleteOldUnreadItemsFromNotion();
}

index();
