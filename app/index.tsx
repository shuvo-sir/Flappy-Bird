import {useWindowDimensions} from "react-native";
import { Canvas, useImage, Image } from "@shopify/react-native-skia";

const App = () => {

  const {width, height} = useWindowDimensions();

  const bg = useImage(require("../assets/sprites/background-day.png"));
  const bird = useImage(require("../assets/sprites/yellowbird-upflap.png"));
  const pipeButtom = useImage(require("../assets/sprites/pipe-green.png"));
  const pipeTop = useImage(require("../assets/sprites/pipe-green-top.png"));


  const r = width * 0.33;
  return (
    <Canvas style={{ width, height }}>
      <Image image={bg} width={width} height={height} fit="cover" />
      <Image image={bird} y={height / 2 } x = {width / 4}  width={64} height={48}/>
      <Image
              image={pipeButtom}
              x={width / 2}
              y={height - 320}
              width={70}
              height={640}
            />
       <Image
              image={pipeTop}
              x={width / 4 }
              y={-320}
              width={70}
              height={640}
            />
    </Canvas>
  );
};

export default App;