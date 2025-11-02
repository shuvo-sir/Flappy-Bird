import {useWindowDimensions} from "react-native";
import { Canvas, useImage, Image } from "@shopify/react-native-skia";

const App = () => {

  const {width, height} = useWindowDimensions();

  const bg = useImage(require("../assets/sprites/background-day.png"));
  const bird = useImage(require("../assets/sprites/yellowbird-upflap.png"));


  const r = width * 0.33;
  return (
    <Canvas style={{ width, height }}>
      <Image image={bg} width={width} height={height} fit="fill" />
      <Image image={bird} y={height / 2 } x = {width / 4}  width={64} height={48}/>
    </Canvas>
  );
};

export default App;