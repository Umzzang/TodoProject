# 1. 무엇이 중복일까 

```python
def duplicated_letters(st):
    result_list = []
    for i in range(len(st)):
        b = st.count(st[i])
        if b >= 2 and st[i] not in result_list:          
            result_list += [st[i]]                  
    return result_list
```



# 2. 소대소대

```python
def low_and_up(st):
    new_st = ''
    for i in range(len(st)):
        if i % 2 == 0:
            new_st += st[i].lower()
        else:
            new_st += st[i].upper()
    
    return new_st
```



# 3. 솔로 천국 만들기

```python
def lonely(lst):
    new_list = []
    for i in range(len(lst)):
        if lst.count(lst[i]) >= 2 and lst[i] not in new_list:
            new_list += [lst[i]]
    return new_list
```

