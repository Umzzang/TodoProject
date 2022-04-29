# Django REST Framework



## 1. T/F

T

F  - GET,POST,DELETE,PUT 등 다양하다.

F - 마지막 슬래시 불필요



## 2. HTTP status code

200 : ok

400 : Bad Request

401 : Unauthorized

403 : Forbidden

404 : Not Found

500 : Internal Server Error



## 3. 

```python
# serializers.py
from .models import Student
from rest_framework import serializers


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'
```



## 4.

>Serializers allow complex data such as querysets and model instances to be converted to native Python datatypes that can then be easily rendered into `JSON`, `XML` or other content types.



쿼리셋이나 모델 인스턴스같은 복잡한 데이터를 json, xml과 같은 타입으로 변화가 쉬운 파이썬 데이터타입으로 변환시켜준다.