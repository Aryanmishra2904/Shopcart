import React from 'react'
import { Button } from '@/components/ui/button'
import Container from '@/components/Container'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


const Home  = () => {
  return (
    <Container className='bg-shop-light-pink'>
      <Header></Header>
      <h2 className='text-xl font-semibold'>Home</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores iusto nobis aspernatur aliquam sunt  dignissimos eligendi! Accusamus maiores ipsum nesciunt vitae inventore recusandae repudiandae maxime numquam repellendus error similique, dolorum quam repellat tenetur quae voluptatum eos eius expedita sunt quisquam consectetur culpa iure. Adipisci facere rerum ex sint!
      </p>
      <Button variant="ghost">Click me</Button>
      <Footer></Footer>
    </Container>
  )
}

export default Home 