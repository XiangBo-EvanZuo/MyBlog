---
sidebar: auto
---

# Shell
hello world
```shell
#!/bin/bash
echo "Hello World !"
```
#! 是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行，即使用哪一种 Shell。

1. 作为可执行程序

```shell
chmod +x ./test.sh  #使脚本具有执行权限
./test.sh  #执行脚本
```
注意，一定要写成 ./test.sh，而不是 test.sh，运行其它二进制的程序也一样，直接写 test.sh，linux 系统会去 PATH 里寻找有没有叫 test.sh 的，而只有 /bin, /sbin, /usr/bin，/usr/sbin 等在 PATH 里，你的当前目录通常不在 PATH 里，所以写成 test.sh 是会找不到命令的，要用 ./test.sh 告诉系统说，就在当前目录找。

2. 作为解释器参数
```shell
/bin/sh test.sh
```

## 1-变量
+ 命名只能使用英文字母，数字和下划线，首个字符不能以数字开头。
+ 中间不能有空格，可以使用下划线（_）。
+ 不能使用标点符号。
+ 不能使用bash里的关键字（可用help命令查看保留关键字）
### 使用变量
使用一个定义过的变量，只要在变量名前面加美元符号即可，如：

```shell
your_name="qinjx"
echo $your_name
echo ${your_name}
```

变量名外面的花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界，比如下面这种情况：

```shell
for skill in Ada Coffe Action Java; do
    echo "I am good at ${skill}Script"
done
```
如果不给skill变量加花括号，写成echo "I am good at $skillScript"，解释器就会把$skillScript当成一个变量（其值为空），代码执行结果就不是我们期望的样子了。

推荐给所有变量加上花括号，这是个好的编程习惯。

### 只读变量
```shell
#!/bin/bash
myUrl="https://www.google.com"
readonly myUrl
myUrl="https://www.runoob.com"
```
### 删除变量
```shell
unset variable_name
```
### 变量类型

运行shell时，会同时存在三种变量：

1. 局部变量 局部变量在脚本或命令中定义，仅在当前shell实例中有效，其他shell启动的程序不能访问局部变量。
2. 环境变量 所有的程序，包括shell启动的程序，都能访问环境变量，有些程序需要环境变量来保证其正常运行。必要的时候shell脚本也可以定义环境变量。
3. shell变量 shell变量是由shell程序设置的特殊变量。shell变量中有一部分是环境变量，有一部分是局部变量，这些变量保证了shell的正常运行

## 2-Shell 字符串

```shell
your_name="runoob"
# 使用双引号拼接
greeting="hello, "$your_name" !"
greeting_1="hello, ${your_name} !"
echo $greeting  $greeting_1
# 使用单引号拼接
greeting_2='hello, '$your_name' !'
greeting_3='hello, ${your_name} !'
echo $greeting_2  $greeting_3

# 结果
hello, runoob ! hello, runoob !
hello, runoob ! hello, ${your_name} !
```

### 获取字符串长度
```shell
string="abcd"
echo ${#string} #输出 4
```

### 提取子字符串
以下实例从字符串第 2 个字符开始截取 4 个字符：

```shell
string="runoob is a great site"
echo ${string:1:4} # 输出 unoo
```
### 查找子字符串
查找字符 i 或 o 的位置(哪个字母先出现就计算哪个)：
::: danger
错误示例，测试失败
:::
```shell
string="runoob is a great site"
echo `expr index "$string" io`  # 输出 4
```

## 3-Shell数组
bash支持一维数组（不支持多维数组），并且没有限定数组的大小。

### 定义数组
在 Shell 中，用括号来表示数组，数组元素用"空格"符号分割开。定义数组的一般形式为：
```shell
数组名=(值1 值2 ... 值n)

# demo
array_name=(value0 value1 value2 value3)

array_name=(
value0
value1
value2
value3
)

# 可以不使用连续的下标，而且下标的范围没有限制。
array_name[0]=value0
array_name[1]=value1
array_name[n]=valuen
```
### 读取数组
```shell
# 读取数组元素值的一般格式是：
${数组名[下标]}

valuen=${array_name[n]}

# 使用 @ 符号可以获取数组中的所有元素，例如：
echo ${array_name[@]}
```

### 获取数组的长度
```shell
# 取得数组元素的个数
length=${#array_name[@]}
# 或者
length=${#array_name[*]}
# 取得数组单个元素的长度
lengthn=${#array_name[n]}
```
## 4-Shell 注释

### 单行注释
以 # 开头的行就是注释，会被解释器忽略。
通过每一行加一个 # 号设置多行注释，像这样：

```shell
#--------------------------------------------
# 这是一个注释
# author：菜鸟教程
# site：www.runoob.com
# slogan：学的不仅是技术，更是梦想！
#--------------------------------------------
##### 用户配置区 开始 #####
#
#
# 这里可以添加脚本描述信息
#
#
##### 用户配置区 结束  #####
```

### 多行注释

