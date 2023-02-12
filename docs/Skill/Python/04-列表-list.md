# Python 列表 list

## 操作

```python
"""
创建
"""
a = [1, 2, 3]
a = list("123") # ['1', '2', '3']
a = [i for i in range(10) if i < 3] # [0, 1, 2] 推到式

"""
添加
"""
a.append(99)        # 在列表末尾添加新的对象 [0, 1, 2, 99]
a.extend([33, 44])  # 在列表末尾一次性追加另一个序列中的多个值 [0, 1, 2, 99, 33, 44]
a.insert(2, 't')    # 在指定idx位置插入 [0, 1, 't', 2, 99, 33, 44]

"""
反转
"""
a.reverse()  
a[::-1]

"""
删除
"""
a.pop(-1)       # 移除列表中的一个元素（默认最后一个元素），并且返回该元素的值 4
a.remove('t')   # 移除列表中某个值的第一个匹配项 [0, 1, 2, 99, 33]
a.clear()       # 用于清空列表，类似于 del a[:]

```


## 统计

```python
a = [1, 2, 3, 3]

"""
列表元素个数
"""
len(a)      # 4

"""
返回列表元素最大/小值
"""
max(a)  # 1
min(a)  # 63

"""
查找
"""
a.count(3)  # 2 统计某个元素在列表中出现的次数
a.index(2)  # 1 从列表中找出某个值第一个匹配项的索引位置
```

## 列表的排序

```python
a = [3, 1, 2]

b = sorted(a)   # 返回排好序的列表，原列表不变 
a.sort()        # 在原地址上排序 [1, 2, 3]

"""
指定元素排序，a.sort(key)和sorted(a,key) key的使用方式一样
"""
m = [["dodo",2,5],["koko",3,8],["gogo",4,10],["jojo",8,5],["bobo",4,11]]
res = sorted(m, key=lambda x: x[1])
# [['dodo', 2, 5], ['koko', 3, 8], ['gogo', 4, 10], ['bobo', 4, 11], ['jojo', 8, 5]]

# 先根据第二个值升序排序，若第二个值相等则根据第三个值降序排列
res = sorted(m, key=lambda x: (x[1], -x[2]))
# [['dodo', 2, 5], ['koko', 3, 8], ['bobo', 4, 11], ['gogo', 4, 10], ['jojo', 8, 5]]

# 先根据第三个值升序排序，若第三个值相等则根据第二个值降序排列
res = sorted(m, key=lambda x: (x[2], -x[1]))
# [['jojo', 8, 5], ['dodo', 2, 5], ['koko', 3, 8], ['gogo', 4, 10], ['bobo', 4, 11]]

# 自定义排序
nums = [3,30,34,5,9]
strs = map(str, nums)
def cmp(a, b):
    if a + b == b + a:
        return 0
    elif a + b > b + a:
        return 1
    else:
        return -1
strs = sorted(strs, key=functools.cmp_to_key(cmp), reverse=True)
print(strs) # ['9', '5', '34', '3', '30']
```

也支持对对象的排序，具体看 高级玩法-重载运算符

## 列表的复制

list.copy() 用于复制列表，类似于 a[:]

```python
s1 = [1,2,3,4]
s2 = s1
s3 = s1[:]
s4 = s1.copy()

s1.pop()    

# s1 [1, 2, 3]
# s2 [1, 2, 3]
# s3 [1, 2, 3, 4]
# s4 [1, 2, 3, 4]
```

