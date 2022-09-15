console.log('clear==')
let str = 'abbaca'
let str2 = 'abbaca'

/**
 * 思路：将每个字符串依次入栈，每次循环时，取栈中最后一个值，与新值进行比较，如果一致则将该值出栈，否则入栈
 * @param {*} s 
 * @returns 
 */
const removeDuplicates = (s) => {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || stack[stack.length - 1] !== s[i]) {
      stack.push(s[i])
    } else {
      stack.pop(stack.length - 1)
    }
  }
  return stack.join('')
}

console.log(removeDuplicates(str))