```shell
# 多行注释还可以使用以下格式：
:<<EOF
注释内容...
注释内容...
注释内容...
EOF

# EOF 也可以使用其他符号:
:<<'
注释内容...
注释内容...
注释内容...
'

:<<!
注释内容...
注释内容...
注释内容...
!
```
## 5-传递参数
我们可以在执行 Shell 脚本时，向脚本传递参数，脚本内获取参数的格式为：$n。n 代表一个数字，1 为执行脚本的第一个参数，2 为执行脚本的第二个参数，以此类推……
```shell
#!/bin/bash
# author:菜鸟教程
# url:www.runoob.com

echo "Shell 传递参数实例！";
echo "执行的文件名：$0";
echo "第一个参数为：$1";
echo "第二个参数为：$2";
echo "第三个参数为：$3";

# result
$ chmod +x test.sh
$ ./test.sh 1 2 3
Shell 传递参数实例！
执行的文件名：./test.sh
第一个参数为：1
第二个参数为：2
第三个参数为：3
```

### 参数处理字符
|  表头   | 表头  |
|  ----  | ----  |
| $# |	传递到脚本的参数个数 |
| $* | 以一个单字符串显示所有向脚本传递的参数。如"$*"用「"」括起来的情况、以"$1 $2 … $n"的形式输出所有参数。|
| $$ | 脚本运行的当前进程ID号 |
| $! |后台运行的最后一个进程的ID号 |
| $@ |与$*相同，但是使用时加引号，并在引号中返回每个参数。如"$@"用「"」括起来的情况、以"$1" "$2" … "$n" 的形式输出所有参数。 |
| $- | 显示Shell使用的当前选项，与set命令功能相同。|
| $? | 显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误。|

```shell
#!/bin/bash
# author:菜鸟教程
# url:www.runoob.com

echo "Shell 传递参数实例！";
echo "第一个参数为：$1";

echo "参数个数为：$#";
echo "传递的参数作为一个字符串显示：$*";

# result
$ chmod +x test.sh
$ ./test.sh 1 2 3
Shell 传递参数实例！
第一个参数为：1
参数个数为：3
传递的参数作为一个字符串显示：1 2 3
```
::: tip
$* 与 $@ 区别：
+ 相同点：都是引用所有参数。
+ 不同点：只有在双引号中体现出来。假设在脚本运行时写了三个参数 1、2、3，，则 " * " 等价于 "1 2 3"（传递了一个参数），而 "@" 等价于 "1" "2" "3"（传递了三个参数）。
:::

```shell
#!/bin/bash
# author:菜鸟教程
# url:www.runoob.com

echo "-- \$* 演示 ---"
for i in "$*"; do
    echo $i
done

echo "-- \$@ 演示 ---"
for i in "$@"; do
    echo $i
done

# result
$ chmod +x test.sh
$ ./test.sh 1 2 3
-- $* 演示 ---
1 2 3
-- $@ 演示 ---
1
2
3
```

### tips

::: tip
+ 在为shell脚本传递的参数中如果包含空格，应该使用单引号或者双引号将该参数括起来，以便于脚本将这个参数作为整体来接收。

+ 在有参数时，可以使用对参数进行校验的方式处理以减少错误发生：

```shell
if [ -n "$1" ]; then
    echo "包含第一个参数"
else
    echo "没有包含第一参数"
fi
# 注意：中括号 [] 与其中间的代码应该有空格隔开
```
:::

Shell 里面的中括号（包括单中括号与双中括号）可用于一些条件的测试：
::: tip

+ 算术比较, 比如一个变量是否为0, [ $var -eq 0 ]。
+ 文件属性测试，比如一个文件是否存在，[ -e $var ], 是否是目录，[ -d $var ]。
+ 字符串比较, 比如两个字符串是否相同， [[ $var1 = $var2 ]]。
+ [] 常常可以使用 test 命令来代替，具体可参看：Shell 中的中括号用法总结。
:::

## 6-基本运算符
+ 管道运算符号
+ 算数运算符
+ 关系运算符
+ 布尔运算符
+ 字符串运算符
+ 文件测试运算符

::: tip
原生bash不支持简单的数学运算，但是可以通过其他命令来实现，例如 awk 和 expr，expr 最常用。

expr 是一款表达式计算工具，使用它能完成表达式的求值操作。
:::

### 管道运算符
管道实际上就是进程之间的一个通信工具，那么用在Linux命令中主要是方便两条命令互相之间可以相互通信。

管道符
管道符（匿名管道）是Shell编程经常用到的通信工具。

管道符是"|"，主要是把两个应用程序连接在一起，然后把第一个应用程序的输出，作为第二个应用程序的输入。如果还有第三个应用程序的话，可以把第二个程序的输出，作为第三个应用程序的输入，以此类推。

如ls | grep test.sh，在当前文件过滤出test.sh文件：
```shell
[root@lincoding /]# ls
bin   data  etc   lib    lost+found  net   opt   root  selinux  sys    usr
boot  dev   home  lib64  media       mnt   proc  sbin  srv   test.sh   tmp
[root@lincoding /]# ls | grep test.sh
test.sh
```
### 算数运算符

