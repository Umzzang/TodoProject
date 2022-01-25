# 1. 간단한 N의 약수

```python
N = int(input())

for i in range(1,N+1):
    if N % i == 0:
        print(i,end=' ')
```







# 2. 중간값 찾기

```python
numbers = [85, 72, 38, 80, 69, 65, 68, 96, 22, 49, 67, 51, 61, 63, 87, 66, 24, 80, 83, 71, 60, 64, 52, 90, 60, 49, 31, 23, 99, 94, 11, 25, 24]
mid_num = int(len(numbers)/2)
print(len(numbers))
for j in range(len(numbers)):
    i=0
    while i <= (len(numbers) - 2):
        if numbers[i] > numbers[i + 1]:
            numbers[i], numbers[i + 1] = numbers[i + 1], numbers[i]
        i += 1
print(numbers)
print(mid_num)
print(numbers[mid_num])


```





# 3. 계단 만들기

```python
num = int(input())
num1 = 1
for j in range(num):
    print('')
    num1 += 1
    for i in range(1, num1):
        print(i, end = ' ')
    
    
```



