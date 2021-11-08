import Parser from 'rss-parser';
import timeDifference from './helpers';
import { getFeedUrlsFromNotion } from './notion';

async function getNewFeedItemsFrom(feed) {
  const parser = new Parser();
  const rss = await parser.parseURL(feed.feedUrl);
  const todaysDate = new Date().getTime() / 1000;
  const items = rss.items.filter((item) => {
    const blogPublishedDate = new Date(item.pubDate).getTime() / 1000;
    const { diffInDays } = timeDifference(todaysDate, blogPublishedDate);
    return diffInDays === 0;
  });
  return items.map((item) => ({
    ...item,
    feed,
  }));
}

export default async function getNewFeedItems() {
  let allNewFeedItems = [];

  const feeds = await getFeedUrlsFromNotion();

  for (let i = 0; i < feeds.length; i++) {
    const feedItems = await getNewFeedItemsFrom(feeds[i]);
    allNewFeedItems = [...allNewFeedItems, ...feedItems];
  }

  // sort feed items by published date
  allNewFeedItems.sort((a, b) => new Date(a.pubDate) - new Date(b.pubDate));

  return allNewFeedItems;
}