::: danger
注意：条件表达式要放在方括号之间，并且要有空格，例如: [$a==$b] 是错误的，必须写成 [ $a == $b ]。
:::

```shell
#!/bin/bash
# author:菜鸟教程
# url:www.runoob.com

a=10
b=20

val=`expr $a + $b`
echo "a + b : $val"

val=`expr $a - $b`
echo "a - b : $val"

val=`expr $a \* $b`
echo "a * b : $val"

val=`expr $b / $a`
echo "b / a : $val"

val=`expr $b % $a`
echo "b % a : $val"

if [ $a == $b ]
then
   echo "a 等于 b"
fi
if [ $a != $b ]
then
   echo "a 不等于 b"
fi

# result
a + b : 30
a - b : -10
a * b : 200
b / a : 2
b % a : 0
a 不等于 b
```

::: warning
+ 乘号(*)前边必须加反斜杠(\)才能实现乘法运算；
+ if...then...fi 是条件语句，后续将会讲解。
+ 在 MAC 中 shell 的 expr 语法是：$((表达式))，此处表达式中的 "*" 不需要转义符号 "\" 。
:::
### 关系运算符

|运算符	| 说明|举例|
| ---| ---|---|
| -eq	|检测两个数是否相等，相等返回 true。 | [ $a -eq $b ] 返回 false。|
| -ne	|检测两个数是否不相等，不相等返回 true。 | [ $a -ne $b ] 返回 true。|
| -gt	|检测左边的数是否大于右边的，如果是，则返回 true。 | [ $a -gt $b ] 返回 false。|
| -lt	|检测左边的数是否小于右边的，如果是，则返回 true。 | [ $a -lt $b ] 返回 true。
|| -ge	|检测左边的数是否大于等于右边的，如果是，则返回 true。 | [ $a -ge $b ] 返回 false。|
| -le	|检测左边的数是否小于等于右边的，如果是，则返回 true。 | [ $a -le $b ] 返回 true。|

```shell
#!/bin/bash
# author:菜鸟教程
# url:www.runoob.com

a=10
b=20

if [ $a -eq $b ]
then
   echo "$a -eq $b : a 等于 b"
else
   echo "$a -eq $b: a 不等于 b"
fi
if [ $a -ne $b ]
then
   echo "$a -ne $b: a 不等于 b"
else
   echo "$a -ne $b : a 等于 b"
fi
if [ $a -gt $b ]
then
   echo "$a -gt $b: a 大于 b"
else
   echo "$a -gt $b: a 不大于 b"
fi
if [ $a -lt $b ]
then
   echo "$a -lt $b: a 小于 b"
else
   echo "$a -lt $b: a 不小于 b"
fi
if [ $a -ge $b ]
then
   echo "$a -ge $b: a 大于或等于 b"
else
   echo "$a -ge $b: a 小于 b"
fi
if [ $a -le $b ]
then
   echo "$a -le $b: a 小于或等于 b"
else
   echo "$a -le $b: a 大于 b"
fi

# result
10 -eq 20: a 不等于 b
10 -ne 20: a 不等于 b
10 -gt 20: a 不大于 b
10 -lt 20: a 小于 b
10 -ge 20: a 小于 b
10 -le 20: a 小于或等于 b
```

### 布尔运算符
| 运算符	| 说明	|举例|
| --- | ---| --- |
| !	|非运算，表达式为 true 则返回 false，否则返回 true。| [ ! false ] 返回 true。|
| -o	|或运算，有一个表达式为 true 则返回 true。| [ $a -lt 20 -o $b -gt 100 ] 返回 true。|
| -a	|与运算，两个表达式都为 true 才返回 true。| [ $a -lt 20 -a $b -gt 100 ] 返回 false。|

```shell
#!/bin/bash
# author:菜鸟教程
# url:www.runoob.com

a=10
b=20

if [ $a != $b ]
then
   echo "$a != $b : a 不等于 b"
else
   echo "$a == $b: a 等于 b"
fi
if [ $a -lt 100 -a $b -gt 15 ]
then
   echo "$a 小于 100 且 $b 大于 15 : 返回 true"
else
   echo "$a 小于 100 且 $b 大于 15 : 返回 false"
fi
if [ $a -lt 100 -o $b -gt 100 ]
then
   echo "$a 小于 100 或 $b 大于 100 : 返回 true"
else
   echo "$a 小于 100 或 $b 大于 100 : 返回 false"
fi
if [ $a -lt 5 -o $b -gt 100 ]
then
   echo "$a 小于 5 或 $b 大于 100 : 返回 true"
else
   echo "$a 小于 5 或 $b 大于 100 : 返回 false"
fi

# result
10 != 20 : a 不等于 b
10 小于 100 且 20 大于 15 : 返回 true
10 小于 100 或 20 大于 100 : 返回 true
10 小于 5 或 20 大于 100 : 返回 false
```

### 逻辑运算符

| 运算符	| 说明	| 举例 |
| ---- | ---- | ---- |
| &&	| 逻辑的 AND	| [[ $a -lt 100 && $b -gt 100 ]] 返回 false |
| \|\|	| 逻辑的 OR	  | [[ $a -lt 100 || $b -gt 100 ]] 返回 true  |

