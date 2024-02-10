const shuffleInList = (list) => {
  return list.sort(() => Math.random() - 0.5);
};

export default shuffleInList;
