function median(array) {
  const sortedDonations = [...array].sort((a, b) => a - b)

 const { length } = sortedDonations
 const halfLength = Math.floor(length / 2)

 const middleNumber = sortedDonations[halfLength]
 const previousMiddleNumber = sortedDonations[halfLength - 1]

 const median = length % 2 === 0 ? (middleNumber + previousMiddleNumber) / 2 : middleNumber
 return median
}