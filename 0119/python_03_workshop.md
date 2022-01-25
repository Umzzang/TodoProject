# 1. List의 합 구하기

```python
def list_sum(numbers):
    sum = 0
    for number in numbers:
        sum += number
        
    return sum

list_sum([1,2,3,4,])
    
```



# 2. Dictionary로 이루어진 List의 합 구하기

```python
def dict_list_sum(dict1s):
    sum = 0
    for i in range(len(dict1s)):
        sum += dict1s[i]['age']
    return sum
    
dict_list_sum([{'name': 'kim', 'age': 12},{'name': 'lee', 'age': 4}])
```



# 3. 2차원 List의 전체 합 구하기

```python
def all_list_sum(numbers):
    a = len(numbers)
    sum = 0
    for i in range(len(numbers)):
        j = 0
        while j < len(numbers[i]):
            sum += numbers[i][j]
            j +=1
    return sum

all_list_sum([[1],[1,2],[1,2,3],[1,2,3,4]])
```

