<nav class="navbar navbar-expand-lg navbar-light bg-secondary">
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
     aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto d-flex align-items-center">
        <li class="nav-item active">
          <img src="{{foto}}" alt="Imagem User "
           width="50px" height="50px" class="img rounded-circle">
          <li>
            <li class="nav-item pl-3">
              <a class="m-0 font-weight-bold text-white fs-16">Ola, {{nome}}</a>
            </li>
            <li class="nav-item pl-3">
             <a href="">
              <p class="text-white fs-16 m-0"><i class="fa fa-pencil-square-o"
                aria-hidden="true"></i></p>
             </a>
            </li>
          </ul>
              <ul class="navbar-nav ml-auto d-flex align-items-center">
                <li class="nav-item pl-3">
                  <a (click)='sair()' class="m-0 font-weight-bold text-white fs-16">Sair <i class="fa fa-sign-out" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>

            </div>
          </nav>
