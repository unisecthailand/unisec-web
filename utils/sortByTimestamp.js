const sortByTimestamp = (list, reverse=false) => {
  if(reverse) return list.sort(
    (b, a) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return list.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export default sortByTimestamp;
