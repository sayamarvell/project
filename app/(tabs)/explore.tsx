import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function ProfileScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
        ></IconSymbol>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Profil Saya</ThemedText>
      </ThemedView>
      <ThemedText>Selamat datang di profil saya!</ThemedText>
      
      <Collapsible title="Tentang Saya">
        <ThemedText>
          seorang anak biasa yang terlalu biasa
        </ThemedText>
        <ThemedText>
          dan terlahir di keluarga biasa dan sangat biasa
        </ThemedText>
      </Collapsible>
      <Collapsible title="Keahlian">
        <ThemedText>
          Saya memiliki keahlian dalam:
        </ThemedText>
        <ThemedText type="defaultSemiBold">bermain catur, rebahan, diam</ThemedText>
        <ThemedText>
          Dan saya juga berpengalaman di python.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Proyek Terbaru">
        <ThemedText>
          Beberapa proyek yang telah saya kerjakan antara lain:
        </ThemedText>
        <ThemedText type="defaultSemiBold">membuat game di python, membuat perpustakaan sederhana di python dll</ThemedText>
      </Collapsible>
      <Collapsible title="Hobi">
        <ThemedText type="defaultSemiBold">Bermain catur, bermain game, jalan jalan</ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});