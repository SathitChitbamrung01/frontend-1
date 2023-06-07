import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
export default function index() {
  return (
    <>

    <Head><title>Meteor</title></Head>

<header>
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand">Meteor</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " href=".">Home     <i class="bi bi-house-heart"></i> </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="about_us">About us   <i class="bi bi-file-earmark-person"></i></Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Service
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="song">Song   <i class="bi bi-file-music"></i></a></li>
            <li><a className="dropdown-item" href="Youtuber">Youtuber     <i class="bi bi-person-square"></i></a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#Contact'>Contact      <i className="bi bi-telephone" /></a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</header>

<main>
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={2000}>
      <img src="Center Game.png" className="rounded" alt="..." width={1550} height={697} />
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src="Youtuber.png" className="d-block w-100" alt="..." width={1550} height={697} />
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src="Song.png" className="d-block w-100" alt="..." width={1550} height={697} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

<br/>
<br/>
<br/>
<center>
<div>
  <p /><h4><b>เว็บไซต์ที่มากไปด้วย Youtuber ที่จะมาให้เสียงหัวเราะ ความสนุก เพลิดเพลินและสนุกสนาน </b></h4><p />
  <p /><h4><b>อีกทั้งยังมี Channel Song หรือก็คือ ช่องที่มากไปด้วยเพลงประเภทต่างๆ ที่จะทำให้เราได้เพลิดเพลินไปกับเสียงเพลง </b></h4><p />
</div>
</center>



</main>

<footer>
<section id="Contact" class="py-5"> 
            <div class="container">
                <footer class="py-3 my-4">
                  <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><Link href="." class="nav-link px-2 text-muted"><i class="bi bi-house-heart-fill"></i> <b>Home</b></Link></li>
                    <li class="nav-item"><a href="https://web.facebook.com/Teerapong2545" class="nav-link px-2 text-muted"><i class="bi bi-facebook"></i> <b>Facebook</b></a></li>
                    <li class="nav-item"><a href="https://www.instagram.com/n_foolmoon/" class="nav-link px-2 text-muted"><i class="bi bi-instagram"></i> <b>Instagram</b></a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"><i class="bi bi-telephone"></i> <b>097-996-2835</b></a></li>
                  </ul>
                  <p class="text-center text-muted">&copy; <b>2022 Center Game Company, Inc</b></p>
                </footer>
              </div>
</section>
</footer>

    </>
  )
}
