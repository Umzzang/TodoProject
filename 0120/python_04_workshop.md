# 1. 숫자의 의미

```python
def get_secret_word(numbers):
    str_asc = ''
    for i in numbers:
        str_asc += chr(i)
    return str_asc
get_secret_word([83, 115, 65, 102, 89])

```



# 2. 내 이름은 몇일까?

```python
def get_secret_number(string):
    sum = 0
    for i in string:
        sum += ord(i)
    return sum

get_secret_number('tom')

```



# 3. 강한 이름 

```python
def get_strong_word(str1, str2):
    sum1 = 0
    for i in str1:
        sum1 += ord(i)
        
    sum2 = 0
    for i in str2:
        sum2 += ord(i)
        
    if sum1 > sum2:
        return str1
    elif sum1 < sum2:
        return str2
    else:
        return '같음'
    

get_strong_word('tom','tom')

```



