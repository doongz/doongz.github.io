# DFS 深度优先搜索

参考：https://oi-wiki.org/graph/dfs/

DFS 全称是 [Depth First Search](https://en.wikipedia.org/wiki/Depth-first_search)，中文名是深度优先搜索，是一种用于遍历或搜索树或图的算法。

所谓深度优先，就是说每次都**尝试向更深的节点走**。

该算法讲解时常常与 BFS 并列，但两者除了都能遍历图的连通块以外，用途完全不同，很少有能混用两种算法的情况。

DFS 常常用来指代用递归函数实现的搜索，但实际上两者并不一样。有关该类搜索思想请参阅 [DFS（搜索）](https://oi-wiki.org/search/dfs/).

DFS 最显著的特征在于其 **递归调用自身**。同时与 BFS 类似，DFS 会对其访问过的点打上访问标记，在遍历图时跳过已打过标记的点，以确保 **每个点仅访问一次**。符合以上两条规则的函数，便是广义上的 DFS。

## 一、实现

具体地说，DFS 大致结构如下：

```cpp
void dfs(int cur) {
  	if (到达终点) {
      	if (可以采集答案) 采集答案;
      	return;
  	}
  	vis[u] = 1;
  	for (auto next : 待选列表) {
 		if (next 节点无效) continue;
  		if (vis[next] 节点走过) continue;
    	dfs(v);
}
```

以上代码只包含了 DFS 必需的主要结构。实际的 DFS 会在以上代码基础上加入一些代码，利用 DFS 性质进行其他操作。

该算法通常的时间复杂度为 O(n + m)，空间复杂度为 O(n)，其中 n 表示点数，m 表示边数。

注意空间复杂度包含了栈空间，栈空间的空间复杂度是 O(n) 的。在平均 O(1) 遍历一条边的条件下才能达到此时间复杂度，例如用前向星或邻接表存储图；如果用邻接矩阵则不一定能达到此复杂度。

> 备注：目前大部分算法竞赛（包括 NOIP、大部分省选以及 CCF 举办的各项赛事）都支持 **无限栈空间**，即：栈空间不单独限制，但总内存空间仍然受题面限制。但大部分操作系统会对栈空间做额外的限制，因此在本地调试时需要一些方式来取消栈空间限制。
>
> - 在 Windows 上，通常的方法是在 **编译选项** 中加入 `-Wl,--stack=1000000000`，表示将栈空间限制设置为 1000000000 字节。
> - 在 Linux 上，通常的方法是在运行程序前 **在终端内** 执行 `ulimit -s unlimited`，表示栈空间无限。每个终端只需执行一次，对之后每次程序运行都有效。

链式前向星遍历：

```cpp
// C++ Version
void dfs(int u) {
  vis[u] = 1;
  for (int i = head[u]; i; i = e[i].x) {
    if (!vis[e[i].t]) {
      dfs(v);
    }
  }
}
```

## 二、回溯

```python
result = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return

    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择
```

找到答案就返回写法：

```python
ans = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        ans.add(路径)
        return True

    for 选择 in 选择列表:
        做选择
        if (backtrack(路径, 选择列表)) return True;
        撤销选择
    return False
        
res = backtrack()
return ans if res else []
```

有一个坑：在回溯解法中，如果回溯的时候把`visited`数组设为`false`，会超时。而`visited`不设成`false`，会大大提高速度，最终可以通过。

在回溯题目中，做「剪枝」和「去重」是门大学问

见 [47. 全排列 II](https://leetcode.cn/problems/permutations-ii/)

## 三、一些应用

### DFS 序列

DFS 序列是指 DFS 调用过程中访问的节点编号的序列。

我们发现，每个子树都对应 DFS 序列中的连续一段（一段区间）。

### 括号序列

DFS 进入某个节点的时候记录一个左括号 `(`，退出某个节点的时候记录一个右括号 `)`。

每个节点会出现两次。相邻两个节点的深度相差 1。

### 一般图上 DFS

对于非连通图，只能访问到起点所在的连通分量。

对于连通图，DFS 序列通常不唯一。

注：树的 DFS 序列也是不唯一的。

在 DFS 过程中，通过记录每个节点从哪个点访问而来，可以建立一个树结构，称为 DFS 树。DFS 树是原图的一个生成树。

[DFS 树](https://oi-wiki.org/graph/scc/#dfs) 有很多性质，比如可以用来求 [强连通分量](https://oi-wiki.org/graph/scc/)。
