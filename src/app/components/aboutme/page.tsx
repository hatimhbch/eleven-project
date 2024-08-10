import React from 'react'
import Image from 'next/image'
import profile from '@/app/components/images/profile.svg';
import './aboutme.css'

function Aboutme() {
  return (
    <div className='aboutme'>
        <h2>Free articles for everyone</h2>
        <h4>description</h4>
        <h5>I am Hatim, a developer. This page aims to provide important information for free. While other websites charge for their articles, we solve this problem by offering valuable content at no cost.</h5>
    </div>
  )
}

export default Aboutme