```shell
#!/bin/bash
# author:菜鸟教程
# url:www.runoob.com

a=10
b=20

if [[ $a -lt 100 && $b -gt 100 ]]
then
   echo "返回 true"
else
   echo "返回 false"
fi

if [[ $a -lt 100 || $b -gt 100 ]]
then
   echo "返回 true"
else
   echo "返回 false"
fi

# result
返回 false
返回 true
```

### 字符串运算符
下表列出了常用的字符串运算符，假定变量 a 为 "abc"，变量 b 为 "efg"：


| 运算符	| 说明	| 举例 |
| ----   | ---- | ---- |
| =	 | 检测两个字符串是否相等，相等返回 true。	| [ $a = $b ] 返回 false。|
| != | 检测两个字符串是否不相等，不相等返回 true。	| [ $a != $b ] 返回 true。|
| -z | 检测字符串长度是否为0，为0返回 true。	| [ -z $a ] 返回 false。|
| -n |检测字符串长度是否不为 0，不为 0 返回 true。	| [ -n "$a" ] 返回 true。|
| $	| 检测字符串是否为空，不为空返回 true。	| [ $a ] 返回 true。|

```shell
#!/bin/bash
# author:菜鸟教程
# url:www.runoob.com

a="abc"
b="efg"

if [ $a = $b ]
then
   echo "$a = $b : a 等于 b"
else
   echo "$a = $b: a 不等于 b"
fi
if [ $a != $b ]
then
   echo "$a != $b : a 不等于 b"
else
   echo "$a != $b: a 等于 b"
fi
if [ -z $a ]
then
   echo "-z $a : 字符串长度为 0"
else
   echo "-z $a : 字符串长度不为 0"
fi
if [ -n "$a" ]
then
   echo "-n $a : 字符串长度不为 0"
else
   echo "-n $a : 字符串长度为 0"
fi
if [ $a ]
then
   echo "$a : 字符串不为空"
else
   echo "$a : 字符串为空"
fi

# result
abc = efg: a 不等于 b
abc != efg : a 不等于 b
-z abc : 字符串长度不为 0
-n abc : 字符串长度不为 0
abc : 字符串不为空
```

### 文件测试运算符
文件测试运算符用于检测 Unix 文件的各种属性。

变量 file 表示文件 /var/www/runoob/test.sh，它的大小为 100 字节，具有 rwx 权限。下面的代码，将检测该文件的各种属性：

```shell
#!/bin/bash
# author:菜鸟教程
# url:www.runoob.com

file="/var/www/runoob/test.sh"
if [ -r $file ]
then
   echo "文件可读"
else
   echo "文件不可读"
fi
if [ -w $file ]
then
   echo "文件可写"
else
   echo "文件不可写"
fi
if [ -x $file ]
then
   echo "文件可执行"
else
   echo "文件不可执行"
fi
if [ -f $file ]
then
   echo "文件为普通文件"
else
   echo "文件为特殊文件"
fi
if [ -d $file ]
then
   echo "文件是个目录"
else
   echo "文件不是个目录"
fi
if [ -s $file ]
then
   echo "文件不为空"
else
   echo "文件为空"
fi
if [ -e $file ]
then
   echo "文件存在"
else
   echo "文件不存在"
fi

# result
文件可读
文件可写
文件可执行
文件为普通文件
文件不是个目录
文件不为空
文件存在
```

## 7-echo命令
Shell 的 echo 指令与 PHP 的 echo 指令类似，都是用于字符串的输出。命令格式：
echo string
可以使用echo实现更复杂的输出格式控制。

### 显示转义字符
```shell
echo "\"It is a test\""

# result
"It is a test"`
```

### 显示变量
read 命令从标准输入中读取一行,并把输入行的每个字段的值指定给 shell 变量

```shell
#!/bin/sh
read name
echo "$name It is a test"

[root@www ~]# sh test.sh
OK                     #标准输入
OK It is a test        #输出
```

### 显示换行
```shell
echo -e "OK! \n" # -e 开启转义
echo "It is a test"

# result
OK!

It is a test
```
### 显示不换行
```shell
#!/bin/sh
echo -e "OK! \c" # -e 开启转义 \c 不换行
echo "It is a test"

# result
OK! It is a test
```
### 显示结果定向至文件

```shell
echo "It is a test" > myfile
```
### 原样输出字符串，不进行转义或取变量(用单引号)
```shell
echo '$name\"'

# result
$name\"
```

### 显示命令执行结果
::: warning
注意： 这里使用的是反引号 `, 而不是单引号 '。

结果将显示当前日期
:::

```shell
echo `date`

# result
Thu Jul 24 10:08:46 CST 2014
```

## 8-printf 命令
上一章节我们学习了 Shell 的 echo 命令，本章节我们来学习 Shell 的另一个输出命令 printf。

printf 命令模仿 C 程序库（library）里的 printf() 程序。

