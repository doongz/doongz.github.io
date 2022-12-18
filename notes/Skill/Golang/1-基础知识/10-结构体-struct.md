# Golang 结构体 struct

Golang 的结构体使用起来和类很像

对于「外函数」，结构体作为参数

- 如果不使用结构指针，函数内参数属性的改变不影响原来对象的属性
- 使用结构体指针，函数内参数属性的改变影响原来对象的属性

对于「结构体内的函数」，指针原则也成立

- 不使用结构体指针定义的函数，函数内参数属性的改变不影响原来对象的属性
- 使用结构体指针定义的函数，函数内参数属性的改变影响原来对象的属性

```go
package main

import "fmt"

type User struct {
	name string
	age  int
	addr string
}

func (u User) Say() {
	fmt.Printf("Say name:%s, age:%d, addr:%s\n", u.name, u.age, u.addr)
}

func (u User) changeName1(newName string) {
	u.name = newName
	fmt.Printf("In CN1 name:%s\n", u.name)
}

func (u *User) changeName2(newName string) {
	u.name = newName
	fmt.Printf("In CN2 name:%s\n", u.name)
}

func ChangeUser1(u User) {
	u.name = "mama"
	u.age = 12
	u.addr = "浦东"
	fmt.Printf("In CU1 name:%s, age:%d, addr:%s\n", u.name, u.age, u.addr)
}

func ChangeUser2(u *User) {
	u.name = "xixi"
	u.age = 15
	u.addr = "天堂"
	fmt.Printf("In CU2 name:%s, age:%d, addr:%s\n", u.name, u.age, u.addr)
}

func main() {
	user := User{name: "dodo", age: 10}
	user.addr = "番禺"

	user.Say()        // Say name:dodo, age:10, addr:番禺
	fmt.Println(user) // {dodo 10 番禺}

	// 外函数，结构体作为参数
	// 如果不使用结构指针，函数内参数属性的改变不影响原来对象的属性
	// 使用结构体指针，函数内参数属性的改变影响原来对象的属性
	ChangeUser1(user)  // In CU1 name:mama, age:12, addr:浦东
	user.Say()         // Say name:dodo, age:10, addr:番禺
	ChangeUser2(&user) // In CU2 name:xixi, age:15, addr:天堂
	user.Say()         // Say name:xixi, age:15, addr:天堂

	// 对于结构体内的函数，指针原则也成立
	// 不使用结构体指针定义的函数，函数内参数属性的改变不影响原来对象的属性
	// 使用结构体指针定义的函数，函数内参数属性的改变影响原来对象的属性
	user.changeName1("koko") // In CN1 name:koko
	user.Say()               // Say name:xixi, age:15, addr:天堂
	user.changeName2("tutu") // In CN2 name:tutu
	user.Say()               // Say name:tutu, age:15, addr:天堂
}
```

**结构内嵌，达到类似继承的效果**

```go
package main

import "fmt"

type Dog struct {
	name string
	age  int
	sex  string
}

type FatDog struct {
	Dog
	name   string
	weight int
}

func (d *Dog) ShowBase() {
	fmt.Printf("ShowBase, name:%s, age:%d, sex:%s\n",
		d.name, d.age, d.sex)
}

func (fd *FatDog) ShowFat() {
	fmt.Printf("ShowFat, name:%s, age:%d, weight:%d, sex:%s\n",
		fd.name, fd.age, fd.weight, fd.sex)
}

func (d *Dog) Show() {
	fmt.Println("Show in Dog")
}

func (d *FatDog) Show() {
	fmt.Println("Show in FatDog")
}

func main() {
	var fatDog FatDog
	fatDog.name = "fafa"
	fatDog.age = 1
	fatDog.weight = 10
	fatDog.sex = "boy"
	fatDog.Dog.sex = "girl"

	fmt.Println(fatDog) // { 1 girl} fafa 10

	// 使用上层结构体的方法
	fatDog.ShowBase() // ShowBase, name:, age:1, sex:girl

	// 使用自己的结构体
	fatDog.ShowFat() // ShowFat, name:fafa, age:1, weight:10, sex:girl

	// 上层结构体中的方法与自己结构体方法重名是，下层结构体覆盖上层
	fatDog.Show() // Show in FatDog
}
```

