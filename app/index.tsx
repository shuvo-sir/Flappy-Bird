import { Dimensions } from "react-native";
import { Canvas, useImage, Image } from "@shopify/react-native-skia";

const App = () => {

const { width, height } = Dimensions.get("screen");

  const bg = useImage(require("../assets/sprites/background-day.png"));
  const bird = useImage(require("../assets/sprites/yellowbird-upflap.png"));
  const pipeButtom = useImage(require("../assets/sprites/pipe-green.png"));
  const pipeTop = useImage(require("../assets/sprites/pipe-green-top.png"));
  const base = useImage(require("../assets/sprites/base.png"));

  const pipeOffset = 0;


  return (
    <Canvas style={{ flex:1, width, height }}>
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
      <Image image={bird} y={height / 2 } x = {width / 4}  width={64} height={48}/>

      {/* // Pipe Image */}
     
       <Image
              image={pipeTop}
              y={pipeOffset-320}
              x={width / 2 }
              width={103}
              height={640}
            />
      <Image
              image={pipeButtom}
              x={width / 2}
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
  );
};

export default App;