# Django Authentication System



## 1. User Model BooleanField

```python
is_staff = models.BooleanField(
        _("staff status"),
        default=False,
        help_text=_("Designates whether the user can log into this admin site."),
    )
is_active = models.BooleanField(
        _("active"),
        default=True,
        help_text=_(
            "Designates whether this user should be treated as active. "
            "Unselect this instead of deleting accounts."
        ),
    )
is_superuser = models.BooleanField(
        _("superuser status"),
        default=False,
        help_text=_(
            "Designates that this user has all permissions without "
            "explicitly assigning them."
        ),
    )
```



## 2. username max length

```python
 username = models.CharField(
        _("username"),
        max_length=150,
        unique=True,
        help_text=_(
            "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only."
        ),
        validators=[username_validator],
        error_messages={
            "unique": _("A user with that username already exists."),
        },
    )
```

=>150자





## 3. login validation

```python
@property
def is_authenticated(self):
        return False
```





## 4. Login 기능 구현

(a) : AuthenticationForm

(b) : login

(c) : form.get_user()





## 5. who are you?

```python
class AnonymousUser:
    id = None
    pk = None
    username = ""
    is_staff = False
    is_active = False
    is_superuser = False
    _groups = EmptyManager(Group)
    _user_permissions = EmptyManager(Permission)
```





## 6. 암호화 알고리즘

PBKDF2 알고리즘 사용

with a SHA256 hash







## 7. Logout  기능 구현

import 해서 가져온 함수명과 작성한 함수명이 같기 때문에 문제가 발생함.

import 해옴 logout 함수를 as 를 써서 다른 명으로 쓸 수 있게 변환