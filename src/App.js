import React from 'react'
import {StripeProvider, Elements} from 'react-stripe-elements'
import Shop from './Shop'

const App = () => {
  return (
    <StripeProvider apiKey="pk_test_51MX3W9Ld47ZBO7S2uO88500MOLuvL91GrUkYhS2kSX7P3wh1GeITK9WrkXfiToiHt9lO0YlP8ThxCZiFLZQ7VDdJ00w7QsLO1K">
      <Elements>
        <Shop/>
      </Elements>
    </StripeProvider>
  )
}

export default App
