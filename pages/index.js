import React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';

export default function index() {
  return (
    <>

    <Head><title>Meteor</title></Head>

    <div className="text-center">
      <Image src="/1.jpg" className="rounded" alt="1" width={250} height={400}/>
    </div>


    <div className="text-center"><button type="button" className="btn btn-success">Welcome</button> </div>


    </>
  )
}
