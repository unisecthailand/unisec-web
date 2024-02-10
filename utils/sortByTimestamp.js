const sortByTimestamp = (list) => {
  return list.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export default sortByTimestamp;
