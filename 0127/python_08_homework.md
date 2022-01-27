# 1. Circle 인스턴스 만들기

```python
class Circle:
    pi = 3.14

    def __init__(self, r, x, y):
        self.r = r
        self.x = x
        self.y = y

    def area(self):
        return Circle.pi * self.r * self.r

    def circumference(self):
        return 2 * Circle.pi * self.r

    def center(self):
        return (self.x, self.y)

c1 = Circle(3, 2, 4)

print(c1.area())
print(c1.circumference())
print(c1.center())
```





# 2. Dog 와 Bird는 Animal이다

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def walk(self):
        print(f'{self.name}! 걷는다!')

    def eat(self):
        print(f'{self.name}! 먹는다!')

class Dog(Animal):
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(f'{self.name}! 짖는다!')

class Bird(Animal):
    def __init__(self, name):
        self.name = name

    def fly(self):
        print(f'{self.name}! 푸드덕!')


dog = Dog('멍멍이')
bird = Bird('구구')
dog.walk()
dog.bark()
dog.eat()

bird.walk()
bird.eat()
bird.fly()
```





# 3. 오류의 종류

ZeroDivisionError : 0으로 나눴을 때

NameError : 이름이 정의되지 않았을 때

TypeError : 타입이 혼동되었을 때

IndexError : 시퀀스 인덱스가 범위를 벗어날 때

KeyError : 키가 없을 때

ModuleNotFoundError : 모듈을 찾지 못했을 때

ImportError : import 문이 모듈을 로드하는데 문제가 있을 때