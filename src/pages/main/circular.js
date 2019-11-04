import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

/**
* Function that calculates rotation of the semicircle for firstProgressLayer
* ( when percent is less than equal to 50 ) or for the secondProgressLayer
* when percent is greater than 50.
**/
rotateByStyle = (percent, base_degrees, clockwise) => {
  let rotateBy = base_degrees;
  if(clockwise){
      rotateBy = base_degrees + (percent * 3.6);
  }else{
    //anti clockwise progress
    rotateBy = base_degrees - (percent * 3.6);
  }
  return {
    transform:[{rotateZ: `${rotateBy}deg`}]
  };
}

renderThirdLayer = (percent, commonStyles, ringColorStyle, ringBgColorStyle, clockwise,
  bgRingWidth, progressRingWidth, innerRingStyle, startDegrees) => {
  let rotation = 45 + startDegrees;
  let offsetLayerRotation = -135 + startDegrees;
  if(!clockwise){
    rotation += 180;
    offsetLayerRotation += 180;
  }
  if(percent > 50){
    /**
    * Third layer circles default rotation is kept 45 degrees for clockwise rotation, so by default it occupies the right half semicircle.
    * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
    * before passing to the rotateByStyle function
    **/

    return <View style={[styles.secondProgressLayer,rotateByStyle((percent - 50), rotation, clockwise),
       commonStyles, ringColorStyle, {borderWidth: progressRingWidth} ]}></View>
  }else{
    return <View style={[styles.offsetLayer, innerRingStyle, ringBgColorStyle,
       {transform:[{rotateZ: `${offsetLayerRotation}deg`}], borderWidth: bgRingWidth}]}></View>
  }
}

const CircularProgress = ({percent, radius, bgRingWidth, progressRingWidth, ringColor, ringBgColor,
  textFontSize, textFontWeight, clockwise, bgColor, startDegrees}) => {
  const commonStyles = {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius
  };

  /**
  * Calculate radius for base layer and offset layer.
  * If progressRingWidth == bgRingWidth, innerRadius is equal to radius
  **/
  const widthDiff = progressRingWidth - bgRingWidth;
  const innerRadius = (radius - progressRingWidth) + bgRingWidth + widthDiff/2;

  const innerRingStyle = {
    width: innerRadius * 2,
    height: innerRadius * 2,
    borderRadius: innerRadius
  };

  const ringColorStyle = {
    borderRightColor: ringColor,
    borderTopColor: ringColor,
  };

  const ringBgColorStyle = {
    borderRightColor: ringBgColor,
    borderTopColor: ringBgColor,
  };

  const thickOffsetRingStyle = {
    borderRightColor: bgColor,
    borderTopColor: bgColor,
  };


  let rotation = -135 + startDegrees;
  /**
  * If we want our ring progress to be displayed in anti-clockwise direction
  **/
  if(!clockwise){
    rotation += 180;
  }
  let firstProgressLayerStyle;
  /* when ther ring's border widths are different and percent is less than 50, then we need an offsetLayer
  * before the original offser layer to avoid ring color of the thick portion to be visible in the background.
  */
  let displayThickOffsetLayer = false;
  if(percent > 50){
      firstProgressLayerStyle = rotateByStyle(50, rotation, clockwise);
  }else {
    firstProgressLayerStyle = rotateByStyle(percent, rotation, clockwise);
    if(progressRingWidth > bgRingWidth){
      displayThickOffsetLayer = true;
    }
  }

  let offsetLayerRotation = -135 + startDegrees;
  if(!clockwise){
    offsetLayerRotation += 180;
  }

  return(
    <View style={[styles.container, {width: radius * 2, height: radius * 2}]}>
      <View style={[styles.baselayer, innerRingStyle, {borderColor: ringBgColor, borderWidth: bgRingWidth}]}>
      </View>
      <View style={[styles.firstProgressLayer, firstProgressLayerStyle,
         commonStyles, ringColorStyle, {borderWidth: progressRingWidth}]}>
      </View>
      {
        displayThickOffsetLayer && <View style={[styles.offsetLayer, commonStyles, thickOffsetRingStyle,
           {transform:[{rotateZ: `${offsetLayerRotation}deg`}], borderWidth: progressRingWidth}]}></View>
      }
      {
        renderThirdLayer(percent, commonStyles, ringColorStyle, ringBgColorStyle, clockwise,
          bgRingWidth, progressRingWidth, innerRingStyle, startDegrees)
      }
      <Text style={[styles.display, {fontSize: textFontSize,fontWeight: textFontWeight}]}>{percent}%</Text>
    </View>
  );
}

// default values for props
CircularProgress.defaultProps = {
  percent: 99,
  radius: 50,
  bgRingWidth: 5,
  progressRingWidth: 6,
  ringColor: '#3498db',
  ringBgColor: 'grey',
  textFontSize: 10,
  textFontWeight: 'bold',
  clockwise: true,
  bgColor: 'white',
  startDegrees: 0
}

/**
* offsetLayer has transform:[{rotateZ: '-135deg'}] since
* the offsetLayer rotation is fixed by us.
**/
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  baselayer: {
    position: 'absolute'
  },
  firstProgressLayer: {
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  secondProgressLayer:{
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  offsetLayer: {
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  display: {
    position: 'absolute'
  }
});

export default CircularProgress;