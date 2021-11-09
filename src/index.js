import getNewFeedItems from './feed';
import { addFeedItemToNotion, deleteOldUnreadItemsFromNotion } from './notion';
import htmlToNotionBlocks from './parser';

async function index() {
  const feedItems = await getNewFeedItems();

  for (let i = 0; i < feedItems.length; i++) {
    const item = feedItems[i];

    const notionItem = {
      title: item.title,
      link: item.link,
      content: htmlToNotionBlocks(item.content),
      feed: item.feed,
      pubDate: item.pubDate,
      creator: item['dc:creator'],
    };

    await addFeedItemToNotion(notionItem);
  }

  await deleteOldUnreadItemsFromNotion();
}

index();
