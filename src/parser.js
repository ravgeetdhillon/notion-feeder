import { markdownToBlocks } from '@instantish/martian';
import TurndownService from 'turndown';

function htmlToMarkdown(htmlContent) {
  const turndownService = new TurndownService();
  return turndownService.turndown(htmlContent);
}

function jsonToNotionBlocks(markdownContent) {
  const notionBlocks = markdownToBlocks(markdownContent);
  return notionBlocks;
}

export default function htmlToNotionBlocks(htmlContent) {
  const imageUrlRegex =
    /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|webp|gif|png)/gi;

  const markdownContent = htmlToMarkdown(htmlContent);
  const notionBlocks = jsonToNotionBlocks(markdownContent);
  const notionBlocksWithImages = notionBlocks.map((block) => {
    if (block.type === 'paragraph') {
      if (imageUrlRegex.test(block.paragraph.text[0].text.content)) {
        return {
          type: 'image',
          image: {
            type: 'external',
            external: {
              url: block.paragraph.text[0].text.content,
            },
          },
        };
      }
    }
    return block;
  });
  return notionBlocksWithImages;
}