printf 由 POSIX 标准所定义，因此使用 printf 的脚本比使用 echo 移植性好。

printf 使用引用文本或空格分隔的参数，外面可以在 printf 中使用格式化字符串，还可以制定字符串的宽度、左右对齐方式等。默认 printf 不会像 echo 自动添加换行符，我们可以手动添加 \n。

printf 命令的语法：
`printf  format-string  [arguments...]`
参数说明：
+ format-string: 为格式控制字符串
+ arguments: 为参数列表。

```shell
$ echo "Hello, Shell"
Hello, Shell
$ printf "Hello, Shell\n"
Hello, Shell

#!/bin/bash
# author:菜鸟教程
# url:www.runoob.com

printf "%-10s %-8s %-4s\n" 姓名 性别 体重kg
printf "%-10s %-8s %-4.2f\n" 郭靖 男 66.1234
printf "%-10s %-8s %-4.2f\n" 杨过 男 48.6543
printf "%-10s %-8s %-4.2f\n" 郭芙 女 47.9876

# result
姓名     性别   体重kg
郭靖     男      66.12
杨过     男      48.65
郭芙     女      47.99
```

::: tip
+ %s %c %d %f 都是格式替代符，％s 输出一个字符串，％d 整型输出，％c 输出一个字符，％f 输出实数，以小数形式输出。

+ %-10s 指一个宽度为 10 个字符（- 表示左对齐，没有则表示右对齐），任何字符都会被显示在 10 个字符宽的字符内，如果不足则自动以空格填充，超过也会将内容全部显示出来。

+ %-4.2f 指格式化为小数，其中 .2 指保留2位小数。
:::

```shell
#!/bin/bash
# author:菜鸟教程
# url:www.runoob.com

# format-string为双引号
printf "%d %s\n" 1 "abc"

# 单引号与双引号效果一样
printf '%d %s\n' 1 "abc"

# 没有引号也可以输出
printf %s abcdef

# 格式只指定了一个参数，但多出的参数仍然会按照该格式输出，format-string 被重用
printf %s abc def

printf "%s\n" abc def

printf "%s %s %s\n" a b c d e f g h i j

# 如果没有 arguments，那么 %s 用NULL代替，%d 用 0 代替
printf "%s and %d \n"

# result
1 abc
1 abc
abcdefabcdefabc
def
a b c
d e f
g h i
j
 and 0
```

### printf 的转义序列
```shell
$ printf "a string, no processing:<%s>\n" "A\nB"
a string, no processing:<A\nB>

$ printf "a string, no processing:<%b>\n" "A\nB"
a string, no processing:<A
B>

$ printf "www.runoob.com \a"
www.runoob.com $
```

## 9-test 命令
Shell中的 test 命令用于检查某个条件是否成立，它可以进行数值、字符和文件三个方面的测试。

###  数值检测
```shell
num1=100
num2=100
if test $[num1] -eq $[num2]
then
    echo '两个数相等！'
else
    echo '两个数不相等！'
fi

# result
两个数相等！
```

::: tip
代码中的 [] 执行基本的算数运算，如：
```shell
#!/bin/bash

a=5
b=6

result=$[a+b] # 注意等号两边不能有空格
echo "result 为： $result"

# result
result 为： 11
```
:::

### 字符串测试

| 参数 | 说明 |
| --- | --- |
| = |	等于则为真 |
| !=	| 不相等则为真 |
| -z | 字符串	字符串的长度为零则为真 |
| -n | 字符串	字符串的长度不为零则为真 |

```shell
num1="ru1noob"
num2="runoob"
if test $num1 = $num2
then
    echo '两个字符串相等!'
else
    echo '两个字符串不相等!'
fi

# result
两个字符串不相等!
```

### 文件测试
| 参数	| 说明 |
| ---- | --- |
| -e 文件名 | 如果文件存在则为真 |
| -r 文件名 | 如果文件存在且可读则为真 |
| -w 文件名 | 如果文件存在且可写则为真 |
| -x 文件名 | 如果文件存在且可执行则为真 |
| -s 文件名 | 如果文件存在且至少有一个字符则为真 |
| -d 文件名 | 如果文件存在且为目录则为真 |
| -f 文件名 | 如果文件存在且为普通文件则为真 |
| -c 文件名 | 如果文件存在且为字符型特殊文件则为真 |
| -b 文件名 | 如果文件存在且为块特殊文件则为真 |

```shell
cd /bin
if test -e ./bash
then
    echo '文件已存在!'
else
    echo '文件不存在!'
fi

# result
文件已存在!
```

::: warning
另外，Shell 还提供了与( -a )、或( -o )、非( ! )三个逻辑操作符用于将测试条件连接起来，其优先级为： ! 最高， -a 次之， -o 最低。例如：
```shell
cd /bin
if test -e ./notFile -o -e ./bash
then
    echo '至少有一个文件存在!'
else
    echo
fi

# result
至少有一个文件存在!
```
:::

