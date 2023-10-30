import { useLottie } from 'lottie-react'
import { Animation } from './style'
import smartphoneJSON from '../../assets/LottieJson/smartphone-animation.json'

const AnimationSmartphone = () => {
  const options = {
    animationData: smartphoneJSON,
    loop: true
  }
  const { View } = useLottie(options)

  return <Animation>{View}</Animation>
}

export default AnimationSmartphone
