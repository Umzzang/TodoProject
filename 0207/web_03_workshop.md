```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
  <!-- 1. Nav -->
  <nav class="nav bg-dark justify-content-between sticky-top">
    <a href="#">
      <img class="" src="images/logo.png" alt="Logo Image">
    </a>
    <ul class="ul mb-0 d-flex align-items-center">
      <li class="m-3"><a class="text-white text-decoration-none" href="#">Home</a></li>
      <li class="m-3"><a class="text-white text-decoration-none" href="#">Community</a></li>
      <li class="m-3"><a class="text-white text-decoration-none" href="#">Login</a></li>
    </ul>
  </nav>



  <!-- 2. Header -->
  <header class="d-flex align-items-center justify-content-center flex-column">
    <div class=" text-white text-center fw-bold display-1">Cinema</div>
    <div class=" text-white text-center fw-bold display-1">Community</div>
    <a class="mt-3 btn btn-primary" href="#">Let's Go</a>
  </header>
    
    
  <!-- 3. Section -->
  <section class="d-flex flex-column justify-items-center align-items-center">
    <h2>Used Skills</h2>
    <article class="d-flex">
      <div class="m-4 d-flex flex-column align-items-center">
        <img src="images/web.png" alt="Web Image">
        <p>Web</p>
      </div>
      <div class="m-4 d-flex flex-column align-items-center">
        <img src="images/html5.png" alt="HTML5 Image">
        <p>HTML5</p>
      </div>
      <div class="m-4 d-flex flex-column align-items-center">
        <img src="images/css3.png" alt="CSS3 Image">
        <p>CSS3</p>
      </div>
    </article>
  </section>


  <!-- 4. Footer -->
  <footer class="fixed-bottom d-flex bg-primary justify-content-center align-items-center">
    <p class="mb-0 text-white">HTML & CSS project. Created by ?????????</p>
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>
```



```css
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR');

/* ????????? ????????? ???????????? ?????????. */
body {
  height: 3000px;
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
}

nav {
  height: 80px;
}

nav img {
  height: 80px;
}

header {
  height: 700px;
  background-image: url('images/header.jpg');
  background-size: cover;
}

section > h2 {
  font-size: 3rem;
}

section img {
  width: 300px;
}

footer {
  height: 60px;
}
```

![????????????(964)](web_03_workshop.assets/????????????(964).png)