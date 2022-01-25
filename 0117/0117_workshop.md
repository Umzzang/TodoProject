# 1. 세로로 출력하기

```python
num = int(input())
for i in range(num):
    print(i + 1)

```





# 2.  거꾸로 세로로 출력하기

```python
num = int(input())

while num >= 0:
    print(num)
    num -= 1
    
    
```



# 3. N줄 덧셈 

```python
num = int(input())
sum = 0
for i in range(num+1):
    sum += i
    
print(sum)
```



