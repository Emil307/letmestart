import { IWord} from "../types/types";
import { useThemesWords } from "./useThemeWords";

export function findWords() {
    const { words } = useThemesWords();

    let count = 0;
    const learningWords = <IWord[]>words.filter((item) => {
        if (item.isLearned === false && count < 4) {
            count++;
            return item;
        }
    });

    return learningWords;
}