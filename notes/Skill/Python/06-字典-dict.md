# Python 哈希表 dict

```python
dict = {'Name': 'dodo', 'Age': 7, 'Class': 'First'}

"""
访问字典
"""
dict['Name']    # dodo
dict['Age']     # 7
dict.get('Class', default=None) # 返回指定键的值，如果值不在字典中返回default值

"""
遍历字典
"""
for k in dict:
    print(k, dict[k])
for k, v in dict.items():
    print(k, v)

dict.keys()     # 返回键的迭代器，可用 list() 来转换为列表
dict.values()   # 返回值的迭代器
    
"""
修改、添加字典
"""
dict['Age'] = 8             # 更新 Age
dict['School'] = "fudan"  # 添加信息
dict.setdefault(key, default=None) # 设置键的值，如果键不存在于字典中，将会添加键并将值设为default
dict.update({'a':1, 'b':2})	# 把字典dict2的键/值对更新到dict里

"""
删除字典
"""
del dict['Name'] # 删除键 'Name'
dict.clear()     # 清空字典
del dict         # 删除字典
dict.pop('Name', 666)   # 删除字典给定键 key 所对应的值，返回值为被删除的值。若key不存在，返回default值。
dict.popitem()  # 删除并返回字典中的最后一对键和值。

"""
推到式
"""
l = ['a', 'b', 'c', 'd']
d = {v: i for i, v in enumerate(l)}
# {'a': 0, 'b': 1, 'c': 2, 'd': 3}

# 返回一个字典的浅复制
dict.copy()     
```



