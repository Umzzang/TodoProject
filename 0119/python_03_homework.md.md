# 1. Built-in 함수

abs(), enumerate(), filter(), hex(), divmod()



# 2. 정중앙 문자

```python
def get_middle_char(a):
    le = len(a)
    if le % 2 == 1:
        return a[(le//2)]
    else:
        return a[(le//2)-1: ((le//2)+1)]
    
get_middle_char('sseafy')

```



# 3. 위치 인자와 키워드 인자

(4) 앞에서 기본값을 지정하면 에러 발생



# 4. 나의 반환값은

None



# 5. 가변 인자 리스트

```python
def my_avg(*args):
    sum = 0
    count = 0
    for arg in args:
        sum += arg
        count += 1
    return sum/count

my_avg(77, 83, 13, 5, 10)
```





