let str1 = '([]{})'
let str2 = '([{])}])'


/**
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 * @param {*} str 
 * @returns 
 * 推演
 * ([]{})
 * 1. stack: ['(']
 * 2. stack: ['(', '[']
 * 3. end = '['    newStart = ]    =>  stack.pop => stack = ['(']
 * 4. stack: ['(', '{']
 * 5. end = '{'  newStart = }  => stack.pop => stack = ['(']
 * 
 * ([{])}
 * 1. stack: ['(']
 * 2. stack: ['(', '[']
 * 3. stack: ['(', '[', '{']
 * 4. end = '{' newStart = ']' retrun false
 * 6. end = '{' newStart = ')' retrun false
 * 6. end = '{' newStart = '}' => stack.pop => stack = ['(', '[']
 */
const fun1 = (str) => {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const start = str[i]
    const leftList = ['(', '{', '[']
    const rightList = [')', '}', ']']
    // 如果匹配条件则将其入栈
    if (leftList.includes(start)) {
      stack.push(start)
    } else {
      // 获取最后一个入栈的
      const end = stack[stack.length - 1]
      const index = leftList.findIndex(item => item === end)
      const rightIndex = rightList.findIndex(item => item === start)
      if (index < 0) {
        return false
      }
      if (index === rightIndex) {
        stack.pop()
      } else {
        return false
        // continue
      }
    }
  }
  return stack.length === 0
}

console.log('result', str2, fun1(str2));