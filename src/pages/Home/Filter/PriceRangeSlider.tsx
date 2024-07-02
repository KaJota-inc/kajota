import React, { useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Slider from '@react-native-community/slider';

import { COLORS, IMAGES, SIZES } from '@constants/Colors';

const PriceRangeSlider = () => {
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(100);
  const [activeKnob, setActiveKnob] = useState<number>(0);
  const [tempAZIndex, setTempAZIndex] = useState<number>(1);
  const [tempBZIndex, setTempBZIndex] = useState<number>(-1);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Price Range</Text>
      <View style={styles.r1}>
        <TouchableOpacity
          style={[styles.r1a, activeKnob == 0 && { borderColor: COLORS.light.price }]}
          onPress={() => {
            setActiveKnob(0);
            setTempAZIndex(1);
            setTempBZIndex(-1);
          }}
        >
          <Text style={styles.r1t}>Min: {minValue}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.r1b, activeKnob == 1 && { borderColor: COLORS.light.price }]}
          onPress={() => {
            setActiveKnob(1);
            setTempAZIndex(-1);
            setTempBZIndex(1);
          }}
        >
          <Text style={styles.r1t}>Max: {maxValue}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          maximumValue={50}
          minimumTrackTintColor={COLORS.light.progressBg}
          minimumValue={0}
          step={1}
          style={[
            styles.sliderA,
            {
              zIndex: tempAZIndex,
            },
          ]}
          upperLimit={50 - 2}
          onValueChange={value => {
            if (value <= maxValue) setMinValue(value);
          }}
          // minimumTrackTintColor={activeKnob == 0 ? COLORS.light.text : "transparent"}
          value={minValue}
          maximumTrackTintColor={COLORS.light.text}
          // thumbTintColor={COLORS.light.catBlue}
          // tapToSeek={true}
          // thumbImage={{uri:IMAGES.RangeKnob, height:20, width:20}}
          // thumbImage={IMAGES.RangeKnob}
        />
        <Slider
          lowerLimit={50}
          maximumValue={100}
          minimumValue={50}
          step={1}
          style={[
            styles.sliderB,
            {
              zIndex: tempBZIndex,
            },
          ]}
          value={maxValue}
          onValueChange={value => {
            if (value >= minValue) setMaxValue(value);
          }}
          // minimumTrackTintColor={activeKnob == 1 ? COLORS.light.text : "transparent"}
          minimumTrackTintColor={COLORS.light.text}
          // minimumTrackTintColor={"transparent"}
          // maximumTrackTintColor={activeKnob == 1 ? COLORS.light.progressBg : "transparent"}
          maximumTrackTintColor={COLORS.light.progressBg}
          // thumbTintColor="#1fb28a"
          // tapToSeek={true}
          // thumbImage={IMAGES.RangeKnob}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 18,
    // marginBottom: 10,
  },
  sliderContainer: {
    position: 'relative',
    height: 50,
    justifyContent: 'center',
    // borderWidth: 1,
    marginLeft: '3%',
    width: '90%',
  },
  sliderA: {
    position: 'absolute',
    width: Platform.OS == 'ios' ? '52%' : '59.5%',
    height: 40,
    // top:40
    // borderWidth: 1,
  },
  sliderB: {
    position: 'absolute',
    width: Platform.OS == 'ios' ? '52%' : '58%',
    height: 40,
    left: '50%',
    // zIndex: -1
  },
  r1: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 10,
    // borderWidth: 1,
    // marginLeft: "3%",
  },
  r1a: {
    borderWidth: 0.8,
    padding: 5,
    borderColor: COLORS.light.backgroundGray,
    borderRadius: 5,
    backgroundColor: COLORS.light.backgroundGray,
  },
  r1b: {
    borderWidth: 0.8,
    padding: 5,
    borderColor: COLORS.light.backgroundGray,
    borderRadius: 5,
    backgroundColor: COLORS.light.backgroundGray,
    // alignSelf: "flex-end"
  },
  r1t: {
    color: COLORS.light.textGray,
    fontWeight: '500',
    fontSize: SIZES.sizeSixB,
  },
});

export default PriceRangeSlider;

// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Slider from '@react-native-community/slider';
//
// const PriceRangeSlider = () => {
//     const [minValue, setMinValue] = useState(20);
//     const [maxValue, setMaxValue] = useState(80);
//
//     const handleMinChange = (value) => {
//         if (value <= maxValue) {
//             setMinValue(value);
//         }
//     };
//
//     const handleMaxChange = (value) => {
//         if (value >= minValue) {
//             setMaxValue(value);
//         }
//     };
//
//     return (
//         <View style={styles.container}>
//             <Text style={styles.label}>
//                 Price Range: ${minValue} - ${maxValue}
//             </Text>
//             <View style={styles.sliderContainer}>
//                 <Slider
//                     style={styles.slider}
//                     minimumValue={0}
//                     maximumValue={100}
//                     step={1}
//                     value={minValue}
//                     onValueChange={handleMinChange}
//                     minimumTrackTintColor="transparent"
//                     maximumTrackTintColor="transparent"
//                     thumbTintColor="#1fb28a"
//                 />
//                 <Slider
//                     style={styles.slider}
//                     minimumValue={0}
//                     maximumValue={100}
//                     step={1}
//                     value={maxValue}
//                     onValueChange={handleMaxChange}
//                     minimumTrackTintColor="transparent"
//                     maximumTrackTintColor="transparent"
//                     thumbTintColor="#1fb28a"
//                 />
//                 <View
//                     style={[
//                         styles.track,
//                         {
//                             left: `${(minValue / 100) * 100}%`,
//                             width: `${((maxValue - minValue) / 100) * 100}%`,
//                         },
//                     ]}
//                 />
//             </View>
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     container: {
//         padding: 20,
//         width: '100%',
//     },
//     label: {
//         fontSize: 18,
//         marginBottom: 10,
//     },
//     sliderContainer: {
//         position: 'relative',
//         height: 40,
//         justifyContent: 'center',
//     },
//     slider: {
//         position: 'absolute',
//         width: '100%',
//         height: 40,
//     },
//     track: {
//         position: 'absolute',
//         height: 4,
//         backgroundColor: '#1fb28a',
//         zIndex: -1,
//     },
// });
//
// export default PriceRangeSlider;

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import Slider from '@react-native-community/slider';
//
// const PriceRangeSlider = () => {
//     const [range, setRange] = useState({ min: 20, max: 80 });
//     const screenWidth = Dimensions.get('window').width;
//
//     const handleValueChange = (value) => {
//         const midpoint = 50;
//         const newRange = {
//             min: Math.max(0, midpoint - value),
//             max: Math.min(100, midpoint + value),
//         };
//         setRange(newRange);
//     };
//
//     return (
//         <View style={styles.container}>
//             <Text style={styles.label}>
//                 Price Range: ${range.min} - ${range.max}
//             </Text>
//             <View style={styles.sliderContainer}>
//                 <Slider
//                     style={styles.slider}
//                     minimumValue={0}
//                     maximumValue={50}
//                     step={1}
//                     value={(range.max - range.min) / 2}
//                     onValueChange={handleValueChange}
//                     minimumTrackTintColor="#1fb28a"
//                     maximumTrackTintColor="#d3d3d3"
//                     thumbTintColor="#1fb28a"
//                 />
//                 <View
//                     style={[
//                         styles.track,
//                         {
//                             left: `${range.min}%`,
//                             width: `${range.max - range.min}%`,
//                         },
//                     ]}
//                 />
//                 <View
//                     style={[
//                         styles.thumb,
//                         {
//                             left: `${range.min}%`,
//                         },
//                     ]}
//                 />
//                 <View
//                     style={[
//                         styles.thumb,
//                         {
//                             left: `${range.max}%`,
//                         },
//                     ]}
//                 />
//             </View>
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     container: {
//         padding: 20,
//     },
//     label: {
//         fontSize: 18,
//         marginBottom: 10,
//     },
//     sliderContainer: {
//         position: 'relative',
//         height: 40,
//         justifyContent: 'center',
//     },
//     slider: {
//         position: 'absolute',
//         width: '100%',
//         height: 40,
//     },
//     track: {
//         position: 'absolute',
//         height: 4,
//         backgroundColor: '#1fb28a',
//         zIndex: -1,
//     },
//     thumb: {
//         position: 'absolute',
//         height: 20,
//         width: 20,
//         borderRadius: 10,
//         backgroundColor: '#1fb28a',
//     },
// });
//
// export default PriceRangeSlider;
//
