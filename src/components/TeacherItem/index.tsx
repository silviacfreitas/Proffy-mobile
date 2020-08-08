import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4'}} 
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Diego Fernandes</Text>
          <Text style={styles.subject}>Química</Text>
        </View>
      </View>

      <Text style={styles.bio}>
      CTO at @Rocketseat. 
      {'\n'}
      Passionate about education and changing people's lives through programming.
      {'\n'}{'\n'}
      Enthusiast of the best web & mobile development technologies.
      {'\n'}
      More than 200,000 people have already undergone one of my trainings.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <RectButton style={[styles.favoriteButton, styles.favorited]}>
          {/* <Image source={heartOutlineIcon} /> */}
          <Image source={unfavoriteIcon} />
        </RectButton>

        <RectButton style={styles.contactButton}>
          <Image source={whatsappIcon} />
          <Text style={styles.contactButtonText}>Entrar em contato</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default TeacherItem;