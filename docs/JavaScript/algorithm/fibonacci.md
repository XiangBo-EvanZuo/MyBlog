<!--
 * @Author: your name
 * @Date: 2021-01-29 20:57:13
 * @LastEditTime: 2021-02-01 13:39:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/JavaScript/arg/a.md
-->
# fibonacci

![Image from alias](./pics/fibonacci.jpeg)

```js
function fibonacci(n, v1, v2) {
    const fibonacciList = []
    function fib(n, v1, v2) {
        if (n == 1) {
          fibonacciList.push(v1)
          return
        } else if (n == 2) {
          fibonacciList.push(v1)
          return
        } else {
          fibonacciList.push(v1)
          fib(n - 1, v2, v1 + v2)
        }
    }
    fib(n, v1, v2)
    return fibonacciList
}

const father = fibonacci(5, 1, 2)
const son = fibonacci(5, 2, 3)
const sumArray = son.map((item, index) => {
    return [item, father[index]]
  }
)
const res = sumArray.reduce((acc, cur) => acc + cur[0] / cur[1], 0)
```

```py
#!/usr/bin/python
def fibonacci(n, v1, v2):
    list = []
    def fib(n, v1, v2):
        if n == 1:
          list.append(v1)
          return
        elif n == 2:
          list.append(v1)
          return
        else:
          list.append(v1)
          fib(n - 1, v2, v1 + v2)

    fib(n, v1, v2)
    return list


father = fibonacci(5, 1, 2)
son = fibonacci(5, 2, 3)
fibonacciList = []
for index, item in enumerate(son):
    fibonacciList.append([item, father[index]])

sum = 0
for each in fibonacciList:
    sum += each[0] / each[1]
print(sum)
```