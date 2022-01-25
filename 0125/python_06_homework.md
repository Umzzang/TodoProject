# 1. Built - in 함수와 메서드

```python
a = [3, 5, 1, 7]
print(a)
b = sorted(a)
print(a)
print(b)

a.sort()
print(a)
```

결과 값

```
[3, 5, 1, 7]
[3, 5, 1, 7]
[1, 3, 5, 7]
[1, 3, 5, 7]
```

sort()는 메서드

sorted()는 함수 







# 2. .extend() 와 .append()

```python
a = [3, 5, 1, 7]
print(a)
a.extend([9])
print(a)
a.append(10)
print(a)
a.extend([11, 12, 13])
print(a)
a.append([14, 15, 17])
print(a)
a.extend([[20, 21]])
print(a)
```

결과 값

```
[3, 5, 1, 7]
[3, 5, 1, 7, 9]
[3, 5, 1, 7, 9, 10]
[3, 5, 1, 7, 9, 10, 11, 12, 13]
[3, 5, 1, 7, 9, 10, 11, 12, 13, [14, 15, 17]]
[3, 5, 1, 7, 9, 10, 11, 12, 13, [14, 15, 17], [20, 21]]
```

append 는 그냥 숫자

extend 는 같은 형식으로





# 3 . 복사가 잘 된건가?

```python
a = [3, 5, 1, 7]
b = a
a[2] = 5
print(a)
print(b)


c = [3, 5, 1, 7]
d = c[:]
c[2] = 5
print(c)
print(d)
```

```
[3, 5, 5, 7]
[3, 5, 5, 7]
[3, 5, 5, 7]
[3, 5, 1, 7]
```



첫 번째는 주소까지?

두 번째는 값들만 복사

