// import readingTime from "reading-time";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { appDataAtom } from "../../store/appState";
import { getCurrentPost } from "../../lib/getCurrentPost";
import { countWords } from "../../lib/countWords";
import { getReadingTime } from "../../lib/getReadingTime";

export const ReadingTime = () => {
  const { id: pageId } = useParams();
  const [appData] = useAtom(appDataAtom);
  const contentToParse = getCurrentPost(appData, pageId)?.content;
  const numberOfWords = countWords(contentToParse);
  const readingTime = getReadingTime(numberOfWords, {
    /* MANDATORY VALUE */
    /* Denotes the average reading speed of a human in words per minute */
    wordsPerMinute: 200,
  });

  return (
    <article className="hidden md:block">
      Reading Time : <span className="text-green-500">{readingTime}</span>
    </article>
  );
};
