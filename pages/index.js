import Head from 'next/head'
import React from 'react'
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css'

export default function index() {
  return (
    <>
      <Head>
        <title>welcome to next.js</title>
      </Head>

      <div className="text-center">
        <Image src="/catll.png" className="rounded" alt="test"  width={250} height={200} />
      </div>

      <div className="text-center">
        <button type="button" class="btn btn-success">
          Success
        </button>
      </div>
    </>
  );
}