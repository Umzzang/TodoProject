# 1 . 모음은 몇 개나 있을까?

```python
def count_vowels(st):
    count = 0
    count += st.count('a')
    count += st.count('e')
    count += st.count('i')
    count += st.count('o')
    count += st.count('u')
    return count

```



# 2 . 문자열 조각

(4) 지정한 문자를 제거한다.

 특정 문자르 지정하지 않아도 오류가 발생하지 않는다.



# 3 . 정사각형 만들기

```python
def only_square_area(lists1, lists2):
    area = []
    for list1 in lists1:
        for list2 in lists2:
            if list1 == list2:
                area.append(list1 ** 2)
    return area

```

