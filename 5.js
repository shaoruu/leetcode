var longestPalindrome = function(s) {
  let answer = ''

  for (let i = 0; i < s.length; i++) {
    let expand1 = 0

    while (i - expand1 >= 0 || i + expand1 <= s.length - 1) {
      if (s.charAt(i - expand1) === s.charAt(i + expand1)) {
        const potential = s.substring(i - expand1, i + expand1 + 1)
        if (potential.length > answer.length) answer = potential
        expand1++
      } else break
    }

    let expand2 = 0

    while (i - expand2 >= 0 || i + expand2 + 1 <= s.length - 1) {
      if (s.charAt(i - expand2) === s.charAt(i + expand2 + 1)) {
        const potential = s.substring(i - expand2, i + expand2 + 2)
        if (potential.length > answer.length) answer = potential
        expand2++
      } else break
    }
  }

  return answer
}

console.log(longestPalindrome('cbbd'))
