```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="semantic.css">
  <title>Layout Practice</title>
</head>
<body>
  <header>
    <h1 class="header">header</h1>
  </header>
  <nav>
    <h2 class="nav">nav</h2>
  </nav>
  <div class="clearfix">
    <section class="section">
      <h2>section</h2>
      <article class="article1">
        <h3>article1</h3>
      </article>
      <article class="article2">
        <h3>article2</h3>
      </article>
    </section>
    <aside class="aside">
      <h2>aside</h2>
    </aside>
  </div>  
  <footer class="footer">
    <h2>footer</h2>
  </footer>
</body>
</html>

```



```css
body {
  font-family: Arial;
  width: 800px;
}

section {
  float: left;
  margin-left: 4px;
}

aside { 
  float: right;
  margin-right: 4px;
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

/* 여기서부터 작성하세요. */
.header{
  border: 1px solid black;
  border-radius: 4px;
  background-color: gray;
  margin:4px;
  padding: 4px;
  text-align: center;
  height: 60px;
  line-height: 60px;
}

.nav{
  margin: 4px;
  padding: 4px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: grey;
  height: 50px;
}


.section{
  width: 490px;
  height: 300px;
  border-radius: 4px;
  background-color: gray;
  border: 1px solid black;
  padding: 4px;
 
}
.aside{
  width: 280px;
  height: 300px;
  border-radius: 4px;
  background-color: gray;
  border: 1px solid black;
  padding:4px;
}
.footer{
  border-radius: 4px;
  background-color: gray;
  border: 1px solid black;
  margin:4px;
  padding: 4px;
}
.article1{
  background-color: white;
  height: 50px;
  border-radius: 4px;
  border: 1px solid black;
  margin-bottom: 4px;
  line-height:50px;
}
.article2{
  background-color: white;
  height: 50px;
  border-radius: 4px;
  border: 1px solid black;
  line-height:50px;
}
h3{
  margin:0px
}
```