## 10-if-流程控制
和 Java、PHP 等语言不一样，sh 的流程控制不可为空，如(以下为 PHP 流程控制写法)：
```php
if (isset($_GET["q"])) {
    search(q);
}
else {
    // 不做任何事情
}
```
::: danger
在 sh/bash 里可不能这么写，如果 else 分支没有语句执行，就不要写这个 else。
:::

### if
```shell
if condition
then
    command1
    command2
    ...
    commandN
fi

# shortcut
if [ $(ps -ef | grep -c "ssh") -gt 1 ]; then echo "true"; fi
```
### if-else
```shell
if condition
then
    command1
    command2
    ...
    commandN
else
    command
fi
```
### if-elif-else
```shell
if condition1
then
    command1
elif condition2
then
    command2
else
    commandN
fi
```

```shell
a=10
b=20
if [ $a == $b ]
then
   echo "a 等于 b"
elif [ $a -gt $b ]
then
   echo "a 大于 b"
elif [ $a -lt $b ]
then
   echo "a 小于 b"
else
   echo "没有符合的条件"
fi

# result
a 小于 b
```

::: tip
if else 语句经常与 test 命令结合使用，如下所示：
:::

```shell
num1=$[2*3]
num2=$[1+5]
if test $[num1] -eq $[num2]
then
    echo '两个数字相等!'
else
    echo '两个数字不相等!'
fi

# result
两个数字相等!
```

## 11-for-循环-流程控制
```shell
for var in item1 item2 ... itemN
do
    command1
    command2
    ...
    commandN
done

# shortcut
for var in item1 item2 ... itemN; do command1; command2… done;
```

::: tip
可以将 do放置在for后面，与其他语言更加类似于
```shell
for((assignment;condition:next));do
    command_1;
    command_2;
    commond_..;
done;

#!/bin/bash
for((i=1;i<=5;i++));do
    echo "这是第 $i 次调用";
done;

# result
这是第1次调用
这是第2次调用
这是第3次调用
这是第4次调用
这是第5次调用
```
:::

当变量值在列表里，for 循环即执行一次所有命令，使用变量名获取列表中的当前取值。命令可为任何有效的 shell 命令和语句。in 列表可以包含替换、字符串和文件名。

in列表是可选的，如果不用它，for循环使用命令行的位置参数。

例如，顺序输出当前列表中的数字：

```shell
for loop in 1 2 3 4 5
do
    echo "The value is: $loop"
done

# result
The value is: 1
The value is: 2
The value is: 3
The value is: 4
The value is: 5
```

```shell
#!/bin/bash

# 顺序输出字符串中的字符：
for str in This is a string
do
    echo $str
done

# result
This
is
a
string
```

## 12-while-循环-流程控制
while 循环用于不断执行一系列命令，也用于从输入文件中读取数据。其语法格式为：

```shell
while condition
do
    command
done
```

以下是一个基本的 while 循环，测试条件是：如果 int 小于等于 5，那么条件返回真。int 从 1 开始，每次循环处理时，int 加 1。运行上述脚本，返回数字 1 到 5，然后终止。

```shell
#!/bin/bash
int=1
while(( $int<=5 ))
do
    echo $int
    let "int++"
done

# result
1
2
3
4
5
```

::: tip
以上实例使用了 Bash let 命令，它用于执行一个或多个表达式，变量计算中不需要加上 $ 来表示变量，具体可查阅：Bash let 命令
:::

while循环可用于读取键盘信息。下面的例子中，输入信息被设置为变量FILM，按Ctrl-D结束循环。

```shell
echo '按下 CTRL-D 退出'
echo -n '输入你最喜欢的网站名: '
while read FILM
do
    echo "是的！$FILM 是一个好网站"
done

# result
按下 CTRL-D 退出
输入你最喜欢的网站名:菜鸟教程
是的！菜鸟教程 是一个好网站
```

### 无限循环

```shell
while :
do
    command
done

# or
while true
do
    command
done

# or
for (( ; ; ))
```

### util循环
+ until 循环执行一系列命令直至条件为 true 时停止。

+ until 循环与 while 循环在处理方式上刚好相反。

+ 一般 while 循环优于 until 循环，但在某些时候—也只是极少数情况下，until 循环更加有用。

until 语法格式:
```shell
until condition
do
    command
done
```
condition 一般为条件表达式，如果返回值为 false，则继续执行循环体内的语句，否则跳出循环。

以下实例我们使用 until 命令来输出 0 ~ 9 的数字：
```shell
#!/bin/bash

a=0

until [ ! $a -lt 10 ]
do
   echo $a
   a=`expr $a + 1`
done

# result
0
1
2
3
4
5
6
7
8
9
```

### case-esac
case ... esac 为多选择语句，与其他语言中的 switch ... case 语句类似，是一种多分枝选择结构，每个 case 分支用右圆括号开始，用两个分号 ;; 表示 break，即执行结束，跳出整个 case ... esac 语句，esac（就是 case 反过来）作为结束标记。

可以用 case 语句匹配一个值与一个模式，如果匹配成功，执行相匹配的命令。
```shell
case 值 in
模式1)
    command1
    command2
    ...
    commandN
    ;;
模式2）
    command1
    command2
    ...
    commandN
    ;;
esac
```

