const sequenceSum = (begin, end, step) => {
  return begin > end ? 0 : begin + sequenceSum(begin + step, end, step)
};