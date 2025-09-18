
import React from 'react';
import { ScrollView, View, Text, Image, ImageBackground } from 'react-native';

//create list of data

const headerCategories = [
  'Music',
  'Podcasts',
  'Audiobooks',
];

const recentSongs = [
  {
    title: 'Pop',
    subTitle: 'Playlist of Hai Trieu',
    backgroundImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UB7aQlZpPQXZwfzYgCL7loQhybujeoqQ4g&s',
  },

  {
    title: 'Viet Indie',
    subTitle: 'Playlist of Hai Trieu',
    backgroundImg: 'https://www.billboard.com/wp-content/uploads/media/vu-international-bb-2019-billboard-1548.jpg?w=942&h=628&crop=1',
  },

  {
    title: 'USUK',
    subTitle: 'Playlist of Hai Trieu',
    backgroundImg: 'https://i1.sndcdn.com/avatars-000506343846-nef7d0-t240x240.jpg',
  },

  {
    title: 'National',
    subTitle: 'Playlist of Hai Trieu',
    backgroundImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtw2DJ0oskpyR4_jeWyuFiAFpcdNboMqZL3A&s',
  },

  {
    title: '80s',
    subTitle: 'Playlist of Hai Trieu',
    backgroundImg: 'https://i.scdn.co/image/ab67616d0000b2737fcc19bf6b7de98ce0ab673f',
  },

  {
    title: 'Hiphop',
    subTitle: 'Playlist of Hai Trieu',
    backgroundImg: 'https://www.rollingstone.com/wp-content/uploads/2024/01/is-hip-hop-still-political.jpg?w=1581&h=1054&crop=1',
  },
];

const playlists = [
  'Hot Hits Canada',
  'Pop Favorites',
  'Hip-Hop Central',
  '80s Hard Rock',
  'All About Country',
  'Upbeat mix',
  'Daily Wellness',
  'Release Radar',
];

const audioBooks = [
  {
    title: 'Something Just Like This',
    author: 'Coldplay',
    note: 'Included in Premium',
    backgroundImg: 'https://i.ytimg.com/vi/_tNU6dpjIyM/maxresdefault.jpg',
  },
  {
    title: 'We are the world Piano',
    author: 'Hai Trieu',
    note: 'Included in Premium',
    backgroundImg: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-188094-AP850130010.jpg?w=1600&h=900&crop=1',
  },
  {
    title: 'May Be + Kiss The Rain + River Flows In You',
    author: 'Yiruma',
    note: 'Included in Premium',
    backgroundImg: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRKcosz3D9HlnH1hELuxbpbmTvoYMp3N9KMKSXCeOtFJryZ0P4QlQctmv4VffI__SP-0Vjbg0JNUBfW1OZH7e1KCFJW_RS8Z02OM1KnOg',
  },
];

 

const App = () => {  
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header Row */}
      <View style={styles.headerRow}> 
        <View style={[styles.btnHeader, styles.btnActive]}>
          <Text style={styles.btnText}>All</Text>
        </View>

        {headerCategories.map((t, i) => (
          <View key={i} style={styles.btnHeader}>
            <Text style={styles.btnText}>{t}</Text>
          </View>
        ))}
      </View>

        {/* Playlist row */}
        <View style={styles.playlistContainer}>
            {playlists.map((name, id) => (
              <View key={id} style={styles.playlistItem}>
                  <Image
                    source={{ uri: 'https://i.pinimg.com/736x/49/ac/10/49ac1015fbc6d7007e52d8ff4b49ee9f.jpg' }}
                    style={styles.playlistIcon}
                    resizeMode="contain"
                  />
                <Text style={styles.playlistText} numberOfLines={1}>{name}</Text>
              </View>
            ))}
        </View>
      
      {/* Recent */}
      <Text style={styles.title}>Recents</Text>
      <View style={styles.recentContainer}>
            {recentSongs.map((name, id) => (
              <View key={id} style={styles.recentItem}>
                  <ImageBackground
                    source={{ uri: name.backgroundImg }}
                    style={styles.recentBackgroundImg}
                    imageStyle={{ borderRadius: 10, backgroundColor: '#53a5e6' }}
                    resizeMode="cover"
                  />
                <Text style={styles.recentTitle} numberOfLines={1}>{name.title}</Text>
                <Text style={styles.recentSub} numberOfLines={1}>{name.subTitle}</Text>

              </View>
            ))}
      </View>  
      
      {/* Audio book */}
      <Text style={styles.title}>Audiobooks for Hai Trieu</Text>
      <View style={styles.audioBookContainer}>
            {audioBooks.map((name, id) => (
              <View key={id} style={styles.audioBookItem}>
                  <View style={styles.audioBookBackgroundImg}>
                    <ImageBackground
                      source={{ uri: name.backgroundImg }}
                      style={styles.recentBackgroundImg}
                      imageStyle={{ borderRadius: 10, backgroundColor: '#53a5e6' }}
                      resizeMode="cover"
                    />

                    <View style={styles.heartIconContainer}>
                      <Image 
                        source={{uri: 'https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png'}}
                        style={styles.heartIcon}
                        resizeMethod='contain'
                      />
                    </View>
                  </View>
                <View style={styles.audioBookText}>
                  <Text style={styles.audioBookNote} numberOfLines={1}>{name.note}</Text>                 
                  <Text style={styles.audioBookTitle} numberOfLines={1}>{name.title}</Text>
                  <Text style={styles.audioBookAuthor} numberOfLines={1}>{name.author}</Text>
                </View>
              </View>
            ))}
      </View>  




    </ScrollView>
  );
}

const styles = {
  container: {
    backgroundColor: '#ffffffff',
  },

  content: {
    padding: 24,
    marginTop: 50,
    gap: 18,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 6,
  },

  btnHeader: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 18,
    backgroundColor: '#2e2e35',

  },

  btnActive: {
    backgroundColor: '#64d266', 
  },

  btnText: {
    color: '#e7e7ea',
    fontWeight: '700',
  },

  playlistContainer : {
    marginTop: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  playlistItem: {
    width: '48%',
    backgroundColor: '#77778cff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12, 
    flexDirection: 'row',
    alignItems: 'center',
  },

  playlistIcon: {
    width: 30,
    height: 30,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  playlistText: {
    color: '#f2f2f5',
    fontWeight: '700',
    fontSize: 14,
    flex: 1,
  },

  title: {
    padding: 2,
    fontSize: 22,
    fontWeight: '800',
  },
  
  recentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  recentItem: {
    width: '30%',
    marginBottom: 16,
  },

  recentBackgroundImg: {
    width: '100%',
    height: 100,
    marginBottom: 6
  },

  recentTitle: {
    color: '#414142ff',
    fontWeight: '700',
    fontSize: 13,
  },

  recentSub: {
    color: '#797981ff',
    fontSize: 11
  },

  audioBookContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  audioBookItem: {
    width: '48%',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#2f2f33', 
    marginBottom: 14,
  },

  audioBookBackgroundImg: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  heartIconContainer: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },

  heartIcon: {
    width: 18,
    height: 18
  },

  audioBookText: {
    backgroundColor: '#3b3b42',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  audioBookNote: {
    color: '#39d353',
    fontWeight: '700',
    marginBottom: 4,
    fontSize: 13,
  },

  audioBookTitle: {
    color: '#f4f4f6',
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 2,
  },

  audioBookAuthor: {
    color: '#bdbdc4',
    fontSize: 12
  }

  

};

export default App;