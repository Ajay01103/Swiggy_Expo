import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'

const Carouse = () => {
    const images = [
        "https://res.cloudinary.com/dmj8jb6qh/image/upload/v1688637730/zom_a8kqu9.png",
        "https://b.zmtcdn.com/data/pictures/chains/7/147/ed4eb483c1254b6c6198dff3dceac86e_o2_featured_v2.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/8/310078/749216f498eb2ed21ffd317f4bdc8a1d_o2_featured_v2.jpg",
        "https://b.zmtcdn.com/data/pictures/4/20497454/7348cf35be9b2fb33c23685c58f74465_o2_featured_v2.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/7/18619067/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg",
      ];

  return (
    <View style={{ marginTop: 8}}>
      <SliderBox
      images={images}
      autoplay
      autoplayInterval={4000}
      circleLoop
      dotColor="#90A4AE"
      inactiveDotColor="#FFF"
      imageComponentStyle={{
        borderRadius:6,
        width:"94%"
      }}
      />
    </View>
  )
}

export default Carouse

const styles = StyleSheet.create({})