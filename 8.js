import leetcode from './leetcode'

const myAtoi = function(str) {
  str = str.trim()

  if (!'-+0123456789'.includes(str.charAt(0))) return 0

  if ('-+'.includes(str.charAt(0)) && !'0123456789'.includes(str.charAt(1))) return 0

  let answer = parseInt(str)

  if (!answer) return 0

  answer = answer > 2147483647 ? 2147483647 : answer < -2147483648 ? -2147483648 : answer

  return answer
}

leetcode('Enter a string: ', arg => {
  console.log(`Atoi: ${myAtoi(arg)}`)
})
