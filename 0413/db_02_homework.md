# Django Model Relationship



## 1. 1:N True or False



1\)   T, 참조테이블

2\)   T , 역참조

3\)   T

4\)   T



## 2. ForeignKey column name

answer_id,  articles_comment





## 3. 1:N model manager

Question.comment_set.all()



## 4. next parameter

1) 405 method not allowed

   => 다시 로그인되서 redirect 되는것이 get 요청이므로

2) 

```python
@require_POST
def delete(request, article_pk):
    if reqeust.user.is_authenticated:
        article = get_object_or_404(Article, pk=article_pk)
        article.delete()
        return redirect('articles:index')
    else:
        return redirect('articles:index')
```

