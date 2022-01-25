# 1. 평균 점수 구하기

```python

def get_dict_avg(score_dict):
    count = 0
    sum = 0
    avg = 0
    for key in list(score_dict.keys()):
        count += 1
        sum += score_dict[key]
    avg = sum / count

    return avg

```





# 2. 혈액형 분류하기

```python
b_list = ['A','B','A','O','AB','AB','O','A','B','O','B','AB']

def count_blood(list_blood):
    dict_blood = {'A': '', 'B' : '','O' : '', 'AB':''}
    count_a = 0
    count_b = 0
    count_o = 0
    count_ab = 0
    for blood in list_blood:
        if blood == 'A':
            count_a += 1
        elif blood == 'B':
            count_b += 1
        elif blood == 'O':
            count_o += 1
        elif blood == 'AB':
            count_ab += 1
    dict_blood['A']= count_a
    dict_blood['B']= count_b
    dict_blood['O']= count_o
    dict_blood['AB']= count_ab
    return dict_blood

count_blood(b_list)

```

