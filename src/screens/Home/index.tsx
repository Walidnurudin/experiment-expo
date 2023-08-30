import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, useColorScheme, Appearance, TouchableOpacity } from 'react-native';
import ReadMore from 'react-native-read-more-text';

export default function index() {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());


  let containerStyle = colorScheme === 'dark' ? {backgroundColor: 'yellow'} : {backgroundColor: 'white'};

  const renderTruncatedFooter = (handlePress: any) => {
    return (
      <Text style={{color: "red", marginTop: 5}} onPress={handlePress}>
        Read more
      </Text>
    );
  }

  const renderRevealedFooter = (handlePress: any) => {
    return (
      <Text style={{color: "red", marginTop: 5}} onPress={handlePress}>
        Show less
      </Text>
    );
  }

  const handleTextReady = () => {
    // ...
  }

  const handleToggle = () => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

  return (
    <View style={[styles.container, containerStyle]}>
    <TouchableOpacity onPress={handleToggle}>
      <Text>Toggle</Text>
    </TouchableOpacity>
      <Text>Tester {colorScheme}</Text>
      <Text>Open up App.tsx to start wokorking on your app! tes ok</Text>

      <View>
      <ReadMore
              numberOfLines={3}
              renderTruncatedFooter={renderTruncatedFooter}
              renderRevealedFooter={renderRevealedFooter}
              onReady={handleTextReady}>
              <Text style={styles.cardText}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, corrupti non. Expedita consectetur odio ut quam fugiat voluptate sit perspiciatis doloremque, veritatis ipsa, omnis praesentium dolores id? Dolor nesciunt corporis ipsam officiis, odio commodi, deserunt ea nulla temporibus minus aliquid laudantium? Repellat suscipit sapiente omnis repellendus eaque. Placeat facere hic quia. Repudiandae magnam optio cumque voluptatum consequuntur! Non explicabo laborum quibusdam eveniet, repellendus rem odio libero, inventore veritatis neque molestias, provident qui eaque est vitae! Sequi nulla corrupti nam eos nisi modi voluptates doloremque officia tempore necessitatibus, sit non facilis alias obcaecati officiis soluta possimus ut. Quos placeat aspernatur vero iste in ullam nihil aperiam libero dignissimos atque quidem quo distinctio nemo accusamus voluptatibus dolores nostrum, quae reiciendis hic soluta ipsam, aliquam recusandae porro. Error voluptas explicabo, eius vitae cumque modi rem saepe nisi, quam fugit commodi quae distinctio blanditiis consectetur alias recusandae laboriosam dolore reiciendis! Deserunt numquam fugiat asperiores nemo eligendi iusto provident doloribus animi quo voluptatem tempora aliquid incidunt, reiciendis, quos perspiciatis debitis quaerat pariatur! Quod, aliquid placeat! Ullam, quaerat molestias pariatur minima, eos reprehenderit delectus exercitationem, iure deleniti aliquid necessitatibus ipsam magnam earum repellat! Maiores velit quibusdam iste optio ipsum laboriosam labore doloremque distinctio pariatur ea et mollitia, obcaecati eveniet expedita minima, vel totam! Expedita porro excepturi, natus, ducimus ex id optio voluptatem earum cum praesentium doloribus quibusdam deserunt, fugit nostrum voluptatibus quod unde ratione libero dolore ipsam asperiores! Eveniet voluptates sint earum dicta, repudiandae, commodi adipisci sapiente aspernatur ea architecto libero debitis culpa saepe modi, officiis distinctio eius accusamus nostrum. Nisi tenetur quo eius modi excepturi a earum quae impedit dolor vitae nihil tempore fuga dicta quas ducimus nesciunt consectetur, iusto, fugiat enim nam, omnis cum id? Facilis quidem sapiente blanditiis, eos eveniet dolore ducimus consectetur voluptate optio amet aliquid tempore odit nulla ex fugiat deserunt voluptatem modi itaque rem assumenda totam laboriosam similique inventore veniam! Dolores deleniti eius, dicta veniam eligendi esse architecto reprehenderit! Expedita vero hic accusantium nesciunt facilis? Vel labore, perferendis saepe adipisci, repudiandae ipsum minus corporis repellendus quae culpa quia rerum eveniet odio aliquam error. Quasi dolores iure tempore odit eum. Obcaecati officia minima id, sit adipisci doloremque laboriosam? Voluptatum rerum facilis a eveniet adipisci error qui explicabo, consectetur reiciendis placeat fuga aperiam unde praesentium assumenda, voluptate tempora consequuntur quae eum labore non, quasi voluptates vero odio! Quas, vel iusto. Quibusdam culpa quae cupiditate maiores dicta repudiandae vitae in natus? Inventore in ipsam fugiat temporibus quasi excepturi modi, labore quo quod explicabo aut corporis esse dignissimos a omnis saepe ea eligendi molestiae obcaecati error nemo sapiente quisquam, aperiam incidunt? Praesentium nesciunt voluptatum, voluptatibus voluptatem neque laborum eaque doloribus minima facere, deleniti ratione alias! Maxime quasi sint sequi sunt nobis culpa tempora esse, distinctio amet debitis atque itaque! Quibusdam dolorum dolor quaerat, voluptatem corporis itaque inventore nisi architecto placeat, maiores optio repellat asperiores neque quis! Sed, odit maiores aliquam dolores optio quo ducimus officia vitae temporibus quia impedit ex reiciendis perspiciatis eum labore facere aut! Nobis molestias, tempore veritatis nam nisi ab illo.
              </Text>
            </ReadMore>  
      </View>      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {

  }
});
