# Python 字符串 strs

## 统计字符串

```python
"""
返回字符串长度
"""
len('abcd')   # 4

"""
返回字符串 str 中最大的字母
"""
max('Abcd')   # 'd'

"""
返回字符串 str 中最小的字母。
"""
min('Abcd')   # 'A'

"""
用于统计字符串里某个字符出现的次数。可选参数start和end为在字符串搜索的开始与结束位置
strs.count('o', start, end)
"""
'Hello World'.count('o') # 2

"""
检测 str 是否包含在字符串中，如果指定范围 beg 和 end ，
则检查是否包含在指定范围内，如果包含返回开始的索引值，否则返回-1
strs.find(str, beg=0, end=len(string))
"""
'Hello World'.find('Wor')        # 6

"""
跟find()方法一样，只不过如果str不在字符串中会报一个异常.
strs.index(str, beg=0, end=len(string))
"""
'Hello World'.index('e')         # 1
```

## 调整字符串

```python
"""
将序列中的元素以指定的字符连接生成一个新的字符串。
"""
sep = ['a', 'b', 'c', 'd']
''.join(sep)    # 'abcd'
'-'.join(sep)   # 'a-b-c-d'

"""
将序列中的元素以指定的字符连接生成一个新的字符串。
"""
sep = ['a', 'b', 'c', 'd']
''.join(sep)    # 'abcd'
'-'.join(sep)   # 'a-b-c-d'

"""
通过指定分隔符str，默认空格，对字符串进行切片，分割num次
strs.split(str, num)
"""
'ok ok ok'.split()          # ['ok', 'ok', 'ok']
'ok#ok#ok'.split('#', 1)    # ['ok', 'ok#ok']

"""
把字符串中的 old 替换成 new，替换不超过 max 次
strs.replace(old, new, max)
"""
'do is do is do is'.replace('is', 'was', 2) # 'do was do was do is'

"""
将字符串中所有大写字符转换为小写。
"""
'Abc'.lower()   # 'abc'

"""
转换字符串中的小写字母为大写
"""
'Abc'.upper()   # 'ABC'

"""
将字符串中大写转换为小写，小写转换为大写
"""
'Abc'.swapcase()# 'aBC'

"""
将字符串的第一个字母变成大写，其他字母变小写，不改变原始值
"""
strs.capitalize()       # 'Hello world'

"""
返回一个指定的宽度 width 居中的字符串，fillchar 为填充的字符，默认为空格。
"""
strs.center(30, '*')    # '*********Hello World**********'

"""
把字符串中的tab键转为空格
strs.expandtabs(tabsize=8)
"""
'ok\tok'.expandtabs()   # 'ok      ok'
```

## 判断字符串

```python
"""
判断字符串是否以指定后缀结尾, start与end为检索字符串的开始与结束位置
strs.endswith(suffix, start, end)
"""
'Hello World'.endswith('ld')     # True

"""
判断以...开头
"""
'Hello World'.startswith('He')  # True

"""
字符都是小写，则返回 True，否则返回 False
"""
'abc'.islower()         # True

"""
字符都是大写，则返回 True，否则返回 False
"""
'Abc'.isupper()         # False

"""
所有字符都是字母则返回 True, 否则返回 False
"""
'abc'.isalpha()         # True

"""
字符串只包含数字则返回 True 否则返回 False
"""
'abc123'.isdigit()      # False

"""
所有字符都是字母或数字则返回 True,否则返回 False
"""
'abc123'.isalnum()      # True
```



