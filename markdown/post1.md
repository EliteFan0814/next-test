---
title: 第一篇博客
date: 2020-05-08
---

## TypeScript interface 接口

接口声明是命名对象类型的另一种方式，是一系列抽象方法的声明，接口定义的方法需要具
体的类来实现。  
接口一般首字母大写。有的编程语言中会建议接口的名称加上 I 前缀。

```typescript
interface IPerson {
  readonly id: number; // 只读属性
  firstName: string; // 必传属性
  lastName: string;
  age?: number; // 可选属性
  talk: () => void;
  run: string | string[] | (() => string); // 联合类型
  [propName: string]: any; // 任意属性
}

const person: IPerson = {
  id: 1,
  firstName: "屁虫",
  lastName: "放",
  run: "我会跑步",
  talk() {
    console.log(`我的名字是${this.lastName}${this.firstName}`);
  },
  dance() {
    console.log("我会跳舞");
  },
};
person.talk();
```

**赋值的时候，变量的形状必须和接口的形状保持一致，属性不能多也不能少，不然会编译
时报错**  
**一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集**

### 类实现接口

```typescript
// 报警器
interface Alarm {
  // 报警功能
  alert(): void;
  // 监视功能
  watch(): void;
}
// 灯光功能
interface Light {
  lightOn(): void;
  lightOff(): void;
}
// 创建 门 类，实现 报警器 功能
class Door implements Alarm {
  public static className = "门";
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  public alert(): void {
    console.log("我会报警功能");
  }
  public watch(): void {
    console.log("我会监视功能");
  }
}

const door: Door = new Door("盼盼安全门");
door.alert();
console.log(Door.className);

// 创建 汽车 类，也实现 报警器 功能
class Car implements Alarm, Light {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  public alert(): void {
    console.log("我会报警功能");
  }
  public watch(): void {
    console.log("我会监视车辆安全");
  }
  public lightOn(): void {
    console.log("打开灯光");
  }
  public lightOff(): void {
    console.log("关闭灯光");
  }
}
```
