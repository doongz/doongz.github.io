# Python 集合 set

创建一个空集合必须用 set() 而不是 { }，因为 { } 是用来创建一个空字典。

```python
"""
创建
"""
s = set()
s = set([1, 2, 2])  # {1, 2}
s = {x for x in 'abracadabra'} # {'d', 'r', 'b', 'c', 'a'}

"""
添加
"""
s.add(x)        # 添加元素
s.update(item)  # 添加元素，且参数可以是列表，元组，字典等
s.copy()        # 拷贝一个集合

"""
删除
"""
s.remove(x)     # 移除元素
s.discard(x)    # 移除集合中的元素，且如果元素不存在，不会发生错误
s.pop()         # 随机删除集合中的一个元素
s.clear()       # 清空集合

"""
操作
"""
a = set([1, 2, 3])
b = set([3, 4, 5])

a | b   # 并集，集合a与b中包含的所有元素 {1, 2, 3, 4, 5}
a & b   # 交集，集合a和b中都包含的元素 {3}
a - b   # 差集，集合a中包含而集合b中不包含的元素 {1, 2}
a ^ b   # 对称差集，不同时包含于a和b的元素 {1, 2, 4, 5}

"""
包含
"""
a = set{1, 2, 3}
b = set{2, 3}
c = set{3, 4}

b < a  # True
a > b  # True
c < a  # False
b == c # False
```

