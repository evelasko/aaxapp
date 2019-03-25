import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
    size?: number
    color?: string
}

const UserIcon: React.FC<Props> = ({size, color}) => {
    return (<Svg width={size||48} height={size||48} viewBox="0 0 55 55">
    <Path fill={color||'grey'} d="M55 27.5C55 12.337 42.663 0 27.5 0S0 12.337 0 27.5c0 8.009 3.444 15.228 8.926 20.258l-.026.023.892.752c.058.049.121.089.179.137.474.393.965.766 1.465 1.127.162.117.324.234.489.348.534.368 1.082.717 1.642 1.048.122.072.245.142.368.212.613.349 1.239.678 1.88.98.047.022.095.042.142.064 2.089.971 4.319 1.684 6.651 2.105.061.011.122.022.184.033.724.125 1.456.225 2.197.292.09.008.18.013.271.021.738.061 1.484.1 2.24.1.749 0 1.488-.039 2.222-.098.093-.008.186-.013.279-.021.735-.067 1.461-.164 2.178-.287.062-.011.125-.022.187-.034 2.297-.412 4.495-1.109 6.557-2.055.076-.035.153-.068.229-.104.617-.29 1.22-.603 1.811-.936.147-.083.293-.167.439-.253.538-.317 1.067-.648 1.581-1 .185-.126.366-.259.549-.391.439-.316.87-.642 1.289-.983.093-.075.193-.14.284-.217l.915-.764-.027-.023C51.523 42.802 55 35.55 55 27.5zm-53 0C2 13.439 13.439 2 27.5 2S53 13.439 53 27.5c0 7.577-3.325 14.389-8.589 19.063-.294-.203-.59-.385-.893-.537l-8.467-4.233c-.76-.38-1.232-1.144-1.232-1.993v-2.957c.196-.242.403-.516.617-.817 1.096-1.548 1.975-3.27 2.616-5.123 1.267-.602 2.085-1.864 2.085-3.289v-3.545c0-.867-.318-1.708-.887-2.369v-4.667c.052-.519.236-3.448-1.883-5.864C34.524 9.065 31.541 8 27.5 8s-7.024 1.065-8.867 3.168c-2.119 2.416-1.935 5.345-1.883 5.864v4.667c-.568.661-.887 1.502-.887 2.369v3.545c0 1.101.494 2.128 1.34 2.821.81 3.173 2.477 5.575 3.093 6.389v2.894c0 .816-.445 1.566-1.162 1.958l-7.907 4.313c-.252.137-.502.297-.752.476C5.276 41.792 2 35.022 2 27.5zm40.459 20.632c-.35.254-.706.5-1.067.735-.166.108-.331.216-.5.321-.472.292-.952.57-1.442.83-.108.057-.217.111-.326.167-1.126.577-2.291 1.073-3.488 1.476-.042.014-.084.029-.127.043-.627.208-1.262.393-1.904.552-.002 0-.004.001-.006.001-.648.16-1.304.293-1.964.402-.018.003-.036.007-.054.01-.621.101-1.247.174-1.875.229-.111.01-.222.017-.334.025-.621.047-1.245.077-1.872.077-.634 0-1.266-.031-1.895-.078-.109-.008-.218-.015-.326-.025-.634-.056-1.265-.131-1.89-.233l-.084-.015c-1.322-.221-2.623-.546-3.89-.971-.039-.013-.079-.027-.118-.04-.629-.214-1.251-.451-1.862-.713-.004-.002-.009-.004-.013-.006-.578-.249-1.145-.525-1.705-.816-.073-.038-.147-.074-.219-.113-.511-.273-1.011-.568-1.504-.876-.146-.092-.291-.185-.435-.279-.454-.297-.902-.606-1.338-.933-.045-.034-.088-.07-.133-.104l.096-.054 7.907-4.313c1.36-.742 2.205-2.165 2.205-3.714l-.001-3.602-.23-.278c-.022-.025-2.184-2.655-3.001-6.216l-.091-.396-.341-.221c-.481-.311-.769-.831-.769-1.392v-3.545c0-.465.197-.898.557-1.223l.33-.298v-5.57l-.009-.131c-.003-.024-.298-2.429 1.396-4.36C21.583 10.837 24.061 10 27.5 10c3.426 0 5.896.83 7.346 2.466 1.692 1.911 1.415 4.361 1.413 4.381l-.009 5.701.33.298c.359.324.557.758.557 1.223v3.545c0 .713-.485 1.36-1.181 1.575l-.497.153-.16.495c-.59 1.833-1.43 3.526-2.496 5.032-.262.37-.517.698-.736.949l-.248.283V39.8c0 1.612.896 3.062 2.338 3.782l8.467 4.233c.054.027.107.055.16.083-.107.081-.217.156-.325.234z"/>
  </Svg>)
}

export default UserIcon