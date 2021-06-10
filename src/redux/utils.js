const compare = (task1, task2) => {
   return task2.text.localeCompare(task1.text);
};

export const sortByReverseOrderTitle = (list = []) => {
   return [...list].sort(compare);
}
