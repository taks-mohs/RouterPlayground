import { StyleSheet, Text, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import LinkButton from '../../components/LinkButton';
import myColors from '../../constants/colorSheet';

const data1 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

const data2 = [
  { quarter: 1, earnings: 11000 },
  { quarter: 2, earnings: 13500 },
  { quarter: 3, earnings: 16250 },
  { quarter: 4, earnings: 12000 }
];

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
      <View style={styles.container}>
        <VictoryChart width={350} theme={VictoryTheme.clean}>
          <VictoryBar data={data1} x="quarter" y="earnings"
            animate={{ duration: 2000, easing: "sinInOut", data: {data2} }}
          />
        </VictoryChart>
      </View>
      <LinkButton page="/" title="Go Back Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