::: tip
+ case 工作方式如上所示，取值后面必须为单词 in，每一模式必须以右括号结束。取值可以为变量或常数，匹配发现取值符合某一模式后，其间所有命令开始执行直至 ;;。
+ 取值将检测匹配的每一个模式。一旦模式匹配，则执行完匹配模式相应命令后不再继续其他模式。如果无一匹配模式，使用星号 * 捕获该值，再执行后面的命令。
:::

下面的脚本提示输入 1 到 4，与每一种模式进行匹配：

```shell
echo '输入 1 到 4 之间的数字:'
echo '你输入的数字为:'
read aNum
case $aNum in
    1)  echo '你选择了 1'
    ;;
    2)  echo '你选择了 2'
    ;;
    3)  echo '你选择了 3'
    ;;
    4)  echo '你选择了 4'
    ;;
    *)  echo '你没有输入 1 到 4 之间的数字'
    ;;
esac

# result
输入 1 到 4 之间的数字:
你输入的数字为:
3
你选择了 3
```

```shell
#!/bin/sh

site="runoob"

case "$site" in
   "runoob") echo "菜鸟教程"
   ;;
   "google") echo "Google 搜索"
   ;;
   "taobao") echo "淘宝网"
   ;;
esac

# result
菜鸟教程
```

### 跳出循环
在循环过程中，有时候需要在未达到循环结束条件时强制跳出循环，Shell使用两个命令来实现该功能：break和continue。

#### break命令
break命令允许跳出所有循环（终止执行后面的所有循环）。

下面的例子中，脚本进入死循环直至用户输入数字大于5。要跳出这个循环，返回到shell提示符下，需要使用break命令。

```shell
#!/bin/bash
while :
do
    echo -n "输入 1 到 5 之间的数字:"
    read aNum
    case $aNum in
        1|2|3|4|5) echo "你输入的数字为 $aNum!"
        ;;
        *) echo "你输入的数字不是 1 到 5 之间的! 游戏结束"
            break
        ;;
    esac
done

# result
输入 1 到 5 之间的数字:3
你输入的数字为 3!
输入 1 到 5 之间的数字:7
你输入的数字不是 1 到 5 之间的! 游戏结束
```

#### continue
continue命令与break命令类似，只有一点差别，它不会跳出所有循环，仅仅跳出当前循环。

```shell
#!/bin/bash
while :
do
    echo -n "输入 1 到 5 之间的数字: "
    read aNum
    case $aNum in
        1|2|3|4|5) echo "你输入的数字为 $aNum!"
        ;;
        *) echo "你输入的数字不是 1 到 5 之间的!"
            continue
            echo "游戏结束"
        ;;
    esac
done
```

::: tip
运行代码发现，当输入大于5的数字时，该例中的循环不会结束，语句 echo "游戏结束" 永远不会被执行。

:::

## 13-函数
linux shell 可以用户定义函数，然后在shell脚本中可以随便调用。

### 基本用法
::: tip
说明：

