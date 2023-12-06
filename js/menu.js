window.onload = function(){
    document.getElementById('menu').innerHTML=
    `
    <nav class="navbar navbar-expand-lg navbar-light bg-light menu">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                  <img style = "width: 8%; margin-right: 15px;" src = "images/logo.png"></img>
					<li class="nav-item"><a class="nav-link" href="index.html">Главная</a></li>
                    <li class="nav-item"><a class="nav-link" href="search.html">Поиск по объявлениям</a></li>
                    <li class="nav-item"><a class="nav-link" href="sign up.html">Регистрация</a></li>
					<li class="nav-item"><a class="nav-link" href="sign in.html">Личный кабинет</a></li>
					<li class="nav-item"><a class="nav-link" href="add announcement.html">Добавить объявление</a></li>
					
                </ul>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Поиск</button>
                </form>
              </div>
            </div>
        </nav>
    `;
}