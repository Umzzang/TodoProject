# 1. Mutable & Immutable

변경 가능 (mutable) : List, Set, Dictionary

변경 불가능 (immutable) : Tuple, Range, String



# 2. 홀수만 담기

```python
list_odd = [i for i in range(51) if i % 2 == 1]
        
```



# 3. Dictionary 만들기

```python
dict_={'홍길동' : 300}
```





# 4. 반복문으로 네모 출력

```python
n = 5
m = 9
for i in range(m):
    print('')
    for i in range(n):
        print('*',end='')
```





# 5. 조건 표현식

```python
temp = 36.5
print('입실 불가' if temp >= 37.5 else '입실 가능')
```



# 6. 평균 구하기

```python
scores = [80, 89, 99, 83]
sum = 0
avg = 0
num = 0
for i in scores:
    sum += i
    num += 1
    
avg = sum/num
print(avg)
```

