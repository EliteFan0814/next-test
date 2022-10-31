---
title: 第二篇博客
date: 2020-12-08
---

### 接口继承接口

```typescript
interface Alarm {
  alert(): void;
}

interface LightableAlarm extends Alarm {
  lightOn(): void;
  lightOff(): void;
}
```

### 接口继承类

TypeScript 中接口也可以继承类，因为声明一个类的同时，也会创建和类同名的一个类型
，只不过同名类型不包括类中的构造函数、静态属性、静态方法：

```typescript
// 声明一个类
class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
// 同时会暗地里创建一个同名的类型
interface PointInstanceType {
  x: number;
  y: number;
}
```
