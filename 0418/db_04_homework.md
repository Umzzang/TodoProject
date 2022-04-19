# 1. M:N True or False

1) T
2) T
3) F - related_name 은 필수가 아니다.





# 2. Like in templates

(a) : user



(b) : article.like_users.all





# 3. Follow in views

(a) : user_pk



(b) : followers



(c) : filter



(d) : remove



(e) : add





# 4. User AttributeError

```
settings.py 에서 AUTH_USER_MODEL 을 accounts.User 로 바꾸었는데 Auth.User을 사용하는 경우에 발생한다.

User = get_user_model() 사용
# models.py 
settings.AUTH_USER_MODEL 사용
```





# 5. related_name

```
user 와 like_users가 모두 User 를 참조하고 있기 때문에 역참조할때 명확하게 해주기 위해서
```





# 6. follow templates

(a) : person.followings.all

(b) : person.followers.all

(c) : user

(d) : person

(e) : person.pk



