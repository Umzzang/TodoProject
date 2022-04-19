# 1. MTV

```
model - data를 객체로 사용할수 있게 클래스로 지정
template - 정보들을 받아서 사용자의 화면에 출력해주는 역할
view - 서버에 작동방식을 코드로 짜는 역할 


```



# 2. 404 Page not found

(a) : .

(b) : views

(c) : views.index



# 3. templates and static

(a) : settings.py

(b) : TEMPLATES

(c) : STATICFILES_DIRS



# 4. migration

1. python manage.py makemigrations
2. python manage.py showmigrations
3. python manage.py sqlmigrate
4. python manage.py migrate



# 5. ModelForm True or False

1. F
2. T
3. F
4. F



# 6. media 파일 경로

```python
#project/settings.py

MEDIA_ROOT = "/uploaded_files/"


MEDIA_URL = os.path.join(BASE_DIR, 'uploaded_files')
```



# 7. DB True or False

1. T
2. F
3. T
4. F
5. F



# 8. on_delete

PROTECT



# 9. Like in models

(a) : ManyToManyField

(b) : related_name



# 10. Follow in models

table 이름 : accounts_user_followings

id

from_user_id

to_user_id