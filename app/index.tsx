import { Dimensions } from "react-native";
import { Canvas, useImage, Image } from "@shopify/react-native-skia";
import { 
  Easing, 
  useFrameCallback, 
  useSharedValue, 
  withRepeat, 
  withSequence, 
  withTiming,
} from "react-native-reanimated";

import {GestureHandlerRootView,
  GestureDetector,
  Gesture} from "react-native-gesture-handler";

import { useEffect } from "react";


const GRAVITY = 700;
const JUMP_FORCE = -400;

const App = () => {

const { width, height } = Dimensions.get("screen");

  const bg = useImage(require("../assets/sprites/background-day.png"));
  const bird = useImage(require("../assets/sprites/yellowbird-upflap.png"));
  const pipeButtom = useImage(require("../assets/sprites/pipe-green.png"));
  const pipeTop = useImage(require("../assets/sprites/pipe-green-top.png"));
  const base = useImage(require("../assets/sprites/base.png"));

  const x = useSharedValue(width);

  const birdY = useSharedValue(height / 3);
  const birdYVelocity = useSharedValue(0);

  useFrameCallback(({timeSincePreviousFrame: dt}) => {
    if(!dt){
      return;
    }
    birdY.value = birdY.value + (birdYVelocity.value * dt) /1000;
    birdYVelocity.value = birdYVelocity.value + (GRAVITY * dt) /1000
  });

  useEffect(() => {
    x.value = withRepeat(
        withSequence(
          withTiming(-150, {duration: 3000, easing: Easing.linear}),
          withTiming(width, {duration: 0})
      ),
      -1
    );
  }, []);


  const gesture = Gesture.Tap().onStart(() =>{
    birdYVelocity.value = JUMP_FORCE
  });
  const pipeOffset = 0;


  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <GestureDetector gesture={gesture}>
        <Canvas style={{width, height }}>
          {/* background Image */}
          <Image
            image={bg}
            x={0}
            y={0}
            width={width}
            height={height}
            fit="cover"
          />

          {/* // bird Image */}
          <Image image={bird} y={birdY} x = {width / 4}  width={64} height={48}/>

          {/* // Pipe Image */}
        
          <Image
                  image={pipeTop}
                  y={pipeOffset-320}
                  x={x}
                  width={103}
                  height={640}
                />
          <Image
                  image={pipeButtom}
                  x={x}
                  y={height - 320 + pipeOffset}
                  width={103}
                  height={640}
                />
          
          <Image
            image={base}
            y={height - 75}
            x={0}
            width={width}
            height={150}
            fit={"cover"}
          />
              
        </Canvas>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default App;