# 子数组问题

子数组问题有三种解决方案：动态规划、前缀和、滑动窗口

## 一、子数组计数问题

通常是固定 `nums[i]` 为右边界，找到当前左边界可能的个数

每次增加右边界的下标，重新统计左边界可能的个数，累加的 cnt 中

即 cnt 为满足题目条件子数组的个数