+ 可以带function fun() 定义，也可以直接fun() 定义,不带任何参数。
+ 参数返回，可以显示加：return 返回，如果不加，将以最后一条命令运行结果，作为返回值。 return后跟数值n(0-255
:::

```shell
[ function ] funname [()]

{

    action;

    [return int;]

}
```

```shell
#!/bin/bash
# author:菜鸟教程
# url:www.runoob.com

demoFun(){
    echo "这是我的第一个 shell 函数!"
}
echo "-----函数开始执行-----"
demoFun
echo "-----函数执行完毕-----"

# result
-----函数开始执行-----
这是我的第一个 shell 函数!
-----函数执行完毕-----
```

::: tip
下面定义一个带有return语句的函数：
:::

```shell
#!/bin/bash
# author:菜鸟教程
# url:www.runoob.com

funWithReturn(){
    echo "这个函数会对输入的两个数字进行相加运算..."
    echo "输入第一个数字: "
    read aNum
    echo "输入第二个数字: "
    read anotherNum
    echo "两个数字分别为 $aNum 和 $anotherNum !"
    return $(($aNum+$anotherNum))
}
funWithReturn
echo "输入的两个数字之和为 $? !"

# result
这个函数会对输入的两个数字进行相加运算...
输入第一个数字:
1
输入第二个数字:
2
两个数字分别为 1 和 2 !
输入的两个数字之和为 3 !
```

::: warning
+ 函数返回值在调用该函数后通过 $? 来获得。
+ 注意：所有函数在使用前必须定义。这意味着必须将函数放在脚本开始部分，直至shell解释器首次发现它时，才可以使用。调用函数仅使用其函数名即可。
:::

### 函数参数
在Shell中，调用函数时可以向其传递参数。在函数体内部，通过 $n 的形式来获取参数的值，例如，$1表示第一个参数，$2表示第二个参数...

```shell
#!/bin/bash
# author:菜鸟教程
# url:www.runoob.com

funWithParam(){
    echo "第一个参数为 $1 !"
    echo "第二个参数为 $2 !"
    echo "第十个参数为 $10 !"
    echo "第十个参数为 ${10} !"
    echo "第十一个参数为 ${11} !"
    echo "参数总数有 $# 个!"
    echo "作为一个字符串输出所有参数 $* !"
}
funWithParam 1 2 3 4 5 6 7 8 9 34 73

# result
第一个参数为 1 !
第二个参数为 2 !
第十个参数为 10 !
第十个参数为 34 !
第十一个参数为 73 !
参数总数有 11 个!
作为一个字符串输出所有参数 1 2 3 4 5 6 7 8 9 34 73 !
```

::: warning
注意，$10 不能获取第十个参数，获取第十个参数需要${10}。当n>=10时，需要使用${n}来获取参数
:::

::: danger
+ $? 仅对其上一条指令负责，一旦函数返回后其返回值没有立即保存入参数，那么其返回值将不再能通过 $? 获得。

+ expr这个函数会在shell里面展示结果，但不是真实的return值

```shell{12}
#!/bin/bash
function demoFun1(){
    echo "这是我的第一个 shell 函数!"
    return `expr 1 + 1`
}

demoFun1
echo $?

function demoFun2(){
 echo "这是我的第二个 shell 函数!"
 expr 1 + 1
}

demoFun2
echo $?
demoFun1
echo 在这里插入命令！
echo $?

# result
这是我的第一个 shell 函数!
2
这是我的第二个 shell 函数!
2 // expr这个函数会在shell里面展示结果，但不是真实的return值
0
这是我的第一个 shell 函数!
在这里插入命令！
0
```
:::

## 练习题目
1. 判断/etc/inittab文件是否大于100行，如果大于，则显示”/etc/inittab is a big file.”否者显示”/etc/inittab is a small file.”

```shell
#!/bin/bash
#判断文件行数是否大于100行
if [ `wc -l /etc/inittab | awk '{print $1}'` -gt 100 ];then
　　echo "/etc/inittab is a big file."
else
　　echo "/etc/inittab is a samll file."
fi
```

2. 给定一个用户，来判断这个用户是什么用户，如果是管理员用户，则显示“该用户为管理员”，否则显示“该用户为普通用户”
```shell
#!/bin/bash
#判断用户类型`
a=`id -u $1`
if [ $a -eq 0 ];then
　　echo "这是管理员用户"
else
　　echo "普通用户"
fi
```

3. 判断某个文件是否存在
```shell
#!/bin/bash
#判断文件是否存在
if [ -e $1 ];then
　　echo "存在"
exit 0
else
　　echo "不存在"
fi
```

4. 判断当前系统上是否有用户的默认shell程序是否为bash程序，如果有，就显示有多个这类用户，否则就显示没有这类用户；【并且显示出那些用户是bash】
```shell
# method 1

#!/bin/bash
#判断用户默认shell程序类型
a=`grep "/bin/bash" /etc/passwd | wc -l`
if [ $a -gt 0 ] ;then
　　echo "存在bash用户有 $a 个"
else
　　echo "不存在"
fi

# method 2

#！/bin/bash
#判断用户的默认shell程序类型
declare -i sum=`grep "/bin/bash" /etc/passwd | wc -l`
if grep "/bin/bash" /etc/passwd &> /dev/null;then
　　echo "存在 $sum 个用户，shell程序为/bin/bash"
　　grep "/bin/bash" /etc/passwd | cut -d: -f1
　　exit 0
else
　　echo "没有这类用户"
exit 1
fi
```

5. 输入一个设备文件，输出这个设备文件的基本信息：
```shell
#！/bin/bash
#查看设备文件信息
read -t 10 -p "输入一个设备文件名：" devname
[ -z $devname ] && devname=`fdisk -l` && exit 1
if [ -b /dev/$devname ];then
　　　　fdisk -l /dev/$devname
　　　　exit 0
else
　　　　echo "$devname 不是设备文件"
　　　　echo "Usage:请输入一个设备文件，如 sda"
　　　　exit 2
fi
```

6. shell编写99乘法表
```shell
#!/bin/bash
#99乘法表
for i in `seq 9`;do
　　　　for j in `seq 9`;do
　　　　[ $j -le $i ] && echo -n -e "$i*$j=`echo $(($i*$j))`\t"
done
　　　　echo " "
done
```

7. 统计netstat -tan类型
```shell
declare -i L=0
declare -i E=0
declare -i o=0

for i in $(netstat -tan | grep "^tcp" | awk '{print $6}');do
　　　　　　if [ $i = LISTEN ];then
　　　　　　　　let L++
　　　　　　elif [ $i = ESTALISHED ];then
　　　　　　　　let E++
　　　　　　else
　　　　　　　　let o++
fi
done
echo "坚挺的链接有： $L"
echo "其他链接有： $o"
echo "家里链接有： $E"
```

8. 计算1-100内偶数的和
```shell
#!/bin/bash
#1-100内偶数的和
declare -i sum=0
　　　　for i in $(seq 0 2 100);do
　　　　　　let sum+=$i
done
echo "和 $sum"
```
