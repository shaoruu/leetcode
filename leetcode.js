import chalk from 'chalk'
import readline from 'readline'

const promptReader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

function toNumeric(num) {
  return !isNaN(num) ? parseFloat(num) : num
}

function toBoolean(bool) {
  return bool === 'true' ? true : bool === 'false' ? false : bool
}

/**
 *
 * Creates series of questions.
 *
 * @param {Array} series
 * @param {Function} callback
 *
 */
const leetcode = (series, callback) => {
  let times = 1

  if (!Array.isArray(series)) series = [series]

  console.log(chalk.white.bgBlue.bold(`TEST #${times}`))

  let answers = []

  const finalCallback = () => {
    // TODO
    // answers = answers.map(answer => {
    //   const temp = answer.trim()
    //   if (temp !== toBoolean(temp)) return toBoolean(temp)
    //   if (temp !== toNumeric(temp)) return toNumeric(temp)
    //   return answer
    // })

    if (answers.length === 1) callback(answers[0])
    else callback(answers)

    answers = []
  }

  const recursivelyReadline = index => {
    promptReader.question(series[index], answer => {
      if (index >= series.length - 1) {
        answers.push(answer)

        finalCallback()

        console.log(chalk.white.bgBlue.bold(`TEST #${++times}`))

        recursivelyReadline(0)
      } else {
        answers.push(answer)
        recursivelyReadline(index + 1)
      }
    })
  }

  recursivelyReadline(0)
}

export default leetcode
