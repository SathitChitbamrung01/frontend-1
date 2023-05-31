import React from 'react'
import Head from 'next/head'

import Image from 'next/image';

export default function index() {
  return (
    <>

    <Head><title>Meteor</title></Head>

<header>
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Meteor</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About us</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Service
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">contact</a>
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
      <img src="P1.jpg" className="d-block w-100" alt="..." width={1550} height={697} />
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src="P2.jpg" className="d-block w-100" alt="..." width={1550} height={697} />
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
<center>
<div className="container marketing">
  <div className="row">
    <div className="col-lg-4">
      <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
      <h2 className="fw-normal">عنوان</h2>
      <p>تذكر دائماً أن الحاسوب لا يمتلك ذكاءً، ولكنه يكتسب الذكاء الاصطناعي من خلال ثلاثة عناصر وظيفية رئيسة، هي: القدرة على التحليل، والقدرة على التأليف، والاستدلال المنطقي.</p>
      <p><a className="btn btn-secondary" href="#">عرض التفاصيل</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
      <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
      <h2 className="fw-normal">عنوان آخر</h2>
      <p>إذا أردنا استخدام الحاسوب الذكي في معالجة اللغة العربية فإننا نجد أنفسنا أمام تحدٍّ كبير، خاصة وأن لغتنا تمتاز بتماسك منظوماتها وتداخلها، ومع ذلك فإن الذكاء الاصطناعي يمكّننا من الحصول على أربعة أنواع من المعالجة، هي: المعالجة الصوتية، والمعالجة الصرفية، والمعالجة النحوية، والمعالجة الدلالية.</p>
      <p><a className="btn btn-secondary" href="#">عرض التفاصيل</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
      <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
      <h2 className="fw-normal">عنوان ثالث لتأكيد المعلومة</h2>
      <p>بفضل بحوث الذكاء الاصطناعي وتقنياته استطعنا الانتقال من مرحلة التعامل مع الفيزيائي إلى مرحلة التعامل مع المنطقي، وقد انعكس هذا الانتقال بصورة إيجابية على الكيفية التي تتعامل بها الشعوب مع لغاتها الحيَّة، وهذا يعني أنه يجب أن ينعكس بصورة إيجابية على كيفية تعاملنا مع لغتنا العربية.</p>
      <p><a className="btn btn-secondary" href="#">عرض التفاصيل</a></p>
    </div>{/* /.col-lg-4 */}
  </div>{/* /.row */}</div>
  </center>


</main>

<footer>
<div>
  <div className="container">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
      </ul>
      <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
    </footer>
  </div>
</div>
</footer>
    </>
  )
}
